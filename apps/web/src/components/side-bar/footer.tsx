import React from "react";
import Link from "next/link";

import "@/styles/side-bar/footer.css";

// All rights reserved and subject to the Privacy Policy and Terms and Conditions.
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        © 2024 <Link href="" target="_blank" rel="noopener noreferrer">v56</Link>
      </div>
      <div className="footer-links">
        <Link
          href="https://github.com/verus56"
          target="_blank"
          rel="noopener noreferrer"
        >
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
