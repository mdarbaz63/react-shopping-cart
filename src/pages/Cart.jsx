import { useCart } from "../context/CartContext";

import { Link } from "react-router-dom";

import { ChevronLeft, Zap } from "lucide-react";

import CardItem from "../components/CardItem";

const Cart = () => {
  const { cart, cartTotal, cartCount } = useCart();

  return (
    <div className="container mx-auto px-4 md:px-8 pt-8">
      <div className="flex items-center mb-10">
        <Link
          to={"/"}
          className="flex items-center text-gray-400
          hover:text-orange-400 transition duration-150
          font-semibold text-lg"
        >
          <ChevronLeft className="w-6 h-6 mr-1" />
          back to store
        </Link>
      </div>

      <h2 className="text-3xl font-bold text-white mb-10 tracking-tight">
        Shopping cart({cartCount})
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </div>

        <div
          className="
            lg:col-span-1
            p-8
            bg-gray-900
            rounded-2xl
            shadow-2xl
            sticky top-20
            h-fit
            border border-gray-800
          "
        >
          <h3
            className="
              text-3xl font-bold text-white
              mb-5
              border-b border-gray-700
              pb-3
              flex items-center
            "
          >
            <div className="flex  items-center w-full">
              <span className="w-6 h-9  text-orange-400">₹</span>
              <span>Order Total</span>
            </div>
          </h3>

          <div className="space-y-3 text-gray-400">
            <div className="flex justify-between text-xl ">
              <span className="">SubTotal:</span>
              <span className="font-semibold  text-white">
                ₹{cartTotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-xl ">
              <span>Shipping(Express):</span>
              <span className="font-semibold  text-green-400">Free</span>
            </div>

            <div className="flex justify-between pt-6 border-t border-gray-700 text-xl ">
              <span
                className="text-2xl font-extrabold 
              text-white"
              >
                Estimate Total:
              </span>
              <span className=" text-2xl font-semibold  text-orange-400">
                ₹{cartTotal.toFixed(2)}
              </span>
            </div>
          </div>

          <Link
            to="/checkout"
            className=" w-full  mt-8 py-5  bg-orange-600 text-white font-bold text-xl
          rounded-full shadow-lg cursor-pointer hover:bg-orange-700 shadow-orange-800/50
          transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4
          hover:ring-orange-600/70 uppercase tracking-wider  "
          >
            <Zap className="w-5 h-5" />
            <span className="uppercase">proceed securely</span>
          </Link>
          <p className="capitalize text-xs text-gray-500 text-center mt-4">
            all transaction are encrypted and secure
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
