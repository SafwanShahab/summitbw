import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 text-center space-y-4">
      <div>9728 Variel Ave, Chatsworth, CA 91311</div>
      <div>CSLB License #1140888</div>
      <div>(818) 923-9313</div>
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.instagram.com/summit_buildworks_energy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500"
        >
          Instagram
        </a>
      </div>
      <div>© 2026 Summit Buildworks Energy Inc. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;