import { Box3 } from "three";

export const fitAll = ({ camera, size: { width, height }, scene }) => {
  const content = scene.getObjectByName("content");
  const { min, max } = new Box3().setFromObject(content);
  const minDis = Math.sqrt(min.x ** 2 + min.y ** 2 + min.z ** 2);
  const maxDis = Math.sqrt(max.x ** 2 + max.y ** 2 + max.z ** 2);
  const radius = minDis > maxDis ? minDis : maxDis;
  const aspect = width / height;
  camera.lookAt(content.position);
  camera.zoom = aspect > 1 ? height / (radius * 2) : width / (radius * 2);
  camera.updateProjectionMatrix();
};
