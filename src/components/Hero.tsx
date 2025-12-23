import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden" id="home">
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        <img
          src="https://www.trainerroad.com/blog/wp-content/uploads/2020/11/how-to-prepare-for-steep-climbs.jpg"
          alt="Cyclists climbing mountain"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="backdrop-blur-md bg-black/20 px-8 py-12 rounded-3xl border border-white/10 max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
          >
            Climbs Made Us.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 font-light tracking-wide"
          >
            Join the premier cycling community of Chiplun. From intense hill climbs to scenic coastal rides, we ride as one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="https://chipluncyclingclub.in/events"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#ff6b35] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#ff8556] transition-colors duration-300 shadow-2xl shadow-orange-500/50"
            >
              View Events
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-colors duration-300 border border-white/20"
            >
              Join the Club
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/80"
          >
            <span className="text-sm mb-2 font-light tracking-widest">SCROLL</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
