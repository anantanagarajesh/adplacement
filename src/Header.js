import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <nav>
        <ul>
          <li><Link to="/" className="btn btn-primary">Home</Link></li>
          <li><Link to="/programs" className="btn btn-primary">Programs</Link></li>
          <li><Link to="/contact" className="btn btn-primary">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
