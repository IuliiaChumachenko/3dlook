import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './core/modules/products/products.component';

const routes: Routes = [
  {path: 'shop', component: ProductsComponent},
  {path: '**', redirectTo: 'shop'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
