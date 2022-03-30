import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
function Payment() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout ( <Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Address</h3>
          </div>
          <div className="payment_address">
            <p>
              Vastu Heaven building , 6th main 2nd crss, bilekahalli, bangalore{" "}
            </p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                info={item.info}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>payment method</h3>
          </div>
          <div className="payment_details">
            <div className="process">
              <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png" />
              <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png" />
              <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png" />
              <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png" />
              <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
