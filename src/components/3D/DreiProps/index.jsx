import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";

function Index() {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} />
      <OrbitControls enabled={false} />
      <PerspectiveCamera makeDefault position={[-15, 1.747, 10]} fov={75} />
    </Suspense>
  );
}

export default Index;
