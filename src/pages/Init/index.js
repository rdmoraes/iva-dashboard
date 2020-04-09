import React from 'react';

import './styles.css';
import logo from '../../assets/logo.svg'

function Init(){
    return(
        <div className="main-container">
            
            <img src={logo} alt="logo"/>
            <div className="footer"> HEy</div>
        </div>
        
    );
}

export default Init;