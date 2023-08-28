import "./checkout.css";
import Header from "./Header";
import CheckoutForm from "./CheckoutForm";
import SummaryPayment from "./SummaryPayment";
import { useEffect } from "react";
function Checkout() {
  useEffect(()=>{

    window.scrollTo(0, 0);
  },[]);
  return (
    <>
      <Header heading="Checkout" />
      <div className="checkout-botton-container">
        <CheckoutForm />
        <SummaryPayment />
      </div>
    </>
  );
}
export default Checkout;
