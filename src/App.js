import React from 'react';
import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent.js'

function App() {
  return (
    <div className="App">
        <Navbar  dark color="primary">
          <div className="Container">
              <NavbarBrand href="/">Restaurant</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
    </div>
  );
}

export default App;
