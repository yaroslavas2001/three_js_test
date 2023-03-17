import React, { useEffect, useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import space from "./../texture/space.jpg"
import { useBox } from '@react-three/cannon';
let Box = ({ position }) => {
  let [positionBox, setPosition] = useState(position)
  const [ref] = useBox(() => ({
    position: positionBox,
    mass: 1
  }))
  const create = useLoader(TextureLoader, space)
  useFrame(() => {
    // ref.current.rotation.x += 0.01
  }, {})
  window.addEventListener("keypress", (event) => {
    if (event.code === 'W') {

    } 
     if (event.code === "KeyD") {
      console.log('letter', event.code)
      setPosition([2, 3, 0])
      // chance position как перемешение объекта
    }
   
  });
  useEffect(() => {

  }, [positionBox]);

  return (
    <mesh position={positionBox} ref={ref}>
      <boxGeometry />
      <meshStandardMaterial map={create} />
    </mesh>
  )

}
export default Box;
