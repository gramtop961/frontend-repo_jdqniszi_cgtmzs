import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Gamepad2, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Study Partner',
    desc: 'Chat with an always-on tutor that explains, quizzes, and guides your study flow.',
    color: 'from-fuchsia-500 to-purple-500',
  },
  {
    icon: Gamepad2,
    title: 'Gamified Learning',
    desc: 'Turn lessons into quests, unlock badges, and keep your streak glowing.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Users,
    title: '24/7 Community',
    desc: 'Form squads, study rooms, and go head-to-head in weekend challenges.',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    icon: Trophy,
    title: 'Progress Rewards',
    desc: 'Track growth with clean visuals and celebrate milestones with rewards.',
    color: 'from-amber-400 to-orange-500',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const Features = () => {
  return (
    <section id="features" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-extrabold sm:text-4xl"
      >
        What makes it different?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mx-auto mt-3 max-w-2xl text-center text-white/75"
      >
        Built for short attention spans, big dreams, and consistent wins.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg transition-all hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]"
          >
            <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r ${f.color} p-3 text-white shadow-lg`}> 
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-sm text-white/75">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
