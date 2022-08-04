import React from 'react';
import "./svgimages.css";
import styled from 'styled-components';
import { useTexture, PerspectiveCamera, OrbitControls, Ring, RenderTexture  } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";






export default function SvgImages(props) {
  const terrainTexture = useTexture(props.eachPlanet);

  const random = (a, b) => a + Math.random() * b;



  const xRadius = props.planetrad;
  const zRadius = props.planetrad;
  const speed = random(0.5, 0.5);
  const offset = random(0, Math.PI * 2);
  const rotationSpeed = random(0.008, 0.004);

 
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);

    if(props.index === props.getindex){
      planetRef.current.position.x = x;
      planetRef.current.position.z = z;
      planetRef.current.rotation.y += rotationSpeed;
    }

  });





  


  return (
    <mesh    >


      <mesh ref={props.index === props.getindex ? planetRef : console.log("in Here") }
        position={props.planetPosition}
        scale={2}
      >  <mesh rotation={[200, 0, 0]} position={[0, 2, 0]} >
           <planeGeometry   args={[3.5, 3.5]} />
           <meshStandardMaterial  map={terrainTexture}/>
           <pointLight position={[0, 0, 0]} />
         </mesh>
          <sphereGeometry />
          <meshStandardMaterial  map={terrainTexture}/>
      </mesh>


    </mesh>
  )
}










