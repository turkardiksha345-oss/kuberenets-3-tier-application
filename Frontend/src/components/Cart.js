const API = "http://localhost:5000";

function Cart({ cart }) {

  const placeOrder = async () => {
    await fetch(`${API}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ items: cart })
    });

    alert("Order Placed!");
  };

  return (
    <div className="cart">
      <h2>🛒 Your Order</h2>

      {cart.map((item, i) => (
        <p key={i}>{item.name} - ₹{item.price}</p>
      ))}

      {cart.length > 0 && (
        <button onClick={placeOrder}>Place Order</button>
      )}
    </div>
  );
}

export default Cart;