import "./body.css";
import Tokeninfo from './Tokeninfo';
import useMediaQuery from '@mui/material/useMediaQuery';
import Planet from './Planets';
import { Suspense } from 'react';
import React, { useState, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { AmbientLight, Material, MeshBasicMaterial, PlaneGeometry, SphereGeometry } from "three";
import { useTexture, PerspectiveCamera, OrbitControls, RenderTexture  } from "@react-three/drei";
import sun from "../../img/logo.jpg";
import { angleToradians } from "../utils/angles";
import * as THREE from "three";
import { extend, useThree, useFrame } from "react-three-fiber";
import { Control as PointerControls } from "./Control";
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { BaseControl, Controls, useControl } from "react-three-gui";
import { fitAll } from "./FitAll";
import { useGLTF, PresentationControls, Environment, ContactShadows, Html } from '@react-three/drei';
import Mainpage from "./Mainpage";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Pagination from "./Pagination";
import axios from "axios";









extend({ OrbitControls });


export default function Body() {

  const [TokensDetails, setTokensDetails] = useState([]);
  const [updateState, setUpdateState] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(7);



 

  const [getMoreState, setgetMoreState] = useState({});
  const [changeChainView, setchangeChainView] = useState("main");
  const [getDirection, changeDirection] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [getindex, setindex] = useState();
  const [clicked, setClicked] = useState(false);
  const [theOutside, setTheOutside] = useState(true);
  const [visible, setVisible] = useState(false);

  const matches = useMediaQuery('(max-width:1075px)');
  const rotationX = useControl("Rotation X", { type: "number", spring: true });
  const ssao = useControl("ssao", { type: "boolean" });



   //size of planets
  let size = {
    0: [1.8, 70, 70],
    1: [1.6, 70, 70],
    2: [2.1, 70, 70],
    3: [1.3, 70, 70],
    4: [2, 70, 70],
    5: [1.5, 70, 70],
    6: [1.7, 70, 70],
    7: [1.8, 70, 70],
    8: [1.7, 70, 70]
  }


//positions of planets
  let position = {
    0: [14, 0, 0],
    1: [-21.5, 0, 3.5],
    2: [26.5, 0, 13.9],
    3: [-35, 0, -15.5],
    4: [-41, 0, 20.5],
    5: [51, 0, -19],
    6: [56, 0, 25.5],
    7: [-64, 0, -28],
    8: [-72, 0, 30.2]
  }




  //radius of orbits
  let radius = {
    0: 14,
    1: 22,
    2: 30,
    3: 38,
    4: 46,
    5: 54,
    6: 62,
    7: 70,
    8: 78
  }

 
 


  const getMoreData = (data, index) => {

    currentPost.map((value) => {

    if(value._id === data) {
       setgetMoreState(value);
    }
    })
    changeDirection(false);
    setAnimate(true);
    setindex(index);
    setVisible(true);
    setClicked(true);
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
  





  const goHome = () => {
    setchangeChainView("main");
    setTheOutside(true);
  }




  //change page 
  const paginate = (data) => {
    setCurrentPage(data);
  }








   useEffect(() => {


    const getTokens = async () => {
      //make a call to the database and get all tokens available

      const res = await axios.get(`https://bscapp-backend.herokuapp.com/projects`);

        setTokensDetails(res.data);
  
    }



    getTokens();

  



  //console.log(TokensDetails);
  }, []);

  



    //paginate side
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPost - postPerPage;
  const currentPost = TokensDetails.slice(indexOfFirstPage, indexOfLastPost).reverse();


 
  



   //console.log(currentPost);
   //console.log(TokensDetails);
  


  return (
    <div className={changeChainView === "bnb" ? "body-containerTwo" : "body-container" }  >

     <div className={ changeChainView  === "main" && !matches ?  "containbody"   : changeChainView === "bnb" && matches ? "containbodychainforcomplete" : "containbodychainactive"   }>

      { changeChainView === "eth"
       
      ? (
         <div className='eth-view'>
           <h1>COMING SOON</h1>
         </div>
       )
    
      : changeChainView === "bnb"

      ? (
      <div className='orbit-container-cover'>



          <Canvas 
                  {...{
                    shadowMap: true,
                    orthographic: true,
                    camera: { position: [50, 250, 50] },
                    style: { width: "100%", height: "95%" },
                    onCreated: fitAll
                  }} 
          className="canvas-contain"
          >
            <Suspense fallback={1}>
            <ambientLight intensity={0.2} />

            <PresentationControls
              global
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0, 0.3, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}>


            { currentPost.map((data, index) => {
              let planetSize = size[index];
              let planetPosition = position[index];
              let planetrad = radius[index];


            

              //console.log();
                  return(

                        <mesh  onClick={()=> getMoreData(data._id, index, planetrad)}   name="content"  >
                        <Planet 
                        index={index}  
                        eachPlanet={data.imgUrl} 
                        planetPosition={planetPosition} 
                        planetSize={planetSize} 
                        planetrad={planetrad}
                        getindex={getindex}
                        rotation-x={rotationX}
                        id={data._id}
                        />
                        </mesh>

                  )
                }) }  

            
            <TextureSun TokensDetails={currentPost} radius={radius} />
            <PointerControls />

            <EffectComposer>
                <SSAO active={ssao} />
              </EffectComposer>

              </PresentationControls>
          </Suspense>
          </Canvas>

          

          <div className='get-back' onClick={goHome}>
                <KeyboardArrowLeftIcon />
          </div>


       
        <Pagination 
          TokensDetails={TokensDetails.length} 
          postPerPage={postPerPage} 
          currentPage={currentPage}
          paginate={paginate}
          />


    </div>
        )
      :
        (
         <Mainpage />
        )
  
    
     }

    </div>
        
        { !clicked && !theOutside ?
            
           <div></div>
      
           : !clicked && theOutside || clicked && !theOutside  ?
            
                   
              <Tokeninfo 
              switchChainView={switchChainView} 
              eachData={getMoreState}  
              className={ visible ? 'tokeninfo-container' : 'hideWell'}
              changeTokenView={changeChainView}
              setTheOutside={setTheOutside}
              getDirection={getDirection}
              setClicked={setClicked}
            />


          :

          <div></div>


        }
    


        
    </div>
  )
}




const TextureSun = (props) => {
  const terrainTexture = useTexture(sun);
    //positions of orbit color

  


  return (
    <mesh  position={[0, 0, 0]}>
      <sphereGeometry args={[6.5, 50, 50]} />
      <meshStandardMaterial  map={terrainTexture}/>
      { props.TokensDetails.map((data, index) => {
          let planetradious = props.radius[index];
              return(
                <Ecliptic xRadius={planetradious} zRadius={planetradious} id={data._id} />
              )
            }) } 
    </mesh>
  );

}



function Ecliptic({ xRadius = 1, zRadius = 1, id }) {
  const points = [];

  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }

  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry} key={id}>
      <lineBasicMaterial attach="material" color="#4e433f" linewidth={10} />
    </line>
  );
}
