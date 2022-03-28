import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./nav.css"

export default function Nav() {
  
  const [isMobile, setIsMobile] = useState(false);
  console.log(isMobile);

  return (
    <div className='nav-container'>
       
       <div className='logo-container'>
        <h2>LOGO</h2>
       </div>


       <div className= 'nav-link-container'>
          <ul className= { isMobile ? 'nav-link-mobile-ul' : 'nav-link-ul'}> 
          <button onClick={ () => setIsMobile(!isMobile) }><i className="fa-solid fa-xmark"></i></button>
            
            <li> < Link to="/">Home</Link></li>
            <li> < Link to="/pool" >Pool</Link> </li>
            <li> < Link to='/staking'>Staking</Link></li>
            <li> < Link to='/buying'>Buying BAS</Link></li>
            <div className='btn-connect' href="connect-wallet">connect wallet</div>


          </ul>
       </div>

       <button onClick={ () => setIsMobile(!isMobile) }><i className="fa-solid fa-bars"></i> </button>


    </div>
  )
}
