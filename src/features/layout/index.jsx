import { node } from "prop-types";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
function Layout({ children }) {

  return (
    <main className="h-screen w-screen">
      <Canvas>
        <PerspectiveCamera makeDefault position={[-40, 5, 10]} fov={50} />
        <ambientLight intensity={2} />
        <directionalLight />
        <OrbitControls />
        {children}
      </Canvas>
    </main>
  );
}

Layout.propTypes = {
  children: node,
};
export default Layout;
