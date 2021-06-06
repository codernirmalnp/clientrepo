import React from "react";
import { IconAdd, IconChevronLeft } from ".";

const IconCheckAnimated = () => {
  return (
    <figure className="animated-check">
      <svg version="1.1" width="130" height="130" viewBox="0 0 130.2 130.2">
        <circle
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          strokeMiterlimit="10"
          cx="65.1"
          cy="64.9"
          r="61.5"
          className="path circle"
        />
        <polyline
          class="path check"
          fill="none"
          stroke="#000000"
          stroke-width="8"
          stroke-linecap="round"
          stroke-miterlimit="10"
          points="115.2,30.2 65.5,78.8 44.8,59.5"
        />
      </svg>

      <span className="fly-top-left">
        <IconChevronLeft />
      </span>
      <span className="fly-top-right text-color-success">
        <IconAdd />
      </span>
      <span className="fly-bot-right"></span>
    </figure>
  );
};

export default IconCheckAnimated;
