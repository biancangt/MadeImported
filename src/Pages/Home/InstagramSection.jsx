import React from "react";
import post1 from "../../images/post-1.jpeg";
import post2 from "../../images/post-2.jpeg";
import post3 from "../../images/post-3.jpeg";

function InstagramSection() {
  return (
    <div className="instagram-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Nosso Instagram</h2>
          <p className="section-subtitle">Acompanhe as últimas novidades e dicas exclusivas!</p>
          <a
            href="https://www.instagram.com/madefgr?igsh=dmRjeng2Ym1nZnR2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg btn-instagram mt-3"
          >
            Confira
          </a>
        </div>

        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
            <div className="post-entry">
              <a
                href="https://www.instagram.com/p/DJXwh3dsftd/?igsh=MTJ6aXJ0ZXlkdTl5aw=="
                target="_blank"
                rel="noopener noreferrer"
                className="post-thumbnail"
              >
                <img src={post1} alt="Instagram Post 1" className="img-fluid" />
              </a>
              <div className="post-content-entry text-center mt-2">
                <h3 className="post-title">
                  <a
                    href="https://www.instagram.com/p/DJXwh3dsftd/?igsh=MTJ6aXJ0ZXlkdTl5aw=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Como saber se um perfume é original?
                  </a>
                </h3>
                <div className="meta">
                  <span>by Made Imported</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
            <div className="post-entry">
              <a
                href="https://www.instagram.com/p/DJ9-3q6hl6s/?igsh=MXJmYzg0ZzdrcGozYg=="
                target="_blank"
                rel="noopener noreferrer"
                className="post-thumbnail"
              >
                <img src={post2} alt="Instagram Post 2" className="img-fluid" />
              </a>
              <div className="post-content-entry text-center mt-2">
                <h3 className="post-title">
                  <a
                    href="https://www.instagram.com/p/DJ9-3q6hl6s/?igsh=MXJmYzg0ZzdrcGozYg=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    5 erros que as pessoas cometem ao comprar perfumes
                  </a>
                </h3>
                <div className="meta">
                  <span>by Made Imported</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
            <div className="post-entry">
              <a
                href="https://www.instagram.com/p/DJ4ziqEPmnU/?igsh=MXJwdnE2cjhicTc4ZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="post-thumbnail"
              >
                <img src={post3} alt="Instagram Post 3" className="img-fluid" />
              </a>
              <div className="post-content-entry text-center mt-2">
                <h3 className="post-title">
                  <a
                    href="https://www.instagram.com/p/DJ4ziqEPmnU/?igsh=MXJwdnE2cjhicTc4ZA=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Porque a ajuda de um especialista é indispensável?
                  </a>
                </h3>
                <div className="meta">
                  <span>by Made Imported</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default InstagramSection;
