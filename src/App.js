import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Card';
import Chart from './components/Chart/Chart';
import Countrypicker from './components/Countrypicker/Countrypicker';
import {fetchData} from './api';
import infect from './image/infected.jpg';
import deat from './image/death.jpg';
import recov from './image/recovered.jpg';
import Navbar from './components/Navbar/Navbar';
import {Switch ,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const App =()=> {
  const [value,setvalue]=useState();
  const [death,setdeath]=useState();
  const [recover,setrecover]=useState();
  const [confirm,setconfirm]=useState();
  const [last,setlast]=useState();
  useEffect(()=>{
    fetchData(value).then((value)=>{
      setconfirm(value.confirm);
      setdeath(value.death);
      setrecover(value.recover);
      setlast(value.lastUpdate);
    })
  
  });
  const setdata=(event)=>{
    setvalue(event.target.value);
  
    
    
}
 
  return (
    <>
    <Navbar/>
    
    <Switch>
      <Route exact path='/coronalive' component={Home}></Route>
      <Route exact path='/statistics' component={()=>{return(
        <>
        <div className='container-fluid nav_bg mt-3'>
        <div className='row'>
        <div className='col-10 mx-auto mb-4'>
        <div className='picker d-flex justify-content-center'>
        <Countrypicker setdata={setdata} value={value}/>
        <br></br>
        <br></br>
        </div>
        <div className='row'>
        <div className='col-3 mx-auto '>
        <Cards title='Infected' case={confirm} date={last} head={infect} />
        </div>
        <div className='col-3 mx-auto'>
    <Cards title='Death' case={death} date={last} head={deat} /> 
    </div>
    <div className='col-3 mx-auto'>
    <Cards title='Recovered' case={recover} date={last} head={recov}/>
    </div>
    </div>
    </div>
        </div>
        </div>
      </>)}}></Route>

       <Route exact path='/graph' component={Chart}></Route>
    </Switch>
    
  
    
    </>
    
  );
}


export default App;
