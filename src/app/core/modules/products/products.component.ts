import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {GetDataService} from '../../services/get-data.service';
import {StoreService} from '../../services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {

  constructor(
    private getDataService: GetDataService,
    private storeService: StoreService,
  ) { }

  ngOnInit() {
    this.getDataService.get('productItems').subscribe((products) => {
      this.storeService.setProductItems(products);
    });
  }
}
