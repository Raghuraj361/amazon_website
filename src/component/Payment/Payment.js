import React, { useState } from "react";
import "./Payment.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStateValue } from "../StateProvider/StateProvider";

function Payment({ id, image, title, price, rating }) {
  const [popup, setPopup] = useState(false);
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const handleClickPopup = () => {
    setPopup(!popup);
  };
  const closePopup = () => {
    setPopup(false);
  };
  const submitCard = () => {
    setPopup(false);
    toast("🦄 Payment successfull !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // toast.success(" order has been placed", {
    //   position: "top-center",
    // });
    dispatch({
      type: "CLEAR_ALL_BASKETS",
      id: id,
    });
  };

  return (
    <div className="payment">
      <button onClick={handleClickPopup} className="popup__button">
        Select Delivery Address And Payment Method
      </button>
      <div>
        {popup ? (
          <div className="main">
            <div className="popup">
              <div className="popup-leader">
                <h1>Payment card</h1>
                <h1 onClick={closePopup}>X</h1>
              </div>
              <div className="input__area">
                <label className="payment__label">Input Delivery Address</label>
                <textarea
                  type="text"
                  className="payment__input"
                  cols="4"
                ></textarea>
              </div>
              <div>
                <div className="payment__method">Select Payment Method</div>
                <div className="all__radio">
                  <label htmlFor="a">
                    <input
                      type="radio"
                      id="a"
                      name="radio"
                      className="input__radio3"
                      value="option3"
                    />
                    Pay with UPI IDs /Net Banking
                  </label>
                  <label htmlFor="b" className="new">
                    <input
                      type="radio"
                      id="b"
                      name="radio"
                      className="input__radio3"
                      value="option3"
                    />
                    Pay With Debit/Credit/ATM Cards
                  </label>
                  <label htmlFor="c">
                    <input
                      type="radio"
                      id="c"
                      name="radio"
                      className="input__radio3"
                      value="option3"
                    />
                    Cash on Delivery/Pay on Delivery
                  </label>
                </div>
                <div>
                  <button
                    className="completePaymentButton"
                    onClick={submitCard}
                  >
                    Complete Payment Button
                  </button>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        ) : (
          ""
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Payment;
