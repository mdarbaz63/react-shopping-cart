import { createContext, useContext, useEffect, useState, useMemo } from "react";

const cartContext = createContext();
import { initialProducts } from "../data/product";
import { toast, Bounce } from "react-toastify";

//local storage code...
export const CartProvider = (props) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const product = initialProducts;

  // add item into card
  const addToCart = (product) => {
    toast.success("Item Added To Cart", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  //remove item from card

  const removeFromCart = (productId, removeAll = false) => {
    toast.warn("Item Remove From Cart", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === productId);

      if (!existingItem) return prev;

      if (removeAll || existingItem.quantity === 1) {
        return prev.filter((item) => item.id !== productId);
      }

      return prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
      );
    });
  };

  //clear cart

  const clearCart = () => {
    setCart([]);
  };

  // increase qty of cart

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );

  // total pirice

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart],
  );

  return (
    <cartContext.Provider
      value={{
        product,
        cart,
        addToCart,
        clearCart,
        cartTotal,
        cartCount,
        removeFromCart,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export const useCart = () => useContext(cartContext);
