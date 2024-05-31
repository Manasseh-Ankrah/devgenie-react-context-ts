import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./app/router";
import { ThemeProvider } from "./app/context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
