 import React from "react";
import { 
  FaSquareXTwitter, 
  FaSquareInstagram, 
  FaFacebookF, 
  FaGithub 
} from "react-icons/fa6";
import { NavLink } from 'react-router-dom';   
const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="footer p-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        
     
        <nav>
      
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="/src/assets/logo.png" 
              alt="Hero.Io Logo" 
              className="w-9 h-9"
            />
            <NavLink to="/" className="text-[#6366f1] font-bold text-2xl">
              Hero.Io
            </NavLink>
          </div>

   
          <a href="/" className="link link-hover block py-1">Home</a>
          <a href="/apps" className="link link-hover block py-1">Apps</a>
          <a href="/installation" className="link link-hover block py-1">Installation</a>
        </nav>

      
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-3">Social</h6>
          <a href="#" className="link link-hover flex items-center gap-3 py-1 hover:text-white transition-colors">
            <FaSquareXTwitter className="text-2xl" />
            <span>Twitter / X</span>
          </a>
          <a href="#" className="link link-hover flex items-center gap-3 py-1 hover:text-white transition-colors">
            <FaFacebookF className="text-2xl" />
            <span>Facebook</span>
          </a>
          <a href="#" className="link link-hover flex items-center gap-3 py-1 hover:text-white transition-colors">
            <FaSquareInstagram className="text-2xl" />
            <span>Instagram</span>
          </a>
          <a href="#" className="link link-hover flex items-center gap-3 py-1 hover:text-white transition-colors">
            <FaGithub className="text-2xl" />
            <span>Github</span>
          </a>
        </nav>

 
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-3">Product</h6>
          <a className="link link-hover block py-1">Features</a>
          <a className="link link-hover block py-1">Enterprise</a>
          <a className="link link-hover block py-1">Security</a>
          <a className="link link-hover block py-1">Pricing</a>
        </nav>

 
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-3">Available On</h6>
          <a className="link link-hover block py-1">Mac</a>
          <a className="link link-hover block py-1">Windows</a>
          <a className="link link-hover block py-1">iPhone</a>
          <a className="link link-hover block py-1">Android</a>
        </nav>

      </div>
 
      <div className="border-t border-neutral/30 py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Hero.Io. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;