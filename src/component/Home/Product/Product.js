import React from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import "./Product.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);

  const addToBasket = () => {
    toast("Item added to card", {
      position: "bottom-center",

      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.data.id,
        title: props.data.title,
        image: props.data.image,
        category: props.data.category,
        price: props.data.price,
        rating: props.data.rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="productInfo">
        <p>{props.data.title}</p>
        <p className="productPrice">
          <strong>{`price:$ ${props.data.price}`}</strong>
        </p>
        <div className="productRating">
          {Array(props.data.rating)
            .fill()
            .map((i) => (
              <p key={i}>❤️</p>
            ))}
        </div>
      </div>

      <img src={props.data.image} alt="#" />
      <button onClick={addToBasket}>Add to Basket</button>
      <ToastContainer toastStyle={{ backgroundColor: "approx Cream Can" }} />
    </div>
  );
}
export default Product;

// <button onClick={addToBasket}>Add to Basket</button>
