import * as THREE from "three";
import moonColorMap from "../assets/moon-color-map.jpg";
import moonNormalMap from "../assets/moon-normal-map.png";
import moonDisplacementMap from "../assets/moon-displacement-map.jpg";

export function moon(scene: THREE.Scene) {
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(5, 1000, 1000),
    new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load(moonColorMap),
      normalMap: new THREE.TextureLoader().load(moonNormalMap),
      displacementMap: new THREE.TextureLoader().load(moonDisplacementMap),

    })
  );

  moon.position.set(0, 0, 0);
  scene.add(moon);
}
