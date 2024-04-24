import * as THREE from "three";
import { getRandomNumber } from "../utils/rand";

export function createStar() {
  const geometry = new THREE.SphereGeometry(0.1, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffcf });

  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill(0)
    .map(() => getRandomNumber(-100, 100, -15, 15));

  star.position.set(x, y, z);
  return star;
}
