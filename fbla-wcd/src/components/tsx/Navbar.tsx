/*
This is a React component for the navigation bar that stretches across the top of the website.
It takes you to the different pages: the Homepage, Careers, Benefits, and Documentation pages.
*/

import Logo from "/images/dark-logo.svg"; // Importing the Dark Industries logo

function Navbar() {
  // The Navbar component returns a navigation bar with a dark logo and links to different pages
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg bg-body-tertiary border border-light"
      data-bs-theme="light"
    >
      {/* Container for the fluid layout */}
      <div className="container-fluid">
        {/* Link to the homepage */}
        <a className="navbar-brand pe-5" aria-current="page" href="/">
          {/* Displaying the Dark Industries logo */}
          <img
            src={Logo}
            alt="Dark Industries Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
            style={{ marginTop: "-3.3px" }}
          />{" "}
          <strong style={{ fontSize: "22px" }}>NEUROTECH INDUSTRIES</strong>
          {/* Displaying the name of the company */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* Button to toggle the navigation dropdown */}
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Collapsible navigation bar content */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {/* List of navigation links */}
          <ul className="navbar-nav">
            {/* Navigation item for Careers page */}
            <li className="nav-item pe-3">
              <a className="nav-link active" href="/careers">
                Careers
              </a>
            </li>
            {/* Navigation item for Benefits page */}
            <li className="nav-item pe-3">
              <a className="nav-link active" href="/benefits">
                Benefits
              </a>
            </li>
            {/* Navigation item for Documentation page */}
            <li className="nav-item">
              <a className="nav-link active" href="/documentation">
                Documentation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
