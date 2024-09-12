import { Item } from "./Item";

export interface Filters {
	name: string;
	category: string;
	float_min?: string;
	float_max?: string;
	price_min?: string;
	price_max?: string;
	orderColumn: 'price' | 'float';
	orderDirection: 'asc' | 'desc';
}

export interface ChangeFilter {
	name: 'name' | 'category' | 'float_min' | 'float_max' | 'price_min' | 'price_max' | 'orderColumn' | 'orderDirection';
	value: string | number;
}

export interface IStoreContext {
	items: Item[];
	filters: Filters;
	setFilters: (filters: Filters) => void;
	handleChangeFilters: ({ name, value }: ChangeFilter) => void;
	lastItemRef: any;
	loading: boolean;
	hasMore: boolean;
}