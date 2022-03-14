import React from 'react'
import Review from './Review'

const PaymentForm = ({shippingData,checkoutToken}) => {
  
  return (
    <>
     <Review checkoutToken={checkoutToken}/> 
      
    </>
  )
}

export default PaymentForm
