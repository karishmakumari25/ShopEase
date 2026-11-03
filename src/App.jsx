
import { useState } from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import UserDetails from './pages/UserDetails';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import Wishlist from './pages/Wishlist';

import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleViewDetails(product) {
    setSelectedProduct(product);
    setPage('details');
  }

  function handleAddToCart(product) {
    setCart((previousCart) => {
      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return previousCart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            };
          }

          return item;
        });
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });

    alert('Product added to cart!');
  }

  function handleAddToWishlist(product) {
    setWishlist((previousWishlist) => {
      const alreadyExists = previousWishlist.some(
        (item) => item.id === product.id
      );

      if (alreadyExists) {
        alert('Product is already in Wishlist!');
        return previousWishlist;
      }

      return [...previousWishlist, product];
    });
  }

  function handleRemoveFromWishlist(id) {
    setWishlist((previousWishlist) =>
      previousWishlist.filter((item) => item.id !== id)
    );
  }

  function handleRemove(id) {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  }

  function handleIncrease(id) {
    setCart((previousCart) =>
      previousCart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1
          };
        }

        return item;
      })
    );
  }

  function handleDecrease(id) {
    setCart((previousCart) =>
      previousCart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: Math.max(1, item.quantity - 1)
          };
        }

        return item;
      })
    );
  }

  function handleLogin() {
    setIsLoggedIn(true);
    setPage('dashboard');
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setPage('home');
  }

  function handleNavigation(nextPage) {
    if (nextPage === 'dashboard' && !isLoggedIn) {
      setPage('login');
      return;
    }

    setPage(nextPage);
  }

  function handlePlaceOrder() {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      setPage('cart');
      return;
    }

    setCart([]);
    setPage('success');
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Navbar
        onNavigate={handleNavigation}
        cartCount={cartCount}
      />

      {page === 'home' && (
        <Home
          onViewDetails={handleViewDetails}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />
      )}

      {page === 'details' && (
        <ProductDetails
          product={selectedProduct}
          onBack={() => setPage('home')}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />
      )}

      {page === 'userDetails' && <UserDetails />}

      {page === 'login' && (
        <Login onLogin={handleLogin} />
      )}

      {page === 'signup' && (
        <Signup onSignup={handleLogin} />
      )}

      {page === 'dashboard' && isLoggedIn && (
        <Dashboard onLogout={handleLogout} />
      )}

      {page === 'cart' && (
        <Cart
          cart={cart}
          onRemove={handleRemove}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onCheckout={() => setPage('checkout')}
        />
      )}

      {page === 'checkout' && (
        <Checkout
          cart={cart}
          onPlaceOrder={handlePlaceOrder}
        />
      )}

      {page === 'success' && (
        <OrderSuccess
          onContinueShopping={() => setPage('home')}
        />
      )}

      {page === 'wishlist' && (
        <Wishlist
          wishlist={wishlist}
          onRemove={handleRemoveFromWishlist}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
}

export default App;
