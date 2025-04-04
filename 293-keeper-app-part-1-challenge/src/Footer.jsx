import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p>
        Copyright {"\u00A9"} {year}
      </p>
    </footer>
  );
}

export default Footer;
