import StoreHeader from "@/components/StoreHeader/index";
import StoreItems from "@/components/StoreItems";
import StoreSearch from "@/components/StoreSearch";

const storePage = () => {
	return (
		<div 
			aria-label="Store Page"
			className="w-full h-full"
		>
			<StoreHeader />
			<StoreSearch />
			<StoreItems />
		</div>
  )
}

export default storePage;
