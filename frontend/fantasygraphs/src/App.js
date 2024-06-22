import "./styles/App.css";
import "./styles/navbar.css";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Graphs from "./pages/Graphs";
import Import from "./pages/Import";
import Stats from "./pages/Stats";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div style={{ marginRight: "0rem", marginLeft: "0rem", marginTop: "0rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graphs" element={<Graphs />} />
          <Route path="/import" element={<Import />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
