import './App.css';
import * as React from 'react'
import {Navbar, NavbarBrand} from "reactstrap";

function App() {
    return (
        <div className="App">
            <Navbar color="light" light expand="lg" container="sm">
                <NavbarBrand>
                    Skin disease detection app
                </NavbarBrand>
            </Navbar>
        </div>
    );
}

export default App;
