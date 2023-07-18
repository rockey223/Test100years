import React from 'react'
import {BsCheck2Circle} from 'react-icons/bs';
const PriceBoxAnswer = ({answer}) => {
  // console.log(answer)
  return (
    <>
<div className="priceBox-Answer-container">
    <div className="priceBox-answer-icon">
<BsCheck2Circle/>
    </div>
    <div className="priceBox-answer-content">
    {answer}
    </div>
</div>

    </>
  )
}

export default PriceBoxAnswer