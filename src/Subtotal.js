import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
import { useHistory } from "react-router";
import ShippingTotal from "./ShippingTotal";


function Subtotal() {
  const history = useHistory();
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <ShippingTotal />
            <p className="subtotal_total">
              Subtotal ({basket.length} {basket.length == 1 ? "item" : "items"}
              ): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        className="subtotal_checkoutBTN"
        onClick={(e) => history.push("/payment")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
