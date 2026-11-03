function ProductCard({
  product,
  onViewDetails,
  onAddToCart,
  onAddToWishlist
}) {
  return (
    <div className="product-card">

      <div className="product-image">
        {product.image}
      </div>

      <h3>{product.name}</h3>

      <p className="price">₹{product.price}</p>

      <button onClick={() => onViewDetails(product)}>
        View Details
      </button>

      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>

      <button onClick={() => onAddToWishlist(product)}>
        ❤️ Add to Wishlist
      </button>

    </div>
  );
}

export default ProductCard;