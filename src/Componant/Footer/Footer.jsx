import React from "react";
import { FaSquareXTwitter,FaSquareInstagram , FaFacebookF, FaGithub } from "react-icons/fa6";





const Footer = () => {
  return (
    <footer >
       <div className="footer bg-neutral text-neutral-content p-10 flex flex-wrap justify-between"> 

      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
<nav>
  
        <h6 className="footer-title">Social</h6>
        <a className="link link-hover flex items-center gap-2" href="#">
          <FaSquareXTwitter className="text-xl" />
          <span>Twitter</span>
        </a>
        <a className="link link-hover flex items-center gap-2" href="#">
          <FaFacebookF className="text-xl" />
          <span>Facebook</span>
        </a>
        <a className="link link-hover flex items-center gap-2" href="#">
          {/* Update kora hoyeche */}
          <FaSquareInstagram className="text-xl" />
          <span>Instagram</span>
        </a>
        <a className="link link-hover flex items-center gap-2" href="#">
          <FaGithub className="text-xl" />
          <span>Github</span>
        </a> 
      </nav>

      <nav>
        <h6 className="footer-title">Tranding Apps</h6>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Enterprise</a>
        <a className="link link-hover">Security</a>
        <a className="link link-hover">Pricing</a>
      </nav>

      <nav>
        <h6 className="footer-title">Apps</h6>
        <a className="link link-hover">Mac</a>
        <a className="link link-hover">Windows</a>
        <a className="link link-hover">iPhone</a>
        <a className="link link-hover">Android</a>
      </nav>
        </div>
       
    </footer>
  );
};

export default Footer;
