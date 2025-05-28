import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container relative">
        <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div className="mb-4 footer-logo-wrap">
              <a href="#" className="footer-logo">
                MadeImported<span>.</span>
              </a>
            </div>
           

            <ul className="list-unstyled custom-social">
              <li>
                <a href="mailto:madeimportado@gmail.com" aria-label="Email">
                  <span className="fa-solid fa-envelope"></span>
                </a>
              </li>
              <li>
                 <a href="https://wa.me/5511915349430" target="_blank" rel="noopener noreferrer" aria-label="Telefone WhatsApp">
                    <span className="fa-solid fa-phone"></span>
                 </a>
                </li>

              <li>
                <a href="https://instagram.com/madefgr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <span className="fa-brands fa-instagram"></span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511915349430" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <span className="fa-brands fa-whatsapp"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-top custom-border-color copyright">
      <div className="row pt-4">
        <div className="col-lg-12">
          <p className="mb-2 text-center">
            &copy; 2025 . Website developed by{' '}
            <a href="https://biancangt.netlify.app/" target="_blank" rel="noopener noreferrer">
              BNgt
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
