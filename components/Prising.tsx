const Prising = () => {
  return (
    <div className="container my-1 mx-auto md:px-6">
      <section className="mb-32">
        <h1 className="mb-12 text-center text-5xl font-bold text-green-500">
          Pricing
        </h1>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
          <div className="mb-6 lg:mb-0">
            <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                <p className="mb-4 text-sm uppercase">
                  <strong className="text-green-500">Basic</strong>
                </p>
                <h3 className="mb-6 text-3xl">
                  <strong className="text-white">
                    <strong className="text-green-500">$</strong> 169
                  </strong>
                  <small className="text-base text-neutral-500 dark:text-neutral-300">
                    /year
                  </small>
                </h3>

                <button
                  type="button"
                  className="text-green-500 inline-block w-full rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  data-te-ripple-init
                  data-te-ripple-color="light "
                >
                  Buy
                </button>
              </div>
              <div className="p-6 ">
                <ol className="list-inside ">
                  <li className="mb-4 flex text-slate-300 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>Unlimited updates
                  </li>
                  <li className="mb-4 flex  text-slate-300 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>Git repository
                  </li>
                  <li className="mb-4 flex  text-slate-300 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>npm installation
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mb-6 lg:mb-0">
            <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                <p className="mb-4 text-sm uppercase">
                  <strong className="text-green-500">Advanced</strong>
                </p>
                <h3 className="mb-6 text-3xl">
                  <strong className="text-white">
                    <strong className="text-green-500">$</strong> 269
                  </strong>

                  <small className="text-base text-neutral-500 dark:text-neutral-300">
                    /year
                  </small>
                </h3>
                <button
                  type="button"
                  className="text-green-500 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out ]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Buy
                </button>
              </div>
              <div className="p-6">
                <ol className="list-inside">
                  <li className="mb-4 flex  text-slate-300 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>Unlimited updates
                  </li>
                  <li className="mb-4 flex  text-slate-300 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>Git repository
                  </li>
                  <li className="mb-4 flex  text-slate-300 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>npm installation
                  </li>
                  <li className="mb-4 flex  text-slate-300 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>Code examples
                  </li>
                  <li className="mb-4 flex  text-slate-300 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>Premium snippets
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mb-6 lg:mb-0">
            <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                <p className="mb-4 text-sm uppercase">
                  <strong className="text-green-500">Enterprise</strong>
                </p>
                <h3 className="mb-6 text-3xl">
                  <strong className="text-white">
                    <strong className="text-green-500">$</strong> 369
                  </strong>

                  <small className="text-base text-neutral-500 dark:text-neutral-300">
                    /year
                  </small>
                </h3>
                <button
                  type="button"
                  className="text-green-500 inline-block w-full rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Buy
                </button>
              </div>
              <div className="p-6">
                <ol className="list-inside">
                  <li className="mb-4 flex  text-slate-300 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>Unlimited updates
                  </li>
                  <li className="mb-4 flex  text-slate-300 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>Git repository
                  </li>
                  <li className="mb-4 flex  text-slate-300 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>npm installation
                  </li>
                  <li className="mb-4 flex  text-slate-300 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>Code examples
                  </li>
                  <li className="mb-4 flex  text-slate-300 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>Premium snippets
                  </li>
                  <li className="mb-4 flex  text-slate-300 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>Premium support
                  </li>
                  <li className="mb-4 flex  text-slate-300 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>Drag&amp;Drop builder
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prising;
