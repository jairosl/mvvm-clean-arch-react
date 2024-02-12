import { BsTrash3 } from 'react-icons/bs';
import { formatCurrencies } from '../../Utils';

type CardProps = {
  data: {
    image?: {
      url: string;
      alt: string;
    };
    title: string;
    count: number;
    price: number;
  };
  handleAddProduct: () => void;
  handleRemoveProduct: () => void;
  handleDeleteProduct: () => void;
};

const ImageDefaultValue = {
  alt: 'pizza',
  url: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e',
};

export default function Card({
  data: { image = ImageDefaultValue, title, count, price },
  handleAddProduct,
  handleRemoveProduct,
  handleDeleteProduct,
}: CardProps) {
  return (
    <div className="flex items-center pl-3 pr-6 py-2 gap-20 shadow-md rounded-xl">
      <div className="flex items-center gap-5">
        <img
          src={image.url}
          alt={image.alt}
          loading="lazy"
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div>
          <p className="text-black font-popins font-medium text-lg leading-normal">
            {title}
          </p>
          <span className="text-black font-nunito font-medium text-sm leading-normal">
            Extra cheese and toping
          </span>
        </div>
      </div>
      <div className="flex items-center justify-end gap-10 flex-1">
        <div className="flex items-center">
          <p className="text-label font-raleway text-xl font-semibold">
            {count}
          </p>
          <div className="flex flex-col items-center gap-1 ml-3">
            <button className="arrow-up" onClick={handleAddProduct}></button>
            <button
              className="arrow-down"
              onClick={handleRemoveProduct}
            ></button>
          </div>

          <strong className="font-popins text-sm text-black text-right ml-11">
            {formatCurrencies(price * count)}
          </strong>
        </div>
        <button type="button" onClick={handleDeleteProduct}>
          <BsTrash3 size={26} color="#393939" />
        </button>
      </div>
    </div>
  );
}
