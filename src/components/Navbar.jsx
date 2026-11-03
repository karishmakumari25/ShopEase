
function Navbar({ onNavigate, cartCount }) {
  return (
    <nav className="navbar">
      <h2 className="logo">ShopEase</h2>

      <ul className="nav-links">
        <li onClick={() => onNavigate('home')}>
          Home
        </li>

        <li onClick={() => onNavigate('home')}>
          Products
        </li>

        <li onClick={() => onNavigate('userDetails')}>
          User Details
        </li>

        <li onClick={() => onNavigate('cart')}>
          Cart ({cartCount})
        </li>

        <li onClick={() => onNavigate('wishlist')}>
          ❤️ Wishlist
        </li>

        <li onClick={() => onNavigate('login')}>
          Login
        </li>

        <li onClick={() => onNavigate('signup')}>
          Signup
        </li>

        <li onClick={() => onNavigate('dashboard')}>
          Dashboard
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
