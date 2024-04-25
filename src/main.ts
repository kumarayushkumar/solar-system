import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { createMoon } from "./objects/createMoon";
import { createStar } from "./objects/createStar";
import { lightHelper } from "./helper/light-helper";
import { createEarth } from "./objects/createEarth";
import { createSun } from "./objects/createSun";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.setZ(30);

const canvas = document.querySelector("#bg") as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const pointLight = new THREE.PointLight(0xffffff, 80, 0, 1);
pointLight.position.set(20, 10, 5);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

lightHelper(scene, pointLight);

for (let i = 0; i < 1000; i++) {
  const star = createStar();
  scene.add(star);
}
const sun = createSun(new THREE.Vector3(20, 20, 20));
scene.add(sun);

const moon = createMoon(new THREE.Vector3(0, 0, 0));
scene.add(moon);

const earth = createEarth(new THREE.Vector3(10, -10, 0));
scene.add(earth);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  moon.rotation.y += 0.005;
  earth.rotation.y += 0.005;
  renderer.render(scene, camera);
}
animate();
