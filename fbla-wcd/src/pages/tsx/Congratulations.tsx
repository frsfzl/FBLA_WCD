/*
This is React component for the Congratulations page after the applicant submits their form.
*/

import { useState } from "react";
import ReactConfetti from "react-confetti";

// Initiate the confetti on load
export default function Congratulations() {
  const [showConfetti, setShowConfetti] = useState(true);

  // Hide confetti after 7 seconds
  setTimeout(() => {
    setShowConfetti(false);
  }, 7000);

  return (
    <>
      {/* Congratulations header */}
      <h1 className="text-center mt-5 pb-2" style={{ fontSize: "50px" }}>
        Congratulations!
      </h1>
      <p
        className="pt-4"
        style={{ marginLeft: "200px", marginRight: "200px", fontSize: "24px" }}
      >
        Hats off to you! 🎉 Your application has been successfully submitted to
        NeuroTech Industries. This is not just a formality; it's the first step
        toward joining a community of innovators shaping the future of AI.
      </p>
      <p
        className="pt-2"
        style={{ marginLeft: "200px", marginRight: "200px", fontSize: "24px" }}
      >
        We appreciate the time and effort you invested in sharing your skills
        and experiences with us. Our team is eagerly awaiting the opportunity to
        review your application and discover the unique qualities you bring to
        the table.
      </p>
      <p
        className="pt-2"
        style={{ marginLeft: "200px", marginRight: "200px", fontSize: "24px" }}
      >
        What happens next? Our talent acquisition team will carefully evaluate
        your application. In the meantime, explore our website and envision the
        incredible possibilities that await you at NeuroTech.
      </p>
      <p
        className="pt-2"
        style={{ marginLeft: "200px", marginRight: "200px", fontSize: "24px" }}
      >
        Your journey with us has just begun, and we are thrilled to embark on
        this exciting adventure together. Feel free to reach out if you have any
        questions or just want to learn more about our dynamic company.
      </p>
      <p
        className="pt-2"
        style={{ marginLeft: "200px", marginRight: "200px", fontSize: "24px" }}
      >
        Once again, congratulations on taking the first step toward becoming
        part of NeuroTech Industries. We look forward to the possibility of
        welcoming you to our innovative family!
      </p>
      <p
        className="pt-2 pb-5"
        style={{ marginLeft: "200px", marginRight: "200px", fontSize: "24px" }}
      >
        Best regards, <br />
        The NeuroTech Team 🚀
      </p>
      {/* Render the confetti */}
      {showConfetti && <ReactConfetti width={1500} height={1000} />}
    </>
  );
}
