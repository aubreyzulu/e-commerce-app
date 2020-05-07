import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_ApFmaBzsjRBcWeUCMSYQfGxX00JQZXsfzt';


  const onToken = token => {
    console.log(token);
    axios({
      url: 'payment',
      method: 'post',
      data: { amount: priceForStripe, token }
    })
      .then(response => {
        alert("Your payment was successful")
      })
      .catch(error => {
        console.log('Payment error:' + JSON.parse(error))
        alert("Payment failed, please try again")
      })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
