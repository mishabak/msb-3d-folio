import { Provider } from "react-redux";
import { store } from "./store/redux";
import { Layout, Room } from "./features";
import "./App.css";
import { Physics } from "@react-three/rapier";
import { Character } from "./components/3D";
import useAudio from "./hooks/useAudio";

function App() {
  const { audio } = useAudio({ url: "/audio/footStep.mp3" });
  return (
    <Provider store={store}>
      <Layout>
        <Physics
          debug={
            import.meta.env.VITE_APP_PHYSICS_DEBUG == "true" ? true : false
          }
        >
          <Character audio={audio} />
          <Room />
        </Physics>
      </Layout>
    </Provider>
  );
}

export default App;
