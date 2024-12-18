import React from 'react';

export function Services() {
  const services = [
    {
      image: 'https://pixahive.com/wp-content/uploads/2020/08/Female-model-pose-after-gym-workout-22731-pixahive.jpg',
      title: 'Strength Training',
      description: 'Build muscle and increase strength with our guided programs'
    },
    {
      image: 'https://images.squarespace-cdn.com/content/v1/52e3481ee4b0ce534c3c4ac8/1539227246427-QQ287R5MGGAONROAJFHQ/6.jpg',
      title: 'Yoga & Flexibility',
      description: 'Improve flexibility and mindfulness with expert-led sessions'
    },
    {
      image: 'https://media.istockphoto.com/id/605958244/photo/boxing-strength.jpg?s=612x612&w=is&k=20&c=UMkNtOId-v-qY5evM1gZ4u22QjS1oqbNZqIDjLP6WP0=',
      title: 'Boxing & Combat',
      description: 'Learn self-defense and improve cardio through boxing'
    },
    {
      image: 'https://images.stockcake.com/public/a/9/e/a9e3481e-b03c-47e4-8b8e-f2a75187fdc0_large/athletic-dance-pose-stockcake.jpg',
      title: 'Dance Fitness',
      description: 'Get fit while having fun with dance-based workouts'
    },
    {
      image: 'https://outofthecube.co.za/uploads/2024/08/evolution-of-artistic-swimming-from-elegance-to-high-risk-sport-at-paris-2024-olympics.webp',
      title: 'Swimming',
      description: 'Master swimming techniques and water-based exercises'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-4">
          OUR SERVICES
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          GymFluencer offers 5 essential services to help you achieve your fitness goals with ease and flexibility.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[400px] object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

