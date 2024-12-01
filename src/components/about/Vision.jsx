import Link from "next/link";
import React from "react";

const Vision = () => {
  return (
    <>
      <section className=" bg-gray-50 grid grid-cols-1 lg:grid-cols-2 items-center py-24">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Our Vision
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              fuga, ex nisi numquam esse dicta doloribus aliquid, molestias
              voluptates, ad quo vel nemo quos cumque repellendus laborum
              distinctio! Eum, reprehenderit? Dolores praesentium quos aliquid
              et ut amet iure totam ducimus blanditiis provident maxime
            </p>

            <div className="mt-4 md:mt-8">    
              <Link
                href="#"
              >
                <button className="inline-block rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-400">

                Get Started Today
                </button>
              </Link>
            </div>
          </div>
        </div>

        <img
          alt="Data Visualization"
          src="https://srgi.ac.in/wp-content/uploads/2018/06/june3rd.png"
          className="object-coverobject-center lg:h-full sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
    </>
  );
};

export default Vision;