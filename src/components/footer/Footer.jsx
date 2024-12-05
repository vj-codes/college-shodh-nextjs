"use client";
import React from "react";
export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-teal-600">
            <img
              src="Collegeshodh logo_page-0001.png"
              className="mr-3 h-14"
              id="footer-logo"
              alt="Logo"
            />
          </div>
        </div>

        <p className="text-xs text-gray-500">
          &copy; 2024. Coneixement India Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
