import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./app/router";
import { ThemeProvider } from "./app/context/ThemeContext";
import reducer, { initialState } from "./app/context/reducer";

function App() {
  return (
    // <ThemeProvider initialState={initialState} reducer={reducer}>
    <RouterProvider router={router} />
    // </ThemeProvider>
  );
}

export default App;
