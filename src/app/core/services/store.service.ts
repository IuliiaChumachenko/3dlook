import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ProductItems, Products} from '../models/products.models';
import {isFilterPanelOpen, productItems, selectedCategoryId, selectedFilterId} from '../modules/products/state/products.selectors';
import {Observable} from 'rxjs';
import {
  setCategories,
  setFilterPanelOpen, setFilters,
  setProductItems,
  setSelectedCategoryId,
  setSelectedFilterId
} from '../modules/products/state/products.actions';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private store$: Store<Products>) {
  }

  setFilters(filters: {name: string; id: string}[]): void {
    this.store$.dispatch(setFilters({filters}));
  }

  setCategories(categories: {name: string; id: string}[]): void {
    this.store$.dispatch(setCategories({categories}));
  }

  setIsFiltersOpen(isFilterPanelOpen: boolean): void {
    this.store$.dispatch(setFilterPanelOpen({isFilterPanelOpen}));
  }

  setSelectedCategoryId(selectedCategoryId: string): void {
    this.store$.dispatch(setSelectedCategoryId({selectedCategoryId}));
  }

  setSelectedFilterId(selectedFilterId): void {
    this.store$.dispatch(setSelectedFilterId({selectedFilterId}));
  }

  setProductItems(products: ProductItems): void {
    this.store$.dispatch(setProductItems({productItems: products}));
  }

  isFiltersOpen(): Observable<boolean> {
    return this.store$.pipe(select(isFilterPanelOpen));
  }

  getSelectedCategoryId(): Observable<string> {
    return this.store$.pipe(select(selectedCategoryId));
  }

  getSelectedFilterId(): Observable<string> {
    return this.store$.pipe(select(selectedFilterId));
  }

  getProductItems(): Observable<ProductItems> {
    return this.store$.pipe(select(productItems));
  }
}
