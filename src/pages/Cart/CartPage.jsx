import img1 from "../../assets/images/SingleProductImg/image1.webp";
import Features from "../Shop/Features";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function CartPage() {
  const bin = (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.625 4H17.125V1.8125C17.125 0.847266 16.3402 0.0625 15.375 0.0625H6.625C5.65977 0.0625 4.875 0.847266 4.875 1.8125V4H1.375C0.891016 4 0.5 4.39102 0.5 4.875V5.75C0.5 5.87031 0.598437 5.96875 0.71875 5.96875H2.37031L3.0457 20.2695C3.08945 21.202 3.86055 21.9375 4.79297 21.9375H17.207C18.1422 21.9375 18.9105 21.2047 18.9543 20.2695L19.6297 5.96875H21.2812C21.4016 5.96875 21.5 5.87031 21.5 5.75V4.875C21.5 4.39102 21.109 4 20.625 4ZM15.1562 4H6.84375V2.03125H15.1562V4Z"
        fill="#B88E2F"
      />
    </svg>
  );

  return (
    <div>
      {/* Table and Cart Totals using Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8 w-full">
        <div className="md:col-span-2">
          <table className="table-auto w-full gap-4 text-center">
            <thead className="h-12" style={{ backgroundColor: "#F9F1E7" }}>
              <tr>
                <th className="cartPageProductTblHead"></th>
                <th className="cartPageProductTblHead">Product</th>
                <th className="cartPageProductTblHead">Price</th>
                <th className="cartPageProductTblHead">Quantity</th>
                <th className="cartPageProductTblHead">Subtotal</th>
                <th className="cartPageProductTblHead"></th>
              </tr>
            </thead>
            <tbody className="border-separate border-spacing-2">
              <tr>
                <td>
                  <img className="cartImg mt-5" src={img1} alt="" />
                </td>
                <td className="cartPageProductDtls">Asgaard sofa</td>
                <td className="cartPageProductDtls">Rs. 250,000.00</td>
                <td className="cartPageProductDtls">1</td>
                <td className="cartPageProductDtls">Rs. 250,000.00</td>
                <td className="cartPageProductDtls">{bin}</td>
              </tr>
              <tr>
                <td>
                  <img className="cartImg mt-5" src={img1} alt="" />
                </td>
                <td className="cartPageProductDtls">Asgaard sofa</td>
                <td className="cartPageProductDtls">Rs. 250,000.00</td>
                <td className="cartPageProductDtls">1</td>
                <td className="cartPageProductDtls">Rs. 250,000.00</td>
                <td className="cartPageProductDtls">{bin}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CART TOTAL */}
        <div className="flex flex-col items-center w-full">
          <div
          className="flex flex-col items-center  w-2/3 h-72 px-2"
          style={{ backgroundColor: "#F9F1E7" }}
        >
          <div className="py-4 h-24">
            <h1 className="text-2xl text-center">Cart Totals</h1>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <div className="flex gap-4 justify-between">
              <h1>Subtotal</h1>
              <h1>Rs. 250,000.00</h1>
            </div>
            <div className="flex justify-between gap-4">
              <h1>Total</h1>
              <h1 className="text-xl" style={{ color: "#B88E2F" }}>
                Rs. 250,000.00
              </h1>
            </div>
            <div className="flex justify-center">
              <Link to="/checkout">
                <button className="w-40 h-10 text-center border-2 rounded-3xl">
                  Check Out
                </button>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>

      <Features />
      <Footer />
    </div>
  );
}

export default CartPage;
