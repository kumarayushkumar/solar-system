import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { createMoon } from "./objects/createMoon";
import { createEarth } from "./objects/createEarth";
import { createSun } from "./objects/createSun";
import { CONSTANTS } from "./utils/constants";
import { lightHelper } from "./helper/light-helper";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100000
);

const canvas = document.querySelector("#bg") as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: canvas,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.1;

camera.position.set(CONSTANTS.DISTANCE.SUN_TO_EARTH + 10, 10, 16);
controls.target = new THREE.Vector3(CONSTANTS.DISTANCE.SUN_TO_EARTH, 0, 0);

const sun = createSun(new THREE.Vector3(0, 0, 0));
scene.add(sun);

const earth = createEarth(
  new THREE.Vector3(CONSTANTS.DISTANCE.SUN_TO_EARTH, 0, 0)
);
scene.add(earth);

const moon = createMoon(
  new THREE.Vector3(
    CONSTANTS.DISTANCE.SUN_TO_EARTH + CONSTANTS.DISTANCE.EARTH_TO_MOON,
    0,
    0
  )
);
scene.add(moon);

// Event listeners for navigation buttons
document.addEventListener("DOMContentLoaded", function () {
  const toSunButton = document.getElementById("toSun");
  const toEarthButton = document.getElementById("toEarth");
  const toMoonButton = document.getElementById("toMoon");

  toSunButton?.addEventListener("click", function () {
    camera.position.set(0, 0, 1500);
    controls.target = new THREE.Vector3(0, 0, 0);
  });

  toEarthButton?.addEventListener("click", function () {
    camera.position.set(CONSTANTS.DISTANCE.SUN_TO_EARTH, 0, 15);
    controls.target = new THREE.Vector3(CONSTANTS.DISTANCE.SUN_TO_EARTH, 0, 0);
  });

  toMoonButton?.addEventListener("click", function () {
    camera.position.set(
      CONSTANTS.DISTANCE.SUN_TO_EARTH + CONSTANTS.DISTANCE.EARTH_TO_MOON,
      0,
      5
    );
    controls.target = new THREE.Vector3(
      CONSTANTS.DISTANCE.SUN_TO_EARTH + CONSTANTS.DISTANCE.EARTH_TO_MOON,
      0,
      0
    );
  });
});
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 50000, 0, 1);
scene.add(pointLight);
pointLight.position.set(0, 0, 0);
lightHelper(scene, pointLight);

const earthRotationSpeed = 0.01;
const moonOrbitSpeed = 0.0003;

function animate() {
  requestAnimationFrame(animate);
  controls.update();

  earth.rotation.y += earthRotationSpeed;

  const moonOrbitRadius = CONSTANTS.DISTANCE.EARTH_TO_MOON;
  const moonOrbitAngle = Date.now() * moonOrbitSpeed;
  const moonPosition = new THREE.Vector3(
    CONSTANTS.DISTANCE.SUN_TO_EARTH +
      moonOrbitRadius * Math.cos(moonOrbitAngle),
    0,
    moonOrbitRadius * Math.sin(moonOrbitAngle)
  );
  moon.position.copy(moonPosition);

  renderer.render(scene, camera);
}
animate();
