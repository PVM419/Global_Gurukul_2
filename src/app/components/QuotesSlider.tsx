import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const quotes = [
  {
    text: "Education is the manifestation of perfection already in man.",
    author: "Swami Vivekananda",
  },
  {
    text: "The goal of mankind is knowledge. That is the one ideal placed before us by Eastern philosophy.",
    author: "Swami Vivekananda",
  },
  {
    text: "You cannot believe in God until you believe in yourself.",
    author: "Swami Vivekananda",
  },
  {
    text: "The Self is not born, nor does it die; it did not originate from anyone, nor did anyone originate from it.",
    author: "Adi Shankaracharya",
  },
  {
    text: "The world is unreal. Only Brahman is real. The world is Brahman.",
    author: "Adi Shankaracharya",
  },
];

export default function QuotesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  return (
    <section className="pt-4 pb-20 bg-gradient-to-b from-[var(--sandalwood-light)] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--maroon)] mb-4">
            Timeless Wisdom
          </h2>
        </motion.div>

        <div className="relative">
          {/* Quote Card */}
          <div className="bg-white/70 backdrop-blur-md border border-[var(--temple-gold)]/30 rounded-3xl shadow-2xl p-12 min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl text-[var(--maroon-dark)] italic leading-relaxed mb-6">
                  "{quotes[currentIndex].text}"
                </p>
                <p className="text-lg text-[var(--saffron-dark)]">
                  — {quotes[currentIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-[var(--saffron)]/30 text-[var(--maroon)] hover:bg-[var(--saffron)] hover:text-white transition-all duration-300 shadow-lg"
              aria-label="Previous quote"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[var(--saffron)] w-8"
                      : "bg-[var(--saffron)]/30"
                  }`}
                  aria-label={`Go to quote ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-[var(--saffron)]/30 text-[var(--maroon)] hover:bg-[var(--saffron)] hover:text-white transition-all duration-300 shadow-lg"
              aria-label="Next quote"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
