function Checkout({ cart, onPlaceOrder }) {
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  function handleSubmit(event) {
    event.preventDefault();
    onPlaceOrder();
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <h2>Order Summary</h2>
      <p>Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}</p>
      <h3>Total Amount: ₹{totalPrice}</h3>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Delivery Address" required />
        <input type="tel" placeholder="Phone Number" required />

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;