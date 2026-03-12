import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";


export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[var(--sandalwood-light)] via-white to-[var(--sacred-white)]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[var(--saffron)] blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[var(--temple-gold)] blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">
        {/* Title Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--maroon)] mb-6 tracking-tight">
            GLOBAL GURUKUL
          </h1>

      
          <p className="text-xl md:text-2xl text-[var(--saffron-dark)] italic max-w-3xl mx-auto">
            Reviving Eternal Indian Wisdom for a Conscious World
          </p>
        </motion.div> */}

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--maroon)] mb-6 tracking-tight flex justify-center items-center">


            <span>GL</span>


            <img
              src="/earth.png"
              alt="Earth"
              className="h-[1.3em] w-[1.3em] mx-1 inline-block object-contain"
            />

            <span>BAL GURUKUL</span>

          </h1>

          
          <p className="text-xl md:text-2xl text-[var(--saffron-dark)] italic max-w-3xl mx-auto">
            Global Gurukul, an initiative of Pavitra Vaydic Math, is a unique educational movement dedicated to reviving
            India's timeless Gurukul tradition while embracing modern learning. We seek to nurture future leaders who
            embody ancient wisdom and modern excellence individuals rooted in ethics, spirituality, and scientific temper.
          </p>
        </motion.div> */}

        {/* Spiritual Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-6 md:mt-10 mb-14 px-4"
        >

          {/* Gayatri Mantra */}
          <p className="text-base md:text-lg lg:text-xl text-[var(--saffron-dark)] italic mb-6 max-w-5xl mx-auto leading-relaxed">
            Om Bhur Bhuvaḥ Swaha Tat Savitur Vareṇyam Bhargo Devasya Dhīmahi Dhiyo Yo Naḥ Prachodayāt ॥
          </p>

          {/* Main Title - Engraved Devotional */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide"
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#c56a1a",
              textShadow: `
        2px 2px 0px #8b3f00,
        4px 4px 10px rgba(0,0,0,0.2)
      `
            }}
          >
            Pavitra Vaydic Math
          </h1>

          {/* Bengali Title */}
          <h2
            className="text-3xl md:text-5xl lg:text-6xl mt-4"
            style={{
              fontFamily: "'Noto Serif Bengali', serif",
              color: "#d94d27",
              textShadow: "1px 1px 4px rgba(0,0,0,0.15)"
            }}
          >
            পবিত্র বৈদিক মঠ
          </h2>

          {/* Registration Line */}
          <p className="text-sm md:text-base mt-5 font-semibold text-blue-700">
            (Registered Social Welfare Trust of Government of India)
          </p>

        </motion.div>
        {/* Spiritual Title Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // className="text-center mt-24 mb-16 px-4"
          className="text-center mt-6 md:mt-10 mb-16 px-4"
        >
          
        
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--saffron-dark)] italic mb-6 max-w-6xl mx-auto whitespace-nowrap overflow-x-auto">
            Om Bhur Bhuvaḥ Swaha Tat Savitur Vareṇyam Bhargo Devasya Dhīmahi Dhiyo Yo Naḥ Prachodayāt
          </p>

          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--maroon)] tracking-tight">
            Pavitra Vaidik Math
          </h1>

         
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--maroon)] mt-4 tracking-tight">
            পবিত্র বৈদিক মঠ
          </h2>

         
          <p className="text-xs md:text-sm text-[var(--maroon-dark)]/70 mt-6 italic">
            (Registered Social Welfare Trust of Government of India)
          </p>
        </motion.div> */}

        {/* Split Screen Hero */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Swami Vivekananda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[3/4] relative">
                <ImageWithFallback
                  src="/vivek.jpeg"
                  alt="Swami Vivekananda"
                  className="w-full h-full object-cover"
                />
                {/* Golden glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--temple-gold)]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Quote Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md border border-[var(--temple-gold)]/30 rounded-2xl p-6 shadow-xl"
              >
                <p className="text-[var(--maroon-dark)] italic leading-relaxed">
                  "Arise, awake, and stop not till the goal is reached."
                </p>
                <p className="text-sm text-[var(--saffron-dark)] mt-2">— Swami Vivekananda</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Adi Shankaracharya */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[3/4] relative">
                <ImageWithFallback
                  src="/Adi.jpeg"
                  alt="Adi Shankaracharya"
                  className="w-full h-full object-cover"
                />
                {/* Temple lamp effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--saffron)]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Quote Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md border border-[var(--saffron)]/30 rounded-2xl p-6 shadow-xl"
              >
                <p className="text-[var(--maroon-dark)] italic leading-relaxed">
                  "Brahman alone is real, the world is an appearance."
                </p>
                <p className="text-sm text-[var(--saffron-dark)] mt-2">— Adi Shankaracharya</p>
              </motion.div>
            </div>
          </motion.div>
        </div>


        {/* ---------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--maroon)] mb-6 tracking-tight flex justify-center items-center">
            <span>GL</span>

            <img
              src="/earth.png"
              alt="Earth"
              className="h-[1.3em] w-[1.3em] mx-1 inline-block object-contain"
            />

            <span>BAL GURUKUL</span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--saffron-dark)] italic max-w-3xl mx-auto">
            Global Gurukul, an initiative of Pavitra Vaydic Math, is a unique educational movement dedicated to reviving
            India's timeless Gurukul tradition while embracing modern learning.
          </p>
        </motion.div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="inline-block bg-white/80 backdrop-blur-md border border-[var(--saffron)]/30 rounded-3xl p-8 shadow-2xl">
            <p className="text-[var(--maroon-dark)] mb-2">
              Not charity. Not wealth. Only devotion.
            </p>
            <Link
              to="/donate"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[var(--saffron)] to-[var(--temple-gold)] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              Donate ₹1 – Offer a Sacred Contribution
            </Link>
            <p className="text-sm text-[var(--maroon-dark)]/70 mt-4 italic">
              Even ₹1 feeds thousands of children
            </p>
          </div>
        </motion.div> */}
      </div >
    </section >
  );
}
