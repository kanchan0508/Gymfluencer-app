import React from 'react';
import { Clock, Activity, Cpu, BarChart } from 'react-feather';

export function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Effortless Workout Logging',
      description: 'Easily log your workouts and monitor your progress over time with our intuitive logging feature.'
    },
    {
      icon: Activity,
      title: 'Accurate Rep Counting',
      description: 'Count your reps accurately with our app, ensuring consistency and improved performance.'
    },
    {
      icon: Cpu, // Replaced Brain with Cpu
      title: 'Personalized Workout Plans',
      description: 'AI-powered workout plans tailored to your fitness level, goals, and progress.'
    },
    {
      icon: BarChart, // Replaced Calculator with BarChart
      title: 'Calorie Calculation & Personalized Diet Plans',
      description: 'Calculate calories burned during workouts and AI-customized meal plans for optimal nutrition and wellness.'
    }
  ];

  return (
    <section className="pb-5 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-4">
          Discover GymFluencer Benefits
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Unlock your full potential with GymFluencer: your personal fitness partner for progress and motivation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="grid gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-500 rounded-lg p-6 hover:bg-gray-900">
                <benefit.icon className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <img
              src="app.svg"
              alt="GymFluencer App"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
