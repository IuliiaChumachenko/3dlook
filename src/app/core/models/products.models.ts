export interface ProductItems {
  raincoats: ProductItem[];
  sneakers: ProductItem[];
  shirts: ProductItem[];
  pants: ProductItem[];
}

export interface ProductItem {
  photos: string[];
  price: number;
  name: string;
  category: string;
  count: number;
  id: string;
  date: string;
  popularity: number;
  selected?: boolean;
}

export interface Products {
  data: ProductsData | {};
  ui: ProductsUi;
}

export interface ProductsData {
  productItems: ProductItems;
  categories: {id: string; name: string}[];
  filters: {id: string; name: string}[];
}

export interface ProductsUi {
  selectedCategoryId: string;
  isFilterPanelOpen: boolean;
  selectedFilterId: string | null;
}
