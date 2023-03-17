import logo from './logo.svg';
import './App.css';
import * as THREE from "three"
import cubeTexxture from "./images/cube.jpg"
import spaceTexture from "./images/space.jpg"
import testTexture from './images/01-3.jpg'
function App() {
  // Настройки сцены
  const scene = new THREE.Scene();
  // const spaceTexture = new THREE.TextureLoader().load('images/space.jpg');
  scene.background = new THREE.Color(0x000000)

  // Настройка камеры
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  // Настройка renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff, 0);
  document.body.appendChild(renderer.domElement);

  // Глобальное освещение
  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(ambientLight);

  // Настройки куба
  const cubeTexture = new THREE.TextureLoader().load(cubeTexxture);
  const cubeTextureSpace = new THREE.TextureLoader().load(spaceTexture);
  const cubeTexturePlanet = new THREE.TextureLoader().load(testTexture);

  // const cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ map: cubeTexture }));
  let cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ map: cubeTexture }));
  let cube1 = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ map: cubeTextureSpace }));
  let cube2 = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ map: cubeTexturePlanet }));

  cube.position.z = -3;
  cube1.position.z = -3
  cube1.position.x = 1
  cube1.position.y = 1
  cube2.position.x = -1
  cube2.position.y = -1

  cube2.position.z = -3
  let array = [{ object: cube, id: 1 }, { object: cube1, id: 2 }, { object: cube2, id: 3 }]

  // cube.rotation.y = 10;
  // cube.rotation.x = 10;

  scene.add(cube);
  scene.add(cube1);
  scene.add(cube2);


  // Анимация | каждый кадр
  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.y += 0.003;
    cube.rotation.x += 0.002;
    cube.rotation.z += 0.002;

    renderer.render(scene, camera);
  }
  // Запуск анимации
  animate();

  // Событие для прокрутки
  document.body.onwheel = handlerScroll;
  function handlerScroll(event) {
    // const t = document.body.getBoundingClientRect().top
    if (wheel(event)) {
      // Move(true)
    } else {
      // Move(false)
    }
  }

  // Реакция на прокрутку колеса
  function wheel(event) {
    var delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {
      delta = event.wheelDelta / 120;
    } else if (event.detail) {
      delta = -event.detail / 3;
    }
    if (delta) {
      // если дельта больше 0, то колесо крутят вверх, иначе вниз
      var dir = delta > 0 ? 'Up' : 'Down'
      console.log("dir", dir)
      return delta > 0 ? true : false
    }
    return false
  }
  return (
    <div className="App">
    </div>
  );
}

export default App;
