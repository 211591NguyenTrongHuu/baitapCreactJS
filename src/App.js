// App.js
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<About />} />
    </Routes>
  );
}

export default App;
