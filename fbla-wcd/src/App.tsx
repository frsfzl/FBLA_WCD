// This is the main App component that renders the entire application

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/tsx/Navbar";
import Homepage from "./pages/tsx/Homepage";
import Careers from "./pages/tsx/Careers";
import Benefits from "./pages/tsx/Benefits";
import Apply from "./pages/tsx/Apply";
import PrivacyPolicy from "./pages/tsx/PrivacyPolicy";
import Congratulations from "./pages/tsx/Congratulations";
import Documentation from "./pages/tsx/Documentation";
import "./pages/css/App.css";

export default function App() {
  /* 
  This useEffect hook initializes an IntersectionObserver,
  which is used to add/remove the "show" and "hidden" classes
  to elements based on whether they are in the viewport 
  */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the element is intersecting the viewport, add "show" class and remove "hidden" class
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.remove("hidden");
          }
          // If the element is not intersecting the viewport, remove "show" class and add "hidden" class
          else {
            entry.target.classList.remove("show");
            entry.target.classList.add("hidden");
          }
        });
      },
      {
        threshold: 0.5, // Trigger observer when element is 50% visible
      }
    );

    // Select all elements with the "hidden" class and start observing them
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up observer when the component is unmounted
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // The main return statement where the Navbar and Router components are rendered
  return (
    <>
      {/* The Navbar component is rendered here */}
      <Navbar></Navbar>
      <Router>
        <Routes>
          {/* The Homepage component is rendered for the root URL ("/") */}
          <Route path="/" element={<Homepage />} />

          {/* The Careers component is rendered for the "/careers" URL */}
          <Route path="/careers" element={<Careers />} />

          {/* The Benefits component is rendered for the "/benefits" URL */}
          <Route path="/benefits" element={<Benefits />} />

          {/* The Apply component is rendered for the "/apply" URL */}
          <Route path="/apply" element={<Apply />} />

          {/* The PrivacyPolicy component is rendered for the "/privacy-policy" URL */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* The Congratulations component is rendered for the "/congratulations" URL */}
          <Route path="/congratulations" element={<Congratulations />} />

          {/* The Documentation component is rendered for the "/documentation" */}
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </Router>
    </>
  );
}
