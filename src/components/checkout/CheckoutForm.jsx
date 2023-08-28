import React ,{useState} from "react";
import "./checkout-form.css";
import { AiFillLock } from "react-icons/ai";
function CheckoutForm() {
  const [info, setInfo] = useState({
    nameOnCard: "",
    number: "",
    date: "",
    cvc: ""
  });
 
  function handleChange(event) {
    const { name, value } = event.target;
    setInfo((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  
  return (
    <div className="checkout-payment-method-form-container">
      <div className="checkout-headings-container">
        <div className="payment-method-heading-text-container">
          <h2 className="payment-method-heading-text">Payment Method</h2>
        </div>
        <div className="secured-connection-text-container">
          <AiFillLock className="secured-connection-lock-icon" />
          <span className="secured-connection-text">Secured connection</span>
        </div>
      </div>
      <input
        type="text"
        name="nameOnCard"
        className="checkout-name-on-card-input-field"
        placeholder="Name On Card"
        onChange={handleChange}
        value={info.nameOnCard}
      />
      <input
        className="checkout-number-input-field"
        type="text"
        name="number"
        placeholder="1234 1234 1234"
        onChange={handleChange}
        value={info.number}
      />
      <div className="checkout-date-cvc-input-container">
        <input
          type="text"
          className="checkout-date-input-field"
          placeholder="MM/YY"
          name="date"
          onChange={handleChange}
          value={info.date}
        />
        <input
          type="text"
          className="checkout-cvc-input-field"
          placeholder="CVC"
          name="cvc"
          onChange={handleChange}
          value={info.cvc}
        />
      </div>
    </div>
  );
}
export default CheckoutForm;
