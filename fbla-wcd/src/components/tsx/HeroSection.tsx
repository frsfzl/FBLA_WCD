/*
This is a React component for the HeroSection for the Homepage
*/

import "../css/HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-container">
      {/* Background Video */}
      <video src="/videos/home-video.mp4" autoPlay loop muted />
      {/* Overlay text */}
      <h1>NEUROTECH INDUSTRIES</h1>
      <p>Empowering Tomorrow, Today</p>
    </div>
  );
}
