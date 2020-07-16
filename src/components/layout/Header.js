import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>React Todo App</h1>
      <Link to="/" style={linkStyle}>
        Home
      </Link>{' '}
      |{' '}
      <Link to="/about" style={linkStyle}>
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: 'MediumSeaGreen',
  color: 'black',
  textAlign: 'center',
  padding: '10px',
  fontSize: '13',
  marginBottom: '10px'
};

const linkStyle = {
  color: '#fff'
};
