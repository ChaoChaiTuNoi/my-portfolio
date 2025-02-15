import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaBriefcase } from "react-icons/fa";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Feel free to reach out to me via email or connect with me on social media.
          </p>
          <div className="flex flex-col items-center space-y-6">
            <a href="mailto:thanyavat.book@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-3 text-2xl">
              <FaEnvelope size={30} />
              <span>thanyavat.book@gmail.com</span>
            </a>
            <div className="flex space-x-6">
              <a href="https://github.com/ChaoChaiTuNoi" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-3 text-2xl">
                <FaGithub size={30} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/thanyavat-udomsila/" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-3 text-2xl">
                <FaLinkedin size={30} />
                <span>LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/tyv.book/" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-3 text-2xl">
                <FaInstagram size={30} />
                <span>Instagram</span>
              </a>
              <a href="https://fastwork.co/user/thanyavat" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-3 text-2xl">
                <FaBriefcase size={30} />
                <span>Freelance</span>
              </a>
            </div>
          </div>
          <p className="text-gray-400 mt-8 text-lg">
            &copy; 2024 Thanyavat. All rights reserved.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};