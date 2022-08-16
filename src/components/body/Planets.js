import React from 'react';
import "./svgimages.css";
import { useTexture} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import planetbase from "../../img/logo.jpg";







export default function SvgImages(props) {
  const terrainTexture = useTexture(props.eachPlanet);
  const baseTexture = useTexture(planetbase);

  //console.log(props.eachPlanet);
  //console.log(props);

  const random = (a, b) => a + Math.random() * b;



  const xRadius = props.planetrad;
  const zRadius = props.planetrad;
  const speed = random(0.5, 0.5);
  const offset = random(0, Math.PI * 2);


 
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);

    if(props.index === props.getindex){
      planetRef.current.position.x = x;
      planetRef.current.position.z = z;
    }

  });





  


  return (
    <mesh  key={props.id} >


      <mesh ref={props.index === props.getindex ? planetRef : console.log("in Here") }
        position={props.planetPosition}
        scale={2}
      >  <mesh rotation={[200, 0, 0]} position={[0, 2, 0]} >
           <planeGeometry   args={[3.5, 3.5]} />
           <meshStandardMaterial  map={terrainTexture}/>
           <pointLight position={[0, 0, 0]} />
         </mesh>
          <sphereGeometry />
          <meshStandardMaterial  map={baseTexture}/>
      </mesh>


    </mesh>
  )
}










