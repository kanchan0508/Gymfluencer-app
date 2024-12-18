import React from "react";

export function Stats() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-4">
          Discover GymFluencer Benefits
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          At GymFluencer, our mission is simple: to provide the tools and
          support you need to reach your fitness goals. We combine innovative
          technology with personalized guidance to make fitness easier, more
          accessible, and more motivating. Join us as we help you{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-5xl font-bold text-red-500 mb-2">422k+</h3>
            <p className="text-gray-400">
              Workouts logged and progress tracked every month
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-5xl font-bold text-red-500 mb-2">122k+</h3>
            <p className="text-gray-400">
              Fitness enthusiasts connected through our platform
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-5xl font-bold text-red-500 mb-2">2+</h3>
            <p className="text-gray-400">
              Countries where GymFluencer is making an impact
            </p>
          </div>
        </div>
      </div>
      <div className="m-4 flex justify-center align-center">
        <iframe
          width="580"
          height="415"
           src="https://www.youtube.com/embed/OK8ASeuwuKo?autoplay=1&mute=1&si=aRG5HQiNNAAV4zyC"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          
        ></iframe>
      </div>
    </section>
  );
}
