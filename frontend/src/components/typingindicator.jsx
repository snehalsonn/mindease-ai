import { motion } from "framer-motion";
import AIavatar from "./AIavatar";

export default function TypingIndicator() {
  return (
    <div className="flex items-start gap-5">

      <AIAvatar state="thinking" />

      <div className="glass rounded-[28px] px-7 py-6">

        <p className="text-pink-200 font-semibold mb-4">
          MindEase is thinking...
        </p>

        <div className="flex gap-2">

          {[0,1,2].map((dot)=>(

            <motion.div

              key={dot}

              className="w-3 h-3 rounded-full bg-pink-200"

              animate={{
                y:[0,-8,0]
              }}

              transition={{
                repeat:Infinity,
                duration:.8,
                delay:dot*.2
              }}

            />

          ))}

        </div>

      </div>

    </div>
  );
}