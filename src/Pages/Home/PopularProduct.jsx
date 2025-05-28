import React from 'react';
import data from "../../data/index.json";

function ProductSection() {
  return (
    <>
      <div className="product-section">
        <div className="container">
          <div className="row">

            {/* Coluna 1 - Texto */}
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0 product-text">
              <h2 className="mb-4 section-title">Descubra perfumes exclusivos.</h2>
              <p className="mb-4">
                Encontre fragrâncias únicas que despertam emoções e refletem sua essência. Perfumes sofisticados para todos os estilos.
              </p>
              <p>
                <a href="shop" className="btn-product">Ver Coleção</a>
              </p>
            </div>

            {/* Produtos */}
            {data.products.map((item, index) => (
              <div key={index} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                <div className="product-item">
                  <img
                    src={item.imagem}
                    className="img-fluid product-thumbnail"
                    alt={item.produto}
                  />
                  <h3 className="product-title">{item.produto}</h3>
                  <p className="product-brand">{item.marca}</p>
                  <strong className="product-price">R${item.preco.toFixed(2)}</strong>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSection;
