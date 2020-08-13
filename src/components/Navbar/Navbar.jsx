import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';



const Navbar=()=>{
    return (<>
     <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-sm-10 mx-auto'>

                
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/coronalive'>CORONA METER</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact activeClassName='active_nav' className="nav-link"  to='/coronalive'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName='active_nav' className="nav-link" to="/statistics">Statistics</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName='active_nav' className="nav-link" to="/graph">Graph</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
</div>
            </div>
        </div>
    </>);
}
export default Navbar;