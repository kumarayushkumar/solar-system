import * as THREE from "three";
import { getRandomNumber } from "../utils/rand";

export function star(scene: THREE.Scene, number: number) {
  const geometry = new THREE.SphereGeometry(0.1, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffcf });

  for (let i = 0; i < number; i++) {
    const start = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3)
      .fill(0)
      .map(() => getRandomNumber(-100, 100, -15, 15));

    start.position.set(x, y, z);
    scene.add(start);
  }
}
