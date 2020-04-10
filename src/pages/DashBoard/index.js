import React from 'react'
import LineGraph from '../../components/LineGraph'

import './styles.css';

function DashBoard(){
    return(
        <div>
            <LineGraph/>
            <LineGraph/>
        </div>
    );
}

export default DashBoard;