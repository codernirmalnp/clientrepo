import React from "react";
import { IconAdd, IconChevronLeft } from ".";

const IconCloseAnimated = () => {
  return (
    <figure className="animated-close">
      <svg version="1.1" width="130" height="130" viewBox="0 0 130.2 130.2">
        <circle
          class="path circle"
          fill="none"
          stroke="#D06079"
          strokeWidth="6"
          strokeMiterlimit="10"
          cx="65.1"
          cy="65.1"
          r="62.1"
        />
        <line
          class="path line"
          fill="none"
          stroke="#D06079"
          strokeWidth="6"
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="34.4"
          y1="37.9"
          x2="95.8"
          y2="92.3"
        />
        <line
          class="path line"
          fill="none"
          stroke="#D06079"
          strokeWidth="6"
          strokeLinecap="round"
          strokeMiterlimit="10"
          x1="95.8"
          y1="38"
          x2="34.4"
          y2="92.2"
        />
      </svg>

      <span className="fly-top-left">
        <IconChevronLeft />
      </span>
      <span className="fly-top-right text-color-danger">
        <IconAdd />
      </span>
      <span className="fly-bot-right"></span>
    </figure>
  );
};

export default IconCloseAnimated;
