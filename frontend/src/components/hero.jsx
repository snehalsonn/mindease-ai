import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {

    return (

        <section className="relative flex flex-col justify-center items-center h-screen text-center px-8">

            <motion.h1

                initial={{ opacity: 0, y: 60 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 1 }}

                className="text-7xl md:text-8xl font-black leading-tight">

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

                className="mt-8 text-2xl max-w-2xl text-[#E7D7C9]">

                A luxurious AI-powered mental wellness companion built with Gemini, LangChain and LangGraph.

            </motion.p>

            <Link to="/chat">

                <motion.button

                    whileHover={{ scale: 1.08 }}

                    whileTap={{ scale: .95 }}

                    className="mt-12 bg-[#F8D7E5] text-black px-10 py-5 rounded-full text-xl font-bold">

                    Start Your Journey →

                </motion.button>

            </Link>

        </section>

    )

}