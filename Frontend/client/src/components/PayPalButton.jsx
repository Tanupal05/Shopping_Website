import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";

function PayPalButton() {
  return (
    <PayPalButtons
      createOrder={async (data, actions) => {
        const res = await axios.post("/create-order");
        return res.data.id;
      }}
      onApprove={async (data, actions) => {
        const res = await axios.post("/capture-order", {
          orderID: data.orderID,
        });
        console.log("Order captured:", res.data);
      }}
      onError={(err) => console.error("PayPal Checkout onError", err)}
    />
  );
}

export default PayPalButton;
