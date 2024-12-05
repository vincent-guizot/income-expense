import "./App.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <>
      {/* <Provider> */}
      <RouterProvider router={router}></RouterProvider>
      {/* </Provider> */}
    </>
  );
}

export default App;
