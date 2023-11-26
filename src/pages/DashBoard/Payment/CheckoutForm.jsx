import { CardElement,
     useElements, useStripe } from "@stripe/react-stripe-js";
import {useState,useEffect} from 'react';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCard from "../../../hooks/useCard";


const CheckoutForm = () => {
    const [error,setError]=useState('');
    const stripe = useStripe();
  const elements = useElements();
  const axiosSecure=useAxiosSecure();
  const [cart]=useCard();
  const totalPrice=cart.reduce((acc,curr)=>acc+curr.price,0);
  const [clientSecret,setClientSecret]=useState('');
  useEffect(()=>{
    axiosSecure.post('/create-payment-intent',{price:totalPrice})
    .then(res=>{
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
    })
    .catch(err=>{
        console.log(err);
    })


  },[axiosSecure,totalPrice])
    const handleSubmit=async(event)=>{
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }
      
          // Get a reference to a mounted CardElement. Elements knows how
          // to find your CardElement because there can only ever be one of
          // each type of element.
          const card = elements.getElement(CardElement);
      
          if (card == null) {
            return;
          }
      
          // Use your card Element with other Stripe.js APIs
          const {error, paymentMethod} = 
          await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if(error) {
            setError(error.message);
            console.log('[error]', error);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('');
          }

    }
    return (
       <form onSubmit={handleSubmit}>
           <CardElement
                options={{
                style: {
                base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button
      className="btn btn-sm btn-primary my-4"
       type="submit" disabled={!stripe || !clientSecret }>
        Pay
      </button>
      {error && <p className="
        text-danger text-center font-semibold
        text-red-500
      ">
            {error}
      </p> }  
    
        </form>
    );
};

export default CheckoutForm;