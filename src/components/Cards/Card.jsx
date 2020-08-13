import React from 'react';
import CountUp from 'react-countup';
import './Card.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';




const Cards =(props)=>{
    
    return(
        <>
        <div class="card" style={{width: '18rem'}}>
  <img src={props.head} class="card-img-top" alt="..."/>
  <div class="card-body">
  
    <h5 class="card-title"><CountUp start={0} end={props.case} duration='4' separator=','></CountUp></h5>
    <p class="card-text">{props.title}</p>
    <h3>{new Date(props.date).toDateString()}</h3>
  </div>
</div>
        </>
    );
}
export default Cards;