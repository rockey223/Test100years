import React from "react";
import "./summary-payment.css";
function SummaryPayment() {
  return (
    <div className="checkout-summary-total-container">
      <div className="checkout-summary-text-container">Summary</div>
      <div className="checkout-summary-total-text-amount-container">
        <div className="checkout-total-text-container">Total</div>
        <div className="checkout-total-amount-container">$ 3100/-</div>
      </div>
      <hr className="checkout-summary-line" />
      <button
       
        type="submit"
        className="checkout-complete-payment-btn"
      >
        Complete Payment
      </button>
    </div>
  );
}
export default SummaryPayment;
