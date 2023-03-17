import React, { useRef } from 'react';
import { usePlane } from '@react-three/cannon';
let Plane = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [1, -2, -1]
  }))
  return (
    <mesh ref={ref}>
      {/* <boxGeometry /> */}
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color='grey' />
    </mesh>
  )

}
export default Plane;
