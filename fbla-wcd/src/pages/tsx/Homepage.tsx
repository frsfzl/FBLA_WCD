/*
This is a React component for the main home page of NeuroTech Industries' website. It includes the following sections:
- HeroSection component
- Welcome message and description
- Careers card (image, description, and link to Careers page)
- Benefits card (image, description, and link to Benefits page)
*/

import "../css/Homepage.css";
import "../../components/css/HeroSection.css";
import HeroSection from "../../components/tsx/HeroSection";

// Homepage Component: Renders the entire homepage
function Homepage() {
  // The return statement renders the homepage's JSX structure
  return (
    <>
      {/* Renders the HeroSection component */}
      <HeroSection />
      {/* Container for the welcome message and cards */}
      <div className="container-fluid p-0 bg-light pt-5 pb-5">
        <div
          className="container-fluid text-center mt-4 mb-5"
          style={{ maxWidth: "1090px" }}
        >
          {/* Welcome message and description */}
          <h1 className="text-black display-4 hidden">
            <strong>Welcome to NeuroTech Industries</strong>
          </h1>
          <div className="text-black mt-5 ms-5 me-5 hidden">
            <p className="lead">
              At NeuroTech Industries, we are at the forefront of innovation,
              driving the evolution of Artificial Intelligence to empower
              tomorrow, today. As pioneers in the field, we believe in
              harnessing the potential of AI to create groundbreaking solutions
              that redefine industries and elevate human potential.
            </p>
            <br />
            <br />
          </div>
        </div>
        {/* Container for Careers section */}
        <div className="sections">
          <div
            className="images"
            style={{
              background: "url(/images/careers.jpg) no-repeat center / cover",
            }}
          ></div>
          <div className="texts hidden shadow" style={{ marginLeft: "-100px" }}>
            <div className="content">
              {/* Careers section header */}
              <h1>
                <strong>Careers</strong>
              </h1>
              {/* Careers section description*/}
              <p>
                Are you ready to be a part of the Neurotech team? Explore our
                current job openings, such as Machine Learning Engineer, Data
                Scientist, and AI Solutions Architect, and take the first step
                towards a rewarding career with NeuroTech Industries. Your
                journey into the future of AI starts here!
              </p>
              {/* Learn More button */}
              <a
                className="btn btn-outline-dark p-2 mt-2 mx-auto"
                href="/careers"
                role="button"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        {/* Container for Benefits section */}
        <div className="sections" style={{ paddingTop: "125px" }}>
          <div
            className="texts hidden z-1 shadow"
            style={{ marginRight: "-100px" }}
          >
            <div className="content">
              {/* Benefits section header */}
              <h1>
                <strong>Benefits</strong>
              </h1>
              {/* Benefits section description */}
              <p>
                At NeuroTech Industries, we prioritize the well-being and
                professional growth of our team members. As part of our
                commitment to fostering a supportive and enriching work
                environment, we offer an array of benefits designed to enhance
                both your personal and professional life.
              </p>
              {/* Learn More button */}
              <a
                className="btn btn-outline-dark p-2 mt-2 mx-auto"
                href="/benefits"
                role="button"
              >
                Learn More
              </a>
            </div>
          </div>
          <div
            className="images z-0"
            style={{
              background: "url(/images/benefits.jpg) no-repeat center / cover",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
