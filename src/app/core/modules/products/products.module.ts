import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {SideNavComponent} from '../../components/side-nav/side-nav.component';
import {ProductsContentComponent} from '../../components/products-content/products-content.component';
import {StoreModule} from '@ngrx/store';
import {ProductItemComponent} from '../../components/product-item/product-item.component';
import {productsReducer} from './state/products.reducer';

@NgModule({
  declarations: [
    ProductsComponent,
    SideNavComponent,
    ProductsContentComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', productsReducer),
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
