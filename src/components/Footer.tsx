import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Events', href: '#events' },
    { name: 'Results', href: '#results' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Mail, href: 'mailto:info@chipluncyclingclub.in', label: 'Email' },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-[#ff6b35] text-transparent bg-clip-text mb-2">
                Chiplun Cycling Club
              </h3>
              <p className="text-gray-400 text-sm tracking-wide">
                Where Ghats Meet Grit
              </p>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ff6b35] hover:border-[#ff6b35] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-6 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ff6b35] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-6 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-[#ff6b35] mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@chipluncyclingclub.in"
                  className="hover:text-[#ff6b35] transition-colors duration-300"
                >
                  info@chipluncyclingclub.in
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-[#ff6b35] mt-1 flex-shrink-0" />
                <span>Chiplun, Maharashtra</span>
              </li>
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-[#ff6b35] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#ff8556] transition-colors duration-300"
            >
              Ride with us
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2025 Chiplun Cycling Club. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Built with passion in Chiplun
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
