import React from "react";

// Importe as imagens
import truckIcon from "../../images/truck.svg";
import bagIcon from "../../images/bag.svg";
import supportIcon from "../../images/support.svg";
import checkIcon from "../../images/check.svg";
import whyChooseUsImg from "../../images/why-choose-us-img.png";

function WhyChooseUs() {
  return (
    <div id="WhyChooseUs" className="why-choose-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <h2 className="section-title section-title-responsive">
              Por que escolher nossa loja de perfumes?
            </h2>
            <p>
              Descubra uma seleção exclusiva dos melhores perfumes, com o melhor preço do mercado.
            </p>

            <div className="row my-5">
              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src={truckIcon} alt="Entrega rápida" className="img-fluid" />
                  </div>
                  <h3>Entrega Rápida &amp; </h3>
                  <p>Receba seus perfumes favoritos com rapidez.</p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src={bagIcon} alt="Compra Fácil" className="img-fluid" />
                  </div>
                  <h3>Compra Fácil</h3>
                  <p>Navegue por nossa loja e encontre sua fragrância perfeita.</p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src={supportIcon} alt="Suporte 24/7" className="img-fluid" />
                  </div>
                  <h3>Suporte 24/7</h3>
                  <p>Estamos prontos para ajudar você a escolher o perfume ideal, a qualquer hora do dia.</p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src={checkIcon} alt="Devoluções Sem Complicação" className="img-fluid" />
                  </div>
                  <h3>Produtos 100% Originais</h3>
                  <p>Garantimos autenticidade total em todos os nossos perfumes para sua tranquilidade.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="img-wrap">
              <img src={whyChooseUsImg} alt="Por que escolher nossa loja de perfumes" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
