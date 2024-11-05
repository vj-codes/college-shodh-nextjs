import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Welcome to
                <span className="text-orange-600"> CollegeShodh.com</span>
              </h1>

              <p className="mt-1.5 text-base text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                quae veniam distinctio quisquam a saepe facilis ea quidem!
                Impedit sapiente facilis distinctio nihil perferendis aut
                exercitationem fugiat rerum temporibus reprehenderit?
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
