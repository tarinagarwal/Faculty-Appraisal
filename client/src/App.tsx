import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
