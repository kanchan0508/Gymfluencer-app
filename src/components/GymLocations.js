import React, { useState } from 'react';

export function GymLocations() {
  const [selectedGym, setSelectedGym] = useState(null);
  
  const gyms = [
    {
      id: 1,
      name: 'Physo Gym Nerul 24/7',
      phone: '+91 1234567890',
      address: 'Nerul, Navi Mumbai, Maharashtra, 400706',
      image: 'https://cdn-magazine.nutrabay.com/wp-content/uploads/2023/02/strong-bodybuilder-doing-heavy-weight-exercise-back-machine-1-1067x800.jpg',
      location: { lat: 19.0330, lng: 73.0297 }
    },
    {
      id: 2,
      name: 'Gold’s Gym Bandra',
      phone: '+91 9876543210',
      address: 'Bandra West, Mumbai, Maharashtra, 400050',
      image: 'https://media.istockphoto.com/id/1438034462/photo/latino-and-african-sport-woman-exercising-and-build-muscle-in-stadium-active-strong-beautiful.jpg?s=612x612&w=0&k=20&c=kFwCRkh8Q1v6uCoSTL7sQcsbk02zgSZJ1kDgnJ3DAZc=',
      location: { lat: 19.0576, lng: 72.8384 }
    },
    {
      id: 3,
      name: 'The Fitness Hub',
      phone: '+91 9988776655',
      address: 'Sector 15, CBD Belapur, Navi Mumbai, Maharashtra, 400614',
      image: 'https://static.toiimg.com/photo/75466736.cms',
      location: { lat: 19.0185, lng: 73.0479 }
    },
   
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-12">
          FIND YOUR NEAREST GYM
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {gyms.map(gym => (
              <div
                key={gym.id}
                className="bg-gray-900 rounded-lg p-4 flex gap-4 cursor-pointer hover:scale-105"
                onClick={() => setSelectedGym(gym)}
              >
                <img
                  src={gym.image}
                  alt={gym.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold mb-1">{gym.name}</h3>
                  <p className="text-gray-400 text-sm">{gym.phone}</p>
                  <p className="text-gray-400 text-sm">{gym.address}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden">
           <img src='area.svg' />
          </div>
        </div>
      </div>
    </section>
  );
}

