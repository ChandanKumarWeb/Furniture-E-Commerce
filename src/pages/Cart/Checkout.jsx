import React from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import RadioButtons from "../../components/RadioButtons";

function Checkout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-5 mt-5 w-100">
      <div className="flex flex-col justify-center items-center mx-5 p-5 md:order-first">
        <h1 className="text-2xl font-semibold">Billing details</h1>
        <div>
          {/* Form */}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
            <div className="col-span-6 sm:col-span-1">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-1">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            {/* Other fields */}
            <div className="col-span-6">
              <label
                htmlFor="company-name"
                className="block text-sm font-medium text-gray-900"
              >
                Company Name (Optional)
              </label>
              <div className="mt-2">
                <input
                  id="company-name"
                  name="company-name"
                  type="text"
                  autoComplete="company-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div className="col-span-6">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-900"
              >
                Country
              </label>
              <div className="mt-2 grid col-span-6">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className=" col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm "
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>India</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-6"
                />
              </div>
            </div>

            {/* Additional address fields */}
            <div className="col-span-6">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  id="street-address"
                  name="street-address"
                  type="text"
                  autoComplete="street-address"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div className="col-span-6">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-900"
              >
                Town / City
              </label>
              <div className="mt-2">
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div className="col-span-6">
              <label
                htmlFor="region"
                className="block text-sm font-medium text-gray-900"
              >
                Province
              </label>
              <div className="mt-2">
                <input
                  id="region"
                  name="region"
                  type="text"
                  autoComplete="address-level1"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div className="col-span-6">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium text-gray-900"
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  id="postal-code"
                  name="postal-code"
                  type="text"
                  autoComplete="postal-code"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div className="col-span-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div className="col-span-6">
              <label
                htmlFor="ph-no"
                className="block text-sm font-medium text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="ph-no"
                  name="ph-no"
                  type="text"
                  autoComplete="number"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex justify-center">
        <div className="m-2 w-full  md:m-8 lg:w-4/6  ">
          <div className="flex justify-between text-xl font-medium ">
            <h1>Product</h1>
            <h1>Subtotal</h1>
          </div>
          <div className="flex justify-between py-6 border-b-4 ">
            <div className="flex flex-col gap-4">
              <div className="flex w-32 justify-between">
                <p style={{ color: "#9F9F9F" }}>Asgaard sofa</p>
                <p>X</p>
                <p>1</p>
              </div>
              <p>Subtotal</p>
              <p>Total</p>
            </div>
            <div className="flex flex-col text-end gap-4">
              <p>Rs. 250,000.00</p>
              <p>Rs. 250,000.00</p>
              <p className="text-xl" style={{ color: "#B88E2F" }}>
                Rs. 250,000.00
              </p>
            </div>
          </div>
          <RadioButtons />
          <div className="flex flex-col items-center">
            <p className="mt-4">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <span style={{fontWeight:"bold"}}>privacy policy</span>.
            </p>
            <button className="w-40 h-10 text-center mt-3 border-2 rounded-3xl ">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
