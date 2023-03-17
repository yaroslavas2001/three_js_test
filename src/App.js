// import * as THREE from "three"
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import React, { useEffect } from 'react';
import { Suspense } from 'react';
import "./App.css"
import Box from './component/Box';
import Plane from './Plane';
import { Physics } from '@react-three/cannon';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Sphere from './component/Sphere';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Soldier from './component/Soldier';
const CameraOrbitController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement)
    return () => {
      controls.dispose()
    }
  }, [camera, gl])
}

class App extends React.Component {
  componentDidMount() {

  }
  render() {

    return (
      <div className='app'>
        {/* Suspense  */}
        <Suspense fallback={null}>
          <Canvas className='canva' >
            <CameraOrbitController />
            <Physics>

              <ambientLight intensity={0.1} />
              <pointLight position={[10, 10, 10]} />
              <Soldier/>
              {/* <Box position={[2, 1, 0]} /> */}
              {/* <Box position={[1, -1, -1]} /> */}
              {/* <Box position={[1, 1, 0]} /> */}
              <Plane />
            </Physics>

          </Canvas>

        </Suspense>



      </div>

    )
  }
}
export default App;
