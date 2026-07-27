import { motion } from "framer-motion";

export default function FeatureCard({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="glass rounded-3xl p-8"
    >
      <div className="text-5xl mb-5">{icon}</div>

      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="mt-4 text-neutral-300 leading-7">
        {text}
      </p>
    </motion.div>
  );
}