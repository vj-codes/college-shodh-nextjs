"use client"
import React from "react";
import BlogListing from "../BlogPage/BlogListing/BlogListing";

const HomeBlog = () => {
  return (
    <div className="ml-32 mr-36 min-h-screen flex flex-col">
      <div className="mt-10 flex flex-row space-x-4 mb-10">
        <div className="flex-shrink-0 w-72 h-40 bg-gray-200 rounded-md shadow-lg p-4">
          <BlogListing />
        </div>
        <div className="flex-shrink-0 w-72 h-40 bg-gray-200 rounded-md shadow-lg p-4">
          <BlogListing />
        </div>
        <div className="flex-shrink-0 w-72 h-40 bg-gray-200 rounded-md shadow-lg p-4">
          <BlogListing />
        </div>
        <div className="flex-shrink-0 w-72 h-40 bg-gray-200 rounded-md shadow-lg p-4">
          <BlogListing />
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
