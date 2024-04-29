import * as THREE from "three";
import sunColorMap from "../assets/sun/sun-color-map.jpg";
import { CONSTANTS } from "../utils/constants";
// import sunNormalMap from "../assets/sun/sun-normal-map.jpg";

export function createSun(postion: THREE.Vector3) {
  const sun = new THREE.Mesh(
    new THREE.SphereGeometry(CONSTANTS.RADIUS.SUN, 1000, 1000),
    new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load(sunColorMap),
      // emissive: 0xffff00,
      emissiveIntensity: 1.0,
    }) as THREE.MeshStandardMaterial
  );

  sun.position.set(postion.x, postion.y, postion.z);
  return sun;
}
