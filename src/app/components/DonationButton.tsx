import { Link, useLocation } from "react-router";
import { Heart } from "lucide-react";
import { motion } from "motion/react";

export default function DonationButton() {
  const location = useLocation();
  
  // Don't show on donate page
  if (location.pathname === "/donate") {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-40"
    >
      <Link
        to="/donate"
        className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-[var(--saffron)] to-[var(--temple-gold)] text-white rounded-full shadow-2xl hover:shadow-[0_8px_30px_rgba(255,153,51,0.4)] transition-all duration-300"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
        </motion.div>
        <div className="text-left">
          <div className="text-xs sm:text-sm font-semibold">Donate</div>
          <div className="text-[10px] sm:text-xs opacity-90 hidden sm:block">Sacred Contribution</div>
        </div>
      </Link>
    </motion.div>
  );
}