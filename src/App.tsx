function App() {
  return (
    <div className="min-h-screen bg-blue-400 flex items-center justify-center">
      <div className="bg-white rounded-xl flex items-center justify-center gap-6 py-14 px-10">
        <main>
          <header>
            <h1 className="text-black text-lg font-popins font-semibold ">
              Shopping
            </h1>
          </header>
          <div className="w-full bg-line-primary h-px my-6" />

          <h2 className="text-black font-popins font-medium text-lg">
            Shopping cart
          </h2>
          <p className="text-black font-nunito font-medium text-sm mb-6">
            You have 3 item in your cart
          </p>

          <ul className="space-y-6">
            <li>
              <div className="flex items-center pl-3 pr-4 py-2 gap-20 shadow-md rounded-xl">
                <div className="flex items-center gap-5">
                  <img
                    src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
                    alt="pizza"
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
                <div className="flex items-center gap-10">
                  <div className="text-label font-raleway text-xl font-semibold">
                    1
                  </div>
                  <button type="button">delete</button>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center px-3 py-2 gap-20 shadow-md rounded-xl">
                <div className="flex items-center gap-5">
                  <img
                    src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
                    alt="pizza"
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
                <div className="flex items-center gap-10">
                  <div className="text-label font-raleway text-xl font-semibold">
                    1
                  </div>
                  <button type="button">delete</button>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center px-3 py-2 gap-20 shadow-md rounded-xl">
                <div className="flex items-center gap-5">
                  <img
                    src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
                    alt="pizza"
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
                <div className="flex items-center gap-10">
                  <div className="text-label font-raleway text-xl font-semibold">
                    1
                  </div>
                  <button type="button">delete</button>
                </div>
              </div>
            </li>
          </ul>
        </main>
        <aside>aside</aside>
      </div>
    </div>
  );
}

export default App;
