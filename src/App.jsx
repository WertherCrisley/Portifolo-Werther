import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HashRouter } from "react-router-dom";


import Home from "./pages/home";
import Contato from "./pages/contato/contato";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </HashRouter>



  )
}

export default App