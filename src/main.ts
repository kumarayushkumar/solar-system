import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { getRandomNumber } from "./utils/rand";
import img from "./assets/bg.jpg";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.setZ(30);

const spaceTexture = new THREE.TextureLoader().load(img);
scene.background = spaceTexture;

const canvas = document.querySelector("#bg") as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.TorusGeometry(10, 3, 20, 100);
const material = new THREE.MeshStandardMaterial({
  color: 0xdc4e20,
  wireframe: false,
});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff, 100, 0, 1);
pointLight.position.set(20, 10, 5);
scene.add(pointLight);

// const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
// scene.add(ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.1, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const start = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill(0)
    .map(() => getRandomNumber(-100, 100, -15, 15));

  start.position.set(x, y, z);
  scene.add(start);
}

Array(500).fill(0).forEach(addStar);

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  torus.rotation.z += 0.004;
  controls.update();
  renderer.render(scene, camera);
}
animate();
