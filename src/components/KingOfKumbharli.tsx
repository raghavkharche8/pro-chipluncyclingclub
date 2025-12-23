import { motion } from 'framer-motion';
import { Mountain, TrendingUp, Route } from 'lucide-react';
import { useEffect, useState } from 'react';
import RouteMap from './RouteMap';

const KingOfKumbharli = () => {
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

    const element = document.getElementById('king-of-kumbharli');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const stats = [
    { icon: Route, value: '30', label: 'Distance', unit: 'km' },
    { icon: Mountain, value: '700', label: 'Elevation Gain', unit: 'm' },
    { icon: TrendingUp, value: '15', label: 'Avg Gradient', unit: '%+' },
  ];

  return (
    <div
      id="king-of-kumbharli"
      className="min-h-screen bg-[#0a0a0a] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <div className="bg-gradient-to-r from-[#ff6b35] to-[#ff8556] text-transparent bg-clip-text">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                    King of Kumbharli
                  </h2>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-[#ff6b35] font-semibold tracking-wide"
              >
                Maharashtra's Most Challenging Hill Climb
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-[#ff6b35]/50 transition-colors duration-300"
                >
                  <stat.icon className="text-[#ff6b35] mb-2" size={24} />
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                    <span className="text-lg text-gray-400">{stat.unit}</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              Conquer the legendary Kumbharli Ghat. From Chiplun's heart to the
              Deccan plateau, this is where legends are forged.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#ff6b35] to-[#ff8556] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300"
              >
                View Event Details
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <RouteMap />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default KingOfKumbharli;
