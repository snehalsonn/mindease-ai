import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-bold tracking-wide"
        >
          🌿 MindEase
        </Link>

        <div className="flex gap-8 text-lg">

          <a href="#">Features</a>

          <a href="#">About</a>

          <Link to="/chat">

            <button className="bg-[#F8D7E5] text-black px-6 py-2 rounded-full hover:scale-105 duration-300">

              Start Chat

            </button>

          </Link>

        </div>

      </div>

    </nav>
  );
}