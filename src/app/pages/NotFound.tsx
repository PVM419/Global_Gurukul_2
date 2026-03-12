import { motion } from "motion/react";
import { Link } from "react-router";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--sacred-white)] to-[var(--sandalwood-light)] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <div className="text-8xl mb-6">🕉️</div>
        <h1 className="text-6xl font-bold text-[var(--maroon)] mb-4">404</h1>
        <h2 className="text-2xl text-[var(--saffron-dark)] mb-6">
          Path Not Found
        </h2>
        <p className="text-lg text-[var(--maroon-dark)]/80 mb-8 leading-relaxed">
          Like a seeker lost in the wilderness, this path does not exist in our sacred space. 
          Let us guide you back to the light.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--saffron)] to-[var(--temple-gold)] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Home className="w-5 h-5" />
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
