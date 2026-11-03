
function Signup({ onSignup }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSignup();
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Create Account</h1>
        <p>Join ShopEase today!</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            required
          />

          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <input
            type="password"
            placeholder="Create password"
            required
            minLength="6"
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
