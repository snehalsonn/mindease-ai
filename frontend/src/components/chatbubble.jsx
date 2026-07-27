import { motion } from "framer-motion";

export default function ChatBubble({ sender, message }) {

  const isUser = sender === "user";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
        scale: 0.95,
      }}

      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}

      transition={{
        duration: 0.35,
      }}

      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >

      <div
        className={`max-w-3xl rounded-[30px] px-8 py-6 shadow-xl ${
          isUser
            ? "bg-pink-200 text-black"
            : "glass text-white"
        }`}
      >

        <p className="text-base leading-relaxed">
          {message.text}
        </p>


        {message.time && (

          <p
            className={`text-xs mt-3 ${
              isUser
                ? "text-black/50"
                : "text-white/40"
            }`}
          >
            {message.time}
          </p>

        )}

      </div>

    </motion.div>
  );
}