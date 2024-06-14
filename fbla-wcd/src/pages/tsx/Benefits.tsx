/*
This is a React component for the Benefits page. The page includes the following:
- Introductory header and paragraph
- A list of benefits that the company offers, seperated into three sections
- A call-to-action button that links to the Careers page
*/

import "../../components/css/HeroSection.css";

export default function Benefits() {
  return (
    <>
      {/* HeroSection for the Benefits page */}
      <div className="hero-container">
        <video
          src="../../public/videos/benefits-video.mp4"
          autoPlay
          loop
          muted
        />
        <h1>BENEFITS</h1>
      </div>
      <div className="container-fluid p-0 bg-light pt-5 pb-5 border border-light">
        <div
          className="container-fluid text-center mt-4 mb-5"
          style={{ maxWidth: "1090px" }}
        >
          {/* Introductory header and paragraphs */}
          <h1 className="text-dark display-4 hidden">
            <strong>Why Choose Us?</strong>
          </h1>
          <div className="text-dark mt-5 ms-5 me-5 hidden">
            <p className="lead">
              Our workplace is more than just a job – it's an environment that
              fosters growth, encourages creativity, and values diversity. We
              believe in empowering our employees to reach their full potential,
              both personally and professionally.
            </p>
            <br />
          </div>
        </div>
        {/* Section on employee welfare */}
        <div className="container text-dark">
          <h2 className="text-dark text-center display-6 pd-4 hidden">
            We prioritize your well-being.
          </h2>
          <br />
          <br />
          <div className="row pt-1 pb-5 hidden">
            <div className="col-md-4 text-center">
              <i className="fas fa-globe-americas fa-3x mb-3 text-primary"></i>
              <h3 className="mb-3">Health Coverage</h3>
              <p className="lead">
                Enjoy peace of mind with our health insurance plans that cover
                medical, dental, and vision expenses.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fas fa-users fa-3x mb-3 text-primary"></i>
              <h3 className="mb-3">Generous Paid Time Off</h3>
              <p className="lead">
                Recharge and relax with ample paid time off, including vacation
                days, holidays, and personal leave
              </p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fas fa-graduation-cap fa-3x mb-3 text-primary"></i>
              <h3 className="mb-3">401(k) Savings Plan</h3>
              <p className="lead">
                Secure your financial future with our comprehensive 401(k) plan,
                featuring employer matching contributions
              </p>
            </div>
          </div>
          <br />
          <br />
          {/* Section on supporting life goals */}
          <h2 className="text-dark text-center display-6 pd-4 hidden">
            We support your life goals.
          </h2>
          <br />
          <br />
          <div className="row hidden">
            <div className="col-md-4 text-center">
              <i className="fas fa-cogs fa-3x mb-3 text-primary"></i>
              <h3 className="mb-3"> Free Gym Membership</h3>
              <p className="lead">
                Embrace a healthy lifestyle with a complimentary gym membership
                at a gym of your choice.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fas fa-handshake fa-3x mb-3 text-primary"></i>
              <h3 className="mb-3">Development Stipends</h3>
              <p className="lead">
                Invest in your personal growth with stipends for courses,
                activities, or conferences that align with your interests
              </p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fas fa-hands-helping fa-3x mb-3 text-primary"></i>
              <h3 className="mb-3">Wellness Programs</h3>
              <p className="lead">
                Access holistic wellness programs that support your physical,
                mental, and emotional well-being
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          {/* Section on volunteering help */}
          <h2 className="text-dark text-center display-6 pd-4 hidden">
            We help you make an impact.
          </h2>
          <br />
          <br />
          <div className="row hidden">
            <div className="col-md-4 text-center">
              <i className="fas fa-cogs fa-3x mb-3 text-primary"></i>
              <h3 className="mb-3">Corporate Matching</h3>
              <p className="lead">
                NeuroTech matches your charitable donations up to $10,000 per
                employee, per calendar year
              </p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fas fa-handshake fa-3x mb-3 text-primary"></i>
              <h3 className="mb-3">Make Every Hour Count</h3>
              <p className="lead">
                For each hour of volunteering you complete, you receive $10 to
                donate to an organization of your choice.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fas fa-hands-helping fa-3x mb-3 text-primary"></i>
              <h3 className="mb-3">Social Impact Team</h3>
              <p className="lead">
                Partner with our Social Impact team to find meaningful
                volunteering opportunities and make a difference
              </p>
            </div>
          </div>
          {/* Call-to-action button that links to the Careers page */}
          <div className="row justify-content-center hidden fw-light">
            <a
              href="/careers"
              className="btn btn-outline-dark mx-5"
              style={{
                maxWidth: "200px",
                fontSize: "30px",
                marginTop: "40px",
                marginBottom: "25px",
              }}
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
