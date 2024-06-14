/*
This is a React component for the privacy policy for NeuroTech Industries' job application process.
- Outlines collection, usage, disclosure, and protection of personal information.
*/

export default function PrivacyPolicy() {
  return (
    <div
      className="container-fluid p-0 bg-light pt-5 pb-5 border border-light"
      style={{ maxWidth: "1500px" }}
    >
      {/* Privacy Policy heading */}
      <h1 className="text-center pb-2" style={{ fontSize: "50px" }}>
        Privacy Policy
      </h1>

      {/* Container for privacy policy information */}
      <div
        style={{
          paddingLeft: "200px",
          paddingRight: "200px",
          paddingTop: "50px",
          paddingBottom: "50px",
          fontSize: "18px",
        }}
      >
        {/* Last updated information */}
        <p className="pb-4">Last updated: 3/10/2024</p>
        <p className="pb-3">
          At NeuroTech Industries, we are committed to safeguarding the privacy
          and security of the personal information entrusted to us. This Privacy
          Policy outlines how we collect, use, disclose, and protect your
          personal information. By interacting with our website, products, and
          services, you consent to the practices described in this policy.
        </p>

        {/* Section: Information We Collect */}
        <strong style={{ fontSize: "22px" }}>Information We Collect:</strong>
        <p className="pt-2 pb-3">
          We collect personal information directly from you during the job
          application process. This information may include your name, contact
          details, educational and employment history, skills, and any other
          information relevant to the application.
        </p>

        {/* Section: How We Use Your Information */}
        <strong style={{ fontSize: "22px" }}>
          How We Use Your Information:
        </strong>
        <p className="pt-2 pb-3">
          Your personal information is used solely for the purpose of evaluating
          your job application and assessing your suitability for the position.
          We may contact you for additional information, conduct interviews, and
          perform background checks as part of our hiring process.
        </p>

        {/* Section: Data Sharing */}
        <strong style={{ fontSize: "22px" }}>Data Sharing</strong>
        <p className="pt-2 pb-3">
          Your personal information is strictly confidential and will not be
          shared, sold, or disclosed to third parties without your explicit
          consent, except as required by law or for the purpose of the
          recruitment process.
        </p>

        {/* Section: Data Retention */}
        <strong style={{ fontSize: "22px" }}>Data Retention</strong>
        <p className="pt-2 pb-3">
          We will retain your personal information for the duration of the
          recruitment process. If your application is successful, your
          information will be included in your employee record. If unsuccessful,
          we may retain your data for a limited period for future job
          opportunities, unless you request its deletion.
        </p>

        {/* Section: Security Measures */}
        <strong style={{ fontSize: "22px" }}>Security Measures</strong>
        <p className="pt-2 pb-3">
          We employ industry-standard security measures to protect your personal
          information from unauthorized access, disclosure, alteration, and
          destruction.
        </p>

        {/* Section: Your Rights */}
        <strong style={{ fontSize: "22px" }}>Your Rights</strong>
        <p className="pt-2 pb-3">
          You have the right to access, correct, or delete your personal
          information provided in your job application. If you have questions
          about the status of your application or our privacy practices, please
          contact us at applications@neurotechindustries.com.
        </p>

        {/* Section: Policy Updates */}
        <strong style={{ fontSize: "22px" }}>Policy Updates</strong>
        <p className="pt-2 pb-3">
          This Privacy Policy may be updated to reflect changes in our
          recruitment processes or legal requirements. The revised policy will
          be posted on this page with the revision date.
        </p>
        <p className="pt-2 pb-3">
          Thank you for entrusting NeuroTech Industries with your job
          application. We value your privacy and are dedicated to ensuring the
          confidentiality and security of your personal information throughout
          the hiring process.
        </p>
        <a
          className="btn btn-outline-dark btn-lg mt-4"
          href="/apply"
          role="button"
        >
          Back to Application
        </a>
      </div>
    </div>
  );
}
