// This is a React component for the Work Experience section in the Apply page.
// It includes a form that asks for information regarding previous work history.

export default function WorkExperience() {
  return (
    <form className="row g-5 justify-content-center pt-2">
      {/* Company input field */}
      <div className="col-sm-8" style={{ paddingTop: "30px" }}>
        <div className="form-floating text-center mb-3">
          <input
            type="text"
            className="form-control"
            id="inputCompany"
            aria-label="Company"
            placeholder="Company"
          />
          <label htmlFor="inputCompany" className="form-label">
            Company
          </label>
        </div>
      </div>

      {/* Position Title input field */}
      <div className="col-sm-8" style={{ marginTop: "15px" }}>
        <div className="form-floating text-center mb-3">
          <input
            type="text"
            className="form-control"
            id="inputPrevPosition"
            aria-label="PrevPosition"
            placeholder="PrevPosition"
          />
          <label htmlFor="inputPrevPosition" className="form-label">
            Position Title
          </label>
        </div>
      </div>

      {/* Start and End Date input fields */}
      <div className="row justify-content-center" style={{ marginTop: "15px", marginBottom: "20px" }}>
        <div className="col-sm-4">
          <div className="form-floating text-center mb-3">
            <input
              type="text"
              className="form-control"
              id="inputStartDate"
              aria-label="StartDate"
              placeholder="StartDate"
            />
            <label htmlFor="inputStartDate" className="form-label">
              Start Date
            </label>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-floating text-center">
            <input
              type="text"
              className="form-control"
              id="inputEndDate"
              aria-label="EndDate"
              placeholder="EndDate"
            />
            <label htmlFor="inputEndDate" className="form-label">
              End Date
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}