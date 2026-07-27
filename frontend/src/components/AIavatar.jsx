import { motion } from "framer-motion";

export default function AIAvatar({ state = "idle" }) {
  const variants = {
    idle: {
      scale: [1, 1.08, 1],
      boxShadow: [
        "0 0 25px rgba(248,215,229,.25)",
        "0 0 55px rgba(248,215,229,.45)",
        "0 0 25px rgba(248,215,229,.25)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },

    thinking: {
      scale: [1, 1.12, 1],
      rotate: [0, 10, -10, 0],
      boxShadow: [
        "0 0 35px rgba(248,215,229,.45)",
        "0 0 85px rgba(248,215,229,.8)",
        "0 0 35px rgba(248,215,229,.45)"
      ],
      transition: {
        duration: 1.2,
        repeat: Infinity
      }
    },

    responding: {
      scale: [1, 1.18, 1],
      boxShadow: [
        "0 0 45px #F8D7E5",
        "0 0 100px #F8D7E5",
        "0 0 45px #F8D7E5"
      ],
      transition: {
        duration: .8,
        repeat: Infinity
      }
    },

    celebrating: {
      scale: [1, 1.35, 1],
      rotate: [0, 15, -15, 0],
      transition: {
        duration: .6,
        repeat: Infinity
      }
    }
  };

  const status = {
    idle: "Ready to help 🌿",
    thinking: "Thinking...",
    responding: "Responding...",
    celebrating: "Proud of you ❤️"
  };

  return (
    <div className="flex flex-col items-center mb-10">

      <motion.div
        animate={variants[state]}
        className="relative w-24 h-24 rounded-full bg-gradient-to-br from-pink-200 via-[#F8EDEB] to-[#E8DDCF] flex items-center justify-center"
      >

        <span className="text-4xl">
          🌿
        </span>

        <div className="absolute w-32 h-32 rounded-full border border-pink-200/20 animate-ping"></div>

      </motion.div>

      <h2 className="mt-5 text-3xl font-bold">

        MindEase AI

      </h2>

      <p className="text-neutral-400 mt-2">

        {status[state]}

      </p>

    </div>
  );
}