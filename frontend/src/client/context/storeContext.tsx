'use client';

import { Item } from '@/interfaces/Item';
import { ChangeFilter, Filters, IStoreContext } from '@/interfaces/StoreContext';
import api from '@/services/api';
import { useToast } from '@chakra-ui/react';
import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const StoreContext = createContext<IStoreContext>({} as IStoreContext);

const INITIAL_FILTERS: Filters = {
	name: '',
	category: '',
	orderColumn: 'price',
	orderDirection: 'asc',
}

export const StoreProvider = ({ children }: React.PropsWithChildren) => {
	const toast = useToast();

  const [items, setItems] = useState<Item[]>([]);
	const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS);
	const [hasMore, setHasMore] = useState<boolean>(true);
	const [pageNumber, setPageNumber] = useState<number>(1);
	const [loading, setLoading] = useState(false);

  const { ref: lastItemRef, inView } = useInView();

	const handleChangeFilters = useCallback(({ name, value }: ChangeFilter) => {
		if (name === 'float_min' || name === 'float_max') {				
			if (Number(value) < 0 || Number(value) > 1) {
				if (Number(value) > 1) {
					setFilters({ ...filters, [name]: '1' });
				}

				if (Number(value) < 0) {
					setFilters({ ...filters, [name]: '0' });
				}

				return;
			}
		}

		setFilters({ ...filters, [name]: value });
		setPageNumber(1);
	}, [filters])

	const handleFilersDTO = useCallback((params: Filters & { pageNumber: number }) => {
		return {
			name: params.name.trim(),
			floatUpper: params.float_min ? parseFloat(params.float_min) : undefined,
			floatLower: params.float_max ? parseFloat(params.float_max) : undefined,
			priceUpper: params.price_min ? parseFloat(params.price_min) : undefined,
			priceLower: params.price_max ? parseFloat(params.price_max) : undefined,
			category: params.category,
			orderColumn: params.orderColumn,
			orderDirection: params.orderDirection,
			pageNumber: params.pageNumber
		}
	}, []);

	const handleFetchSkins = useCallback(async (params: Filters & { pageNumber: number }) => {
		try {
			setLoading(true);
			const { data } = await api.get<{ items: Item[]; hasMore: boolean }>('/items', {
				params: handleFilersDTO(params)
			});

			if (params.pageNumber === 1) {
				setItems(data.items);
			} else {
				setItems(prev => [...prev, ...data.items]);
			}

			setHasMore(data.hasMore);
		} catch (error) {
			toast({
				title: 'Erro ao buscar itens',
				description: 'Ocorreu um erro ao buscar os itens, tente novamente mais tarde',
				status: 'error',
				duration: 3000,
				isClosable: true
			})
		} finally {
			setLoading(false);
		}
	}, [handleFilersDTO]);

	useEffect(() => {
		const debounceFetch = setTimeout(() => {
			handleFetchSkins({
				...filters,
				pageNumber
			});
		}, 500);
		
		return () => clearTimeout(debounceFetch);
	}, [filters, pageNumber]);

  useEffect(() => {
    if (loading || !inView || !hasMore) return;

    const debouncePageNumber = setTimeout(() => {
      setPageNumber(prev => prev + 1);
    }, 500);

    return () => {
      clearTimeout(debouncePageNumber);
    };
  }, [inView, loading, hasMore]);

	const data = useMemo(() => ({
		items,
		filters,
		setFilters,
		handleChangeFilters,
		lastItemRef, 
		loading,
		hasMore
	}), [items, filters, handleChangeFilters, lastItemRef, loading, hasMore]);

  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};
