'use client'

import { StoreContext } from "@/client/context/storeContext";
import { Input } from "@chakra-ui/react";
import { Select } from '@chakra-ui/react'
import { ArrowDown, ArrowUp } from "lucide-react";
import { useContext } from "react";

const OPTIONS_CATEGORIES = [
  { id: 'Pistols', name: 'Pistolas' },
  { id: 'Heavy', name: 'Armas Pesadas' },
  { id: 'SMGs', name: 'Submetralhadoras' },
  { id: 'Rifles', name: 'Rifles' },
  { id: 'Knives', name: 'Facas' },
];

const StoreSearch = () => {
  const { filters, handleChangeFilters } = useContext(StoreContext);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col w-full max-w-[1200px] gap-4 bg-[#171717] items-center border-2 border-[#1a202c] p-4">
        <div className="flex flex-col sm:flex-row w-full justify-center gap-4">
          <Input
            placeholder='Buscar skin'
            className='bg-blue-500'
            size={'md'}
            color='white'
            variant='outline'
            borderColor={'white'}
            value={filters.name}
            onChange={(e) => handleChangeFilters({ name: 'name', value: e.target.value })}
            w={{ base: '100%', sm: '90%', md: '70%', lg: '60%' }}
          />
        </div>

        <div className="flex flex-col sm:flex-row w-full justify-center items-center gap-4 flex-wrap">
          <Select
            placeholder="Todos os items"
            backgroundColor='orange'
            textColor={'black'}
            value={filters.category}
            onChange={(e) => handleChangeFilters({ name: 'category', value: e.target.value })}
            w={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }}
          >
            {OPTIONS_CATEGORIES.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>

          <Input
            placeholder="Float mínimo"
            className="bg-blue-500"
            size={'md'}
            type="number"
            max={1}
            min={0}
            color='white'
            variant='outline'
            borderColor={'white'}
            value={filters.float_min}
            onChange={(e) => handleChangeFilters({ name: 'float_min', value: Number(e.target.value) })}
            w={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }}
          />

          <Input
            placeholder="Float máximo"
            className="bg-blue-500"
            size={'md'}
            type="number"
            max={1}
            min={0}
            color='white'
            variant='outline'
            borderColor={'white'}
            value={filters.float_max}
            onChange={(e) => handleChangeFilters({ name: 'float_max', value: Number(e.target.value) })}
            w={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }}
          />

          <Input
            placeholder="Preço mínimo"
            className="bg-blue-500"
            size={'md'}
            type="number"
            max={1}
            min={0}
            color='white'
            variant='outline'
            borderColor={'white'}
            value={filters.price_min}
            onChange={(e) => handleChangeFilters({ name: 'price_min', value: Number(e.target.value) })}
            w={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }}
          />

          <Input
            placeholder="Preço máximo"
            className="bg-blue-500"
            size={'md'}
            type="number"
            max={1}
            min={0}
            color='white'
            variant='outline'
            borderColor={'white'}
            value={filters.price_max}
            onChange={(e) => handleChangeFilters({ name: 'price_max', value: Number(e.target.value) })}
            w={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }}
          />

          <Select
            placeholder="Ordenar por"
            backgroundColor='orange'
            textColor={'black'}
            value={filters.orderColumn}
            onChange={(e) => handleChangeFilters({ name: 'orderColumn', value: e.target.value })}
            w={{ base: '100%', sm: '45%', md: '30%', lg: '20%' }}
          >
            <option value={'price'}>Preço</option>
            <option value={'float'}>Float (desgaste)</option>
          </Select>

          {filters.orderDirection === 'asc' ? (
            <ArrowUp
              className="text-orange-500 w-8 h-8 cursor-pointer"
              onClick={() => handleChangeFilters({ name: 'orderDirection', value: 'desc' })}
            />
          ) : (
            <ArrowDown
              className="text-orange-500 w-8 h-8 cursor-pointer"
              onClick={() => handleChangeFilters({ name: 'orderDirection', value: 'asc' })}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreSearch;
