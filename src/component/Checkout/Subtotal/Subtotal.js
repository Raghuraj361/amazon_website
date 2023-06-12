//import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../../Reducer";
import { useStateValue } from "../../StateProvider/StateProvider";
import "./Subtotal.css";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const history = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  console.log(dispatch);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotalGift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history("/payment")}>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
