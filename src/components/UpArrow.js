import React from "react";
import { Link } from "react-scroll";

function UpArrow() {
  return (
    <Link to='navbar'><div className="up-arrow-wrapper">
      <span></span>
      <span></span>
    </div>
    </Link>
  );
}

export default UpArrow;
