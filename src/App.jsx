import { selector_rooms } from "./features/js/selector";
import { KeyboardControls } from "@react-three/drei";
import { Header, IntroPage, Orientation } from "./components/2D";
import { KEYBOARD_MAP } from "./util/constants";
import { DreiProps } from "./components/3D";
import { Canvas } from "@react-three/fiber";
import { useSelector } from "react-redux";
import Models from "./features/Models";
import "./App.css";
import { Fragment } from "react";
import { Stick } from "./components/icons";

window.isIntroPage = true;

function App() {
  const isIntroPage = useSelector(selector_rooms.isIntroPage);
  return (
    <main>
      <Orientation />
      <Header />
      {isIntroPage ? (
        <IntroPage isLoaded={true} />
      ) : (
        <Fragment>
          <Stick
            className="w-[62px] h-[145px] left-0 ml-6 mb-3 stick-animation"
            idA="forward"
            idB="backward"
          />
          <Stick
            className="right-0 -rotate-90 w-[62px] h-[145px] mr-16 stick-animation"
            idA="left"
            idB="right"
          />
          <KeyboardControls map={KEYBOARD_MAP}>
            <Canvas className="canvas-animation">
              <DreiProps />
              <Models />
            </Canvas>
          </KeyboardControls>
        </Fragment>
      )}
    </main>
  );
}

export default App;
