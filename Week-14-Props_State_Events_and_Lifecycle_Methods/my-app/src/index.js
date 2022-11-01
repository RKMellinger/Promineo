import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import NavbarLink from './components/Navbar';
import App from './App';
import Login from './components/Login';
import Validate from './context/Validate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<div>
      <NavbarLink />
</div>

<App/>
</>
);


