import React from 'react';

import './styles.css';
import logo from '../assets/logo.svg'

function Init(){
    return(
        <div className="init-container">
            <img src={logo} alt="logo"/>
        </div>
    );
}

export default Init;