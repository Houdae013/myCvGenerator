import React from 'react';
import './Header.css';
const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#photo">Image de démonstration</a></li>
          <li><a href="#buttons">Menu</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
