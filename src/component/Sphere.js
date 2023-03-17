import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import space from "./../texture/space.jpg"
import { useBox } from '@react-three/cannon';
let Sphere = ({ position }) => {
  // const ref = useRef()
  const [ref] = useBox(() => ({
    position: position,
    mass: 1
  }))
  const create = useLoader(TextureLoader, space)
  useFrame(() => {
    ref.current.rotation.x += 0.01
  }, {})
  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry />
      <meshStandardMaterial map={create} />
    </mesh>
  )

}
export default Sphere;
