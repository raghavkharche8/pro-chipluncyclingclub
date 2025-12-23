import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Users, Award, Calendar, Trophy } from 'lucide-react';

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
}

const Counter = ({ value, suffix = '', prefix = '' }: CounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: 'easeOut',
    });

    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(`${prefix}${latest}${suffix}`);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, suffix, prefix, count, rounded]);

  return <span>{displayValue}</span>;
};

const About = () => {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const stats = [
    { icon: Calendar, value: 2020, prefix: 'Est. ', suffix: '', label: 'Founded' },
  ];

  return (
    <div id="about" className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-[#1a1a1a] tracking-tight"
              >
                Built by Riders, For Riders
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Since 2020, Chiplun Cycling Club has grown from a small group
                of enthusiasts to Maharashtra's most ambitious cycling
                community. With 70+ active members including 35 Super
                Randonneurs, we've conquered distances from weekend rides to
                1200km brevets.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                We organize Maharashtra's toughest hill climb and Chiplun's
                largest community cyclothon. Whether you're starting your
                cycling journey or chasing ultra-distance dreams, you belong
                here.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 gap-6 max-w-xs"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-[#f5f5f5] rounded-2xl p-6 border border-gray-200 hover:border-[#ff6b35] transition-colors duration-300"
                >
                  <stat.icon className="text-[#ff6b35] mb-3" size={28} />
                  <div className="text-4xl font-bold text-[#1a1a1a] mb-1">
                    {isVisible && (
                      <Counter
                        value={stat.value}
                        suffix={stat.suffix}
                        prefix={stat.prefix}
                      />
                    )}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#ff6b35] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#ff8556] transition-colors duration-300 shadow-xl"
              >
                Join Chiplun Cycling Club
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-64 rounded-3xl overflow-hidden"
                >
                  <img
                    src="https://raw.githubusercontent.com/raghavkharche8/ChiplunCyclingClub/refs/heads/main/Screenshot%202025-12-24%20032129.png"
                    alt="Rider 1"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-80 rounded-3xl overflow-hidden"
                >
                  <img
                    src="https://raw.githubusercontent.com/raghavkharche8/ChiplunCyclingClub/refs/heads/main/Screenshot%202025-12-24%20032209.png"
                    alt="Rider 2"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-80 rounded-3xl overflow-hidden"
                >
                  <img
                    src="https://raw.githubusercontent.com/raghavkharche8/ChiplunCyclingClub/refs/heads/main/IMG-20250309-WA0082.jpg"
                    alt="Rider 3"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-64 rounded-3xl overflow-hidden"
                >
                  <img
                    src="https://raw.githubusercontent.com/raghavkharche8/ChiplunCyclingClub/refs/heads/main/Screenshot%202025-12-24%20030115.png"
                    alt="Rider 4"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="absolute inset-0 bg-black/0 hover:bg-black/20 backdrop-blur-0 hover:backdrop-blur-sm transition-all duration-300 rounded-3xl flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100"
            >
              <div className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border border-white/30">
                <span className="text-white font-semibold text-lg">
                  Join the Pack
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
