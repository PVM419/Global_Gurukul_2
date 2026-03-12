import { Link, useLocation } from "react-router";
import { Menu, X, Flame } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/teachings", label: "Teachings" },
    { path: "/education", label: "Education" },
    //{ path: "/educational-teaser", label: "Educational Thoughts" },
    { path: "/gallery", label: "Gallery" },
    { path: "/donate", label: "Donate" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphic header */}
      <div className="bg-white/70 backdrop-blur-md border-b border-[var(--saffron)]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              {/* <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--saffron)] to-[var(--maroon)] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <Flame className="w-6 h-6 text-white" />
              </div> */}
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <img
                  src="/Logo-removebg.png"
                  alt="Company Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-semibold text-[var(--maroon)] tracking-wide">
                  GLOBAL GURUKUL
                </div>
                <div className="text-xs text-[var(--saffron-dark)] italic">
                  Devotional Educational Trust
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-all ${isActive(link.path)
                    ? "bg-[var(--saffron)] text-white shadow-md"
                    : link.path === "/donate"
                      ? "bg-gradient-to-r from-[var(--saffron)] to-[var(--temple-gold)] text-white shadow-md hover:shadow-lg"
                      : "text-[var(--maroon-dark)] hover:bg-[var(--sandalwood)]/50"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[var(--sandalwood)]/50 text-[var(--maroon)]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-b border-[var(--saffron)]/20 shadow-lg overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all ${isActive(link.path)
                    ? "bg-[var(--saffron)] text-white shadow-md"
                    : link.path === "/donate"
                      ? "bg-gradient-to-r from-[var(--saffron)] to-[var(--temple-gold)] text-white shadow-md"
                      : "text-[var(--maroon-dark)] hover:bg-[var(--sandalwood)]/50"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
