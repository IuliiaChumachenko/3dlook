import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductItems, Products, ProductsData, ProductsUi} from '../../../models/products.models';

const selectProducts = createFeatureSelector<Products>('products');
const selectProductsData = createSelector(selectProducts, (state: Products): any => state.data);
const selectProductsUi = createSelector(selectProducts, (state: Products): ProductsUi => state.ui);

export const productItems = createSelector(selectProductsData, (state: ProductsData): ProductItems => state.productItems);
export const categories = createSelector(selectProductsData, (state: ProductsData): {name: string; id: string}[] => state.categories);
export const filters = createSelector(selectProductsData, (state: ProductsData): {name: string; id: string}[] => state.filters);
export const isFilterPanelOpen = createSelector(selectProductsUi, (state: ProductsUi): boolean => state.isFilterPanelOpen);
export const selectedCategoryId = createSelector(selectProductsUi, (state: ProductsUi): string => state.selectedCategoryId);
export const selectedFilterId = createSelector(selectProductsUi, (state: ProductsUi): string => state.selectedFilterId);
