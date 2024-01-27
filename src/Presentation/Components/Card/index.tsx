import { BsTrash3 } from 'react-icons/bs';

export default function Card() {
  return (
    <div className="flex items-center pl-3 pr-6 py-2 gap-20 shadow-md rounded-xl">
      <div className="flex items-center gap-5">
        <img
          src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
          alt="pizza"
          loading="lazy"
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div>
          <p className="text-black font-popins font-medium text-lg leading-normal">
            Italy Pizza
          </p>
          <span className="text-black font-nunito font-medium text-sm leading-normal">
            Extra cheese and toping
          </span>
        </div>
      </div>
      <div className="flex items-center justify-end gap-10 flex-1">
        <div className="flex items-center">
          <p className="text-label font-raleway text-xl font-semibold">1</p>
          <div className="flex flex-col items-center gap-1 ml-3">
            <button className="arrow-up"></button>
            <button className="arrow-down"></button>
          </div>

          <strong className="font-popins text-sm text-black text-right ml-11">
            $681
          </strong>
        </div>
        <button type="button">
          <BsTrash3 size={26} color="#393939" />
        </button>
      </div>
    </div>
  );
}
