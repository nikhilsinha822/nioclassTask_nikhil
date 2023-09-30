import "./App.css";
import Home from "./pages/Home";
import Test from "./pages/TestPage";
import Finish from "./pages/Finish";
import { MathJax } from "./config/mathJaxContext";
import { Routes, Route } from "react-router-dom";
import MathJaxContext from "better-react-mathjax/MathJaxContext";
import { UserProvider } from "./contexts/userContext";

const App = () => {
  return (
    <UserProvider>
      <div className="App">
        <MathJaxContext config={MathJax}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="test" element={<Test />} />
            <Route path="finish" element={<Finish />} />
          </Routes>
        </MathJaxContext>
      </div>
    </UserProvider>
  );
};

export default App;
