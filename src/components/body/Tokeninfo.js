import React, { useEffect, useState, useRef } from 'react';
import "./tokeninfo.css";
import Typography from '@mui/material/Typography';
import Astronaut from "../../img/Astronaut.png";
import World from "../../img/Worldmain.png";


export default function Tokeninfo(props) {

  
  const [currentChain, chooseChain] = useState(true);
  const [showchainInfo, changeshowchainInfo] = useState(true)
  //ref
  const myRef = useRef(null);

  //console.log(props)
  //console.log(getDirection +" before switchInfo");
  //console.log("directionInfo is  "+directionInfo)
  //console.log(Object.keys(props.eachData).length);
  //console.log(props.changeTokenView)
  


  
  const switchInfo = (props) => {
    changeshowchainInfo(false);
    //props.changeDirection(true)
    //console.log(props.getDirection +" after switchInfo");
  }
  
  

  const switchChain = (data) => {
    props.switchChainView(data)
    if(data === "bnb"){
      chooseChain(true);
      props.setTheOutside(false);
    } else {
      chooseChain(false);
      props.setTheOutside(false);
    }
  }

  const clearView = () => {
    props.setClicked(false);
    props.setTheOutside(false);
  }


  useEffect(() => {

    const handleClickOutside = (event) => {
      //console.log(myRef);
     if(myRef.current === null){
  
    } else if( Object.keys(myRef).length !== 0 ) {
    
     // console.log("In here");
      if (!myRef.current.contains(event.target)) {
          clearView()
         //console.log("called outside click");
      }
  
    }
  
  
  
    };
    
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);



  })

  return (
    <div className={ props.changeTokenView === "bnb" ? 'tokeninfo-containertwo' : 'tokeninfo-container' } 
    ref={myRef} >


 
       { props.changeTokenView === "bnb"
       ?
        (
          <div className='info'>
            
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
               <img className='img-other' src={Astronaut} alt='astronut' />
               <div>
                  <Typography variant="caption" display="block" gutterBottom>
                    About us
                  </Typography>
                </div>
            </div>


            <div className='main-content' onClick={()=> switchChain("bnb")} >
               <img className='img-other' src={World} alt='astronut' />
                  <Typography variant="caption" display="block" gutterBottom>
                    Projects
                  </Typography>
            </div>


            <div className='main-content'>
               <img className='img-other' src={Astronaut} alt='astronut' />
               <div>
                  <Typography variant="caption" display="block" gutterBottom>
                    more
                  </Typography>
                </div>
            </div>




          </div>
       )
      }
      
     



    </div>
  )
}
