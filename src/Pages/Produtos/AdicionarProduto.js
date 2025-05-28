import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { db } from "../../firebase";

const AdicionarProduto = () => {
  // Estado para vários produtos que o usuário está adicionando
  const [produtosParaAdicionar, setProdutosParaAdicionar] = useState([
    { nome: "", marca: "", tamanho: "", preco: "" },
  ]);
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usuario, setUsuario] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user);
      } else {
        setUsuario(null);
        window.location.href = "/login";
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const loadProdutos = async () => {
    try {
      const produtosCol = collection(db, "produtos");
      const produtosSnapshot = await getDocs(produtosCol);
      const produtosList = produtosSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProdutos(produtosList);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProdutos();
  }, []);

  // Atualiza um campo de um produto na lista de produtos para adicionar
  const handleInputChange = (index, field, value) => {
    const newProdutos = [...produtosParaAdicionar];
    newProdutos[index][field] = value;
    setProdutosParaAdicionar(newProdutos);
  };

  // Adiciona uma nova linha para inserir produto
  const handleAddProductField = () => {
    setProdutosParaAdicionar([
      ...produtosParaAdicionar,
      { nome: "", marca: "", tamanho: "", preco: "" },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar: pelo menos nome e preço devem existir para cada produto válido
    for (const p of produtosParaAdicionar) {
      if (!p.nome || !p.preco) {
        alert("Todos os produtos devem ter nome e preço!");
        return;
      }
    }

    try {
      // Envia todos os produtos em sequência
      for (const p of produtosParaAdicionar) {
        await addDoc(collection(db, "produtos"), {
          nome: p.nome,
          marca: p.marca,
          tamanho: p.tamanho,
          preco: parseFloat(p.preco),
        });
      }

      alert("Produtos adicionados com sucesso!");
      setProdutosParaAdicionar([{ nome: "", marca: "", tamanho: "", preco: "" }]);
      loadProdutos();
    } catch (error) {
      console.error("Erro ao adicionar produtos:", error);
      alert("Erro ao adicionar produtos.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Tem certeza que deseja deletar este produto?")) return;
    try {
      await deleteDoc(doc(db, "produtos", id));
      alert("Produto deletado com sucesso!");
      loadProdutos();
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
      alert("Erro ao deletar produto.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/login";
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return usuario ? (
    <div className="container mt-5">
      <h2>Adicionar Novos Produtos</h2>
      <button onClick={handleLogout} className="btn btn-secondary mb-4">
        Sair
      </button>

      <form onSubmit={handleSubmit}>
        {produtosParaAdicionar.map((produto, index) => (
          <div key={index} className="border p-3 mb-3">
            <h5>Produto {index + 1}</h5>

            <div className="mb-3">
              <label>Nome do Produto</label>
              <input
                type="text"
                className="form-control"
                value={produto.nome}
                onChange={(e) => handleInputChange(index, "nome", e.target.value)}
                placeholder="Nome do produto"
                required
              />
            </div>

            <div className="mb-3">
              <label>Marca</label>
              <input
                type="text"
                className="form-control"
                value={produto.marca}
                onChange={(e) => handleInputChange(index, "marca", e.target.value)}
                placeholder="Marca do produto"
              />
            </div>

            <div className="mb-3">
              <label>Tamanho</label>
              <input
                type="text"
                className="form-control"
                value={produto.tamanho}
                onChange={(e) => handleInputChange(index, "tamanho", e.target.value)}
                placeholder="Tamanho do produto"
              />
            </div>

            <div className="mb-3">
              <label>Preço</label>
              <input
                type="number"
                className="form-control"
                value={produto.preco}
                onChange={(e) => handleInputChange(index, "preco", e.target.value)}
                placeholder="Preço em R$"
                required
                min="0"
                step="0.01"
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-secondary mb-3"
          onClick={handleAddProductField}
        >
          Adicionar mais um produto
        </button>

        <br />

        <button type="submit" className="btn btn-primary">
          Adicionar Produtos
        </button>
      </form>

      <hr />

      <h3>Produtos cadastrados</h3>
      {loading ? (
        <p>Carregando produtos...</p>
      ) : produtos.length === 0 ? (
        <p>Nenhum produto cadastrado ainda.</p>
      ) : (
        <ul className="list-group">
          {produtos.map((produto) => (
            <li
              key={produto.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{produto.nome}</strong> - R$ {produto.preco} <br />
                <small>Marca: {produto.marca || "-"}</small> <br />
                <small>Tamanho: {produto.tamanho || "-"}</small>
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(produto.id)}
              >
                Deletar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  ) : null;
};

export default AdicionarProduto;
