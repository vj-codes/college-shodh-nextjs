import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

// Skeleton loader component
const SkeletonLoader = () => (
  <section className="bg-gray-50 ">
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 animate-pulse">
      <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div className="relative z-10 lg:py-16">
          <div className="relative h-64 sm:h-80 lg:h-full">
            <div className="absolute inset-0 h-96 w-full mt-14 bg-gray-200 sm:h-96 lg:h-full"></div>
          </div>
        </div>

        <div className="relative flex items-center ">
          <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16"></span>

          <div className="p-8 sm:p-40 lg:p-10 w-full">
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-4 items-center text-center"></div>

            <div className="mt-4 text-gray-600">
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            </div>

            <div className="mt-4 md:mt-8 text-center">
              <div className="inline-block rounded bg-gray-200 px-12 py-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Mission component with image preloading using next/image
const Mission = () => {
  return (
    <section className="bg-gray-50 ">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2 ">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                alt="Mission Image"
                src="https://www.awpem.com/assets/img/about/mission-awpem.png"
                className="absolute inset-0 h-96 w-full mt-14 object-cover object-center sm:h-96 lg:h-full"
                width={1200} // Specify the width
                height={800} // Specify the height
                priority={true} // Preloads the image
              />
            </div>
          </div>

          <div className="relative flex items-center">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16"></span>

            <div className="p-8 sm:p-40 lg:p-10 text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">Our Mission</h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
                fuga, ex nisi numquam esse dicta doloribus aliquid, molestias
                voluptates, ad quo vel nemo quos cumque repellendus laborum
                distinctio! Eum, reprehenderit? Dolores praesentium quos aliquid
                et ut amet iure totam ducimus blanditiis provident maxime
              </p>

              <div className="mt-4 md:mt-8 text-center">
                <Link href="#">
                  <button className="inline-block rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-400">
                    Get Started Today
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Wrapping the Mission component in Suspense to show skeleton loader while loading data
const MissionWithSkeleton = () => (
  <Suspense fallback={<SkeletonLoader />}>
    <Mission />
  </Suspense>
);

export default MissionWithSkeleton;
