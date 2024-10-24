import { useRef, useEffect } from "react";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import helvetiker from "three/examples/fonts/helvetiker_regular.typeface.json";

export default function Index({
  text = "",
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  material,
}) {
  const mesh = useRef();
  useEffect(() => {
    const fontLoader = new FontLoader();
    const font = fontLoader.parse(helvetiker);
    const textGeometry = new TextGeometry(text, {
      font: font,
      size: 1,
      height: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 3,
    });
    mesh.current.geometry = textGeometry;
  }, []);

  return (
    <mesh
      ref={mesh}
      scale={scale}
      position={position}
      rotation={rotation}
      material={material || false}
    />
  );
}
