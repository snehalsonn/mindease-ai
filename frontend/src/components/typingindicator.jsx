import { motion } from "framer-motion";
import AIAvatar from "./AIavatar";

export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-4 py-4">
      <AIAvatar state="thinking" />

      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        className="glass rounded-2xl px-6 py-4"
      >
        Thinking...
      </motion.div>
    </div>
  );
}