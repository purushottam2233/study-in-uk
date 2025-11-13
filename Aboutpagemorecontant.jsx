import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

// Example React component that reproduces a responsive "About the UK" page
// inspired by the British Council page. This is a single-file component you can
// drop into a Create React App project as AboutUKPage.jsx and import into App.js.

export default function Aboutpagemorecontant() {
  const universities = [
    { name: 'University of Oxford', rank: 'Top-ranked', img: 'https://images.pexels.com/photos/2031730/pexels-photo-2031730.jpeg' },
    { name: 'University of Cambridge', rank: 'Historic & Prestigious', img: 'https://media.istockphoto.com/id/611591082/photo/historic-college-building-in-cambridge-united-kingdom.jpg?s=2048x2048&w=is&k=20&c=H3ws5B4igThLU-_LtKv2__u9SZHL0wyupNkmtMJZN_w=' },
    { name: 'Imperial College London', rank: 'STEM Leader', img: 'https://images.pexels.com/photos/34583796/pexels-photo-34583796.jpeg' },
  ];

  const benefits = [
    'World-class universities & research',
    'Wide range of courses & flexible study options',
    'Strong industry links and work opportunities',
    'Vibrant student life and multicultural communities',
  ];

  return (
    <div className="about-uk-page">
      {/* HERO */}
      <header className="bg-dark text-white position-relative" style={{backgroundImage: 'url(https://source.unsplash.com/1600x900/?london,uk)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="overlay" style={{background: '#04043F'}}>
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-8">
                <h1 className="display-5 fw-bold">Why study in the <span className="text-primary">United Kingdom</span></h1>
                <p className="lead">World-leading education, a culturally rich environment and global career prospects.</p>
                <div className="d-flex gap-2 mt-4">
                  <a href="#courses" className="btn btn-primary btn-lg">Explore courses</a>
                  <a href="#apply" className="btn btn-outline-light btn-lg">How to apply</a>
                </div>
              </div>
              <div className="col-lg-5 d-none d-lg-block">
                {/* small card or stat panel */}
                <div className="card text-dark shadow-lg" style={{opacity: 0.95}}>
                  <div className="card-body">
                    <h5 className="card-title">By the numbers</h5>
                    <div className="row text-center">
                      <div className="col">
                        <h3 className="mb-0">150+</h3>
                        <small className="text-muted">Universities</small>
                      </div>
                      <div className="col">
                        <h3 className="mb-0">600k+</h3>
                        <small className="text-muted">International students</small>
                      </div>
                      <div className="col">
                        <h3 className="mb-0">1-3 yrs</h3>
                        <small className="text-muted">Typical masters length</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="container my-5">
        {/* Intro + Benefits */}
        <section className="row g-4 align-items-center">
          <div className="col-lg-7">
            <h2>About studying in the UK</h2>
            <p className="text-muted">The UK offers high-quality teaching, internationally recognised qualifications and a friendly, multicultural environment. Whether you want to study arts, sciences or professional courses, you’ll find a wide selection across the country.</p>

            <ul className="list-unstyled mt-3">
              {benefits.map((b, i) => (
                <li key={i} className="d-flex align-items-start mb-2">
                  <span className="badge bg-primary rounded-pill me-3">{i+1}</span>
                  <div>
                    <strong>{b}</strong>
                    <div className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae.</div>
                  </div>
                </li>
              ))}
            </ul>

            <a href="#apply" className="btn btn-outline-primary mt-3">Start your application</a>
          </div>

          <div className="col-lg-5">
            <div className="card shadow-sm">
              <img src="https://study-uk.britishcouncil.org/_next/image?url=https%3A%2F%2Fucarecdn.com%2F9fc8fbfe-458d-4857-82bf-0ee05500913f%2F-%2Fcrop%2F1200x675%2F0%2C63%2F-%2Fpreview%2F-%2Fformat%2Fauto%2F&w=1920&q=75" className="card-img-top" alt="students" />
              <div className="card-body">
                <h5 className="card-title">Student stories</h5>
                <p className="card-text text-muted">Hear from international students who chose the UK for their education and career growth.</p>
                <a href="#stories" className="btn btn-primary">Read stories</a>
              </div>
            </div>
          </div>
        </section>

        {/* Top Universities grid */}
        <section id="universities" className="my-5">
          <h3>Top universities &amp; institutions</h3>
          <div className="row g-4 mt-2">
            {universities.map((u, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <img src={u.img} className="card-img-top" style={{height: '180px', objectFit: 'cover'}} alt={u.name} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{u.name}</h5>
                    <p className="card-text text-muted mb-2">{u.rank}</p>
                    <a className="mt-auto btn btn-outline-primary" href="#">View courses</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cost & Living cards */}
        <section id="cost" className="my-5">
          <h3>Cost of living & fees</h3>
          <div className="row g-3 mt-3">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Tuition fees</h5>
                  <p className="card-text text-muted">Costs vary by course and university. International fees are typically higher than domestic tuition.</p>
                  <a href="#" className="stretched-link">Learn more</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Living costs</h5>
                  <p className="card-text text-muted">Budget for accommodation, food, transport and entertainment. Cities like London are more expensive.</p>
                  <a href="#" className="stretched-link">Estimate costs</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Scholarships</h5>
                  <p className="card-text text-muted">Many universities and external organisations offer scholarships for international students.</p>
                  <a href="#" className="stretched-link">Find scholarships</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accordion for visas & entry */}
        <section id="visas" className="my-5">
          <div className="row">
            <div className="col-lg-8">
              <h3>Visas & entry requirements</h3>
              <div className="accordion" id="visaAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Student Visa (Tier 4 / Student Route)
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#visaAccordion">
                    <div className="accordion-body">
                      <p className="text-muted">Most international students will need a Student visa. You generally need a confirmed offer, maintenance funds and English language evidence.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Short-term study & short courses
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#visaAccordion">
                    <div className="accordion-body">
                      <p className="text-muted">Short-term study options exist for language courses or short professional development programmes — rules differ by nationality and length.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="card bg-light h-100">
                <div className="card-body">
                  <h5 className="card-title">Need help?</h5>
                  <p className="card-text text-muted">Contact your nearest British Council or education adviser for country-specific guidance and support.</p>
                  <a href="#contact" className="btn " style={{background: '#04043F',color:"white"}}>Find local support</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="my-5 p-4 rounded" style={{background: 'linear-gradient(90deg,#eef2ff,#f8fafc)'}}>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div>
              <h4 className="mb-1">Ready to take the next step?</h4>
              <p className="mb-0 text-muted">Find courses, check entry requirements and start your application today.</p>
            </div>
            <div className="mt-3 mt-md-0">
              <a href="#courses" className="btn btn-primary btn-lg me-2">Find courses</a>
              <a href="#contact" className="btn btn-outline-secondary btn-lg">Contact us</a>
            </div>
          </div>
        </section>

      </main>

     
      {/* Small styles local to this component */}
      <style jsx>{`
        .overlay { padding: 60px 0; }
        @media (max-width: 767px) {
          .overlay { padding: 40px 0; }
        }
      `}</style>
    </div>
  );
}


// export default Aboutpagemorecontant
