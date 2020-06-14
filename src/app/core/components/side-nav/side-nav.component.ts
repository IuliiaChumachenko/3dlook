import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GetDataService} from '../../services/get-data.service';
import {StoreService} from '../../services/store.service';
import {combineLatest} from 'rxjs';
import {Unsubscribe} from '../../classes/unsubscribe';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent extends Unsubscribe implements OnInit {
  public menuItems: any;
  public filterItems: any;
  public isFiltersOpen = false;

  constructor(
    private getDataService: GetDataService,
    private storeService: StoreService,
    private cd: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit() {
    combineLatest(
      this.getDataService.get('menuItems'),
      this.storeService.getSelectedCategoryId()
    )
      .pipe(takeUntil(this.destroy$))
      .subscribe(([menuItems, selectedId]) => {
        this.menuItems = menuItems.map(categorie => ({...categorie, selected: false}));
        this.menuItems.find(({id}) => id === selectedId).selected = true;
        this.cd.markForCheck();
      });

    this.getDataService.get('filterItems').subscribe(item => {
      this.filterItems = item.map(filter => ({...filter, selected: false}));
      this.cd.markForCheck();
    });
  }

  public selectCategory({id}): void {
    this.storeService.setSelectedCategoryId(id);
    this.storeService.setSelectedFilterId(null);
    this.unselectFilters();
  }

  public selectFilter({id}): void {
    this.storeService.setSelectedFilterId(id);
    this.unselectFilters();
    this.filterItems.find(item => item.id === id).selected = true;
    this.cd.markForCheck();
  }

  private unselectFilters(): void {
    this.filterItems.forEach(item => item.selected = false);
  }
}
