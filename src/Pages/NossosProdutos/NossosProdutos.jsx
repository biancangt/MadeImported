import React, { useEffect, useState } from "react";
import Footer from "../Home/Footer";
import { buscarProdutos } from "../../firebase";
import { Search } from "lucide-react";

const NossosProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [filtroMarca, setFiltroMarca] = useState("");
  const [ordenar, setOrdenar] = useState("");

  useEffect(() => {
    async function loadProdutos() {
      const dados = await buscarProdutos();
      const ordenadosPorMarca = dados.sort((a, b) => {
        const marcaA = a.marca ? a.marca.toLowerCase() : "";
        const marcaB = b.marca ? b.marca.toLowerCase() : "";
        return marcaA.localeCompare(marcaB);
      });
      setProdutos(ordenadosPorMarca);
    }
    loadProdutos();
  }, []);

  const marcas = Array.from(new Set(produtos.map((p) => p.marca).filter(Boolean)));

  const produtosFiltrados = produtos
    .filter((produto) => {
      const busca = filtro.toLowerCase();
      return (
        produto.nome.toLowerCase().includes(busca) ||
        (produto.marca && produto.marca.toLowerCase().includes(busca))
      );
    })
    .filter((produto) => (filtroMarca ? produto.marca === filtroMarca : true))
    .sort((a, b) => {
      if (ordenar === "menor") return a.preco - b.preco;
      if (ordenar === "maior") return b.preco - a.preco;
      return 0;
    });

  return (
    <>
      <style>{`
        .produtos-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          justify-items: center;
          margin-top: 20px;
        }

        .produto-item {
          text-align: center;
        }

        .produto-item img,
        .produto-item .sem-imagem {
          width: 100%;
          height: 180px;
          object-fit: contain;
          background: #f9f9f9;
        }

        .produto-item .sem-imagem {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          font-size: 14px;
        }

        .produto-info {
          margin-top: 10px;
        }

        .produto-info h5 {
          font-size: 1.1rem;
          font-weight: bold;
          margin-bottom: 6px;
        }

        .produto-info p {
          margin: 4px 0;
          font-size: 0.95rem;
        }

        .produto-info .preco {
          font-weight: bold;
          color: #000;
          margin-top: 6px;
        }
      `}</style>

      <section className="titulo-produtos">
        <div className="container">
          <h1 className="titulo-produtos__texto">Nossos Produtos</h1>
        </div>
      </section>

      <section className="untree_co-section product-section before-footer-section fundo-branco">
        <div className="container">
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

          <div className="produtos-container">
            {produtosFiltrados.length === 0 ? (
              <p className="text-center">Carregando Produtos...</p>
            ) : (
              produtosFiltrados.map((produto) => (
                <div key={produto.id} className="produto-item">
                  {produto.imagem ? (
                    <img src={produto.imagem} alt={produto.nome} />
                  ) : (
                    <div className="sem-imagem">Sem imagem</div>
                  )}

                  <div className="produto-info">
                    <h5>{produto.nome}</h5>
                    <p>Marca: {produto.marca || "-"}</p>
                    <p>Tamanho: {produto.tamanho || "-"}</p>
                    <p className="preco">R$ {produto.preco.toFixed(2)}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NossosProdutos;
