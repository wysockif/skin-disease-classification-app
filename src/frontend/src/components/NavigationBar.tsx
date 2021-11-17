import React from 'react';
import {Navbar} from "reactstrap";

function NavigationBar() {
    return (
        <Navbar color="dark" dark container="fluid">
            <div className="text-center col-12">
                <h3 className="text-light">Skin disease detection app</h3>
            </div>
        </Navbar>
    );
}

export default NavigationBar;