import { Provider } from "react-redux";
import { store } from "./store/redux";
import { Layout, Room } from "./features";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Room />
      </Layout>
    </Provider>
  );
}

export default App;
