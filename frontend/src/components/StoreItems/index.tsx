'use client';

import { StoreContext } from "@/client/context/storeContext";
import { useContext } from "react";
import ItemCard from "../ItemCard";
import { Spinner } from "@chakra-ui/react";

const StoreItems = () => {
	const { items, lastItemRef, hasMore, loading } = useContext(StoreContext);

	return (
		<section
			className='flex w-full min-h-screen p-4 items-center flex-col'
		>
			<div
				className="flex flex-row flex-wrap w-[70%] h-full justify-center gap-4"
			>
				{items.map((item, index) => (
					<ItemCard key={item.id} item={item} lastItemRef={items.length -1 === index ? lastItemRef : null} />
				))}
			</div>
			{(hasMore || loading) && <Spinner color="orange" w={10} h={10} marginTop={'10px'} />}
		</section>
	)
};

export default StoreItems;
