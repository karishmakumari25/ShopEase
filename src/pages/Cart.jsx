
function Cart({ cart, onRemove, onIncrease, onDecrease, onCheckout }) {
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>My Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>Your Cart is Empty!</h2>
      ) : (
        <>
          {cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <h2>{product.image}</h2>

              <div>
                <h3>{product.name}</h3>
                <p>Price: ₹{product.price}</p>

                <button onClick={() => onDecrease(product.id)}>
                  -
                </button>

                <span> {product.quantity} </span>

                <button onClick={() => onIncrease(product.id)}>
                  +
                </button>

                <button onClick={() => onRemove(product.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2>Total Price: ₹{totalPrice}</h2>

          <button onClick={onCheckout}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
