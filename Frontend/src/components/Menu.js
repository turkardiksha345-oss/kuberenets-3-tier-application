import menu from "../data/menu";

function Menu({ addToCart }) {
  return (
    <div className="menu">
      <h2>🍽️ Our Menu</h2>
      <div className="grid">
        {menu.map((item, i) => (
          <div className="card" key={i}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Menu;