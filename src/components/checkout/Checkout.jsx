import "./checkout.css";
import Header from "./Header";
import CheckoutForm from "./CheckoutForm";
import SummaryPayment from "./SummaryPayment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import levels from "../dummy/levels";
function Checkout() {

  const {id} = useParams();
  
  console.log(id);


  const[checkoutPrice,setCheckoutPrice] = useState();

  useEffect(()=>{

if(id === "level1"){
  setCheckoutPrice(levels[0].levelPrice)
}else{
  setCheckoutPrice(levels[1].levelPrice)

}

    window.scrollTo(0, 0);
  },[]);

  



  return (
    <>
      <Header heading="Checkout" />
      <div className="checkout-botton-container">
        <CheckoutForm />
        <SummaryPayment checkoutPrice={checkoutPrice}/>
      </div>
    </>
  );
}
export default Checkout;
