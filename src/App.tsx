import "./App.css";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Finish from "./pages/Finish";
import { MathJax } from "./config/mathJaxContext";
import { Routes, Route } from "react-router-dom";
import MathJaxContext from "better-react-mathjax/MathJaxContext";

const App = () => {
  return (
    <div className="App">
      <MathJaxContext config={MathJax}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="test" element={<Test />} />
          <Route path="finish" element={<Finish />} />
        </Routes>
      </MathJaxContext>
    </div>
  );
};

export default App;
