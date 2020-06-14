import {createAction, props} from '@ngrx/store';
import {ProductItems} from '../../../models/products.models';

export const SET_PRODUCT_ITEMS = '[PRODUCTS] Set All';
export const SET_CATEGORIES = '[PRODUCTS] Set Categories';
export const SET_FILTERS = '[PRODUCTS] Set Filters';
export const SET_SELECTED_CATEGORY = '[PRODUCTS][UI] Set Selected Category';
export const SET_SELECTED_FILTER = '[PRODUCTS][UI] Set Selected Filter';
export const SET_FILTER_PANEL = '[PRODUCTS][UI] Set All';

export const setProductItems = createAction(SET_PRODUCT_ITEMS, props<{productItems: ProductItems}>());
export const setCategories = createAction(SET_CATEGORIES, props<{categories: {name: string; id: string}[]}>());
export const setFilters = createAction(SET_FILTERS, props<{filters: {name: string; id: string}[]}>());
export const setSelectedCategoryId = createAction(SET_SELECTED_CATEGORY, props<{selectedCategoryId: string}>());
export const setFilterPanelOpen = createAction(SET_FILTER_PANEL, props<{isFilterPanelOpen: boolean}>());
export const setSelectedFilterId = createAction(SET_SELECTED_FILTER, props<{selectedFilterId: string}>());
