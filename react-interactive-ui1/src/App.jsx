import { useState } from "react";
import "./App.css";

function Food({ name, price, add }) {
    return (
        <div className="food">
            <h2>{name}</h2>
            <p>₹{price}</p>
            <button onClick={() => add(name, price)}>
                Add
            </button>
        </div>
    );
}

function App() {

    const [cart, setCart] = useState([]);

    function add(name, price) {
        setCart([...cart, { name, price }]);
    }

    function clearCart() {
        setCart([]);
    }

    let total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="container">

            <h1>🍔 Food Ordering App</h1>

            <div className="menu">

                <Food name="Pizza" price={250} add={add} />
                <Food name="Burger" price={150} add={add} />
                <Food name="Biryani" price={200} add={add} />

            </div>

            <h2>Cart</h2>

            {cart.map((item, index) => (
                <p key={index}>
                    {item.name} - ₹{item.price}
                </p>
            ))}

            <h3>Total: ₹{total}</h3>

            <button onClick={clearCart}>
                Clear Cart
            </button>

        </div>
    );
}

export default App;