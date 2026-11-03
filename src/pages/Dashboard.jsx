
function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome to Dashboard</h1>

      <div className="dashboard-container">
        <div className="dashboard-card">
          <h2>My Profile</h2>
          <p>View your personal details.</p>
        </div>

        <div className="dashboard-card">
          <h2>My Orders</h2>
          <p>Check your shopping orders.</p>
        </div>

        <div className="dashboard-card">
          <h2>My Account</h2>
          <p>Manage your account details.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
