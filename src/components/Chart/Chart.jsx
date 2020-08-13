import React, { useState, useEffect } from 'react';
import {fetchdailydata} from '../../api';
import {Line ,Bar} from 'react-chartjs-2';
import './../Chart/Chart.css'
const Chart=()=>{
    const [dailydata, setdailydata]=useState([]);
    useEffect(()=>{
        const fetchapi = async ()=>{
            setdailydata(await fetchdailydata());
        }
        fetchapi();
        
    });
    const lineChart=(
        dailydata.length ?( <Line data={{
            labels: dailydata.map(({ date })=> date ),
            datasets:[{
                data: dailydata.map(({confirmed})=> confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
                },{
                 data: dailydata.map(({ deaths })=> deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0,0,0.5)',
                fill: true,

                }],
        }}/>): null
    );
    return(
        <>
        <div className='container-fluid nav_bg'>
    <div className ='row'>
    <div className='col-10 mx-auto'>
           {lineChart}
        </div>
        </div>
        </div>
        </>
    );
}
export default Chart;