import { getShippingTotal } from "./Reducer";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
import './ShippingTotal.css';

function ShippingTotal() {
  const [{ basket }] = useStateValue();
  const shippingTotal = getShippingTotal(basket);

  return (
    <div className="shippingTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            {shippingTotal > 0 && (
              <p className="shippingTotal_desc">
                add <b>{value}</b> of eligible items to your order to
                qualify for FREE Shipping
              </p>
            )}
            {shippingTotal <= 0 && basket.length > 0 && (
              <p className="shippingTotal_desc">
                <b>Your order qualifies for FREE Shipping.</b> Choose this
                option at checkout.
              </p>
            )}
          </>
        )}
        decimalScale={2}
        value={getShippingTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default ShippingTotal;
