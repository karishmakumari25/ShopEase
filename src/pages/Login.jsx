
function Login({ onLogin }) {
  function handleSubmit(event) {
    event.preventDefault();
    onLogin();
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome Back!</h1>
        <p>Please login to continue</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
