import React from "react";

// Importando as imagens (você pode trocar pelas imagens dos perfumes)
import imgGrid1 from "../../images/img-grid-1.png";
import imgGrid2 from "../../images/img-grid-2.png";
import imgGrid3 from "../../images/img-grid-3.png";

function WeHelp() {
  return (
    <div id="WeHelp" className="we-help-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="imgs-grid">
              <div className="grid grid-1">
                <img src={imgGrid1} alt="Perfume 1" />
              </div>
              <div className="grid grid-2">
                <img src={imgGrid2} alt="Perfume 2" />
              </div>
              <div className="grid grid-3">
                <img src={imgGrid3} alt="Perfume 3" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <h2 className="section-title mb-4">Quem Somos</h2>
            <p>
            A MadeImported é uma empresa dedicada à importação e venda de perfumes exclusivos e de alta qualidade. Nosso foco é trazer fragrâncias autênticas das marcas mais renomadas do mundo, oferecendo uma experiência única e sofisticada para nossos clientes.

Priorizamos o atendimento personalizado, a transparência e a garantia da autenticidade em cada produto, para que você tenha total confiança na sua compra. Com rapidez na entrega e compromisso com a satisfação, buscamos sempre superar suas expectativas.

Seja para presentear ou para uso pessoal, nossos perfumes importados são selecionados com cuidado para atender a diferentes gostos e estilos, porque acreditamos que o aroma é uma forma poderosa de expressão pessoal.
            </p>

            <ul className="list-unstyled custom-list my-4">
              <li>Fragrâncias originais e importadas</li>
              <li>Variedade de marcas renomadas</li>
              <li>Atendimento personalizado</li>
              <li>Entrega rápida e segura</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeHelp;
