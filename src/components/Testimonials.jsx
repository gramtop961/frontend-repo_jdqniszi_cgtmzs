import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "This feels like TikTok met a study group. I'm actually excited to learn now!",
    name: 'Maya, 17',
    avatar: 'https://i.pravatar.cc/100?img=15',
  },
  {
    quote: 'The AI tutor saved my math grade. Explains like a bestie, not a textbook.',
    name: 'Jordan, 19',
    avatar: 'https://i.pravatar.cc/100?img=5',
  },
  {
    quote: 'Daily challenges keep me consistent. Streaks on fire 🔥',
    name: 'Leo, 16',
    avatar: 'https://i.pravatar.cc/100?img=23',
  },
];

const Testimonials = () => {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-24 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-extrabold sm:text-4xl"
      >
        Loved by students
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mx-auto mt-3 max-w-2xl text-center text-white/75"
      >
        Real voices. Real wins.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full ring-2 ring-white/20" />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-white/60">Verified learner</p>
              </div>
            </div>
            <p className="mt-4 text-white/85">“{t.quote}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
