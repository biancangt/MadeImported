import React, { useState } from "react";

const testimonials = [
  { text: "Muito abaixo do preço de mercado, amei!", name: "Maria Oliveira" },
  { text: "Entrega rápida e produtos originais. Recomendo muito!", name: "João Silva" },
  { text: "Atendimento excelente e perfumes de alta qualidade.", name: "Ana Souza" },
  { text: "Variedade incrível e preço justo, voltarei a comprar.", name: "Carlos Lima" },
  { text: "Melhor loja de perfumes importados que já encontrei!", name: "Juliana Fernandes" },
  { text: "Adorei o atendimento personalizado e a atenção aos detalhes.", name: "Fernanda Rocha" },
  { text: "Comprei para presentear e todos adoraram o perfume!", name: "Rafael Santos" },
  { text: "Entrega super rápida.", name: "Lucas Pereira" },
  { text: "Recomendo para quem busca perfumes importados originais.", name: "Camila Costa" },
];

function Stars() {
  return (
    <div className="stars" aria-label="5 estrelas">
      {"★★★★★"}
    </div>
  );
}

export default function ResponsiveCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  const handleToggle = () => {
    setIsPaused((prev) => !prev);
  };

  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <>
      <style>{`
        .testimonial-section {
          padding: 3rem 0 7rem 0;
          background: #fafafa;
        }
        .section-title {
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 0.5rem;
          color: #333;
          user-select: none;
        }
        .section-subtitle {
          font-size: 1.1rem;
          text-align: center;
          margin-bottom: 2rem;
          color: #555;
          user-select: none;
        }
        .carousel-container {
          width: 100%;
          background: #f5f5f5;
          padding: 2rem 0;
          border-radius: 0.5rem;
          box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
          overflow-x: hidden;
          position: relative;
          cursor: pointer;
        }
        .carousel-track {
          display: flex;
          width: max-content;
          user-select: none;
          animation: scroll-left 45s linear infinite;
        }
        .carousel-container.paused .carousel-track {
          animation-play-state: paused;
        }
        .testimonial-card {
          flex: 0 0 auto;
          width: 270px;
          background: #fff;
          margin-right: 24px;
          padding: 1.5rem;
          border-radius: 0.75rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          text-align: center;
          box-sizing: border-box;
          transition: transform 0.3s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-5px);
        }
        blockquote {
          font-style: italic;
          margin-bottom: 1rem;
          color: #333;
        }
        .stars {
          color: #fbc02d;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          user-select: none;
        }
        h5 {
          margin: 0;
          font-weight: bold;
        }

        @media (max-width: 767px) {
          .testimonial-card {
            width: 85vw;
            margin-right: 16px;
          }
          .nav-arrow {
            display: none;
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="testimonial-section" aria-label="Seção de depoimentos de clientes">
        <h2 className="section-title">Confira nossas reviews</h2>
        <p className="section-subtitle">Depoimentos dos nossos clientes</p>

        <div
          className={`carousel-container ${isPaused ? "paused" : ""}`}
          onClick={handleToggle}
          aria-label="Carrossel de depoimentos, clique para pausar ou retomar"
        >
          <div className="carousel-track" aria-live="polite">
            {repeatedTestimonials.map((item, idx) => (
              <div className="testimonial-card" key={idx}>
                <Stars />
                <blockquote>“{item.text}”</blockquote>
                <h5>{item.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
