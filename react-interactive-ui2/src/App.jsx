import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
    return <h2>Welcome to Online Book Store 📚</h2>;
}

function Books() {
    return (
        <div>
            <h2>Available Books</h2>
            <p>JavaScript - ₹300</p>
            <p>React - ₹400</p>
            <p>Python - ₹350</p>
        </div>
    );
}

function About() {
    return <h2>We provide programming books for students.</h2>;
}

function App() {
    return (
        <BrowserRouter>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/books">Books</Link>
                <Link to="/about">About</Link>
            </nav>

            <div className="container">

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/about" element={<About />} />
                </Routes>

            </div>

        </BrowserRouter>
    );
}

export default App;
