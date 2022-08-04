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
import secondSun from "../../img/Secondsun.jpg";
import thirdSun from "../../img/thirdSun.png";
import mecury from "../../img/burning.jpg";
import venus from "../../img/whale.jpg";
import earth from "../../img/bunnies.jpg";
import mars from "../../img/horris.jpg";
import jupiter from "../../img/Anon.jpg";
import saturn from "../../img/rabbit.jpg";
import uranus from "../../img/bigA.jpg";
import neptune from "../../img/roundbanana.jpg";
import pluto from "../../img/umbrella.jpg";
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









extend({ OrbitControls });


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
      tokenName: "token2",
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
    {
      id: 8,
      tokenName: "token8",
      tokenDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quam.",
      chain: "BNB",
      img_url: "img7",
      votes: 206,
      MC: 8000,
    },
    {
      id: 9,
      tokenName: "token9",
      tokenDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quam.",
      chain: "BNB",
      img_url: "img7",
      votes: 206,
      MC: 8000,
    },
  ]


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

  //planets
  let planets = {
    0: mecury,
    1: venus,
    2: earth,
    3: mars,
    4: jupiter,
    5: saturn,
    6: uranus,
    7: neptune,
    8: pluto
  }
 
 


  const getMoreData = (data, index) => {
    TokensDetails.map((value) => {
    if(value.id === data) {
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


        <BaseControl>
          <Canvas 
                  {...{
                    shadowMap: true,
                    orthographic: true,
                    camera: { position: [50, 200, 50] },
                    style: { width: "80vw", height: "100vh", paddingRight: "50px", marginBottom: "50px", },
                    onCreated: fitAll
                  }} 
          className="canvas-contain"
          >
            <Suspense fallback={null}>
            <ambientLight intensity={0.2} />

            <PresentationControls
              global
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0, 0.3, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}>


            { TokensDetails.map((data, index) => {
              let planetSize = size[index];
              let planetPosition = position[index];
              let eachPlanet = planets[index];
              let planetrad = radius[index];


            

              //console.log();
                  return(

                        <mesh  onClick={()=> getMoreData(data.id, index, planetrad)}   name="content"  >
                        <Planet 
                        index={index}  
                        eachPlanet={eachPlanet} 
                        planetPosition={planetPosition} 
                        planetSize={planetSize} 
                        planetrad={planetrad}
                        getindex={getindex}
                        rotation-x={rotationX}
                        />
                        </mesh>

                  )
                }) }  

            
            <TextureSun TokensDetails={TokensDetails} radius={radius} />
            <PointerControls />

            <EffectComposer>
                <SSAO active={ssao} />
              </EffectComposer>

              </PresentationControls>
          </Suspense>
          </Canvas>
          </BaseControl>
          

          <div className='get-back' onClick={goHome}>
                <KeyboardArrowLeftIcon />
          </div>


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

    let orbitColor = {
      0: "#ffffff",
      1: "#b3b3b5",
      2: "#e8a968",
      3: "#25adda",
      4: "#ed6042",
      5: "#ef952f",
      6: "#f5ae37",
      7: "#6fd2dc",
      8: "#7575d7",
    }

    


  return (
    <mesh  position={[0, 0, 0]}>
      <sphereGeometry args={[6.5, 50, 50]} />
      <meshStandardMaterial  map={terrainTexture}/>
      { props.TokensDetails.map((data, index) => {
          let orbits = orbitColor[index];
          let planetradious = props.radius[index];
              return(
                <Ecliptic xRadius={planetradious} zRadius={planetradious} orbits={orbits} />
              )
            }) } 
    </mesh>
  );

}



function Ecliptic({ xRadius = 1, zRadius = 1, orbits }) {
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
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#4e433f" linewidth={10} />
    </line>
  );
}
