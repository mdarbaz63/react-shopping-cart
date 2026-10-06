import { useState } from "react";
import { useCart } from "../context/CartContext";

import { Package, MapPin } from "lucide-react";
import { toast, Bounce } from "react-toastify";
import OrderConfirmation from "./OrderConfirmation";

const CheackOut = () => {
  const { cartTotal, clearCart, cart } = useCart();
  const [deliveryDetails, setdeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const [isConfirm, setIsConfirm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdeliveryDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setIsConfirm(true);
    toast.success("Order confirmed successfully! 🎉");
  };
  console.log(deliveryDetails);
  if (isConfirm) return <OrderConfirmation deliveryDetails={deliveryDetails} />;

  return (
    <>
      <div className=" container mx-auto px-4 md:px-8 pt-8  capitalize">
        <h2
          className=" text-4xl font-extrabold text-white mb-10
        tracking-light "
        >
          finalized Order
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
          <div
            className="lg:col-span-2 p-8 bg-gray-900 rounded-2xl border-gray-800
          shadow-2xl border "
          >
            <h3
              className="text-2xl font-bold text-orange-400 mb-6 flex item-center
            space-x-3   border-b border-gray-700 pb-4 "
            >
              <MapPin className="w-7 h-7 text-orange-500" />
              <span>shipping information</span>
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {Object.keys(deliveryDetails).map((key) => (
                <div key={key}>
                  <label
                    htmlFor={key}
                    className="block text-xs font-semibold
                  text-gray-300 mb-1 "
                  >
                    {key === "zip" ? "pincode" : key}
                  </label>

                  <input
                    onChange={handleChange}
                    type={key === "zip" ? "number" : "text"}
                    id={key}
                    name={key}
                    value={deliveryDetails[key]}
                    required
                    className=" mt-1 block w-full px-5 py-3 border border-gray-700 rounded-xl
                  shadow-inner text-white bg-gray-800 placeholder-gray-500 "
                  />
                </div>
              ))}

              <div className="pt-6">
                <button
                  type="submit"
                  className=" w-full   py-3  bg-orange-600 text-white font-bold text-xl
          rounded-full shadow-lg cursor-pointer hover:bg-orange-700 shadow-orange-800/50
          transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4
          hover:ring-orange-600/70 uppercase tracking-wider  "
                >
                  <span className="uppercase">
                    ₹pay and confirm order (₹{cartTotal.toFixed(2)})
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* order summary code is here.......................*/}

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
              <Package className=" w-6 h-9  text-orange-400" />

              <span className="pl-2">summary</span>
            </h3>

            <div className="space-y-3 text-gray-400">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex text-base justify-between border-b
                border-gray-800 pb-2"
                >
                  <span className="truncate text-gray-300  ">{item.name}</span>
                  <span className="font-medium text-orange-300">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}

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
                    Total Due:
                  </span>
                  <span className=" text-2xl font-semibold  text-orange-400">
                    ₹{cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheackOut;
