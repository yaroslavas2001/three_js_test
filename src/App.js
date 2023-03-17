// import * as THREE from "three"
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Suspense } from 'react';
import "./App.css"
import Box from './component/Box';
import Plane from './Plane';
import { Physics } from '@react-three/cannon';

class App extends React.Component {


  render() {
    return (
      <div className='app'>
        {/* Suspense  */}
        <Suspense fallback={null}>
          <Canvas className='canva' >
            <Physics>

              <ambientLight intensity={0.1} />
              <pointLight position={[10, 10, 10]} />
              {/* <Box position={[2, 1, 0]} /> */}
              <Box position={[0, 2, 0]} />
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
