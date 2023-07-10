import Logo from "./Logo";

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onLinkClick = (e) => {
    e.preventDefault();
    const id = e?.target?.id;
    const elem = document.querySelector(id);
    if (elem) elem.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navigationLinks = [
    { label: "Home", url: "#home" },
    { label: "Introduction", url: "#home" },
    { label: "Description", url: "#description" },
  ];

  const dropdownLinks = [
    { label: "Story", url: "#story" },
    { label: "About", url: "#about" },
  ];

  return (
    <nav className="bg-transparent text-white" id="home">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {navigationLinks.map((link) => (
            <a key={link.label} href={link.url} id={link.url} onClick={onLinkClick} className="hidden md:inline-block">
              {link.label}
            </a>
          ))}
        </div>
        <div className="mx-auto">
          <Logo />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {dropdownLinks.map((link) => (
            <a key={link.label} href={link.url} id={link.url} onClick={onLinkClick}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="md:hidden relative">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-300 hover:text-white hover:border-white"
          >
            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zm0 5a1 1 0 110-2h12a1 1 0 110 2H4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-transparent py-2 w-full text-center">
          {[...navigationLinks, ...dropdownLinks].map((link) => (
            <a
              key={link.label}
              href={link.url}
              id={link.url}
              onClick={onLinkClick}
              className="block px-4 py-2 hover:bg-gray-800"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
