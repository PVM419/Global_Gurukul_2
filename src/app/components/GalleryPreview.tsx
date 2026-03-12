import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const previewImages = [
  {
    url: "/e1.jpeg",
    alt: "Students learning",
    category: "Education",
  },
  {
    url: "/v1.jpeg",
    alt: "Yoga and meditation",
    category: "Spiritual Practices",
  },
  {
    url: "/a1.jpeg",
    alt: "Spiritual gathering",
    category: "Ashram Life",
  },
  {
    url: "/f1.jpeg",
    alt: "Festival celebration",
    category: "Festivals",
  },
  {
    url: "/s3.jpeg",
    alt: "Children studying",
    category: "seva",
  },
  {
    url: "/s5.jpeg",
    alt: "Temple lamp",
    category: "Ashram Life",
  },
];

export default function GalleryPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[var(--sandalwood-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--maroon)] mb-4">
            Sacred Moments & Living Dharma
          </h2>
          <p className="text-lg text-[var(--maroon-dark)]/70 max-w-2xl mx-auto">
            Witness the authentic spiritual journey and transformative education at Global Gurukul
          </p>
        </motion.div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="1rem">
            {previewImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Glassmorphic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--maroon)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Gold glow on hover */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-[var(--temple-gold)]/0 group-hover:ring-[var(--temple-gold)]/50 transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--saffron)] to-[var(--maroon)] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View Full Gallery
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}