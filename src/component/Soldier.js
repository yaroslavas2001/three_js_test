import React, { useEffect, useRef, useState } from 'react';
import { useLoader, useFrame, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import space from "./../texture/space.jpg"
import { useBox } from '@react-three/cannon';
import soldier from "./../character/Soldier.glb"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from "three"
let Soldier = (props) => {
  const { scene, animations } = useLoader(GLTFLoader, soldier);
  let [angel, setAngel] = useState()
  const { camera, gl } = useThree();

  let mixer = null;
  mixer = new THREE.AnimationMixer(scene);
  mixer.clipAction(animations[0]).play();
  // стоит
  // void mixer.clipAction(animations[0]).play();
  // бежит
  // 


  window.addEventListener("keypress", (event) => {
    if (event.code === 'KeyW') {

      mixer.clipAction(animations[1]).play();
    }
    if (event.code === "KeyS") {
      console.log('letter', event.code)
      mixer.stopAllAction()
      mixer.clipAction(animations[0]).play();
      // chance position как перемешение объекта
    }


  });
  useFrame((state, delta) => {
    setAngel(Math.atan2((camera.position.x - scene.position.x), (camera.position.z - scene.position.z)))
    // console.log("angel", angel)
    mixer.update(delta);
  });
  let directionOffset = (keysPressed) => {
    var directionOffset = 0 // w

    if (keysPressed[W]) {
      if (keysPressed[A]) {
        directionOffset = Math.PI / 4 // w+a
      } else if (keysPressed[D]) {
        directionOffset = - Math.PI / 4 // w+d
      }
    } else if (keysPressed[S]) {
      if (keysPressed[A]) {
        directionOffset = Math.PI / 4 + Math.PI / 2 // s+a
      } else if (keysPressed[D]) {
        directionOffset = -Math.PI / 4 - Math.PI / 2 // s+d
      } else {
        directionOffset = Math.PI // s
      }
    } else if (keysPressed[A]) {
      directionOffset = Math.PI / 2 // a
    } else if (keysPressed[D]) {
      directionOffset = - Math.PI / 2 // d
    }

    return directionOffset
  }
  return (
    <primitive
      object={scene}
    />)

}
export default Soldier;
