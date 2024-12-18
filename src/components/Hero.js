import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Hero({ openForm }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "Track Your Fitness Journey",
    "Achieve Your Goals with GymFluencer",
    "Stay Motivated and Fit",
  ]; 

  const typingSpeed = 300; 
  const deletingSpeed = 200; 
  const pauseTime = 1000; 

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1)); // Remove characters
        if (displayedText === "") {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        setDisplayedText((prev) => currentText.slice(0, prev.length + 1)); // Add characters
        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), pauseTime); // Wait and start deleting
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, textIndex, texts]);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center pt-16">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <iframe
          width="1500"
          height="665"
          src="https://www.youtube.com/embed/tPFsIbGq4IU?autoplay=1&mute=1&si=eNScBaQyDyCXgu_2"

          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="opacity-70"
        ></iframe>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* Trust Badge */}
          <div className="flex items-center gap-2 mb-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2V_ynDF0FhmaymT5bD8PRheENt9ocQ-tdQ&s"
              alt="Trust badge"
              className="w-6 h-6"
            />
            <p className="text-gray-300">Trusted by 5+ million users</p>
          </div>

          {/* Typing Animation Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-red-500 tracking-tight">
            {displayedText}
            <span className="animate-pulse">|</span> {/* Blinking cursor */}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Discover the ultimate fitness companion with GymFluencer.
            Effortlessly log your workouts, count reps, and track calories
            burned. Stay motivated and achieve your goals with ease.
          </p>

          {/* CTA Button */}
          <Link to="/JoinUs">
            <button
              onClick={openForm}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors"
            >
              Start Your Journey
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
