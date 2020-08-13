import React, { useEffect, useState } from 'react';
import {countries} from '../../api';
import {NativeSelect , FormControl} from '@material-ui/core';
import './Countrypicker.css';
const Countrypicker =(props)=>{
    
    
    const [country,setcountry]=useState([]);
    useEffect(()=>{
        const fetchcountries = async()=>{
            setcountry(await countries());
        }
    fetchcountries();
    },[setcountry]);
    
    
    return(
        <>
        <div className='select-op'>
        <FormControl >
            <NativeSelect onChange={props.setdata} value={props.value}>
                <option value='Global'>global</option>
               {country.map((value,index)=> <option value={value} key={index}>{value}</option> )}
            </NativeSelect>
        </FormControl>
        </div>
        
        
        </>
    );
}

export default Countrypicker;