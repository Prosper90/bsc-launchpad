import React, { useState } from 'react'
import "./body.css"
import Tokeninfo from './Tokeninfo'

export default function Body() {

  const TokensDetails = [
    {
      id: 1,
      tokenName: "token1",
      tokenDescription: ` What is Lorem Ipsum? Lorem Ipsum
                          is simply dummy text of the printing
                          and typesetting industry. Lorem 
                          Ipsum has been the industry's standard 
                          dummy text ever since the 1500s, 
                          when an unknown printer took a galley
                          of type and scrambled it to make a 
                          type specimen book. It has survived 
                          not only five centuries, but also the
                          leap into electronic typesetting`,
      chain: "BNB",
      img_url: "img1",
      votes: 30,
      MC: 2500,
    },
    {
      id: 2,
      tokenName: "token12",
      tokenDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quam.",
      chain: "BNB",
      img_url: "img2",
      votes: 300,
      MC: 2000,
    },
    {
      id: 3,
      tokenName: "token3",
      tokenDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quam.",
      chain: "BNB",
      img_url: "img3",
      votes: 20,
      MC: 3000,
    },
    {
      id: 4,
      tokenName: "token4",
      tokenDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quam.",
      chain: "BNB",
      img_url: "img4",
      votes: 15,
      MC: 7000,
    },
    {
      id: 5,
      tokenName: "token5",
      tokenDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quam.",
      chain: "BNB",
      img_url: "img5",
      votes: 70,
      MC: 500,
    },
    {
      id: 6,
      tokenName: "token6",
      tokenDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quam.",
      chain: "BNB",
      img_url: "img6",
      votes: 200,
      MC: 1100,
    },
    {
      id: 7,
      tokenName: "token7",
      tokenDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quam.",
      chain: "BNB",
      img_url: "img7",
      votes: 206,
      MC: 8000,
    },
    
  ]


  const [getMoreState, setgetMoreState] = useState({});
  const [changeChainView, setchangeChainView] = useState("main");
  const [getDirection, changeDirection] = useState(false)


  



  const getMoreData = (data) => {
    TokensDetails.map((value) => {
    if(value.id === data) {
       setgetMoreState(value);
    }
    })
    changeDirection(false);
  }

  const switchChainView = (data) =>{
    if(data === "eth"){
      setchangeChainView("eth")
    } else {
      setchangeChainView("bnb")
      changeDirection(true)
    }
    //console.log("props connected");
    //console.log(data + " for parent")
  }



   
  

  


  return (
    <div className='body-container'>
      <div className='overlay'></div>

      { changeChainView === "eth"
       
      ? (
         <div className='eth-view'>
           <h1>COMING SOON</h1>
         </div>
       )
    
      : changeChainView === "bnb"

      ? (<div className='orbits-container'>
        { TokensDetails.map((data, index) => {
              return(            
                <div key={data.id} onClick={()=> getMoreData(data.id)} className={ "points-"+index } > {data.img_url}</div>
              )
            }) }  
          <div className="sun"></div>
        </div>
        )
      :
        (
        <div  className='main-page'> 
        
        <div className='main-content'>

          <div className='main-content-holder'>
          <div className='welcome'><h2>Welcome</h2> <p>to BSC LaunchPad</p></div>
          <div className='welcome-more'>Welcome to lorem ipsum, a cutting-edge launchpad and Defi 
          platform powered by sponsors.
          Buy and hold Bas for rewards
          </div>
          </div>

          <div className='button-contain'>
            <button className='button'>Sponsors</button>
            <button className='button-2'>Find Us <i class="fa-brands fa-telegram"></i></button>
          </div>

          
          <div className='littleinfo-contain'>
            <div className='littleinfo'>
              <div><div>UPCOMING</div> <div>LAUNCHES</div></div>
              </div>
            <div className='littleinfo'>
            <div><div>RECENT</div> <div>PROJECTS</div></div>
              </div>
            <div className='littleinfo'>
              <div><div>RECENT</div> <div>PROJECTS</div></div>
              </div>
          </div>
              
        </div>
      
        </div>
        )
    
    
    
    
    }
        

    
        <Tokeninfo switchChainView={switchChainView} 
        eachData={getMoreState}  
        className='tokeninfo-container'
        changeTokenView={changeChainView} 
        getDirection={getDirection}
         />

        


    </div>
  )
}
