/*
This is a React component for the Careers page. The page includes the following:
- Introductory header and paragraph
- Job Openings section that has four cards displaying the company's open job positions
*/
export default function Careers() {
  return (
    <>
      {/* Hero section for Careers page */}
      <div className="hero-container">
        <video
          src="/videos/careers-video.mp4"
          autoPlay
          loop
          muted
        />
        <h1>CAREERS</h1>
      </div>
      <div className="container-fluid p-0 bg-light pt-5 pb-5 border border-light">
        <div
          className="container-fluid text-center mt-4 mb-5"
          style={{ maxWidth: "1090px" }}
        >
          {/* Introductory paragraphs */}
          <h1 className="text-dark display-4 hidden">
            <strong>Work With Us</strong>
          </h1>
          <div
            className="text-dark mt-5 ms-5 me-5 hidden"
            style={{ maxWidth: "940px" }}
          >
            <p className="lead">
              At NeuroTech Industries, we offer more than just a job – we
              provide an opportunity to be part of a dynamic team driving the
              future of Artificial Intelligence. Join us to collaborate with
              passionate professionals, contribute to cutting-edge projects, and
              experience a culture that values continuous learning and
              diversity.
            </p>
            <br />
          </div>
          {/* Job Openings section */}
          <div
            className="container-fluid text-center mt-4 mb-5"
            style={{ maxWidth: "1420px" }}
          >
            <h1 className="text-dark display-6 pt-4">Job Openings</h1>
            <div className="row text-start pt-5">
              <div className="col-sm-6 mb-3 mb-sm-0">
                {/* AI Solutions Architect card */}
                <div className="card">
                  <div
                    className="card-body text-dark"
                    style={{ backgroundColor: "#ebeaea" }}
                  >
                    <h3 className="card-title pt-3 ps-3">
                      AI Solutions Architect
                      <span className="badge bg-secondary ms-2">New</span>
                    </h3>
                    <p className="card-text pt-3 ps-3">
                      <strong>Responsibilities</strong>
                    </p>
                    <p className="card-text">
                      <ul className="text-dark">
                        <li>
                          Design and implement comprehensive AI solutions to
                          meet business objectives
                        </li>
                        <li>
                          Collaborate with teams to understand and address
                          complex technical requirements
                        </li>
                        <li>
                          Ensure seamless integration of AI solutions into
                          existing systems and applications
                        </li>
                        <li>
                          Stay abreast of industry trends and emerging
                          technologies to drive continuous improvement
                        </li>
                      </ul>
                    </p>
                    <p className="card-text pt-3 ps-3">
                      <strong>Qualifications</strong>
                    </p>
                    <p className="card-text">
                      <ul className="text-dark pb-3">
                        <li>
                          Bachelor's or advanced degree in Computer Science,
                          Engineering, or a related field
                        </li>
                        <li>
                          Expertise in machine learning algorithms, model
                          deployment, and scalability
                        </li>
                        <li>
                          Proficiency in programming languages such as Python
                          and experience with AI/ML frameworks
                        </li>
                        <li>
                          Excellent communication and problem-solving skills
                        </li>
                      </ul>
                    </p>
                    <a
                      href="/apply"
                      className="btn btn-outline-dark d-md-flex justify-content-md-center me-md-5 ms-md-5"
                    >
                      <strong>Apply</strong>
                    </a>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                {/* Data scientist card */}
                <div className="card">
                  <div
                    className="card-body text-dark"
                    style={{ backgroundColor: "#ebeaea" }}
                  >
                    <h3 className="card-title pt-3 ps-3">Data Scientist</h3>
                    <p className="card-text pt-3 ps-3">
                      <strong>Responsibilities</strong>
                    </p>
                    <p className="card-text">
                      <ul className="text-dark">
                        <li>
                          Analyze large datasets to extract meaningful patterns,
                          trends, and insights
                        </li>
                        <li>
                          Develop and implement machine learning models to solve
                          complex business challenges
                        </li>
                        <li>
                          Collaborate with cross-functional teams to understand
                          data needs and deliver actionable solutions
                        </li>
                        <li>
                          Stay current on industry trends, tools, and
                          methodologies in data science
                        </li>
                      </ul>
                    </p>
                    <p className="card-text pt-3 ps-3">
                      <strong>Qualifications</strong>
                    </p>
                    <p className="card-text">
                      <ul className="text-dark pb-3">
                        <li>
                          Bachelor's or advanced degree in Data Science,
                          Computer Science, Statistics, or a related field
                        </li>
                        <li>
                          Proficiency in programming languages such as Python,
                          SQL, or R
                        </li>
                        <li>
                          Strong problem-solving skills and the ability to
                          communicate complex findings effectively
                        </li>
                        <li>
                          Familiarity with data visualization tools and
                          techniques
                        </li>
                      </ul>
                    </p>
                    <a
                      href="/apply"
                      className="btn btn-outline-dark d-md-flex justify-content-md-center me-md-5 ms-md-5"
                    >
                      <strong>Apply</strong>
                    </a>
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div className="row text-start pt-5">
              <div className="col-sm-6 mb-3 mb-sm-0">
                {/* AI Research Scientist card */}
                <div className="card">
                  <div
                    className="card-body text-dark"
                    style={{ backgroundColor: "#ebeaea" }}
                  >
                    <h3 className="card-title pt-3 ps-3">
                      AI Research Scientist
                    </h3>
                    <p className="card-text pt-3 ps-3">
                      <strong>Responsibilities</strong>
                    </p>
                    <p className="card-text">
                      <ul className="text-dark">
                        <li>
                          Conduct in-depth research to advance AI methodologies
                          and algorithms.
                        </li>
                        <li>
                          Collaborate with engineers and data scientists to
                          implement and test research findings.
                        </li>
                        <li>
                          Stay updated on the latest developments in AI research
                          and contribute to the company's intellectual property.
                        </li>
                        <li>
                          Stay abreast of the latest advancements in machine
                          learning and AI technologies.
                        </li>
                      </ul>
                    </p>
                    <p className="card-text pt-3 ps-3">
                      <strong>Qualifications</strong>
                    </p>
                    <p className="card-text">
                      <ul className="text-dark pb-3">
                        <li>
                          PhD in Computer Science, Artificial Intelligence, or a
                          related field.
                        </li>
                        <li>
                          Strong background in AI research with a focus on
                          machine learning, natural language processing, or
                          computer vision.
                        </li>
                        <li>
                          Proficiency in programming languages such as Python or
                          Java.
                        </li>
                        <li>
                          Excellent problem-solving and analytical skills.
                        </li>
                        <li>
                          Strong communication and collaboration abilities.
                        </li>
                      </ul>
                    </p>
                    <a
                      href="/apply"
                      className="btn btn-outline-dark d-md-flex justify-content-md-center me-md-5 ms-md-5"
                    >
                      <strong>Apply</strong>
                    </a>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                {/* Machine Learning Engineer card */}
                <div className="card">
                  <div
                    className="card-body text-dark"
                    style={{ backgroundColor: "#ebeaea" }}
                  >
                    <h3 className="card-title pt-3 ps-3">
                      Machine Learning Engineer
                    </h3>
                    <p className="card-text pt-3 ps-3">
                      <strong>Responsibilities</strong>
                    </p>
                    <p className="card-text">
                      <ul className="text-dark">
                        <li>
                          Design, develop, and deploy machine learning models
                          and algorithms.
                        </li>
                        <li>
                          Collaborate with cross-functional teams to understand
                          project requirements and objectives.
                        </li>
                        <li>
                          Implement scalable and efficient solutions for complex
                          business challenges.
                        </li>
                        <li>
                          Stay abreast of the latest advancements in machine
                          learning and AI technologies.
                        </li>
                      </ul>
                    </p>
                    <p className="card-text pt-3 ps-3">
                      <strong>Qualifications</strong>
                    </p>
                    <p className="card-text">
                      <ul className="text-dark pb-3">
                        <li>
                          Bachelor's or advanced degree in Computer Science,
                          Engineering, or a related field.
                        </li>
                        <li>
                          Proficiency in programming languages such as Python,
                          TensorFlow, and/or PyTorch.
                        </li>
                        <li>
                          Strong problem-solving skills and ability to work in a
                          collaborative environment.
                        </li>
                        <li>
                          Familiarity with data preprocessing, feature
                          engineering, and model evaluation.
                        </li>
                      </ul>
                    </p>
                    <a
                      href="/apply"
                      className="btn btn-outline-dark d-md-flex justify-content-md-center me-md-5 ms-md-5"
                    >
                      <strong>Apply</strong>
                    </a>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
