import React from "react";

function YoutubeIcon({ fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill={fill ?? "#6B7280"}
      viewBox="0 0 24 24"
    >
      <path d="M10 9.333l5.333 2.662L10 14.667V9.333zM24 5v14a5 5 0 01-5 5H5a5 5 0 01-5-5V5a5 5 0 015-5h14a5 5 0 015 5zm-4 7c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0C4.326 6.3 4.02 7.87 4 12c.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0C19.674 17.7 19.98 16.13 20 12z"></path>
    </svg>
  );
}

export default YoutubeIcon;
