'use client'

import { Input } from "@chakra-ui/react"
import Image from "next/image";

const StoreHeader  = () => {
	return (
		<header
			className='flex flex-col justify-between p-4 text-foreground gap-3'
		>
			<Image
				src={'/logo.webp'}
				width={200}
				height={200}
				alt='CS SKINS STORE'
			/>
	
			<hr 
				className="bg-[#2b2b2b] h-[1px] border-0"
			/>
		</header>
	)
}

export default StoreHeader;
