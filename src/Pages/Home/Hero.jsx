import React, { useState, useEffect } from "react";
import video1 from "../../videos/made-imported.mp4"; 
import video2 from "../../videos/made-imported-mobile.mp4"; 

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    checkMobile(); 

    window.addEventListener("resize", checkMobile); 

    return () => {
      window.removeEventListener("resize", checkMobile); 
    };
  }, []);

  return (
    <div className="hero" id="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 order-2 order-lg-1">
            <div className="intro-excerpt">
              <h1>
                Conheça nossos<span className="d-block">perfumes!</span>
              </h1>
              <p className="mb-4">
                Descubra a essência da elegância com perfumes exclusivos das melhores marcas internacionais. A sua fragrância favorita, agora ao seu alcance.
              </p>
              <p>
                <a
                  href="https://wa.me/5511915349430?text=Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-white-outline"
                >
                  Fale Conosco
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-7 order-1 order-lg-2">
            <div className="hero-video-wrap">
              <video
                src={isMobile ? video2 : video1}
                autoPlay
                loop
                muted
                playsInline
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
