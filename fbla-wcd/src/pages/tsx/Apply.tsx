/*
This is a React component for the application form. The form includes the following sections:
- Personal Information (first name, last name, address, city, state, and zip code)
- Position (a dropdown for selecting the position to apply to)
- Work Experience (a list of experiences with an "add" button to include more experiences)
- Upload Resume (a file input for uploading a resume)
- Privacy Policy (a link to the privacy policy page)
*/

import { useState } from "react";
import WorkExperience from "../../components/tsx/WorkExperience";

// Apply Component: Represents the Application Form
export default function Apply() {
  // exp state variable is used to store work experience data
  const [exp, setExp] = useState([] as { id: number; value: string }[]);

  // addExp function is used to add new work experience to the state
  function addExp() {
    const item = {
      // Generate random id and set value as 'new'
      id: Math.floor(Math.random() * 1000),
      value: "new",
    };
    setExp((oldList) => [...oldList, item]);
  }

  return (
    <div className="container-fluid p-0 bg-light">
      {/* Application Form heading */}
      <h1 className="text-center text-black pt-5 mb-5">
        <strong>Application Form</strong>
      </h1>
      {/* Personal Information section*/}
      <div className="text-center mb-4">
        <h3 className="text-black">Personal Information</h3>
      </div>
      {/* Input fields for first and last names */}
      <form className="row g-5 justify-content-center">
        <div className="col-md-6 col-lg-3">
          <div className="form-floating text-center mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
            />
            <label htmlFor="floatingFirstName">First name</label>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="form-floating text-center mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
              id="floatingLastName"
            />
            <label htmlFor="floatingLastName" className="form-label">
              Last name
            </label>
          </div>
        </div>
      </form>

      {/* Input field for address */}
      <form className="row g-5 justify-content-center pt-2">
        <div className="col-12 col-lg-6">
          <div className="form-floating text-center mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingAddress"
              aria-label="Address"
              placeholder="Address"
            />
            <label htmlFor="floatingAddress" className="form-label">
              Address
            </label>
          </div>
        </div>
      </form>

      {/* Input fields for city, state, and zip */}
      <form className="row g-5 justify-content-center pt-2">
        <div className="col-sm-2">
          <div className="form-floating text-center mb-3">
            <input
              type="text"
              className="form-control"
              id="inputCity"
              aria-label="City"
              placeholder="City"
            />
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="form-floating text-center mb-3">
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>AL</option>
              <option>AK</option>
              <option>AZ</option>
              <option>AR</option>
              <option>CA</option>
              <option>CO</option>
              <option>CT</option>
              <option>DE</option>
              <option>DC</option>
              <option>FL</option>
              <option>GA</option>
              <option>HI</option>
              <option>ID</option>
              <option>IL</option>
              <option>IN</option>
              <option>IA</option>
              <option>KS</option>
              <option>KY</option>
              <option>LA</option>
              <option>ME</option>
              <option>MD</option>
              <option>MA</option>
              <option>MI</option>
              <option>MN</option>
              <option>MS</option>
              <option>MO</option>
              <option>MT</option>
              <option>NE</option>
              <option>NV</option>
              <option>NH</option>
              <option>NJ</option>
              <option>NM</option>
              <option>NY</option>
              <option>NC</option>
              <option>ND</option>
              <option>OH</option>
              <option>OK</option>
              <option>OR</option>
              <option>PA</option>
              <option>RI</option>
              <option>SC</option>
              <option>SD</option>
              <option>TN</option>
              <option>TX</option>
              <option>UT</option>
              <option>VT</option>
              <option>VA</option>
              <option>WA</option>
              <option>WV</option>
              <option>WI</option>
              <option>WY</option>
            </select>
            <label htmlFor="inputState" className="form-label">
              State
            </label>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="form-floating text-center mb-3">
            <input
              type="text"
              className="form-control"
              id="inputZip"
              aria-label="Zip"
              placeholder="Zip"
            />
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
          </div>
        </div>
      </form>
      {/* Input field for selecting positions */}
      <div className="text-center mb-4 mt-5">
        <h3 className="text-black">Position</h3>
      </div>
      <form className="row g-5 justify-content-center pt-2">
        <div className="col-12 col-lg-6">
          <div className="form-floating text-center mb-3">
            <select id="inputPosition" className="form-select">
              <option selected>Choose a position...</option>
              <option>AI Solutions Architect</option>
              <option>AI Research Scientist</option>
              <option>Data Scientist</option>
              <option>Machine Learning Engineer</option>
            </select>
            <label htmlFor="inputPosition" className="form-label">
              What position are you applying to?
            </label>
          </div>
        </div>
      </form>
      {/* Work Experience section */}
      <div className="mb-4 mt-5 text-center">
        <h3>Work Experience</h3>
        <ul>
          {exp.map((experience) => {
            return (
              <div
                key={experience.id}
                className="card mx-auto mt-4"
                style={{ maxWidth: "740px" }}
              >
                {/* Renders the WorkExperience component */}
                <WorkExperience />
              </div>
            );
          })}
        </ul>
        <button className="btn" onClick={() => addExp()}>
          <img
            style={{ maxHeight: "30px" }}
            src="./images/add.png"
            alt="add work experience"
          />
        </button>
      </div>
      <h3 className="text-center mb-4 mt-5">Upload Your Resume</h3>
      <div className="input-group mb-3 mx-auto" style={{ maxWidth: "600px" }}>
        <input type="file" className="form-control" id="inputGroupFile02" />
      </div>

      {/* Privacy Policy and Submit Application section */}
      <div
        className="mx-auto mt-5 mb-3"
        style={{
          paddingLeft: "350px",
          paddingRight: "350px",
        }}
      >
        <p>
          Please review the NeuroTech Industries{" "}
          <a href="/privacy-policy" target="_blank">
            Privacy Policy
          </a>
        </p>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            By checking this box, you will declare that you read and understand
            the privacy policy of NeuroTech Industries
          </label>
        </div>
        <a
          className="btn btn-outline-dark my-4 mb-5"
          href="/congratulations"
          role="button"
          type="submit"
        >
          Submit Application
        </a>
      </div>
    </div>
  );
}
