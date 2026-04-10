function Navbar({ cartCount }) {
  return (
    <div className="navbar">
      <h2>☕ Cafe Daisy </h2>
      <p>🛒 Cart: {cartCount}</p>
    </div>
  );
}
export default Navbar;