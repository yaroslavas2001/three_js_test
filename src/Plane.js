import React, { useRef } from 'react';
import { usePlane } from '@react-three/cannon';
import plate from "./texture/plate.jpg"
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
let Plane = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [1, 0, -1]
  }))
  const create = useLoader(TextureLoader, plate)

  return (
    <mesh ref={ref}>
      {/* <boxGeometry /> */}
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial map={create} />
    </mesh>
  )

}
export default Plane;
