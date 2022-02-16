import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, image, title, price, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct_infoHolder">
        <img className="checkoutProduct_image" src={image} alt="" />
        <div className="checkoutProduct_info">
          <p className="checkoutProduct_title">{title}</p>
          <span
            style={{ color: "green", fontSize: ".8rem", fontWeight: "500" }}
          >
            In Stock
          </span>
          <span>
            Elgible for FREE Shipping &
            <b style={{ color: "#3992af", marginLeft: "5px" }}>FREE Returns</b>
          </span>
          {!hideButton && (
            <div className="checkoutProduct_gift">
            <input type="checkbox" /> This is a gift <b>learn more</b>
          </div>
          )}
          {!hideButton && (
            <div className="checkoutProduct_buttons">
            <div className="checkoutProduct_QtyHolder">
              <span>
                <b>Qty:</b>
              </span>
              <div className="checkoutProduct_QtySelect">
                <select name="QTYlist" id="Qty_BTN">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10+">10+</option>
                </select>
              </div>
            </div>
              <div className="checkoutProduct_buttonOptHolder">
                <span
                  className="checkoutProduct_buttonOpts"
                  onClick={removeFromBasket}
                >
                  Delete
                </span>
                <span className="checkoutProduct_buttonOpts">
                  Save for later
                </span>
                <span className="checkoutProduct_buttonOpts">
                  Compare with similar items
                </span>
              </div>
          </div>
          )}
        </div>
      </div>
      <div className="checkoutProduct_price">
        <small>$</small>
        <strong>{price}</strong>
      </div>
    </div>
  );
}

export default CheckoutProduct;
