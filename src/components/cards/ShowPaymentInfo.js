import React from "react";

const ShowPaymentInfo = ({ order, showStatus = true }) => (
  <div>
    <p>
      <span>Order Id: {order.paymentIntent.id}</span>
      {" / "}
      <span>
        Amount:{" / "}
        {(order.paymentIntent.amount /= 100).toLocaleString("en-US", {
          style: "currency",
          currency: "INR",
        })}
      </span>
      {" / "}
      <span>Currency: {order.paymentIntent.currency.toUpperCase()}</span>
      {" / "}
      <span>Method: {order.paymentIntent.payment_method_types[0]}</span>
      {" / "}
      <span>Payment: {order.paymentIntent.status.toUpperCase()}</span>
      {" / "}
      <span>
        Orderd on:{" / "}
        {new Date(order.createdAt).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}      </span>
      {" / "}
      <span>
        Customer: {order.orderdName}, {order.orderdAddress}, {order.orderdUnit}, {order.orderdZip}, {order.orderdNumber}
      </span>
      {" / "}
      <br />
      {showStatus && (
        <span className="text-white">
          STATUS: {order.orderStatus}
        </span>
      )}
      
    </p>
  </div>
);

export default ShowPaymentInfo;
