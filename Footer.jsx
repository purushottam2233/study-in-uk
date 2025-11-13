import React from 'react'

function Footer() {
  return (
   <>
   
    <footer className="site-footer" aria-label="Site footer">
      <div className="footer-inner">
        {/* Newsletter / top area */}
        {/* <div className="footer-newsletter">
          <div className="newsletter-text">
            <h3>Sign up to our newsletter</h3>
            <p>
              Get the latest updates and advice on applications, scholarships,
              visas and events.
            </p>
          </div>

          <form className="newsletter-form" aria-label="Newsletter sign up">
            <label htmlFor="newsletter-email" className="visually-hidden">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder="Email address"
              required
            />
            <button type="submit">Sign up</button>
          </form>
        </div> */}

        {/* Link columns */}
        <div className="footer-grid">
          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><a href="#">About the UK</a></li>
              <li><a href="#">World famous universities</a></li>
              <li><a href="#">Short, flexible courses</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Why study</h4>
            <ul>
              <li><a href="#">Student life</a></li>
              <li><a href="#">How to apply</a></li>
              <li><a href="#">Student visas</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Find somewhere to live</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Data protection</a></li>
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4>Follow us</h4>
            <div className="social">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="social-link">
              <i className="fa-brands fa-instagram"></i>
              </a>

              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="social-link">
              <i className="fa-brands fa-facebook"></i>
              </a>

              {/* Twitter */}
              <a href="#" aria-label="Twitter" className="social-link">
              <i className="fa-brands fa-twitter"></i>
              </a>
            </div>

            <div className="footer-legal-links">
              <a href="#">Accessibility</a> 
              <a href="#">Data protection</a> 
              <a href="#">Terms of use</a> 
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom">
          <p>2025 © British Council</p>
          <p className="org-info">
            The United Kingdom's international organisation for cultural
            relations and educational opportunities.
          </p>
        </div>
      </div>
    </footer>

   
   </>
  )
}

export default Footer
