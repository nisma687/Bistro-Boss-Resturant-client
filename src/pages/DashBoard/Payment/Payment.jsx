import { Elements }
 from "@stripe/react-stripe-js";
import SectionTitle
 from "../../../components/SectionTitle/SectionTitle";
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";
// add publishable stripe key here
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);
const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"Payment"}
            subHeading={"Please pay your bill"}/>
            <div>
                
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
            </div>
        </div>
    );
};

export default Payment;