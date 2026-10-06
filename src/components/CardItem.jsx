import { useCart } from "../context/CartContext";
import { X } from "lucide-react";

const CardItem = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();

  const increaseQty = () => {
    addToCart(item);
  };

  const decreaseQty = () => {
    removeFromCart(item.id);
  };

  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-between
      p-4 sm:p-6 mb-4 bg-gray-900/70 rounded-xl shadow-2xl
      border border-gray-800 transition duration-300
      hover:border-orange-600/50"
    >
      {/* Product */}
      <div className="flex items-center space-x-4 w-full sm:w-auto">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg border-2 border-gray-700"
        />

        <div className="grow">
          <h3 className="text-xl font-bold text-white line-clamp-1">
            {item.name}
          </h3>

          <p className="text-lg text-orange-400 font-semibold">
            ₹{item.price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Quantity */}
      <div
        className="flex items-center justify-end
        w-full sm:w-2/5 mt-4 sm:mt-0"
      >
        <div
          className="flex items-center border border-gray-700
          rounded-2xl overflow-hidden shadow-lg"
        >
          <button
            type="button"
            onClick={decreaseQty}
            className="w-8 h-8 flex items-center justify-center
            text-gray-400 bg-gray-800/60 hover:bg-gray-600/50"
          >
            -
          </button>

          <span
            className="h-8 px-3 flex items-center justify-center
            text-base font-bold text-white bg-gray-800"
          >
            {item.quantity}
          </span>

          <button
            type="button"
            onClick={increaseQty}
            className="w-8 h-8 flex items-center justify-center
            text-gray-400 bg-gray-800/60 hover:bg-gray-600/50"
          >
            +
          </button>
        </div>

        <p
          className="font-extrabold text-orange-300 w-24 text-right
        hidden md:block"
        >
          ₹{item.price * item.quantity.toFixed(2)}
        </p>
        <button
          onClick={() => removeFromCart(item.id, true)}
          className="p-3 bg-red-800/20 text-red-400  rounded-full hover:bg-red-800/40
          transition duration-150 ml-3"
        >
          <X className="w-5 h-5 " />
        </button>
      </div>
    </div>
  );
};

export default CardItem;
