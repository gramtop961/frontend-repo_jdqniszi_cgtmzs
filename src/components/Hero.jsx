import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[radial-gradient(1200px_800px_at_70%_-10%,#4c1d95_0%,transparent_60%),radial-gradient(1000px_600px_at_-20%_20%,#0ea5e9_0%,transparent_60%),#0b1020] text-white">
      {/* Interactive Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient/glow overlays that don't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-60">
        <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-fuchsia-600 blur-[140px]" />
        <div className="absolute -bottom-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-cyan-500 blur-[140px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span className="text-xs font-medium tracking-wide text-white/80">Learn smarter, not harder</span>
          </div>

          <h1 className="text-balance bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
            Learn. Grow. Level Up.
          </h1>

          <p className="mt-4 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
            An interactive learning world with AI study partners, daily challenges, and a hype community that has your back.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#features"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.45)] transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60"
            >
              <Rocket className="h-4 w-4" /> Start Learning Free
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Join Now
            </a>
          </div>
        </motion.div>

        {/* About mini-section (separate anchor but within Hero component to keep components to 4) */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-20 w-full max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
        >
          <h2 className="mb-2 text-left text-xl font-bold text-white">Why Gen Z loves us</h2>
          <p className="text-left text-white/80">
            We blend AI-powered tutoring with bite-sized lessons, quests, and squad challenges. It’s school, but make it fun — earn rewards, track progress, and vibe with a supportive community 24/7.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
