// import { motion } from "motion/react";
// import { BookOpen, Flame, Flower2 } from "lucide-react";

// export default function Teachings() {
//   const teachings = [
//     {
//       category: "Vivekananda's Ideals",
//       icon: Flame,
//       color: "from-[var(--saffron)] to-[var(--temple-gold)]",
//       lessons: [
//         {
//           title: "Strength & Fearlessness",
//           text: "\"You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul.\"",
//           insight: "True strength comes from self-knowledge and the realization of one's divine nature.",
//         },
//         {
//           title: "Service to Humanity",
//           text: "\"They alone live who live for others, the rest are more dead than alive.\"",
//           insight: "Selfless service (Seva) is the highest form of worship and the path to spiritual evolution.",
//         },
//         {
//           title: "Universal Religion",
//           text: "\"We believe not only in universal toleration, but we accept all religions as true.\"",
//           insight: "All paths lead to the same divine truth. Respect and embrace diversity in spiritual practices.",
//         },
//       ],
//     },
//     {
//       category: "Advaita Vedanta",
//       icon: Flower2,
//       color: "from-[var(--maroon)] to-[var(--maroon-dark)]",
//       lessons: [
//         {
//           title: "Brahman is Reality",
//           text: "\"Brahma Satyam Jagat Mithya, Jivo Brahmaiva Na Aparah\" - Brahman alone is real, the world is illusory, the individual soul is nothing but Brahman itself.",
//           insight: "The ultimate reality is non-dual consciousness. The world of names and forms is a temporary appearance.",
//         },
//         {
//           title: "Self-Inquiry",
//           text: "\"Atma Vichara\" - Who am I? This is the fundamental question that leads to liberation.",
//           insight: "Through persistent self-inquiry, one discovers the true Self beyond body, mind, and ego.",
//         },
//         {
//           title: "Maya & Liberation",
//           text: "\"Maya is the mysterious power that makes the impossible possible - the one appearing as many.\"",
//           insight: "Understanding the nature of illusion (Maya) is key to attaining freedom (Moksha).",
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[var(--sacred-white)] to-[var(--sandalwood-light)]">
//       {/* Hero */}
//       <section className="py-20 bg-gradient-to-b from-[var(--sandalwood-light)] to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold text-[var(--maroon)] mb-6">
//               Teachings & Wisdom
//             </h1>
//             <p className="text-xl text-[var(--saffron-dark)] italic max-w-3xl mx-auto leading-relaxed">
//               Dive deep into the timeless teachings that illuminate our path at Global Gurukul
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Scripture Reading UI */}
//       <section className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           {teachings.map((section, sectionIndex) => (
//             <motion.div
//               key={sectionIndex}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="mb-20 last:mb-0"
//             >
//               {/* Section Header */}
//               <div className={`bg-gradient-to-r ${section.color} rounded-3xl p-8 mb-8 shadow-xl`}>
//                 <div className="flex items-center gap-4 text-white">
//                   <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
//                     <section.icon className="w-6 h-6" />
//                   </div>
//                   <h2 className="text-3xl font-bold">{section.category}</h2>
//                 </div>
//               </div>

//               {/* Lessons */}
//               <div className="space-y-8">
//                 {section.lessons.map((lesson, lessonIndex) => (
//                   <motion.div
//                     key={lessonIndex}
//                     initial={{ opacity: 0, x: -30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: lessonIndex * 0.1 }}
//                     className="bg-white/70 backdrop-blur-md border border-[var(--saffron)]/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
//                   >
//                     <div className="flex items-start gap-4 mb-4">
//                       <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--temple-gold)] to-[var(--saffron)] flex items-center justify-center flex-shrink-0 mt-1">
//                         <BookOpen className="w-4 h-4 text-white" />
//                       </div>
//                       <h3 className="text-2xl font-semibold text-[var(--maroon)]">
//                         {lesson.title}
//                       </h3>
//                     </div>

//                     <div className="ml-12 space-y-4">
//                       <blockquote className="border-l-4 border-[var(--saffron)] pl-6 py-2 bg-[var(--sandalwood-light)]/30 rounded-r-xl">
//                         <p className="text-[var(--maroon-dark)] italic leading-relaxed">
//                           {lesson.text}
//                         </p>
//                       </blockquote>

//                       <div className="bg-[var(--sandalwood)]/20 rounded-xl p-4">
//                         <p className="text-sm font-semibold text-[var(--maroon)] mb-2">
//                           💡 Key Insight:
//                         </p>
//                         <p className="text-[var(--maroon-dark)]/80 leading-relaxed">
//                           {lesson.insight}
//                         </p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Practice Section */}
//       <section className="py-20 bg-gradient-to-b from-white to-[var(--sandalwood-light)]">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="bg-white/80 backdrop-blur-md border border-[var(--temple-gold)]/30 rounded-3xl p-10 shadow-2xl text-center"
//           >
//             <h2 className="text-3xl font-bold text-[var(--maroon)] mb-6">
//               Living the Teachings
//             </h2>
//             <p className="text-[var(--maroon-dark)]/80 leading-relaxed mb-8">
//               Wisdom without practice is mere philosophy. At Global Gurukul, we encourage daily integration 
//               of these teachings through meditation, selfless service, and mindful living. The path to 
//               realization is walked step by step, moment by moment.
//             </p>
//             <div className="inline-block bg-[var(--sandalwood)]/40 rounded-2xl px-6 py-4">
//               <p className="text-[var(--maroon)] italic">
//                 "अहं ब्रह्मास्मि" (Aham Brahmasmi) - I am Brahman
//               </p>
//               <p className="text-sm text-[var(--maroon-dark)]/70 mt-2">
//                 This is your true nature. Realize it. Embody it. Live it.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

//----------------------------------------------------------------------------
import { motion } from "motion/react";
import { BookOpen, Users, Leaf, Brain, Heart, Globe, Sparkles } from "lucide-react";

export default function TeachingMethod() {
  const methods = [
    {
      title: "Guru–Shishya Parampara",
      icon: Users,
      text: "Education at Global Gurukul is rooted in the ancient Guru–Shishya tradition where learning is built upon deep trust, mentorship, and lifelong guidance rather than a transactional classroom interaction.",
      points: [
        "Teachers act as mentors, philosophers, and guides.",
        "Students receive guidance for body, mind, and spirit.",
        "Learning extends beyond classroom hours through lifelong mentorship.",
        "Strong personal bonds encourage confidence and free thinking.",
      ],
    },
    {
      title: "Experiential & Activity-Based Learning",
      icon: Leaf,
      text: "Global Gurukul places real experiences at the center of education so that knowledge is understood deeply rather than memorized.",
      points: [
        "Nature becomes a classroom with learning under trees, gardens, and open spaces.",
        "Hands-on projects including science experiments, art workshops, and farming.",
        "Community service programs connecting learning to real life.",
        "Music, dance, theatre, and crafts integrated as core learning experiences.",
      ],
    },
    {
      title: "Harmony of Spiritual & Scientific Learning",
      icon: Sparkles,
      text: "Academic knowledge is balanced with inner development to cultivate both intellectual clarity and emotional stability.",
      points: [
        "Daily yoga, meditation, and mindfulness practices.",
        "Ethical inquiry alongside science and mathematics.",
        "Integration of ancient wisdom such as Sanskrit texts and Vedic mathematics.",
        "Balanced learning combining modern STEM with traditional knowledge.",
      ],
    },
    {
      title: "Personalized Attention & Individual Pace",
      icon: Brain,
      text: "Every student is unique. Global Gurukul adapts learning paths to match each child’s strengths and aspirations.",
      points: [
        "Small teacher-student ratios ensure individual attention.",
        "Customized learning plans for each student.",
        "Support for both gifted learners and students needing extra help.",
        "Regular one-on-one mentoring and goal-setting sessions.",
      ],
    },
    {
      title: "Learning Beyond the Classroom",
      icon: Globe,
      text: "The entire campus and the world become a learning laboratory where knowledge comes alive through experiences.",
      points: [
        "Community service and environmental conservation programs.",
        "Organic farming and sustainability activities.",
        "Outdoor learning through trekking, astronomy nights, and heritage walks.",
        "Interaction with artisans, scientists, and social workers.",
      ],
    },
    {
      title: "Value-Centered Education",
      icon: Heart,
      text: "Character development and ethical awareness are embedded in every subject taught at Global Gurukul.",
      points: [
        "Lessons emphasize truthfulness, compassion, and discipline.",
        "Teachers demonstrate values through their own conduct.",
        "Case studies and moral discussions integrated into academic subjects.",
        "Students develop strong ethical foundations for life.",
      ],
    },
    {
      title: "Collaborative & Dialogic Learning",
      icon: Users,
      text: "Learning is a shared journey where students actively participate through dialogue, debate, and collective discovery.",
      points: [
        "Group discussions and debates encourage critical thinking.",
        "Socratic questioning stimulates deeper inquiry.",
        "Peer-to-peer learning strengthens communication skills.",
        "Inspired by Vedic satsang and modern interactive pedagogy.",
      ],
    },
    {
      title: "Balanced Evaluation & Lifelong Learning",
      icon: BookOpen,
      text: "Assessment at Global Gurukul focuses on understanding, growth, and lifelong curiosity rather than exam scores alone.",
      points: [
        "Continuous evaluation through portfolios and projects.",
        "Presentations and reflective journals instead of only exams.",
        "Focus on progress rather than competition.",
        "Students develop the habit of lifelong learning.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--sacred-white)] to-[var(--sandalwood-light)]">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[var(--sandalwood-light)] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--maroon)] mb-6">
              Teaching Method
            </h1>

            <p className="text-xl text-[var(--saffron-dark)] italic max-w-3xl mx-auto leading-relaxed">
              A transformative educational approach that blends the timeless
              Guru–Shishya tradition with modern research-based pedagogy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-md border border-[var(--saffron)]/20 rounded-3xl p-8 shadow-lg hover:shadow-xl transition"
            >

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--saffron)] to-[var(--temple-gold)] flex items-center justify-center">
                  <method.icon className="text-white w-6 h-6" />
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--maroon)]">
                  {method.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-[var(--maroon-dark)]/80 leading-relaxed mb-6">
                {method.text}
              </p>

              {/* Points */}
              <ul className="space-y-3">
                {method.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-[var(--maroon-dark)]">
                    <span className="text-[var(--saffron)] font-bold">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20 bg-gradient-to-b from-white to-[var(--sandalwood-light)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-md border border-[var(--temple-gold)]/30 rounded-3xl p-10 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-[var(--maroon)] mb-6">
              Education for Life
            </h2>

            <p className="text-[var(--maroon-dark)]/80 leading-relaxed">
              The Global Gurukul teaching method is a living synthesis of
              ancient Indian educational wisdom and modern global practices.
              It nurtures students who are intellectually sharp, emotionally
              balanced, ethically grounded, and spiritually aware.
              <br /><br />
              Our goal is not merely to produce successful professionals but
              enlightened individuals who contribute positively to society and
              the world.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
