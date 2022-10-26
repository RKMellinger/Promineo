import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarLink from './components/navbarlink';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container >
      <NavbarLink />
    </Container>
    <App />
  </React.StrictMode>
);

{/* Boiler plate script from the create-react-app and the links to the associated process created in the other pages. */}