import { useTexture } from "@react-three/drei";
import { leatherPresets } from "@/data/materials";

const texturePaths = [
  ...new Set(
    Object.values(leatherPresets).flatMap((preset) =>
      Object.values(preset)
    )
  ),
];


texturePaths.forEach((path) => {
  useTexture.preload(path);
});