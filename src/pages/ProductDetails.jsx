import { useState } from 'react';

function ProductDetails({
  product,
  onBack,
  onAddToCart,
  onAddToWishlist
}) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (rating === 0) {
      alert('Please select a rating!');
      return;
    }

    const newReview = {
      id: Date.now(),
      rating: rating,
      comment: review
    };

    setReviews((previousReviews) => [
      ...previousReviews,
      newReview
    ]);

    setRating(0);
    setReview('');
    alert('Review submitted successfully!');
  }

  return (
    <div className="product-details">
      <div className="details-image">
        {product.image}
      </div>

      <div className="details-info">
        <h1>{product.name}</h1>
        <h2>₹{product.price}</h2>

        <p>
          This is a high quality product.
          Perfect for your daily use.
        </p>

        <button onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>

        <button onClick={() => onAddToWishlist(product)}>
          ❤️ Add to Wishlist
        </button>

        <button onClick={onBack}>
          Back to Products
        </button>

        <hr />

        <h2>Customer Reviews</h2>

        <form onSubmit={handleSubmit}>
          <p>Give your Rating:</p>

          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                style={{
                  color: star <= rating ? 'orange' : 'gray',
                  cursor: 'pointer',
                  fontSize: '30px'
                }}
              >
                ★
              </span>
            ))}
          </div>

          <textarea
            placeholder="Write your review..."
            value={review}
            onChange={(event) => setReview(event.target.value)}
            required
          />

          <button type="submit">
            Submit Review
          </button>
        </form>

        <div className="review-list">
          {reviews.map((item) => (
            <div key={item.id} className="review-item">
              <p>
                Rating: {'★'.repeat(item.rating)}
              </p>
              <p>{item.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;