// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'space-around' }}>
        <li><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
        <li><Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link></li>
        <li><Link to="/services" style={{ textDecoration: 'none', color: 'black' }}>Services</Link></li>
        <li><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
