import { Provider } from "react-redux";
import { store } from "./store/redux";
import { Layout, Room } from "./features";
import "./App.css";
import { Physics } from "@react-three/rapier";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Physics>
          <Room />
        </Physics>
      </Layout>
    </Provider>
  );
}

export default App;
