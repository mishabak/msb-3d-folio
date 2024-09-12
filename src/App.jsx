import { Provider } from "react-redux";
import { store } from "./store/redux";
import "./App.css";
import { Layout } from "./features";

function App() {
  return (
    <Provider store={store}>
      <Layout>Inner content</Layout>
    </Provider>
  );
}

export default App;
