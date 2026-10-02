import React from "react";
import "./Navbar.css";

function Medium() {
  return (
    <nav className="medium">
      <div className="medium-logo">
        ●
      </div>

      <div className="medium-title">
        Medium
      </div>

      <div className="medium-right">
        <span>⌕</span>
        <span>🔖</span>
        <span>♧</span>

        <div className="medium-profile">
          HEY!
        </div>
      </div>
    </nav>
  );
}

export default Medium;