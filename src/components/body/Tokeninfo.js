import React, { useEffect, useState } from 'react'
import "./tokeninfo.css"

export default function Tokeninfo(props) {


  const [currentChain, chooseChain] = useState(true);
  const [showchainInfo, changeshowchainInfo] = useState(true)
  

  //console.log(props)
  //console.log(getDirection +" before switchInfo");
  //console.log("directionInfo is  "+directionInfo)
  //console.log(Object.keys(props.eachData).length);
  //console.log(props.changeTokenView)
  


  
  const switchInfo = () => {
    changeshowchainInfo(false);
    //props.changeDirection(true)
    //console.log(props.getDirection +" after switchInfo");
  }
  
  

  const switchChain = (data) => {
    props.switchChainView(data)
    if(data === "bnb"){
      chooseChain(true)
    } else {
      chooseChain(false)
    }
  }

  return (
    <div className='tokeninfo-container'>


      
      { showchainInfo
      ?(
        <button onClick={switchInfo} className='make-chainchoice-button'>
        choose chain
        </button>
      )
      :
      (
        <div className='choose-chain'>
          <button onClick={()=> switchChain("eth")} className={ currentChain === false ? "eth" : "non-eth " }  > ETHEREUM </button>

          <button onClick={()=> switchChain("bnb")} className={ currentChain === true ? "bnb" : "non-bnb" } > BINANCE </button>
        </div>
      )
      }
     


 
       { props.changeTokenView === "bnb"
       ?(
            <div className='info'>

            {props.getDirection 
            ?(
            
              <div className='direct'>
                click on the project planet to get more info
              </div>

            )
            :
            (
              <>
              <div className='head-info'>
              
              <h5>{props.eachData.tokenName}</h5>
  
              <div className='detail-info'>
                <div className='detail-info-info'><p>votes</p><p>{props.eachData.votes}</p></div>
                <div className='detail-info-info'><p>MC</p><p>$ {props.eachData.MC}</p></div>
              </div>
  
              </div>
  
              
              <div className='text-info'>
                {props.eachData.tokenDescription}
              </div>
              
   
              <a className='vote-button' href='vote'> vote </a>
              </>

            )}
   
     
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
