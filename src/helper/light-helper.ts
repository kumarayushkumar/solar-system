import * as THREE from "three";

export function lightHelper(scene: THREE.Scene, light: THREE.PointLight) {
  const lightHelper = new THREE.PointLightHelper(light);
  scene.add(lightHelper);
}
