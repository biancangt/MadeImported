// src/Pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro(null);

    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      alert("Login realizado com sucesso!");
      navigate("/add-produto");
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
      if (error.code === "auth/invalid-login-credentials") {
        setErro("Email ou senha inválidos!");
      } else if (error.code === "auth/user-not-found") {
        setErro("Usuário não encontrado!");
      } else if (error.code === "auth/wrong-password") {
        setErro("Senha incorreta!");
      } else {
        setErro("Erro ao fazer login: " + error.message);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Senha:</label>
          <input
            type="password"
            className="form-control"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        {erro && <div className="alert alert-danger">{erro}</div>}
        <button type="submit" className="btn btn-primary">
          Fazer Login
        </button>
      </form>
    </div>
  );
};

export default Login;
