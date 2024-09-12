'use client'

import { StoreContext } from "@/client/context/storeContext";
import { Button, Input } from "@chakra-ui/react";
import { Select } from '@chakra-ui/react'
import { ArrowDown, ArrowUp } from "lucide-react";
import { useContext } from "react";

const OPTIONS_CATEGORIES = [
  {
    id: 'pistols',
    name: 'Pistolas',
  },
  {
    id: 'heavy-weapons',
    name: 'Armas Pesadas',
  },
  {
    id: 'submachine-guns',
    name: 'Submetralhadoras',
  },
  {
    id: 'rifles',
    name: 'Rifles',
  },
  {
    id: 'grenades',
    name: 'Granadas',
  },
  {
    id: 'knives',
    name: 'Facas',
  },
];

const StoreSearch = () => {
	const { filters, handleChangeFilters } = useContext(StoreContext);

	return (
		<div
			className="w-full flex flex-col items-center"
		>
			<div
				className="flex flex-col w-[80%] gap-4 bg-[#171717] items-center border-2 border-[#1a202c] p-4"
			>
				<div
					className="flex flex-row w-full justify-center gap-4"
				>
					<Input
						placeholder='Buscar skin'
						className='w-[800px] bg-blue-500'
						size={'md'}
						w={{base: '90%', md: '50%', lg: '30%', xl: '20%'}}
						color='white'
						variant='outline'
						borderColor={'white'}
						value={filters.name}
						onChange={(e) => handleChangeFilters({ name: 'name', value: e.target.value })}
					/>
				</div>

				<div
					className='flex flex-row w-full justify-center gap-4'
				>
					<Select 
						placeholder="Todos os items"
						w={{base: '50%', md: '30%', lg: '20%', xl: '10%'}}
						marginRight	='5px'
						backgroundColor='orange'
						textColor={'black'}
						value={filters.category}
						onChange={(e) => handleChangeFilters({ name: 'category', value: e.target.value })}
					>
						{OPTIONS_CATEGORIES.map((category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</Select>

					<Input
						placeholder="Float mínimo"
						className="w-[800px] bg-blue-500"
						size={'md'}
						w={{base: '50%', md: '30%', lg: '20%', xl: '10%'}}
						type="number"
						max={1}
						min={0}
						color='white'
						variant='outline'
						marginRight='-8px'
						borderColor={'white'}
						value={filters.float_min}
						onChange={(e) => handleChangeFilters({ name: 'float_min', value: Number(e.target.value) })}
					/>

					<Input
						placeholder="Float máximo"
						className="w-[800px] bg-blue-500"
						size={'md'}
						w={{base: '50%', md: '30%', lg: '20%', xl: '10%'}}
						type="number"
						max={1}
						min={0}
						color='white'
						variant='outline'
						borderColor={'white'}
						value={filters.float_max}
						onChange={(e) => handleChangeFilters({ name: 'float_max', value: Number(e.target.value) })}
					/>

					<Input
						placeholder="Preço mínimo"
						className="w-[800px] bg-blue-500"
						size={'md'}
						w={{base: '50%', md: '30%', lg: '20%', xl: '10%'}}
						type="number"
						max={1}
						min={0}
						color='white'
						variant='outline'
						borderColor={'white'}
						marginRight='-8px'
						value={filters.price_min}
						onChange={(e) => handleChangeFilters({ name: 'price_min', value: Number(e.target.value) })}
					/>

					<Input
						placeholder="Preço máximo"
						className="w-[800px] bg-blue-500"
						size={'md'}
						w={{base: '50%', md: '30%', lg: '20%', xl: '10%'}}
						type="number"
						max={1}
						min={0}
						color='white'
						variant='outline'
						borderColor={'white'}
						value={filters.price_max}
						onChange={(e) => handleChangeFilters({ name: 'price_max', value: Number(e.target.value) })}
					/>

					<Select 
						placeholder="Ordenar por"
						w={{base: '50%', md: '30%', lg: '20%', xl: '10%'}}
						marginRight	='5px'
						backgroundColor='orange'
						textColor={'black'}
						value={filters.orderColumn}
						onChange={(e) => handleChangeFilters({ name: 'orderColumn', value: e.target.value })}
					>
						<option value={'price'}>
							Preço
						</option>
						<option value={'float'}>
							Float (desgaste)
						</option>
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
	)
};

export default StoreSearch;
