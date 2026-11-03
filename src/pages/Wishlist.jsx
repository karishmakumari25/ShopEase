
function Wishlist({ wishlist, onRemove, onAddToCart }) {
  return (
    <div className="wishlist-page">
      <h1>My Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <h2>Your Wishlist is Empty!</h2>
      ) : (
        <div className="product-container">
          {wishlist.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                {product.image}
              </div>

              <h3>{product.name}</h3>
              <p>₹{product.price}</p>

              <button onClick={() => onAddToCart(product)}>
                Add to Cart
              </button>

              <button onClick={() => onRemove(product.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
