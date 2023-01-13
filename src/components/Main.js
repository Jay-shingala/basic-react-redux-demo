import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../redux/action";

const Main = () => {
  const dispatch = useDispatch();

  const product = {
    name: "I phone",
    type: "mobile",
    price: 1000,
    color: "red",
  };

  return (
    <>
      <div>
        <button onClick={() => dispatch(addToCart(product))}>add to cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(removeFromCart(product))}>remove from cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
      </div>
    </>
  );
};

export default Main;
