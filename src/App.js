// App.js
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
     <Route path="/login" element={<Login mode="login" />} />
<Route path="/register" element={<Login mode="register" />} />

    </Routes>
  );
}

export default App;
