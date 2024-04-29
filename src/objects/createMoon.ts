import * as THREE from "three";
import moonColorMap from "../assets/moon/moon-color-map.jpg";
import moonNormalMap from "../assets/moon/moon-normal-map.png";
import moonDisplacementMap from "../assets/moon/moon-displacement-map.jpg";
import { CONSTANTS } from "../utils/constants";

export function createMoon(postion: THREE.Vector3) {
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(CONSTANTS.RADIUS.MOON, 1000, 1000),
    new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load(moonColorMap),
      normalMap: new THREE.TextureLoader().load(moonNormalMap),
      displacementMap: new THREE.TextureLoader().load(moonDisplacementMap),
      displacementScale: 0.1,
      normalScale: new THREE.Vector2(0.5, 0.5),
    })
  );

  moon.position.set(postion.x, postion.y, postion.z);
  return moon;
}
