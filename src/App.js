import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Page404 from "./components/404/404";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Main />}
      />
      <Route
        path="/*"
        element={<Page404 />}
      />
    </Routes>
  );
}

export default App;
