import { Item } from "@/interfaces/Item";
import FloatBar from "../FloatBar";

interface ItemCardProps {
  item: Item;
  lastItemRef?: React.RefObject<HTMLDivElement>;
}

const ItemCard = ({ item, lastItemRef }: ItemCardProps) => {
  return (
    <div
      className="flex flex-col gap-2 p-4 w-[200px] border-8 border-black bg-[#171717] text-white"
      ref={lastItemRef}
      style={{ height: 'auto' }}
    >
      <h1 className="text-center text-lg font-bold">{item.name}</h1>
      <p className="text-center">{item.category}</p>
      
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-[100px] object-cover transition-transform duration-300 ease-in-out hover:scale-150 cursor-pointer"
      />
      
      <div className="flex-grow" />

      <FloatBar floatValue={item.float || '1'} />

      <p
        className="text-center w-full mt-2 font-bold"
        style={{ minHeight: '24px' }}
      >
        ${item.price}
      </p>
    </div>
  );
};

export default ItemCard;
