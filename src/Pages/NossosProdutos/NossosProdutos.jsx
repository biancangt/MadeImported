import React, { useEffect, useState } from "react";
import Footer from "../Home/Footer";
import { buscarProdutos } from "../../firebase";
import { Search } from "lucide-react";

const NossosProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [filtroMarca, setFiltroMarca] = useState("");
  const [ordenar, setOrdenar] = useState("");

  // Carregar produtos
  useEffect(() => {
    async function loadProdutos() {
      const dados = await buscarProdutos();

      // Ordenar por marca ao carregar
      const ordenadosPorMarca = dados.sort((a, b) => {
        const marcaA = a.marca ? a.marca.toLowerCase() : "";
        const marcaB = b.marca ? b.marca.toLowerCase() : "";
        return marcaA.localeCompare(marcaB);
      });

      setProdutos(ordenadosPorMarca);
    }
    loadProdutos();
  }, []);

  // Gerar lista de marcas únicas
  const marcas = Array.from(new Set(produtos.map((p) => p.marca).filter(Boolean)));

  // Aplicar filtros e ordenação
  const produtosFiltrados = produtos
    .filter((produto) => {
      const busca = filtro.toLowerCase();
      return (
        produto.nome.toLowerCase().includes(busca) ||
        (produto.marca && produto.marca.toLowerCase().includes(busca))
      );
    })
    .filter((produto) =>
      filtroMarca ? produto.marca === filtroMarca : true
    )
    .sort((a, b) => {
      if (ordenar === "menor") {
        return a.preco - b.preco;
      } else if (ordenar === "maior") {
        return b.preco - a.preco;
      } else {
        return 0; // Se não for para ordenar por preço, mantém a ordem alfabética de marca
      }
    });

  return (
    <>
      <section className="titulo-produtos" style={{ backgroundColor: "#e0f7fa" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h1 className="titulo-produtos__texto">Nossos Produtos</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="untree_co-section product-section before-footer-section fundo-branco">
        <div className="container">

          {/* Campo de busca e filtros */}
          <div className="row mb-4 align-items-center">
            <div className="col-md-4">
              <div className="input-group">
                <span className="input-group-text">
                  <Search size={20} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar produtos..."
                  value={filtro}
                  onChange={(e) => setFiltro(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-4">
              <select
                className="form-select"
                value={filtroMarca}
                onChange={(e) => setFiltroMarca(e.target.value)}
              >
                <option value="">Filtrar por marca</option>
                {marcas.map((marca, index) => (
                  <option key={index} value={marca}>
                    {marca}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-4">
              <select
                className="form-select"
                value={ordenar}
                onChange={(e) => setOrdenar(e.target.value)}
              >
                <option value="">Ordenar por preço</option>
                <option value="menor">Menor preço</option>
                <option value="maior">Maior preço</option>
              </select>
            </div>
          </div>

          {/* Tabela de produtos */}
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Marca</th>
                  <th>Nome</th>
                  <th>Tamanho</th>
                  <th>Preço</th>
                </tr>
              </thead>
              <tbody>
                {produtosFiltrados.length === 0 ? (
                  <tr>
                    <td colSpan="4">Carregando Produtos...</td>
                  </tr>
                ) : (
                  produtosFiltrados.map((produto) => (
                    <tr key={produto.id}>
                      <td>{produto.marca || "-"}</td>
                      <td>{produto.nome}</td>
                      <td>{produto.tamanho || "-"}</td>
                      <td>R$ {produto.preco.toFixed(2)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NossosProdutos;
