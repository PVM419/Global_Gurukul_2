import { motion } from "motion/react";
import { Sparkles, Target, Eye, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--sacred-white)] to-[var(--sandalwood-light)]">
      {/* Hero */}
      <section className="pt-20 pb-10 bg-gradient-to-b from-[var(--sandalwood-light)] to-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--maroon)] mb-6">
              About Global Gurukul
            </h1>
            <p className="text-xl text-[var(--saffron-dark)] italic max-w-3xl mx-auto">
              Where ancient wisdom meets modern consciousness
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      {/* Grand Spiritual Image Section */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-white to-[var(--sandalwood-light)]">
        <div className="max-w-5xl mx-auto text-center px-4">

          <div className="relative inline-block p-[6px] rounded-[2rem] bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#C9A227] shadow-2xl">

            {/* Inner Card */}
            <div className="bg-white rounded-[1.8rem] p-6">

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl bg-[var(--sandalwood-light)]">
                <img
                  src="/mata.png"   // Change if needed
                  alt="Mata Ji"
                  className="w-full max-w-2xl h-auto object-contain mx-auto transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Name */}
              {/* <h3
                className="mt-8 text-3xl md:text-4xl font-bold tracking-wide"
                style={{
                  fontFamily: "'Cinzel', serif",
                  background: "linear-gradient(to right, #D4AF37, #FFD700, #C9A227)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0px 4px 15px rgba(212,175,55,0.4)"
                }}
              >
                Mata Ji
              </h3> */}

              {/* Decorative Divider */}
              <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#C9A227]"></div>

            </div>
          </div>

        </div>
      </section>


      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/70 backdrop-blur-md border border-[var(--saffron)]/30 rounded-3xl p-10 shadow-xl h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--saffron)] to-[var(--temple-gold)] flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[var(--maroon)] mb-6">Our Vision</h2>
                <p className="text-[var(--maroon-dark)]/80 leading-relaxed mb-4">
                  To revive the sacred Gurukul tradition of India, creating a global community of conscious seekers
                  who embody the eternal wisdom of Vedanta, living lives of purpose, compassion, and spiritual realization.
                </p>
                <p className="text-[var(--maroon-dark)]/80 leading-relaxed">
                  We envision a world where education transcends mere information, becoming a transformative journey
                  of self-discovery and divine awakening.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/70 backdrop-blur-md border border-[var(--maroon)]/30 rounded-3xl p-10 shadow-xl h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--maroon)] to-[var(--maroon-dark)] flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[var(--maroon)] mb-6">Our Mission</h2>
                <p className="text-[var(--maroon-dark)]/80 leading-relaxed mb-4">
                  To provide authentic spiritual education rooted in the teachings of great masters like
                  Swami Vivekananda, Adi Shankaracharya and others, nurturing students in values-based learning,
                  meditation, yoga, and selfless service.
                </p>
                <p className="text-[var(--maroon-dark)]/80 leading-relaxed">
                  We serve the underprivileged with love, offering free education and spiritual guidance
                  to create a more conscious, compassionate world.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Gurukul Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-[var(--sandalwood)]/50 to-[var(--sandalwood-light)]/50 backdrop-blur-md border border-[var(--temple-gold)]/30 rounded-3xl p-12 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--temple-gold)] to-[var(--saffron)] flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[var(--maroon)]">The Gurukul Philosophy</h2>
              </div>

              <div className="space-y-4 text-[var(--maroon-dark)]/80 leading-relaxed">
                <p>
                  The Gurukul system represents the ancient Indian tradition of residential schooling where students
                  lived with their Guru (teacher) in an ashram, learning not just academic subjects but life itself.
                  This holistic approach integrated spiritual practices, ethical living, and practical wisdom.
                </p>
                <p>
                  At Global Gurukul, we honor this sacred lineage by creating a nurturing environment where:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Students develop character alongside competence</li>
                  <li>Meditation and self-inquiry are core practices</li>
                  <li>Knowledge is received with humility and gratitude</li>
                  <li>Service (Seva) is the highest form of learning</li>
                  <li>Every soul is recognized as divine consciousness</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Gurukul Movement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-white/80 backdrop-blur-md border border-[var(--saffron)]/30 rounded-3xl p-12 shadow-2xl">

              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--saffron)] to-[var(--temple-gold)] flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl font-bold text-[var(--maroon)]">
                  The Gurukul Movement
                </h2>
              </div>

              <div className="space-y-4 text-[var(--maroon-dark)]/80 leading-relaxed">

                <p>
                  The Gurukul Movement represents a conscious effort to revive the ancient
                  Indian system of holistic education in response to the limitations of
                  modern schooling. Today’s education system often focuses primarily on
                  rigid syllab, examinations, and institutional structures, leaving
                  little room for the development of character, wisdom, and deeper
                  understanding of life.
                </p>

                <p>
                  The Gurukul tradition offers an alternative vision. It recognizes that
                  every student possesses unique potential, talents, and a distinct life
                  path. Education in the Gurukul system is therefore designed not merely
                  to prepare students for examinations, but to prepare them for life —
                  nurturing discipline, responsibility, self-knowledge, and spiritual
                  awareness.
                </p>

                <p>
                  In this tradition, education is not treated as a commercial product.
                  Instead, it is seen as a sacred duty toward society and the nation.
                  Acharyas and teachers dedicate themselves to guiding students with
                  compassion, wisdom, and personal mentorship within a supportive
                  community environment.
                </p>

                <p>
                  Historically, the Gurukul system played a crucial role in shaping
                  capable leaders, scholars, and responsible citizens. The modern Gurukul
                  movement seeks to continue this legacy by building individuals who are
                  intellectually capable, ethically grounded, and spiritually awakened.
                </p>

                <p>
                  Through this revival, the Gurukul movement aims to create a generation
                  that combines ancient wisdom with modern awareness — individuals who
                  can contribute meaningfully to society while remaining rooted in the
                  timeless values of Dharma.
                </p>

              </div>
            </div>
          </motion.div>

          {/* Gurukul Movement */}
          <section className="py-24 bg-gradient-to-b from-white to-[var(--sandalwood-light)]">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Section Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >

                <h2 className="text-4xl md:text-5xl font-bold text-[var(--maroon)] mb-6">
                  Gurukul and the Modern School System
                </h2>

                <p className="text-lg text-[var(--maroon-dark)]/70 max-w-3xl mx-auto">
                  A perspective-based understanding of how the ancient Gurukul system differs from
                  today’s institutional education model.
                </p>

              </motion.div>


              {/* Main Explanation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/80 backdrop-blur-md border border-[var(--saffron)]/30 rounded-3xl p-12 shadow-xl mb-20"
              >

                <div className="space-y-5 text-[var(--maroon-dark)]/80 leading-relaxed">

                  <p>
                    The prevailing school system of today is largely governed by a rigid structure.
                    Education is driven by a predefined syllabus, examination-based evaluation,
                    and administrative frameworks. Within this model, a student’s individual
                    abilities, personal interests, psychological tendencies, and long-term
                    life aspirations often receive limited attention.
                  </p>

                  <p>
                    The Gurukul system, however, is built upon a fundamentally different
                    philosophical foundation. Its purpose is not merely to complete a syllabus,
                    but to discover and nurture the unique potential of every student.
                    Education in a Gurukul prepares individuals not just for examinations,
                    but for the deeper responsibilities of life.
                  </p>

                  <p>
                    In many modern institutions, students are trained primarily to meet fixed
                    examination standards. Good results often become promotional achievements
                    for schools, but they do not necessarily reflect a student’s overall
                    development as a human being.
                  </p>

                  <p>
                    In contrast, Gurukul education is planned with a long-term vision,
                    often considering the next 15–20 years of a student’s future.
                    Teaching methods, skills, and learning paths evolve continuously
                    to align with future higher-education opportunities and
                    realistic career possibilities.
                  </p>

                  <p>
                    Another crucial distinction lies in the philosophy of education.
                    Modern schooling frequently operates as a commercial system,
                    where education becomes a transaction between institutions
                    and families.
                  </p>

                  <p>
                    The Gurukul tradition views education differently.
                    It considers education a sacred national responsibility.
                    Teachers (Acharyas) dedicate themselves to guiding students
                    with the spirit of service, character building,
                    and social transformation.
                  </p>

                </div>

              </motion.div>


              {/* Gurukul Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20"
              >

                <h3 className="text-3xl md:text-4xl font-bold text-[var(--maroon)] text-center mb-12">
                  Features of an Ideal Contemporary Gurukul
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                  {[
                    {
                      title: "Future-Oriented Education",
                      desc: "Preparing students for the technological, social and professional realities of the future."
                    },
                    {
                      title: "Development of Individual Talent",
                      desc: "Recognizing each child's unique abilities and guiding them toward meaningful life paths."
                    },
                    {
                      title: "Strength to Face Life Challenges",
                      desc: "Providing mental, emotional and practical training to deal with crises and uncertainties."
                    },
                    {
                      title: "Nature-Based Learning",
                      desc: "Creating a learning environment connected with nature, biodiversity, and humane values."
                    },
                    {
                      title: "Character and Discipline",
                      desc: "Teaching that true freedom comes from responsibility, discipline, and self-control."
                    },
                    {
                      title: "Holistic Human Development",
                      desc: "Balancing intellectual growth with ethics, spirituality, and social responsibility."
                    }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white border border-[var(--saffron)]/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
                    >

                      <h4 className="text-xl font-semibold text-[var(--maroon)] mb-3">
                        {item.title}
                      </h4>

                      <p className="text-[var(--maroon-dark)]/70 text-sm leading-relaxed">
                        {item.desc}
                      </p>

                    </div>
                  ))}

                </div>

              </motion.div>


              {/* Conclusion */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-[var(--sandalwood)]/50 to-[var(--sandalwood-light)]/50 border border-[var(--temple-gold)]/30 rounded-3xl p-12 shadow-2xl text-center"
              >

                <h3 className="text-3xl font-bold text-[var(--maroon)] mb-6">
                  A Vision for the Future
                </h3>

                <p className="text-[var(--maroon-dark)]/80 leading-relaxed max-w-4xl mx-auto">
                  Every child carries within them the seed of infinite potential. When education
                  confines that potential within rigid walls and examination-driven competition,
                  the loss is not only the child’s but the nation’s as well. The Gurukul vision
                  seeks to build an education system that is humane, nature-centered,
                  future-oriented, and dedicated to creating responsible, capable,
                  and compassionate citizens.
                </p>

              </motion.div>

            </div>
          </section>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--maroon)] text-center mb-12">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Shraddha", subtitle: "Devotion & Faith", icon: "🙏" },
                { title: "Vishwas", subtitle: "Trust & Belief", icon: "✨" },
                { title: "Seva", subtitle: "Selfless Service", icon: "🤝" },
                { title: "Satya", subtitle: "Truth & Authenticity", icon: "🕉️" },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/70 backdrop-blur-md border border-[var(--saffron)]/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-[var(--maroon)] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[var(--maroon-dark)]/70">{value.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      {/* Grand Spiritual Image Section */}

    </div>
  );
}
