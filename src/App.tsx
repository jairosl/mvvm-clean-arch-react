import { BsTrash3, BsArrowRight } from 'react-icons/bs';

function App() {
  return (
    <div className="min-h-screen bg-blue-400 flex items-center justify-center">
      <div className="bg-white rounded-xl flex items-start justify-center gap-14 py-12 px-10 mt-2">
        <main className="w-[38rem]">
          <header>
            <h1 className="text-black text-lg font-popins font-semibold leading-normal">
              Shopping
            </h1>
          </header>
          <div className="w-full bg-line-primary h-px my-6" />

          <h2 className="text-black font-popins font-medium text-lg leading-normal">
            Shopping cart
          </h2>
          <p className="text-black font-nunito font-medium text-sm mb-6 leading-normal">
            You have 3 item in your cart
          </p>

          <ul className="space-y-6">
            <li>
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
                    <p className="text-label font-raleway text-xl font-semibold">
                      1
                    </p>
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
            </li>
            <li>
              <div className="flex items-center pl-3 pr-6 py-2 gap-20 shadow-md rounded-xl">
                <div className="flex items-center gap-5">
                  <img
                    src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
                    alt="pizza"
                    loading="lazy"
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-black font-popins font-medium text-lg">
                      Italy Pizza
                    </p>
                    <span className="text-black font-nunito font-medium text-sm">
                      Extra cheese and toping
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-10 flex-1">
                  <div className="flex items-center">
                    <p className="text-label font-raleway text-xl font-semibold">
                      1
                    </p>
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
            </li>
            <li>
              <div className="flex items-center pl-3 pr-6 py-2 gap-20 shadow-md rounded-xl">
                <div className="flex items-center gap-5">
                  <img
                    src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
                    alt="pizza"
                    loading="lazy"
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-black font-popins font-medium text-lg">
                      Italy Pizza
                    </p>
                    <span className="text-black font-nunito font-medium text-sm">
                      Extra cheese and toping
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-10 flex-1 justify-end">
                  <div className="flex items-center">
                    <p className="text-label font-raleway text-xl font-semibold">
                      1
                    </p>
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
            </li>
          </ul>
        </main>
        <aside className="bg-secondary rounded-3xl shrink-0 p-7 w-96 text-primary">
          <header className="flex items-center justify-between mb-4">
            <h2 className="font-popins font-semibold text-xl">Card Details</h2>
            <img
              src="https://images.unsplash.com/photo-1525357816819-392d2380d821"
              alt="usuário"
              loading="lazy"
              className="w-14 h-14 rounded-lg object-cover"
            />
          </header>

          <div className="space-y-3 mb-6">
            <p className="font-nunito font-medium text-base">Card type</p>
            <div className="flex items-center justify-between">
              <label
                htmlFor="mastercard"
                className="has-[:checked]:shadow-md has-[:checked]:border-white border border-transparent bg-gray-100/20 rounded-md hover:cursor-pointer"
              >
                <input
                  type="radio"
                  name="card"
                  id="mastercard"
                  value="mastercard"
                  className="absolute opacity-0"
                />
                <img
                  src="/card-flags/master.png"
                  alt="Icone MasterCard"
                  className="w-[4.5rem] h-14 object-contain"
                />
              </label>

              <label
                htmlFor="visa"
                className="has-[:checked]:shadow-md has-[:checked]:border-white border border-transparent bg-gray-100/20 rounded-md hover:cursor-pointer"
              >
                <input
                  type="radio"
                  name="card"
                  id="visa"
                  value="visa"
                  className="absolute opacity-0"
                />
                <img
                  src="/card-flags/visa.png"
                  alt="Icone MasterCard"
                  className="w-[4.5rem] h-14 object-contain"
                />
              </label>

              <label
                htmlFor="rupay"
                className="has-[:checked]:shadow-md has-[:checked]:border-white border border-transparent bg-gray-100/20 rounded-md hover:cursor-pointer"
              >
                <input
                  type="radio"
                  name="card"
                  id="rupay"
                  value="rupay"
                  className="absolute opacity-0"
                />
                <img
                  src="/card-flags/rupay.png"
                  alt="Icone MasterCard"
                  className="w-[4.5rem] h-14 object-contain"
                />
              </label>

              <button
                type="button"
                className="bg-gray-100/20 rounded-md w-[4.5rem] h-14 font-opensans text-center font-bold text-sm"
              >
                See all
              </button>
            </div>
          </div>
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

          <div className="w-full bg-line-secondary h-px mt-6 mb-4" />

          <ul className="space-y-1 mb-6">
            <li className="font-popins text-sm font-medium flex items-center justify-between">
              <p>Subtotal</p>
              <span>$1,668</span>
            </li>
            <li className="font-popins text-sm font-medium flex items-center justify-between">
              <p>Shipping</p>
              <span>$4</span>
            </li>
            <li className="font-popins text-sm font-medium flex items-center justify-between">
              <p>Total (Tax incl.)</p>
              <span>$1,672</span>
            </li>
          </ul>

          <button
            form="payment-credit-card"
            className="px-6 py-5 bg-tertiary rounded-xl flex items-center justify-between w-full"
          >
            <p className="font-popins font-medium text-base">$1,672</p>
            <span className="font-popins font-medium text-base flex items-center gap-2">
              Checkout
              <BsArrowRight size={24} color="#FEFCFC" />
            </span>
          </button>
        </aside>
      </div>
    </div>
  );
}

export default App;
