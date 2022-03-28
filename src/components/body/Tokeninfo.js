import React, { useEffect, useState } from 'react'
import "./tokeninfo.css"

export default function Tokeninfo(props) {


  const [currentChain, chooseChain] = useState(true);
  console.log(props)
  //console.log(props.changeTokenView)
  


  
  
  

  const switchChain = (data) => {
    props.switchChainView(data)
    if(data === "bnb"){
      chooseChain(true)
    } else {
      chooseChain(false)
    }
    //console.log(data+ " for child");
    //console.log("clicked")
  }

  return (
    <div className='tokeninfo-container'>

      <div className='choose-chain'>

        <button onClick={()=> switchChain("eth")} className={ currentChain === false ? "eth" : "non-eth " }  > ETHEREUM </button>

        <button onClick={()=> switchChain("bnb")} className={ currentChain === true ? "bnb" : "non-bnb" } > BINANCE </button>


      </div>
 
       { props.changeTokenView === "bnb"
       ?(
            <div className='info'>


            <div className='head-info'>
              
            <h5>{props.eachData.tokenName}</h5>

            <div className='detail-info'>
              <div className='detail-info-info'><p>votes</p>    <p>{props.eachData.votes}</p></div>
              <div className='detail-info-info'><p>MC</p>    <p>$ {props.eachData.MC}</p></div>
            </div>

            </div>


            <div className='text-info'>
              <p> {props.eachData.tokenDescription} </p>
            </div>

            <a className='vote-button' href='vote'> vote </a>
            
        </div>
       ) 
      : props.changeTokenView === "eth" 

      ? (

        <div className='info-eth'>

            <div className='text-info-eth'>
              <h3> COMING SOON </h3>
            </div>

            
        </div>
        
      )

      :

      (
         <div className='main-info'>

            <div className='main-content'>
               <div className='help'>NEED HELP TO LAUNCH YOUR PROJECT ?</div>
               <div><button className='contact-button'>Contact Us</button></div>
            </div>

          </div>
       )
      }
      
     



    </div>
  )
}
