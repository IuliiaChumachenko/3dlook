import {Action, createReducer, on} from '@ngrx/store';
import {
  setCategories,
  setFilterPanelOpen,
  setFilters,
  setProductItems,
  setSelectedCategoryId,
  setSelectedFilterId
} from './products.actions';
import {Products} from '../../../models/products.models';

const initState: Products = {
  data: {
    productItems: {},
    categories: [],
    filters: []
  },
  ui: {
    selectedCategoryId: 'all',
    isFilterPanelOpen: false,
    selectedFilterId: null
  }
};

export const reducer = createReducer(
  initState,

  on(setProductItems, (state, {productItems}) => ({
    ...state,
    data: {
      ...state.data,
      productItems
    }
  })),
  on(setCategories, (state, {categories}) => ({
    ...state,
    data: {
      ...state.data,
      categories
    }
  })),
  on(setFilters, (state, {filters}) => ({
    ...state,
    data: {
      ...state.data,
      filters
    }
  })),
  on(setSelectedCategoryId, (state, {selectedCategoryId}) => ({
    ...state,
    ui: {
      ...state.ui,
      selectedCategoryId
    }
  })),
  on(setSelectedFilterId, (state, {selectedFilterId}) => ({
    ...state,
    ui: {
      ...state.ui,
      selectedFilterId
    }
  })),
  on(setFilterPanelOpen, (state, {isFilterPanelOpen}) => ({
    ...state,
    ui: {
      ...state.ui,
      isFilterPanelOpen
    }
  }))
);

export function productsReducer(state: Products, action: Action): Products {
  return reducer(state, action);
}
