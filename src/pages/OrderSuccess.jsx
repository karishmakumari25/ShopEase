
function OrderSuccess({ onContinueShopping }) {
  return (
    <div className="order-success">
      <h1>🎉 Order Placed Successfully!</h1>
      <p>Thank you for shopping with ShopEase.</p>
      <p>Your order has been confirmed.</p>

      <button onClick={onContinueShopping}>
        Continue Shopping
      </button>
    </div>
  );
}

export default OrderSuccess;
