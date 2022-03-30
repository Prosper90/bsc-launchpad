import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./nav.css"

export default function Nav() {
  
  const [isMobile, setIsMobile] = useState(false);
  //console.log(isMobile);







  
  return (
    <div className='nav-container'>
       
       <div className='logo-container'>
        <h2>LOGO</h2>
       </div>


       <div className= 'nav-link-container'>
          <ul className= { isMobile ? 'nav-link-mobile-ul' : 'nav-link-ul'}> 


          <div className= { isMobile ? 'inside-mobile-ul' : 'inside-ul'} >
            
           <div className= { isMobile ? 'hold-logo' : 'inside-ul-hold-logo'} >
             <h3>Logo</h3>
             <button onClick={ () => setIsMobile(!isMobile) }><i className="fa-solid fa-xmark"></i></button>
           </div>

            <li> < Link to="/">Home</Link></li>
            <li> < Link to="/pool" >Pool</Link> </li>
            <li> < Link to='/staking'>Staking</Link></li>
            <li> < Link to='/buying'>Buying BAS</Link></li>
            <div className='btn-connect' href="connect-wallet">connect wallet</div>



          </div>


          </ul>
       </div>

       <button onClick={ () => setIsMobile(!isMobile) }><i className="fa-solid fa-bars"></i> </button>


    </div>
  )
}
