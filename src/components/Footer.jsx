import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-black/40 py-10 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-500" />
          <span className="text-sm font-semibold">GenZ Learn</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-4"
        >
          <a aria-label="Twitter" href="#" className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white">
            <Twitter className="h-5 w-5" />
          </a>
          <a aria-label="Instagram" href="#" className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white">
            <Instagram className="h-5 w-5" />
          </a>
          <a aria-label="YouTube" href="#" className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white">
            <Youtube className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
      <p className="mt-6 text-center text-xs text-white/60">© {new Date().getFullYear()} GenZ Learn. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
