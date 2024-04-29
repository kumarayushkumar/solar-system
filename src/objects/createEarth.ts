import * as THREE from "three";
import earthColorMap from "../assets/earth/earth-color-map.jpg";
import earthNormalMap from "../assets/earth/earth-normal-map.jpg";
import earthBumpMap from "../assets/earth/earth-bump-map.jpg";
import { CONSTANTS } from "../utils/constants";

export function createEarth(postion: THREE.Vector3) {
  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(CONSTANTS.RADIUS.EARTH, 1000, 1000),
    new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load(earthColorMap),
      normalMap: new THREE.TextureLoader().load(earthNormalMap),
      bumpMap: new THREE.TextureLoader().load(earthBumpMap),
    }) as THREE.MeshStandardMaterial
  );

  earth.position.set(postion.x, postion.y, postion.z);
  return earth;
}
