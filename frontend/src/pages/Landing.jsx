import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    icon: "🧠",
    title: "Emotional Support",
    desc: "Talk with an AI companion that responds with empathy and healthy coping suggestions."
  },
  {
    icon: "🌙",
    title: "Sleep Guidance",
    desc: "Build better bedtime habits with calming routines and practical sleep tips."
  },
  {
    icon: "📚",
    title: "Study Focus",
    desc: "Boost productivity using Pomodoro, deep work, and distraction management."
  },
  {
    icon: "🌿",
    title: "Healthy Habits",
    desc: "Create small daily habits that improve your wellbeing over time."
  }
];

const stats = [
  { value: "24/7", label: "Always Available" },
  { value: "AI", label: "Gemini Powered" },
  { value: "100%", label: "Private Conversations" }
];

export default function Landing() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090909] text-[#FFF8F3]">

      {/* Background */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      {/* Floating Hearts */}
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${12 + Math.random() * 12}s`,
            animationDelay: `${Math.random() * 8}s`
          }}
        >
          ♡
        </span>
      ))}

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-black/20 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

          <h1 className="text-3xl font-bold">
            🌿 MindEase AI
          </h1>

          <div className="flex gap-8 items-center">

            <a href="#features">Features</a>

            <a href="#stats">Stats</a>

            <Link to="/chat">
              <button className="primary-btn">
                Start Chat
              </button>
            </Link>

          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">

        <div className="text-center max-w-5xl">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-8xl font-black leading-tight"
          >
            Talk.
            <br />
            Breathe.
            <br />
            Heal.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="mt-8 text-xl text-[#E8DDCF]"
          >
            Your luxurious AI-powered mental wellness companion built using
            Gemini, LangChain and LangGraph.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .8 }}
            className="flex justify-center gap-5 mt-12 flex-wrap"
          >

            <Link to="/chat">
              <button className="primary-btn">
                🌿 Start Chat
              </button>
            </Link>

            <button className="glass card px-8 py-4 rounded-full hover:scale-105 transition">
              Learn More
            </button>

          </motion.div>

        </div>

      </section>

      {/* Features */}
      <section
        id="features"
        className="max-w-7xl mx-auto py-24 px-8"
      >

        <h2 className="text-5xl font-bold text-center mb-16">
          Why MindEase?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item) => (

            <motion.div
              whileHover={{
                scale: 1.05,
                y: -10
              }}
              key={item.title}
              className="glass card text-center"
            >

              <div className="text-6xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-[#E8DDCF]">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Stats */}

      <section
        id="stats"
        className="py-24 px-8"
      >

        <h2 className="text-5xl font-bold text-center mb-16">
          Built For Better Days
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

          {stats.map((item) => (

            <motion.div
              whileHover={{
                scale: 1.05
              }}
              key={item.label}
              className="glass card text-center"
            >

              <h1 className="text-6xl font-black text-pink-200">
                {item.value}
              </h1>

              <p className="mt-5 text-xl">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Footer */}

      <footer className="py-12 text-center text-[#E8DDCF] border-t border-white/10">

        <h2 className="text-3xl font-bold">
          🌿 MindEase AI
        </h2>

        <p className="mt-3">
          Talk. Breathe. Heal. Grow.
        </p>

        <p className="mt-6 text-sm opacity-70">
          © 2026 MindEase AI
        </p>

      </footer>

    </main>
  );
}