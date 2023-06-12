import React from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProductImage" src={image} alt="#" />
      <div className="checkoutProductInfo">
        <p className="checkoutProductTitle">{title}</p>
        <p className="checkoutProductPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProductRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
