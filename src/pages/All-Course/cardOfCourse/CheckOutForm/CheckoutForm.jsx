import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { baseServerUrl } from "../../../../constants.js";
import { toast } from "react-toastify";

import "./checkoutform.css";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutForm = ({ userId, courseId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await axios.post(
          `${baseServerUrl}/api/enroll/create-payment-intent`,
          { userId, courseId }
        );
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        toast.info("There might be some problem try again later");
        console.error("Error creating payment intent:", error);
      }
    };

    createPaymentIntent();
  }, [userId, courseId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // No need for return_url here
      },
      redirect: "if_required", // To avoid automatic redirection
    });

    if (error) {
      console.error(error);
      toast.error("Payment error. Please try again.");
      // alert("");
    } else if (paymentIntent.status === "succeeded") {
      // Handle course enrollment directly after payment
      try {
        await axios.post(`${baseServerUrl}/api/enroll/pay`, {
          paymentIntentId: paymentIntent.id,
          userId,
          courseId,
        });
        toast.success(
          "Payment successful! You are now enrolled in the course."
        );
        // alert("");
        navigate("/mycourses");
      } catch (error) {
        console.error("Error enrolling in course:", error);
        toast.error("Enrollment error. Please try again.");
        // alert("");
      }
    } else {
      toast.error("Payment failed. Please try again.");
      // alert("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
  );
};

const Checkout = () => {
  const location = useLocation();
  const { userId, courseId } = location.state;
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await axios.post(
          `${baseServerUrl}/api/enroll/create-payment-intent`,
          { userId, courseId }
        );
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error("Error creating payment intent:", error);
      }
    };

    createPaymentIntent();
  }, [userId, courseId]);

  return clientSecret ? (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm userId={userId} courseId={courseId} />
    </Elements>
  ) : (
    <p>Loading...</p>
  );
};

export default Checkout;
