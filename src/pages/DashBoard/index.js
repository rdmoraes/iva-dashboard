import React from 'react'
import LineGraph from '../../components/LineGraph'
import {FiRefreshCcw} from 'react-icons/fi'

import logoText from '../../assets/logoText.svg'
import iotApi from '../../services/iotAPI'

import './styles.css';

function DashBoard(){

    async function handleTakeSampleButton(e){
        
        try{
            const response = await iotApi.post('publish',{"command": "takeSample"});

            console.log(response.data.status);
        }catch(err){
            alert('IoT device connection fail!');
        }

    }

    return(
        <div className="dashboard-container">
            <header>
                <img src={logoText} alt="iVA-Logo"/>
                <span> Data Analyses</span>
                <button 
                    className="button" 
                    onClick={handleTakeSampleButton}>
                        New data sample
                </button>
                <button 
                    className="button-refresh" 
                    type="button">
                    <FiRefreshCcw size={18} color="#2090db75" />
                </button>
            </header>
            <ul className="graph-container">
                <li>
                    <strong>Time Domain (X - axis) </strong>
                    <LineGraph/> 
                </li>
                <li>
                    <strong>Frequency Domain (X - axis) </strong>
                    <LineGraph/> 
                </li>
                <li>
                    <strong>Time Domain (Y - axis) </strong>
                    <LineGraph/> 
                </li>
                <li>
                    <strong>Frequency Domain (Y - axis) </strong>
                    <LineGraph/> 
                </li>
                <li>
                    <strong>Time Domain (Z - axis) </strong>
                    <LineGraph/> 
                </li>
                <li>
                    <strong>Frequency Domain (Z - axis) </strong>
                    <LineGraph/> 
                </li>
                                
            </ul>
        </div>
    );
}

export default DashBoard;