import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const allImages = [
  

  { url: "/e1.jpeg", category: "Education", title: "Students Learning" },
  { url: "/e2.jpeg", category: "Education", title: "Children Studying" },
  { url: "/edu1.jpg", category: "Education", title: "Work Education" },
  { url: "/edu2.jpg", category: "Education", title: "Children Studying" },
  { url: "/edu3.jpg", category: "Education", title: "Students Learning" },
  { url: "/edu4.jpg", category: "Education", title: "Drawing Competition" },

  { url: "/v1.jpeg", category: "Spiritual Practices", title: "Peaceful Meditation" },
  { url: "/v2.jpeg", category: "Spiritual Practices", title: "Devotional Activity" },
  { url: "/v3.jpeg", category: "Spiritual Practices", title: "Daily Puja" },

  { url: "/a1.jpeg", category: "Ashram Life", title: "Ashram Life" },
  { url: "/a2.jpeg", category: "Ashram Life", title: "Ashram Life" },
  { url: "/a4.jpeg", category: "Ashram Life", title: "Ashram Life" },
  { url: "/a5.jpeg", category: "Ashram Life", title: "Daily Life" },
  { url: "/s6.jpeg", category: "Ashram Life", title: "Daily Life" },

  { url: "/f1.jpeg", category: "Education", title: "Work Education" },
  { url: "/f2.jpeg", category: "Education", title: "Work Education" },


  { url: "/fes2.jpg", category: "Festivals", title: "Cultural Celebration" },
  { url: "/fes3.jpg", category: "Festivals", title: "Cultural Celebration" },
  { url: "/festivals1.jpg", category: "Festivals", title: "Cultural Celebration" },
  { url: "/fes4.jpg", category: "Festivals", title: "Cultural Celebration" },
  

  { url: "/s1.jpeg", category: "Seva", title: "Community Service" },
  { url: "/s2.jpeg", category: "Seva", title: "Community Service" },
  { url: "/s3.jpeg", category: "Seva", title: "Community Service" },
  { url: "/s4.jpeg", category: "Seva", title: "Community Service" },
  { url: "/s5.jpeg", category: "Seva", title: "Community Service" },
  { url: "/s7.jpeg", category: "Seva", title: "Community Service" },
  { url: "/s8.jpeg", category: "Seva", title: "Community Service" },
  { url: "/s9.jpeg", category: "Seva", title: "Community Service" },
  { url: "/s10.jpeg", category: "Seva", title: "Community Service" },
  { url: "/s11.jpeg", category: "Seva", title: "Community Service" },
  { url: "/s12.jpeg", category: "Seva", title: "Community Service" },
  { url: "/s13.jpeg", category: "Seva", title: "Community Service" },
  { url: "/s15.jpeg", category: "Seva", title: "Community Service" },
  { url: "/s16.jpeg", category: "Seva", title: "Community Service" },
  { url: "/s17.jpeg", category: "Seva", title: "Community Service" },


];

const categories = ["All", "Ashram Life", "Education", "Seva", "Spiritual Practices", "Festivals"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === "All"
    ? allImages
    : allImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--sacred-white)] to-[var(--sandalwood-light)]">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[var(--sandalwood-light)] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--maroon)] mb-6">
              Sacred Moments
            </h1>
            <p className="text-xl text-[var(--saffron-dark)] italic max-w-3xl mx-auto">
              A visual journey through our spiritual community and educational mission
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white sticky top-20 z-30 border-b border-[var(--saffron)]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg ${selectedCategory === category
                  ? "bg-gradient-to-r from-[var(--saffron)] to-[var(--temple-gold)] text-white shadow-lg"
                  : "bg-white/80 backdrop-blur-md border border-[var(--saffron)]/30 text-[var(--maroon-dark)] hover:bg-[var(--sandalwood)]/30"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gradient-to-b from-white to-[var(--sandalwood-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry gutter="1.5rem">
                  {filteredImages.map((image, index) => (
                    <motion.div
                      key={`${selectedCategory}-${index}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      onClick={() => setLightboxImage(image.url)}
                      className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    >
                      <div className="relative overflow-hidden">
                        <ImageWithFallback
                          src={image.url}
                          alt={image.title}
                          className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500"
                        />

                        {/* Glassmorphic overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--maroon)]/90 via-[var(--maroon)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-white text-lg font-semibold mb-2">
                              {image.title}
                            </h3>
                            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm">
                              {image.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Gold glow on hover */}
                      <div className="absolute inset-0 rounded-2xl ring-2 ring-[var(--temple-gold)]/0 group-hover:ring-[var(--temple-gold)]/60 transition-all duration-300 pointer-events-none"></div>
                    </motion.div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-all duration-300"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={lightboxImage}
                alt="Gallery image"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}