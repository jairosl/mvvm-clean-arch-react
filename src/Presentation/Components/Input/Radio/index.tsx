interface IRadioButtonProps {
  id: string;
  name: string;
  value: string;
  url_image: string;
}

export default function RadioButton({
  id,
  name,
  value,
  url_image,
}: IRadioButtonProps) {
  return (
    <label
      htmlFor={id}
      className="has-[:checked]:shadow-md has-[:checked]:border-white border border-transparent bg-gray-100/20 rounded-md hover:cursor-pointer"
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        className="absolute opacity-0"
      />
      <img
        src={url_image}
        alt={'Icone ' + value}
        className="w-[4.5rem] h-14 object-contain"
      />
    </label>
  );
}
