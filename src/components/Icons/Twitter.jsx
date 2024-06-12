import React from "react";

function TwitterIcon({fill}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill={fill??"#6B7280"}
      viewBox="0 0 24 24"
    >
      <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765a9.286 9.286 0 01-5.032-1.475 6.605 6.605 0 004.86-1.359 3.285 3.285 0 01-3.066-2.28 3.3 3.3 0 001.482-.056c-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411A3.289 3.289 0 015.612 6.6a9.32 9.32 0 006.766 3.43 3.286 3.286 0 015.594-2.993 6.583 6.583 0 002.086-.796 3.296 3.296 0 01-1.443 1.816A6.578 6.578 0 0020.5 7.54a6.66 6.66 0 01-1.639 1.697z"></path>
    </svg>
  );
}

export default TwitterIcon;
