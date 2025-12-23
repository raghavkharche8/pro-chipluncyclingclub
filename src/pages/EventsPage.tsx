import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Mountain,
  TrendingUp,
  Users,
  Trophy,
  Award,
  ArrowRight,
} from 'lucide-react';
import { useRef } from 'react';

const EventsPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const eventCards = [
    {
      id: 1,
      name: 'King of Kumbharli 2026',
      tagline: "Maharashtra's Most Challenging Hill Climb",
      date: 'May 3, 2026',
      location: 'Chiplun - Kumbharli Ghat',
      status: 'Registration Opens Soon',
      featured: true,
      isPulse: true,
      stats: [
        { icon: Mountain, text: '29 km', label: 'Distance' },
        { icon: TrendingUp, text: '750m gain', label: 'Elevation' },
        { icon: Trophy, text: '₹2L+', label: 'Prize Pool' },
        { icon: Users, text: '5 categories', label: 'Categories' },
      ],
      description:
        "Conquer the legendary Kumbharli Ghat in Maharashtra's premier hill climb race. 29km of pure climbing challenge with 750+ meters elevation gain. Five age categories, massive prize pool, and the prestige of becoming the King.",
      link: '/events/king-of-kumbharli',
      image:
        'https://raw.githubusercontent.com/raghavkharche8/ChiplunCyclingClub/refs/heads/main/Screenshot%202025-12-24%20030115.png',
      gradient: 'from-[#ff6b35]/20 to-black/90',
    },
    {
      id: 2,
      name: 'Chiplun Cyclothon 2026',
      tagline: 'Ride Through the Heart of Konkan',
      date: 'Date To Be Decided',
      location: 'Chiplun Circuit',
      status: 'Details Coming Soon',
      featured: false,
      isPulse: false,
      stats: [
        { icon: Mountain, text: 'Multiple', label: 'Distances' },
        { icon: MapPin, text: 'Scenic Konkan', label: 'Terrain' },
        { icon: Users, text: 'Family-friendly', label: 'Type' },
        { icon: Award, text: '5th Edition', label: 'Edition' },
      ],
      description:
        "Join Chiplun's largest community cycling event. Multiple distance categories for all fitness levels - from beginners to experienced riders. Ride through scenic Konkan routes with your family and friends. This is the 5th edition of our beloved annual cyclothon.",
      link: '/events/chiplun-cyclothon',
      image:
        'https://raw.githubusercontent.com/raghavkharche8/ChiplunCyclingClub/refs/heads/main/hero-background.jpg',
      gradient: 'from-[#00d4ff]/20 to-black/90',
    },
  ];

  const features = [
    {
      icon: Trophy,
      title: 'World-Class Events',
      description:
        'Digital timing, cardiac ambulance, professional race management, and international-standard event execution',
    },
    {
      icon: Users,
      title: '70+ Active Riders',
      description:
        "Join a community of passionate cyclists including 35 Super Randonneurs and riders who've conquered 1200km brevets",
    },
    {
      icon: Mountain,
      title: 'Test Your Limits',
      description:
        'From brutal hill climbs to scenic cyclothons - events designed to push boundaries and create unforgettable memories',
    },
    {
      icon: Award,
      title: 'Earn Your Place',
      description:
        "Compete for substantial prize money, finisher medals, and the pride of conquering Maharashtra's toughest cycling challenges",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div ref={heroRef} className="relative h-[60vh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a] z-10" />
          <div className="absolute inset-0 grid grid-cols-2">
            <img
              src="https://raw.githubusercontent.com/raghavkharche8/ChiplunCyclingClub/refs/heads/main/Screenshot%202025-12-24%20030735.png"
              alt="King of Kumbharli"
              className="w-full h-full object-cover"
            />
            <img
              src="https://raw.githubusercontent.com/raghavkharche8/ChiplunCyclingClub/refs/heads/main/Screenshot%202025-12-24%20030115.png"
              alt="Cyclothon"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
            >
              Race With Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 font-light"
            >
              From challenging hill climbs to community cyclothons - find your
              next adventure
            </motion.p>

          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          Upcoming Events
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {eventCards.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {event.featured && (
                <div className="absolute top-6 left-6 z-20 bg-gradient-to-r from-[#ff6b35] to-[#ff8556] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                  FLAGSHIP EVENT
                </div>
              )}

              <div className="relative h-80 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${event.gradient} z-10`}
                />
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {event.isPulse && (
                  <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-[#ff6b35] rounded-full"
                    />
                    <span className="text-white text-xs font-medium">
                      {event.status}
                    </span>
                  </div>
                )}

                {!event.isPulse && (
                  <div className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <span className="text-white text-xs font-medium">
                      {event.status}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#ff6b35] transition-colors duration-300">
                    {event.name}
                  </h3>
                  <p className="text-gray-400 text-lg mb-4">{event.tagline}</p>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar size={16} className="text-[#ff6b35]" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin size={16} className="text-[#ff6b35]" />
                      {event.location}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  {event.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <stat.icon className="text-[#ff6b35] mx-auto mb-2" size={20} />
                      <div className="text-white font-semibold text-sm mb-1">
                        {stat.text}
                      </div>
                      <div className="text-gray-500 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-400 leading-relaxed">
                  {event.description}
                </p>

                <motion.a
                  href={event.link}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full bg-gradient-to-r from-[#ff6b35] to-[#ff8556] text-white py-4 rounded-full font-semibold text-center hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300"
                >
                  {event.featured ? 'View Event Details' : 'Learn More'}
                  <ArrowRight className="inline ml-2" size={18} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
          >
            Why Ride With Chiplun Cycling Club?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
          >
            Join Maharashtra's most ambitious cycling community
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-[#0a0a0a] rounded-2xl p-8 border border-white/10 hover:border-[#ff6b35]/50 transition-all duration-300"
              >
                <div className="bg-[#ff6b35]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="text-[#ff6b35]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default EventsPage;
