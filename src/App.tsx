import { Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import Finish from "./pages/Finish";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </div>
  );
};

export default App;
