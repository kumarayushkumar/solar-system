import * as THREE from "three";
import sunColorMap from "../assets/sun/sun-color-map.jpg";
// import sunNormalMap from "../assets/sun/sun-normal-map.jpg";

export function createSun(postion: THREE.Vector3) {
  const sun = new THREE.Mesh(
    new THREE.SphereGeometry(5, 1000, 1000),
    new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load(sunColorMap),
      // normalMap: new THREE.TextureLoader().load(sunNormalMap),
    }) as THREE.MeshStandardMaterial
  );

  sun.position.set(postion.x, postion.y, postion.z);
  return sun;
}
