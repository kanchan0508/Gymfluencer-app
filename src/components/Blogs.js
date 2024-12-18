import React from 'react';
import { motion } from 'framer-motion';

export function Blogs() {
  const blogs = [
    {
      category: 'Exercise',
      title: 'CONQUERING CONSISTENCY: HOW TO MAKE EXERCISE A HABIT YOU LOVE',
      date: 'Jun 26, 2024',
      author: 'Benjamin',
      image: 'https://hips.hearstapps.com/hmg-prod/images/gym-workout-weight-training-bodybuilding-muscular-royalty-free-image-1703160802.jpg?crop=0.669xw:1.00xh;0.216xw,0&resize=640:*'
    },
    {
      category: 'Weight Loss',
      title: 'WEIGHT LOSS: A SUSTAINABLE APPROACH FOR A HEALTHIER YOU',
      date: 'Jun 28, 2024',
      author: 'Jessica',
      image: 'https://m.media-amazon.com/images/I/516NVc0DsoL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      category: 'Nutrition',
      title: 'FUEL YOUR FITNESS: A GUIDE TO NUTRITION FOR PEAK PERFORMANCE',
      date: 'Jun 30, 2024',
      author: 'David',
      image: 'https://www.healthifyme.com/blog/wp-content/uploads/2020/01/gym-diet-cover-1.jpg'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-12">
          OUR LATEST BLOGS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
            key={index}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: -100 }} 
            animate={{ opacity: 1, y: 0 }}  
            transition={{
              duration: 1, 
              delay: index * 0.2, 
              repeat: Infinity,
              repeatDelay: 2.5
            }}
          >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full aspect-video object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-sm px-3 py-1 rounded">
                  {blog.category}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-red-500">
                {blog.title}
              </h3>

              <div className="flex items-center text-sm text-gray-400">
                <span>{blog.date}</span>
                <span className="mx-2">•</span>
                <span>{blog.author}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
