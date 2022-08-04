import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";
import logo from "../../img/allstars.png";

export default function Nav() {
  
  const [isMobile, setIsMobile] = useState(false);
  //console.log(isMobile);







  
  return (
    <div className='nav-container'>
       
       <div className='logo-container'>
          <img className='img-logo' src={logo} />
       </div>


       <div className= 'nav-link-container'>
          <ul className= { isMobile ? 'nav-link-mobile-ul' : 'nav-link-ul'}> 


          <div className= { isMobile ? 'inside-mobile-ul' : 'inside-ul'} >
            
           <div className= { isMobile ? 'hold-logo' : 'inside-ul-hold-logo'} >
             <h3>Logo</h3>
             <button onClick={ () => setIsMobile(!isMobile) }><i className="fa-solid fa-xmark"></i></button>
           </div>

            <li> < Link to="/">{ isMobile ? <><i class="fa-solid fa-house"></i><p>Home</p></>: <p>Home</p> }</Link></li>
            <li> < Link to="/partners" >{ isMobile ? <><i class="fa-solid fa-handshake"></i><p>Partners</p></>: <p>Partners</p> }</Link> </li>
            <li> < Link to='/about'>{ isMobile ? <><i class="fa-solid fa-handshake"></i><p>About us</p></>: <p>About us</p> }</Link></li>
            <li> < Link to='/buying'>{ isMobile ? <><i class="fa-solid fa-cart-shopping"></i><p>Buying BAS</p></>: <p>Buying BAS</p> }</Link></li>
            <div className='btn-connect' href="connect-wallet">connect wallet</div>



          </div>


          </ul>
       </div>

       <button onClick={ () => setIsMobile(!isMobile) } className={isMobile ? "no-display" : "display"}>
       <i className="fa-solid fa-bars"></i>
        </button>


    </div>
  )
}
