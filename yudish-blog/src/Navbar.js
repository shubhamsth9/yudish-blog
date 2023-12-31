import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className = "navbar">
            <h1>Essays by Yudish</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create Essay</Link>
            </div>
        </nav>
    );
}

export default Navbar;