import { Provider } from "react-redux";
import { store } from "./store/redux";
import { Layout, Room } from "./features";
import "./App.css";
import { Physics } from "@react-three/rapier";
import { Character } from "./components/3D";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Physics>
          <Character/>
          <Room />
        </Physics>
      </Layout>
    </Provider>
  );
}

export default App;
