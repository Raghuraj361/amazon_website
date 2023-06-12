import React from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import "./Checkout.css";
import image from "./checkoutLogo1.jpg";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import Subtotal from "./Subtotal/Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(dispatch);
  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img className="checkoutAd" src={image} alt="" />

        <div>
          <h2 className="ckeckoutTitle">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              category={item.category}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkoutRight">
        <Subtotal />
      </div>
    </div>
  );
}
export default Checkout;
