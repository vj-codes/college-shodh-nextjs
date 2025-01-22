"use client";
import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure this is imported

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-8 sm:space-y-0">
          {/* Logo Section */}
          <div className="text-teal-600 sm:text-left text-center">
            <img
              src="Collegeshodh logo_page-0001.png"
              className="mx-auto sm:mx-0 h-14"
              alt="Logo"
            />
           <p className="text-xs text-gray-500 mt-4 sm:mt-2">
            &copy; 2024. Coneixement India Pvt Ltd.
          </p>
          <h1 className="text-xs text-gray-500 mt-4 sm:mt-2">All rights reserved.</h1>

          </div>

          {/* Links Section */}
          <div className="flex justify-center w-full">
            <a
              href="/"
              className="text-gray-500 hover:text-orange-500 text-sm transition-colors mx-2"
            >
              Terms of Service
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="/"
              className="text-gray-500 hover:text-orange-500 text-sm transition-colors mx-2"
            >
              Privacy Policy
            </a>
          </div>

          {/* Social Media Icons Section */}
          <div className="flex justify-center sm:justify-end space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-500 transition-colors"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-500 transition-colors"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-500 transition-colors"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/coneixement-india-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-500 transition-colors"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="mailto:coneixementindia@gmail.com"
              className="text-gray-500 hover:text-orange-500 transition-colors"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
