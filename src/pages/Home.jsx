
import { useState } from 'react';
import ProductCard from '../components/ProductCard';

function Home({
  onViewDetails,
  onAddToCart,
  onAddToWishlist
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    { id: 1, name: 'Wireless Headphones', price: 1499, image: '🎧', category: 'Electronics' },
    { id: 2, name: 'Smart Watch', price: 2499, image: '⌚', category: 'Electronics' },
    { id: 3, name: 'Bluetooth Speaker', price: 1299, image: '🔊', category: 'Electronics' },
    { id: 4, name: 'Laptop', price: 45999, image: '💻', category: 'Electronics' },
    { id: 5, name: 'Smartphone', price: 15999, image: '📱', category: 'Electronics' },
    { id: 6, name: 'Digital Camera', price: 12999, image: '📷', category: 'Electronics' },

    { id: 7, name: 'Running Shoes', price: 1999, image: '👟', category: 'Shoes' },
    { id: 8, name: 'Sports Shoes', price: 2499, image: '🥾', category: 'Shoes' },
    { id: 9, name: 'Casual Sneakers', price: 1799, image: '👞', category: 'Shoes' },

    { id: 10, name: 'Backpack', price: 999, image: '🎒', category: 'Accessories' },
    { id: 11, name: 'Sunglasses', price: 799, image: '🕶️', category: 'Accessories' },
    { id: 12, name: 'Wrist Watch', price: 1899, image: '⌚', category: 'Accessories' },
    { id: 13, name: 'Handbag', price: 1499, image: '👜', category: 'Accessories' },

    { id: 14, name: 'T-Shirt', price: 599, image: '👕', category: 'Fashion' },
    { id: 15, name: 'Denim Jeans', price: 1299, image: '👖', category: 'Fashion' },
    { id: 16, name: 'Women Dress', price: 1599, image: '👗', category: 'Fashion' },
    { id: 17, name: 'Jacket', price: 2199, image: '🧥', category: 'Fashion' },

    { id: 18, name: 'Coffee Maker', price: 2999, image: '☕', category: 'Home & Kitchen' },
    { id: 19, name: 'Table Lamp', price: 899, image: '💡', category: 'Home & Kitchen' },
    { id: 20, name: 'Water Bottle', price: 499, image: '🧴', category: 'Home & Kitchen' },

    { id: 21, name: 'Face Cream', price: 399, image: '🧴', category: 'Beauty' },
    { id: 22, name: 'Perfume', price: 999, image: '🌸', category: 'Beauty' },
    { id: 23, name: 'Makeup Kit', price: 1299, image: '💄', category: 'Beauty' },
    { id: 24, name: 'Hair Dryer', price: 1599, image: '💇', category: 'Beauty' }
  ];

  const categories = [
    'All',
    'Electronics',
    'Fashion',
    'Shoes',
    'Accessories',
    'Home & Kitchen',
    'Beauty'
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesPrice =
      maxPrice === 'all' || product.price <= Number(maxPrice);

    const matchesCategory =
      selectedCategory === 'All' ||
      product.category === selectedCategory;

    return matchesSearch && matchesPrice && matchesCategory;
  });

  return (
    <div className="home">
      <h1>Welcome to ShopEase 🛍️</h1>
      <p>Discover amazing products at great prices.</p>

      <h2>Shop by Category</h2>

      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category ? 'active-category' : ''
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <h2>Explore Our Products</h2>

      <div className="search-filter">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <select
          value={maxPrice}
          onChange={(event) => setMaxPrice(event.target.value)}
        >
          <option value="all">All Prices</option>
          <option value="1000">Under ₹1000</option>
          <option value="1500">Under ₹1500</option>
          <option value="2000">Under ₹2000</option>
          <option value="3000">Under ₹3000</option>
          <option value="5000">Under ₹5000</option>
        </select>
      </div>

      <p>Showing {filteredProducts.length} products</p>

      <div className="product-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
              onAddToCart={onAddToCart}
              onAddToWishlist={onAddToWishlist}
            />
          ))
        ) : (
          <h2>No products found!</h2>
        )}
      </div>
    </div>
  );
}

export default Home;
