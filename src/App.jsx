import { selector_rooms } from "./features/js/selector";
import { KeyboardControls } from "@react-three/drei";
import { Header, IntroPage } from "./components/2D";
import { KEYBOARD_MAP } from "./util/constants";
import { DreiProps } from "./components/3D";
import { Canvas } from "@react-three/fiber";
import { useSelector } from "react-redux";
import Models from "./features/Models";
import "./App.css";

window.isIntroPage = true;

function App() {
  const isIntroPage = useSelector(selector_rooms.isIntroPage);
  return (
    <main>
      <Header />
      {isIntroPage ? (
        <IntroPage isLoaded={true} />
      ) : (
        <KeyboardControls map={KEYBOARD_MAP}>
          <Canvas className="canvas-animation">
            <DreiProps />
            <Models />
          </Canvas>
        </KeyboardControls>
      )}
    </main>
  );
}

export default App;
