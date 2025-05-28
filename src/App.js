import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";

import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import NossosProdutos from "./Pages/NossosProdutos/NossosProdutos";
import ContactForm from "./Pages/Contact/ContactForm";
import AdicionarProduto from "./Pages/Produtos/AdicionarProduto";
import Login from "./Pages/Login"; // Importa a página de Login

import '@fortawesome/fontawesome-free/css/all.min.css';
import "./bootstrap.min.css";
import "./scss/style.scss";



// --- Função para verificar autenticação ---
import { getAuth } from "firebase/auth";

const AppWrapper = () => {
  const location = useLocation();
  const auth = getAuth();
  const user = auth.currentUser;

  // Mostra o Navbar em todas as páginas exceto a Home (/)
  const showNavbar = location.pathname !== "/";

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<NossosProdutos />} />
        <Route path="/contato" element={<ContactForm />} />
        <Route path="/login" element={<Login />} />

        {/* Rota protegida */}
        <Route
          path="/add-produto"
          element={user ? <AdicionarProduto /> : <Navigate to="/login" />}
        />

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <AppWrapper />
      </Router>
    </div>
  );
}

export default App;
