import { motion } from "framer-motion";

const hearts = Array.from({ length: 15 });

export default function FloatingHearts() {

    return (

        <div className="absolute inset-0 overflow-hidden pointer-events-none">

            {hearts.map((_, i) => (

                <motion.div

                    key={i}

                    className="absolute text-pink-200/30 text-3xl"

                    initial={{

                        y: "100vh",

                        x: Math.random() * window.innerWidth

                    }}

                    animate={{

                        y: -200

                    }}

                    transition={{

                        repeat: Infinity,

                        duration: 12 + Math.random() * 10,

                        delay: Math.random() * 10

                    }}

                >

                    ♥

                </motion.div>

            ))}

        </div>

    )

}