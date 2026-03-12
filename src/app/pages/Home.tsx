import { motion } from "motion/react";
import { Link } from "react-router";
import { BookOpen, Heart, Users } from "lucide-react";
import HeroSection from "../components/HeroSection";
import GalleryPreview from "../components/GalleryPreview";
import QuotesSlider from "../components/QuotesSlider";

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--maroon)] mb-6">
              Our Sacred Philosophy
            </h2>
            <p className="text-lg text-[var(--maroon-dark)]/70 max-w-3xl mx-auto leading-relaxed">
              Global Gurukul is rooted in the ancient Indian Gurukul tradition, where knowledge flows as a sacred river, 
              nourishing minds and awakening souls through the timeless path of Shraddha (devotion) and Vishwas (trust).
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white/70 backdrop-blur-md border border-[var(--saffron)]/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--saffron)] to-[var(--temple-gold)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[var(--maroon)] mb-4">
                  Ancient Wisdom
                </h3>
                <p className="text-[var(--maroon-dark)]/80 leading-relaxed">
                  We preserve and share the eternal teachings of Vedanta, Yoga, and the timeless wisdom of India's spiritual masters.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white/70 backdrop-blur-md border border-[var(--saffron)]/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--maroon)] to-[var(--maroon-dark)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[var(--maroon)] mb-4">
                  Knowledge as Seva
                </h3>
                <p className="text-[var(--maroon-dark)]/80 leading-relaxed">
                  Education is our sacred service. Every lesson taught, every student nurtured is an offering to the divine.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white/70 backdrop-blur-md border border-[var(--saffron)]/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--temple-gold)] to-[var(--saffron)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[var(--maroon)] mb-4">
                  Spiritual Awakening
                </h3>
                <p className="text-[var(--maroon-dark)]/80 leading-relaxed">
                  We guide seekers on the path of self-realization, nurturing consciousness and inner peace through authentic practices.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/about"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[var(--maroon)] to-[var(--maroon-dark)] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>

      <GalleryPreview />
      <QuotesSlider />
    </div>
  );
}
