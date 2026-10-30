import React from 'react'
import "./leftcomp.css";
import { Link, useNavigate } from "react-router-dom";

const Leftcomp = () => {
  return (
    <div>
      {/* Left section */}
      <section className="login-visual">
        <div className="visual-overlay"></div>

        <div className="visual-content">
          <Link to="/" className="brand">
            <span className="brand-icon">M</span>
            <span>MeetHub</span>
          </Link>

          <div className="visual-text">
            <span className="eyebrow">CONNECT. COLLABORATE. CELEBRATE.</span>

            <h1>
              Every great event
              <br />
              starts with a <span>connection.</span>
            </h1>

            <p>
              Discover experiences, meet amazing people, and bring your
              community together with MeetHub.
            </p>

            <div className="visual-stats">
              <div>
                <strong>10K+</strong>
                <span>Community members</span>
              </div>

              <div>
                <strong>500+</strong>
                <span>Events created</span>
              </div>
            </div>
          </div>

          <p className="visual-footer">
            Make every moment worth remembering.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Leftcomp
