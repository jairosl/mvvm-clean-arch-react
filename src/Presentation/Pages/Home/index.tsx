import { BsArrowRight } from 'react-icons/bs';
import Form from '../../Components/Form';
import RadioButton from '../../Components/Input/Radio';
import Card from '../../Components/Card';

import DI from '../../../DI/ioc';
import { useEffect } from 'react';

export default function HomePage() {
  const { addProduct } = DI.resolve('HomeViewModel');

  useEffect(() => {
    addProduct('d0f93296-f714-401f-8a8d-08e52320b56e');
    addProduct('20ed52d3-3153-48bf-a340-85d9bca3e943');
  }, []);

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
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
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
              <RadioButton
                id="mastercard"
                value="mastercard"
                name="card"
                url_image="/card-flags/master.png"
              />

              <RadioButton
                id="visa"
                name="card"
                value="visa"
                url_image="/card-flags/visa.png"
              />

              <RadioButton
                id="rupay"
                name="card"
                value="rupay"
                url_image="/card-flags/rupay.png"
              />

              <button
                type="button"
                className="bg-gray-100/20 rounded-md w-[4.5rem] h-14 font-opensans text-center font-bold text-sm"
              >
                See all
              </button>
            </div>
          </div>
          <Form />

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
