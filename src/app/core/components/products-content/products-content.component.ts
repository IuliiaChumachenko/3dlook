import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {StoreService} from '../../services/store.service';
import {ProductItems} from '../../models/products.models';
import {filter, takeUntil} from 'rxjs/operators';
import {Unsubscribe} from '../../classes/unsubscribe';

@Component({
  selector: 'app-products-content',
  templateUrl: './products-content.component.html',
  styleUrls: ['./products-content.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsContentComponent extends Unsubscribe implements OnInit {
  public productItems = {};
  public categoryItems = [];

  constructor(
    private storeService: StoreService,
    private cd: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.storeService.getProductItems()
      .pipe(
        filter(Boolean),
        takeUntil(this.destroy$)
      )
      .subscribe((products: ProductItems) => {
        this.productItems = products;
        this.selectAllProductItems();
        this.cd.markForCheck();
    });

    this.storeService.getSelectedCategoryId()
      .pipe(
        filter(Boolean),
        takeUntil(this.destroy$)
      )
      .subscribe((id: string) => {
        if (id !== 'all') {
          this.categoryItems = this.productItems[id].map(item => ({...item, selected: false}));
        } else {
          this.selectAllProductItems();
        }
        this.cd.markForCheck();
      });

    this.storeService.getSelectedFilterId()
      .pipe(
        filter(Boolean),
        takeUntil(this.destroy$)
      )
      .subscribe((id: string) => {
        this.filterProducts(id);
        this.cd.markForCheck();
      });
  }

  public selectItem(item): void {
    if (!item.selected) {
      item.selected = true;
      this.cd.markForCheck();
    }
  }

  public unselectItem(item): void {
    if (item.selected) {
      item.selected = false;
      this.cd.markForCheck();
    }
  }

  private selectAllProductItems(): void {
    this.categoryItems = [];
    Object.keys(this.productItems).forEach(key => this.categoryItems = [...this.categoryItems, ...this.productItems[key]]);
    this.categoryItems = this.categoryItems.map(item => ({...item, selected: false}));
  }

  private filterProducts(id: string): void {
    switch (id) {
      case 'decrease':
        this.categoryItems.sort((a, b) => b.price - a.price);
        break;
      case 'increase':
        this.categoryItems.sort((a, b) => a.price - b.price);
        break;
      case 'popular':
        this.categoryItems.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'new':
        this.categoryItems.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
        break;
    }
  }
}
