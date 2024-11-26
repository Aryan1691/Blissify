import { useState } from "react";
import "../App.css"; // Assuming you have your Tailwind classes in App.css
import logo from "../assets/logo.webp";
import { HiMenuAlt3, HiSearch } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <nav>
      <div className="container">
        {/* Top Section: Logo and Menu items */}
        <div className="another-box">
          <img src={logo} alt="Blissify" width={156} />
          <span className="flex-container">
            {/* Dropdown Toggle */}
            {dropDown ? (
              <div onClick={toggleDropDown} className="dropDown1">
                <MdClose />
              </div>
            ) : (
              <div onClick={toggleDropDown} className="dropDown1">
                <HiMenuAlt3 />
              </div>
            )}

            {/* Search and Cart Icons */}
            <HiSearch size={24} />
            <PiShoppingCartLight size={24} />
            <button className="But">BOOK NOW</button>
          </span>
        </div>

        {/* Navigation Links - Visible on larger screens */}
        <div className="box">
          <ul className="UL">
            <a href="#" className="text-element">
              HOME
            </a>
            <a href="#" className="text-element">
              SERVICES
            </a>
            <a href="#" className="text-element">
              PRODUCT
            </a>
            <a href="#" className="text-element">
              TESTIMONIAL
            </a>
            <a href="#" className="text-element">
              TEAM
            </a>
            <a href="#" className="text-element">
              BLOG
            </a>
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {dropDown && (
        <div className="mobileDropDown">
          <div className="mobile2">
            <ul className="mobileDrop2">
              <a href="#" className="text-element2">
                HOME
              </a>
              <a href="#" className="text-element2">
                SERVICES
              </a>
              <a href="#" className="text-element2">
                PRODUCT
              </a>
              <a href="#" className="text-element2">
                TESTIMONIAL
              </a>
              <a href="#" className="text-element2">
                TEAM
              </a>
              <a href="#" className="text-element2">
                BLOG
              </a>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
