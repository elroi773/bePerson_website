// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Index from "./Index.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/index" element={<Index/>} />
      </Routes>
    </Router>
  );
}

export default App;
