
function UserDetails() {
  const user = {
    name: "Karishma Kumari",
    email: "karishma@example.com",
    phone: "9876543210",
    address: "Pune, Maharashtra"
  };

  return (
    <div className="user-details">
      <h1>User Details</h1>

      <div className="user-card">
        <h2>{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>
    </div>
  );
}

export default UserDetails;
