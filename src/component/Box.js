import React, { useEffect, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import space from "./../texture/space.jpg"
import { useBox } from '@react-three/cannon';
let Box = ({ position }) => {
  const [ref] = useBox(() => ({
    position: position,
    mass: 1
  }))
  const create = useLoader(TextureLoader, space)
  useFrame(() => {
    ref.current.rotation.x += 0.01
  }, {})
  // useEffect(() => {
  window.addEventListener("keypress", (event) => {
    if (event.code === 'W') {

    } else if (event.code == "D") {
        // chance position как перемешение объекта
    }
    console.log('letter', event.code)
  });
  // }, []);

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry />
      <meshStandardMaterial map={create} />
    </mesh>
  )

}
export default Box;
