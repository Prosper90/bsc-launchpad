import React, {useEffect} from "react";
import { extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

extend({ OrbitControls });

// @ts-ignore


// @ts-ignore
/*
declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: Partial<OrbitControls> & {
        ref?: React.Ref<OrbitControls>;
        args: [THREE.Camera, HTMLElement?];
      };
    }
  }
}
*/

export const Control = () => {
 //const ref = React.useRef(undefined);
  const { camera, gl } = useThree();
/*
  useFrame(() => { 
    ref.current.update()
    //camera.beta = camera.radius > 7 ? Math.PI / 5 : Math.PI / (2.5 + (camera.radius - 2) / 2)
  });
*/

/*
  function onMouseWheel( event ) {


    event.preventDefault();
    event.stopPropagation();

    scope.dispatchEvent( startEvent );

    handleMouseWheel( event );

    scope.dispatchEvent( endEvent );

  }
*/

  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 3;
      controls.maxDistance = 20;
      controls.keys = { LEFT: 0, RIGHT: 0, UP: 0, BOTTOM: 0 };
      controls.enablePan = false;
      controls.enableRotate = false;
      controls.minZoom = 5;
      controls.maxZoom = 30;
      controls.target.set(4.5, 0, 4.5);
      //controls.maxPolarAngle = (45 + 10) * Math.PI / 300;

      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );

};
