import React, { useEffect, useState, useRef } from 'react';
import "./tokeninfo.css";
import Typography from '@mui/material/Typography';
import Astronaut from "../../img/Astronaut.png";
import Padding from "../../img/basetwo.png";
import World from "../../img/Worldmain.png";
import styled from "styled-components";
import axios from "axios";




const Head = styled.div`
display: flex;
margin-top: 10px;
justify-content: space-evenly;
align-items: center;
width: 85%;
background-image: url(${({ imgurl  }) => imgurl });
background-repeat: no-repeat;
background-position: center;
background-size: cover;
padding: 5px;
position: relative;
`;

export default function Tokeninfo(props) {

  
  const [currentChain, chooseChain] = useState(true);
  const [showchainInfo, changeshowchainInfo] = useState(true);
  const [trending, setTrending] = useState([]);
  //ref
  const myRef = useRef(null);

  //console.log(props)
  //console.log(getDirection +" before switchInfo");
  //console.log("directionInfo is  "+directionInfo)
  //console.log(Object.keys(props.eachData).length);
  //console.log(props.changeTokenView)
  


  
  

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



  const voteToken = async (data) => {
                 //make a call to the database and save the new token
       //save the amount transfered to the database
       const vote = await fetch(`https://bscapp-backend.herokuapp.com/vote`, 
       {
         method: 'POST',   
          headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            id: data, 
         })
      }
      );
      const checkvote = await vote.json();
      console.log(checkvote);
  }


  useEffect(() => {



    const getTrending = async () => {
      //make a call to the database and get all tokens available

      const res = await axios.get(`https://bscapp-backend.herokuapp.com/trending`);

      console.log(res.data);

      setTrending(res.data);
  
    }



    getTrending();






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



  }, [])

  return (
    <div className={ props.changeTokenView === "bnb" ? 'tokeninfo-containertwo' : 'tokeninfo-container' } 
    ref={ props.changeTokenView === "bnb" ? myRef : null } >


 
       { props.changeTokenView === "bnb"
       ?
        (
        <div className='info'>
            
   
          <Head imgurl={props.eachData.imgUrl} >
               <div className="img-overlay"></div>
              <h4 style={{ zIndex: "1" }}>{props.eachData.tokenName}</h4>
  
              <div className='detail-info'>
                <div className='detail-info-info'><p>votes</p><p>{props.eachData.votes}</p></div>
                <div className='detail-info-info'><p>MC</p><p> $3000 </p></div>
              </div>
  
          </Head>
  
              
              <div className='text-info'>
                {props.eachData.tokenDescription}
              </div>
              
   
              <div className='vote-button' onClick={ ()=> voteToken(props.eachData._id)}> vote </div>


                
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
               <div className='contain-trendinfo'>
                 {trending.length == 0 ?
                   <h5>Nothing here</h5>
                 :

                     trending.map((data, index) => {
                      console.log(data);
                    if(index !== 2){
                      return(
                      <div className='main-trendContain'>
                        <h5>{data.tokenName}</h5>
                        <div>{data.votes}</div>
                      </div>
                      )
                    }


                  }) 
                 
                 }


               </div>
               <img className='img-other' src={Padding} alt='astronut' />
               <div>
                  <Typography  variant="caption" display="block" gutterBottom>
                    Trending
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
