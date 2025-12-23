import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';
import { useState, useEffect } from 'react';

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('events');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const events = [
    {
      title: 'King of Kumbharli 2026',
      status: 'Registration Opens Soon',
      image:
        'https://images.pexels.com/photos/6340437/pexels-photo-6340437.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { icon: MapPin, text: '30km' },
        { icon: Trophy, text: '700m gain' },
        { icon: Users, text: 'Hill Climb' },
      ],
      isPulse: true,
      gradient: 'from-[#ff6b35]/20 to-transparent',
    },
    {
      title: 'Chiplun Cyclothon 2025',
      subtitle: '5th Edition',
      status: 'January 2025',
      image:
        'https://images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { icon: Calendar, text: 'Jan 2025' },
        { icon: Users, text: 'Multiple categories' },
        { icon: MapPin, text: 'Flat route' },
      ],
      isPulse: false,
      gradient: 'from-[#00d4ff]/20 to-transparent',
    },
  ];

  return (
    <div id="events" className="min-h-screen bg-[#1a1a1a] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Race With Us
          </h2>
          <p className="text-xl text-gray-400">
            Challenge yourself in Maharashtra's premier cycling events
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${event.gradient} to-black/60 z-10`}
                />
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {event.isPulse && (
                  <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-[#ff6b35] rounded-full"
                    />
                    <span className="text-white text-sm font-medium">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#ff6b35] transition-colors duration-300">
                    {event.title}
                  </h3>
                  {event.subtitle && (
                    <p className="text-gray-400 text-lg">{event.subtitle}</p>
                  )}
                  <p className="text-[#ff6b35] font-semibold mt-2">
                    {event.status}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {event.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center"
                    >
                      <stat.icon className="text-gray-400 mb-2" size={20} />
                      <span className="text-white text-sm">{stat.text}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white/10 backdrop-blur-sm text-white py-4 rounded-full font-semibold hover:bg-[#ff6b35] transition-colors duration-300 border border-white/10"
                >
                  {event.isPulse ? 'Get Notified' : 'Register Now'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
