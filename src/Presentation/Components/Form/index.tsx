export default function Form() {
  return (
    <fieldset>
      <form id="payment-credit-card" className="space-y-3">
        <div>
          <label
            htmlFor="name-card"
            className="font-popins font-medium text-sm hover:cursor-pointer mt-2"
          >
            Name on card
          </label>
          <input
            id="name-card"
            type="text"
            placeholder="Name"
            className="w-full h-10  rounded-md placeholder-primary bg-line-secondary focus:outline-none py-3 px-5 font-popins text-xs"
          />
        </div>

        <div>
          <label
            htmlFor="number-card"
            className="font-popins font-medium text-sm hover:cursor-pointer mt-2"
          >
            Card number
          </label>
          <input
            id="number-card"
            type="text"
            placeholder="1111 2222 3333 4444"
            className="w-full h-10  rounded-md placeholder-primary bg-line-secondary focus:outline-none py-3 px-5 font-popins text-xs"
          />
        </div>

        <div className="flex items-center justify-between gap-2">
          <div>
            <label
              htmlFor="expiration-date"
              className="font-popins font-medium text-sm hover:cursor-pointer mt-2"
            >
              Expiration date
            </label>
            <input
              id="expiration-date"
              type="text"
              placeholder="mm/yy"
              className="w-full h-10  rounded-md placeholder-primary bg-line-secondary focus:outline-none py-3 px-5 font-popins text-xs"
            />
          </div>

          <div>
            <label
              htmlFor="cvv"
              className="font-popins font-medium text-sm hover:cursor-pointer mt-2"
            >
              CVV
            </label>
            <input
              id="cvv"
              type="text"
              placeholder="123"
              className="w-full h-10  rounded-md placeholder-primary bg-line-secondary focus:outline-none py-3 px-5 font-popins text-xs"
            />
          </div>
        </div>
      </form>
    </fieldset>
  );
}
