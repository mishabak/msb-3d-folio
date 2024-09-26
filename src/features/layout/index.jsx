import { node } from "prop-types";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Layout({ children }) {
  return (
    <Canvas>
      <OrbitControls/>
      {children}
    </Canvas>
  );
}

Layout.propTypes = {
  children: node,
};
export default Layout;
