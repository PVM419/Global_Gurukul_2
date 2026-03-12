// import { motion } from "motion/react";
// import { GraduationCap, Heart, Sunrise, Users } from "lucide-react";
// import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// export default function Education() {
//   const programs = [
//     {
//       icon: GraduationCap,
//       title: "Values-Based Learning",
//       description: "Integrating academic excellence with character development, ethical living, and spiritual awareness.",
//       features: [
//         "Traditional subjects with moral framework",
//         "Critical thinking & spiritual inquiry",
//         "Sanskrit & ancient texts study",
//         "Modern sciences with Vedic wisdom",
//       ],
//     },
//     {
//       icon: Sunrise,
//       title: "Spiritual Practices",
//       description: "Daily practices that cultivate inner peace, mindfulness, and connection to the divine.",
//       features: [
//         "Morning meditation & pranayama",
//         "Yoga asanas for body-mind harmony",
//         "Chanting & devotional singing",
//         "Silence retreats & contemplation",
//       ],
//     },
//     {
//       icon: Heart,
//       title: "Seva (Service)",
//       description: "Learning through selfless service to the community, embodying compassion in action.",
//       features: [
//         "Community outreach programs",
//         "Feeding the underprivileged",
//         "Environmental care & sustainability",
//         "Teaching younger students",
//       ],
//     },
//     {
//       icon: Users,
//       title: "Youth Upliftment",
//       description: "Special focus on empowering disadvantaged youth with free education and mentorship.",
//       features: [
//         "Free residential education",
//         "Skill development workshops",
//         "Leadership training programs",
//         "Career guidance & support",
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
//             className="text-center mb-12"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold text-[var(--maroon)] mb-6">
//               Education & Gurukul Life
//             </h1>
//             <p className="text-xl text-[var(--saffron-dark)] italic max-w-3xl mx-auto">
//               Transformative education that nurtures the whole being - mind, body, and soul
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto"
//           >
//             <ImageWithFallback
//               src="https://images.unsplash.com/photo-1593442808882-775dfcd90699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0cmFkaXRpb25hbCUyMGVkdWNhdGlvbiUyMHZlZGljfGVufDF8fHx8MTc3MTA1Nzc4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
//               alt="Traditional Vedic education"
//               className="w-full h-96 object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Education Model */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-5xl font-bold text-[var(--maroon)] mb-6">
//               Our Educational Model
//             </h2>
//             <p className="text-lg text-[var(--maroon-dark)]/70 max-w-3xl mx-auto leading-relaxed">
//               Global Gurukul offers a holistic approach to education, blending ancient wisdom with modern needs, 
//               creating well-rounded individuals who are intellectually sharp, emotionally balanced, and spiritually awakened.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {programs.map((program, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="group"
//               >
//                 <div className="bg-white/70 backdrop-blur-md border border-[var(--saffron)]/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
//                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--saffron)] to-[var(--temple-gold)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                     <program.icon className="w-8 h-8 text-white" />
//                   </div>
                  
//                   <h3 className="text-2xl font-semibold text-[var(--maroon)] mb-4">
//                     {program.title}
//                   </h3>
                  
//                   <p className="text-[var(--maroon-dark)]/80 leading-relaxed mb-6">
//                     {program.description}
//                   </p>

//                   <ul className="space-y-3">
//                     {program.features.map((feature, fIndex) => (
//                       <li key={fIndex} className="flex items-start gap-3">
//                         <span className="text-[var(--temple-gold)] mt-1">✦</span>
//                         <span className="text-[var(--maroon-dark)]/80">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Daily Schedule */}
//       <section className="py-20 bg-gradient-to-b from-white to-[var(--sandalwood-light)]">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-5xl font-bold text-[var(--maroon)] mb-6">
//               A Day in Gurukul Life
//             </h2>
//             <p className="text-lg text-[var(--maroon-dark)]/70">
//               Experience the sacred rhythm of our daily routine
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="bg-white/80 backdrop-blur-md border border-[var(--temple-gold)]/30 rounded-3xl p-10 shadow-2xl"
//           >
//             <div className="space-y-6">
//               {[
//                 { time: "5:00 AM", activity: "Wake up & Morning prayers", icon: "🌅" },
//                 { time: "5:30 AM", activity: "Yoga & Meditation", icon: "🧘" },
//                 { time: "7:00 AM", activity: "Breakfast & Community time", icon: "🍽️" },
//                 { time: "8:00 AM", activity: "Academic classes begin", icon: "📚" },
//                 { time: "12:00 PM", activity: "Lunch & Rest", icon: "☀️" },
//                 { time: "2:00 PM", activity: "Skill development workshops", icon: "🎨" },
//                 { time: "4:00 PM", activity: "Sports & Physical activities", icon: "⚽" },
//                 { time: "6:00 PM", activity: "Evening prayers & Chanting", icon: "🕉️" },
//                 { time: "7:00 PM", activity: "Dinner & Satsang", icon: "🙏" },
//                 { time: "9:00 PM", activity: "Study time & Reflection", icon: "✍️" },
//                 { time: "10:00 PM", activity: "Lights out & Rest", icon: "🌙" },
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   className="flex items-center gap-4 p-4 rounded-xl hover:bg-[var(--sandalwood)]/20 transition-colors"
//                 >
//                   <span className="text-2xl">{item.icon}</span>
//                   <span className="text-[var(--saffron-dark)] font-semibold min-w-[80px]">
//                     {item.time}
//                   </span>
//                   <span className="text-[var(--maroon-dark)]">{item.activity}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Impact */}
//       <section className="py-20 bg-[var(--sandalwood-light)]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >
//             <h2 className="text-3xl md:text-5xl font-bold text-[var(--maroon)] mb-12">
//               Our Impact
//             </h2>

//             <div className="grid md:grid-cols-4 gap-8">
//               {[
//                 { number: "500+", label: "Students Educated" },
//                 { number: "15+", label: "Years of Service" },
//                 { number: "1000+", label: "Meals Served Daily" },
//                 { number: "100%", label: "Free Education" },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   className="bg-white/80 backdrop-blur-md border border-[var(--saffron)]/30 rounded-2xl p-8 shadow-lg"
//                 >
//                   <div className="text-4xl font-bold text-[var(--saffron)] mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-[var(--maroon-dark)]">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

//--------------------------------------------------
// import { motion } from "motion/react";
// import {
//   GraduationCap,
//   Heart,
//   Sunrise,
//   Users,
//   BookOpen,
//   Award,
//   Music,
//   Dumbbell,
// } from "lucide-react";
// import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// export default function Education() {

//   const examFeatures = [
//     {
//       icon: GraduationCap,
//       title: "Continuous Comprehensive Evaluation (CCE)",
//       text: "Assessments are conducted throughout the year focusing on academic performance, participation, teamwork, assignments, and leadership qualities."
//     },
//     {
//       icon: BookOpen,
//       title: "Skill & Project-Based Assessment",
//       text: "Students complete individual and group projects encouraging research, innovation, and real-life problem solving."
//     },
//     {
//       icon: Award,
//       title: "Practical & Experiential Learning",
//       text: "Laboratory experiments, sports, yoga, robotics, music, and environmental projects help connect theory with real-world experience."
//     },
//     {
//       icon: Users,
//       title: "Self & Peer Assessment",
//       text: "Students evaluate their own progress while peer feedback builds empathy, collaboration, and responsibility."
//     },
//     {
//       icon: Heart,
//       title: "Creative & Oral Expression",
//       text: "Debates, storytelling, dramatization, presentations, and creative writing strengthen communication and confidence."
//     },
//     {
//       icon: Sunrise,
//       title: "Digital & Global Exposure",
//       text: "Online assessments, open-book exams, and international collaborative projects prepare students for the digital world."
//     },
//   ];

//   const activities = [
//     {
//       icon: Dumbbell,
//       title: "Sports & Physical Development",
//       text: "Students participate in cricket, football, swimming, horse riding, martial arts, and fitness programs that build discipline, stamina, and teamwork."
//     },
//     {
//       icon: Music,
//       title: "Music & Dance",
//       text: "Training in Indian classical music (Hindustani & Carnatic), Bharatanatyam, Kathak, Western music, and contemporary dance."
//     },
//     {
//       icon: Users,
//       title: "Drama, Debates & Literature Clubs",
//       text: "Drama productions, debating societies, and literature clubs nurture imagination, public speaking, and creative writing."
//     },
//     {
//       icon: Heart,
//       title: "Community Service & Nature Conservation",
//       text: "Students engage in rural development, teaching underprivileged children, tree plantation drives, and environmental initiatives."
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[var(--sacred-white)] to-[var(--sandalwood-light)]">

//       {/* HERO */}
//       <section className="py-20 text-center">
//         <div className="max-w-6xl mx-auto px-6">

//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-6xl font-bold text-[var(--maroon)] mb-6"
//           >
//             Education & Gurukul Life
//           </motion.h1>

//           <p className="text-xl text-[var(--saffron-dark)] italic max-w-3xl mx-auto">
//             Ancient Wisdom, Modern Excellence — nurturing intellect, character,
//             and spiritual awareness in every learner.
//           </p>

//           <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl">
//             <ImageWithFallback
//               src="https://images.unsplash.com/photo-1593442808882-775dfcd90699"
//               alt="Gurukul education"
//               className="w-full h-96 object-cover"
//             />
//           </div>

//         </div>
//       </section>

//       {/* SPIRITUAL EDUCATION */}
//       <section className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto px-6">

//           <h2 className="text-3xl md:text-5xl font-bold text-[var(--maroon)] mb-10 text-center">
//             Spiritual & Value Education
//           </h2>

//           <div className="space-y-8 text-lg text-[var(--maroon-dark)] leading-relaxed">

//             <p>
//               Global Gurukul stands on the timeless principle that education must nurture not
//               only the intellect but also the heart and soul. In an age of rapid technological
//               growth, the need for spiritual grounding and moral clarity is greater than ever.
//             </p>

//             <p>
//               Guided by the motto <b>“Ancient Wisdom, Modern Excellence”</b>, the Gurukul
//               integrates spiritual and value-based education into its daily rhythm so that
//               students develop inner strength, ethical awareness, and a sense of universal
//               responsibility.
//             </p>

//             <h3 className="text-2xl font-semibold text-[var(--saffron-dark)]">
//               Daily Prayer and Meditation
//             </h3>

//             <p>
//               Each day begins with prayer and meditation, creating an atmosphere of serenity
//               and focus. Morning assemblies include sacred chants, uplifting hymns, and
//               reflections that inspire gratitude and mindfulness.
//             </p>

//             <h3 className="text-2xl font-semibold text-[var(--saffron-dark)]">
//               Ethical Lessons from Diverse Faiths
//             </h3>

//             <p>
//               Students learn universal values from Hinduism, Buddhism, Jainism, Christianity,
//               Islam, Sikhism, and other traditions. Through stories and philosophical
//               discussions, they explore compassion, honesty, non-violence, and respect for all.
//             </p>

//             <h3 className="text-2xl font-semibold text-[var(--saffron-dark)]">
//               Celebrations of Festivals
//             </h3>

//             <p>
//               Festivals such as Diwali, Holi, Eid, Christmas, Gurpurab, and Buddha Purnima
//               are celebrated with enthusiasm. Students learn the spiritual meaning behind
//               each celebration while participating in music, dance, and cultural programs.
//             </p>

//             <h3 className="text-2xl font-semibold text-[var(--saffron-dark)]">
//               Nurturing Character
//             </h3>

//             <p>
//               Teachers model ethical behavior and integrate values into everyday learning.
//               Service activities, environmental projects, and acts of kindness reinforce
//               compassion and responsibility.
//             </p>

//           </div>

//           <div className="mt-14 text-center italic text-[var(--maroon-dark)] text-lg">
//             “Om Sahanaa Bhavatu, Sahanau Bhunaktu,  
//             Saha Veeryam Karavaavahai…  
//             Om Shantih Shantih Shantih.”
//           </div>

//         </div>
//       </section>

//       {/* EXAMINATION SYSTEM */}
//       <section className="py-20 bg-[var(--sandalwood-light)]">
//         <div className="max-w-7xl mx-auto px-6">

//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold text-[var(--maroon)] mb-6">
//               Examination Procedure
//             </h2>

//             <p className="max-w-3xl mx-auto text-lg text-[var(--maroon-dark)]/80">
//               Global Gurukul follows a multi-dimensional evaluation system that
//               focuses on creativity, skills, values, and real-world application
//               rather than memorization.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//             {examFeatures.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white rounded-2xl p-8 shadow-lg"
//               >

//                 <div className="w-14 h-14 bg-gradient-to-br from-[var(--saffron)] to-[var(--temple-gold)] rounded-xl flex items-center justify-center mb-6">
//                   <item.icon className="text-white w-7 h-7"/>
//                 </div>

//                 <h3 className="text-xl font-semibold text-[var(--maroon)] mb-3">
//                   {item.title}
//                 </h3>

//                 <p className="text-[var(--maroon-dark)]/80">
//                   {item.text}
//                 </p>

//               </motion.div>
//             ))}

//           </div>

//         </div>
//       </section>

//       {/* CO CURRICULAR */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">

//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold text-[var(--maroon)] mb-6">
//               Co-Curricular & Extra-Curricular Activities
//             </h2>

//             <p className="max-w-3xl mx-auto text-lg text-[var(--maroon-dark)]/80">
//               Education at Global Gurukul extends beyond the classroom,
//               nurturing physical strength, creativity, leadership, and social
//               responsibility.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">

//             {activities.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="bg-[var(--sandalwood-light)] rounded-3xl p-8"
//               >

//                 <div className="flex items-center gap-4 mb-4">
//                   <item.icon className="w-8 h-8 text-[var(--saffron-dark)]"/>
//                   <h3 className="text-2xl font-semibold text-[var(--maroon)]">
//                     {item.title}
//                   </h3>
//                 </div>

//                 <p className="text-[var(--maroon-dark)]/80 leading-relaxed">
//                   {item.text}
//                 </p>

//               </motion.div>
//             ))}

//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }
//----------------new sections--------------

// import { motion } from "motion/react";
// import { Heart, BookOpen, Users } from "lucide-react";

// export default function Education() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[var(--sacred-white)] to-[var(--sandalwood-light)]">

//       {/* PAGE TITLE */}
//       <section className="py-20 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-bold text-[var(--maroon)]"
//         >
//           Education at Global Gurukul
//         </motion.h1>
//       </section>

//       {/* SPIRITUAL & VALUE EDUCATION */}
//       <section className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto px-6">

//           <div className="flex items-center gap-4 mb-10">
//             <Heart className="text-[var(--saffron-dark)] w-10 h-10"/>
//             <h2 className="text-3xl md:text-4xl font-bold text-[var(--maroon)]">
//               Spiritual & Value Education
//             </h2>
//           </div>

//           <div className="space-y-6 text-lg leading-relaxed text-[var(--maroon-dark)]">

//             <p>
//             Global Gurukul stands on the timeless principle that education must nurture not only the intellect but also the heart and soul. In an age of rapid technological growth and material advancement, the need for spiritual grounding and moral clarity is greater than ever. Guided by the motto “Ancient Wisdom, Modern Excellence,” Global Gurukul integrates spiritual and value-based education into its daily rhythm, ensuring that every student develops inner strength, ethical discernment, and a deep sense of universal responsibility.
//             </p>

//             <p>
//             <b>Daily Prayer and Meditation:</b> The day at Global Gurukul begins with daily prayer and meditation, creating an atmosphere of serenity and focus. Morning assemblies feature sacred chants, uplifting hymns, and short reflections that inspire gratitude and mindfulness. Students learn simple yet profound meditation techniques that help them cultivate self-awareness, concentration, and emotional balance. This practice strengthens not only their mental clarity but also their ability to handle challenges with calm and resilience. In the quiet moments of collective prayer, students experience a sense of unity and inner peace that transcends religious boundaries.
//             </p>

//             <p>
//             <b>Ethical and Moral Lessons from Diverse Faiths:</b> True to India’s inclusive heritage, Global Gurukul offers ethical and moral lessons drawn from the wisdom of diverse faiths—Hinduism, Buddhism, Jainism, Christianity, Islam, Sikhism, and other world traditions. Through stories, parables, and philosophical discussions, students explore universal values such as truth, compassion, honesty, non-violence, and respect for all beings. This multi-faith approach helps young minds appreciate the richness of global spiritual traditions while fostering tolerance and empathy. By understanding that moral principles are shared across cultures, students learn to embrace diversity and uphold integrity in their personal and social lives.
//             </p>

//             <p>
//             <b>Celebrations of Indian Festivals and Global Cultural Events:</b> Festivals are vibrant lessons in culture, joy, and community. Global Gurukul celebrates major Indian festivals—Diwali, Holi, Eid, Christmas, Gurpurab, Buddha Purnima—and global cultural events with equal enthusiasm and reverence. Each celebration is accompanied by discussions on its spiritual significance, rituals, and history, transforming festivities into moments of learning and unity. Students actively participate in music, dance, and drama performances, experiencing firsthand the beauty of cultural exchange. These celebrations encourage respect for different customs and cultivate a global outlook rooted in mutual understanding and peace.
//             </p>

//             <p>
//             <b>Nurturing Character and Inner Strength:</b> Spiritual and value education at Global Gurukul is not limited to formal sessions; it permeates every interaction and activity. Teachers model ethical behavior, encourage reflective dialogue, and integrate moral reasoning into academics and daily life. Service projects, environmental stewardship, and acts of kindness reinforce the practice of values in action. The aim is to develop individuals who are not only intellectually capable but also compassionate, responsible, and spiritually aware.
//             </p>

//             <p>
//             At Global Gurukul, spirituality is not an isolated subject but the very essence of holistic education. Daily meditation, interfaith moral teachings, and inclusive celebrations weave together to create an environment where students grow in wisdom and character. By harmonizing ancient spiritual practices with a modern, global perspective, the school prepares young people to lead lives of purpose and integrity.
//             </p>

//             <p>
//             In nurturing both the inner and outer dimensions of growth, Global Gurukul ensures that its students emerge as enlightened individuals—anchored in values, open to the world, and ready to contribute to a more peaceful and compassionate society.
//             </p>

//             <p className="italic text-[var(--saffron-dark)] mt-8">
//             "Om Sahanaa bhavatu, Sahanau bhunaktu, Saha veeryam karavaavahai, Tejasvinavadhitamastu, Ma vidvishavahai, Om Shantih shantih shantih" – Upanishads  
//             “May the Lord protect us both, may He nourish us both, may we work together with vigor, may our studies be bright, may we not hate each other. Om, peace, peace, peace.”
//             </p>

//           </div>
//         </div>
//       </section>

//       {/* EXAMINATION PROCEDURE */}
//       <section className="py-20 bg-[var(--sandalwood-light)]">
//         <div className="max-w-5xl mx-auto px-6">

//           <div className="flex items-center gap-4 mb-10">
//             <BookOpen className="text-[var(--saffron-dark)] w-10 h-10"/>
//             <h2 className="text-3xl md:text-4xl font-bold text-[var(--maroon)]">
//               Examination Procedure in Global Gurukul
//             </h2>
//           </div>

//           <div className="space-y-6 text-lg leading-relaxed text-[var(--maroon-dark)]">

//             <p className="italic font-semibold">
//             “Beyond Scores: Shaping Minds, Values, and Future Leaders.”
//             </p>

//             <p>
//             In the 21st century, education is no longer about memorization and repetition but about creativity, problem-solving, collaboration, and holistic growth. The Global Gurukul examination procedure is designed keeping in mind these modern demands, while rooted in the Gurukul tradition of nurturing individuality, discipline, and wisdom.
//             </p>

//             <p className="font-semibold">
//             Learning Beyond Marks, Growth Beyond Exams
//             </p>

//             <p>
//             Unlike conventional schools that depend heavily on rote-based written tests, Global Gurukul follows a multi-dimensional assessment system. This ensures that every learner is evaluated not just for academic proficiency, but also for skills, values, creativity, and practical application of knowledge.
//             </p>

//             <h3 className="text-2xl font-semibold mt-6">Key Features of the Examination System</h3>

//             <ol className="list-decimal pl-6 space-y-3">

//               <li>
//               <b>Continuous Comprehensive Evaluation (CCE):</b> Assessments are conducted throughout the year, focusing on academic performance, participation, assignments, teamwork, and leadership qualities rather than one final test.
//               </li>

//               <li>
//               <b>Skill and Project-Based Assessment:</b> Real-life problem-solving, research projects, and creative assignments form a vital part of evaluation, encouraging innovation and application of knowledge.
//               </li>

//               <li>
//               <b>Practical and Experiential Learning:</b> Students are tested through experiments, fieldwork, yoga, sports, art, and music ensuring balance between physical, intellectual, and emotional growth.
//               </li>

//               <li>
//               <b>Oral and Creative Expression:</b> Debates, presentations, storytelling, dramatization, and creative writing are included to build confidence, clarity of thought, and effective communication.
//               </li>

//               <li>
//               <b>Self and Peer Assessment:</b> Students learn to evaluate their own strengths and challenges, while peer reviews promote responsibility, collaboration, and empathy.
//               </li>

//               <li>
//               <b>Digital and Global Integration:</b> Online assessments, open-book exams, and collaborative international projects prepare students for the digital era and global standards.
//               </li>

//             </ol>

//             <p>
//             Global Gurukul believes that every child is unique and must be evaluated beyond marks. Examinations here are stress-free, inclusive, and child-centric, celebrating creativity, effort, and progress.
//             </p>

//           </div>
//         </div>
//       </section>

//       {/* CO CURRICULAR */}
//       <section className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto px-6">

//           <div className="flex items-center gap-4 mb-10">
//             <Users className="text-[var(--saffron-dark)] w-10 h-10"/>
//             <h2 className="text-3xl md:text-4xl font-bold text-[var(--maroon)]">
//               Co-Curricular & Extra-Curricular Activities
//             </h2>
//           </div>

//           <div className="space-y-6 text-lg leading-relaxed text-[var(--maroon-dark)]">

//             <p>
//             Global Gurukul believes that true education extends far beyond the walls of a a classroom. In harmony with the ancient Gurukul tradition and modern educational ideals, we nurture every dimension of a student’s personality—physical, intellectual, emotional, social, and spiritual.
//             </p>

//             <p>
//             <b>Sports and Physical Development:</b> Sports are an integral pillar of life at Global Gurukul. Activities include cricket, football, swimming, horse riding, and martial arts. These build discipline, perseverance, and team spirit while strengthening physical fitness.
//             </p>

//             <p>
//             <b>Music and Dance:</b> Students learn Indian classical music (Hindustani & Carnatic), Bharatanatyam, Kathak, along with Western music and contemporary dance.
//             </p>

//             <p>
//             <b>Drama, Debates, and Literature Clubs:</b> Drama productions, debating societies, and literature clubs develop imagination, critical thinking, public speaking, and creative writing.
//             </p>

//             <p>
//             <b>Community Service and Nature Conservation:</b> Students participate in teaching underprivileged children, organizing health camps, rural development programs, and environmental initiatives such as tree planting.
//             </p>

//             <p>
//             At Global Gurukul, these programs are carefully integrated with academics to create holistic development. Students grow not only as scholars but also as artists, athletes, leaders, and compassionate human beings ready to serve society and the world.
//             </p>

//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }


import { motion } from "motion/react";
import {
  GraduationCap,
  Heart,
  Sunrise,
  Users,
  BookOpen,
  Award,
  Music,
  Dumbbell,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Education() {

  const examFeatures = [
    {
      icon: GraduationCap,
      title: "Continuous Comprehensive Evaluation (CCE)",
      text: "Assessments are conducted throughout the year focusing on academic performance, participation, teamwork, assignments, and leadership qualities rather than a single final test."
    },
    {
      icon: BookOpen,
      title: "Skill & Project-Based Assessment",
      text: "Students complete research projects, creative assignments, and real-world problem-solving tasks that encourage innovation and independent thinking."
    },
    {
      icon: Award,
      title: "Practical & Experiential Learning",
      text: "Laboratory work, sports, yoga, music, and art are included in the evaluation process so that intellectual, emotional, and physical development remain balanced."
    },
    {
      icon: Users,
      title: "Self & Peer Assessment",
      text: "Students evaluate their own learning progress while peer feedback promotes collaboration, empathy, and responsibility."
    },
    {
      icon: Heart,
      title: "Creative & Oral Expression",
      text: "Debates, presentations, storytelling, dramatization, and creative writing help develop confidence, communication skills, and clarity of thought."
    },
    {
      icon: Sunrise,
      title: "Digital & Global Integration",
      text: "Online assessments, open-book examinations, and international collaborative learning projects prepare students for a connected global world."
    },
  ];

  const activities = [
    {
      icon: Dumbbell,
      title: "Sports & Physical Development",
      text: "Students participate in cricket, football, swimming, horse riding, martial arts, and structured fitness programs that build discipline, stamina, leadership, and teamwork."
    },
    {
      icon: Music,
      title: "Music & Dance",
      text: "Training is provided in Indian classical music (Hindustani & Carnatic), Bharatanatyam, Kathak, Western music, and contemporary dance."
    },
    {
      icon: Users,
      title: "Drama, Debates & Literature Clubs",
      text: "Drama productions, debating societies, and literature clubs nurture imagination, public speaking, creative writing, and analytical thinking."
    },
    {
      icon: Heart,
      title: "Community Service & Nature Conservation",
      text: "Students engage in teaching underprivileged children, organizing social programs, rural development, and environmental initiatives such as tree plantation drives."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--sacred-white)] to-[var(--sandalwood-light)]">

      {/* HERO */}
      <section className="py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-[var(--maroon)] mb-6"
          >
            Education at Global Gurukul
          </motion.h1>

          <p className="text-xl text-[var(--saffron-dark)] italic max-w-3xl mx-auto">
            Ancient Wisdom, Modern Excellence — nurturing intellect, character,
            and spiritual awareness in every learner.
          </p>

          <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="/e1.jpeg"
              alt="Gurukul education"
              className="w-full h-100 object-cover"
            />
          </div>

        </div>
      </section>

      {/* SPIRITUAL EDUCATION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">

          <div className="flex items-center gap-4 mb-10">
            <Heart className="text-[var(--saffron-dark)] w-10 h-10"/>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--maroon)]">
              Spiritual & Value Education
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-[var(--maroon-dark)]">

            <p>
            Global Gurukul stands on the timeless principle that education must nurture not only the intellect but also the heart and soul. In an age of rapid technological growth and material advancement, the need for spiritual grounding and moral clarity is greater than ever. Guided by the motto “Ancient Wisdom, Modern Excellence,” Global Gurukul integrates spiritual and value-based education into its daily rhythm so that students develop inner strength, ethical awareness, and a deep sense of universal responsibility.
            </p>

            <p>
            <b>Daily Prayer and Meditation:</b> The day at Global Gurukul begins with prayer and meditation, creating an atmosphere of serenity and focus. Morning assemblies include sacred chants, uplifting hymns, and thoughtful reflections that inspire gratitude and mindfulness. Students learn simple meditation techniques that help cultivate self-awareness, concentration, and emotional balance.
            </p>

            <p>
            <b>Ethical and Moral Lessons from Diverse Faiths:</b> Students learn universal values from the wisdom traditions of Hinduism, Buddhism, Jainism, Christianity, Islam, Sikhism, and other faiths. Through stories, philosophical discussions, and reflection, they explore compassion, truth, honesty, and non-violence.
            </p>

            <p>
            <b>Celebrations of Festivals:</b> Festivals such as Diwali, Holi, Eid, Christmas, Gurpurab, and Buddha Purnima are celebrated with enthusiasm. These celebrations help students appreciate cultural diversity while understanding the deeper spiritual meanings behind traditions.
            </p>

            <p>
            <b>Nurturing Character:</b> Teachers model ethical behavior and integrate moral reflection into everyday learning. Service activities, environmental initiatives, and acts of kindness reinforce compassion and responsibility.
            </p>

            <p>
            At Global Gurukul spirituality is not a separate subject but the essence of holistic education. By harmonizing ancient wisdom with modern learning, the school nurtures enlightened individuals prepared to lead meaningful and responsible lives.
            </p>

            <p className="italic text-[var(--saffron-dark)]">
            "Om Sahanaa bhavatu, Sahanau bhunaktu, Saha veeryam karavaavahai, Tejasvinavadhitamastu, Ma vidvishavahai, Om Shantih Shantih Shantih."
            </p>

          </div>
        </div>
      </section>

      {/* EXAMINATION SYSTEM */}
      <section className="py-20 bg-[var(--sandalwood-light)]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center gap-4 mb-10">
            <BookOpen className="text-[var(--saffron-dark)] w-10 h-10"/>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--maroon)]">
              Examination Procedure in Global Gurukul
            </h2>
          </div>

          <p className="italic font-semibold text-[var(--maroon-dark)] mb-10">
            “Beyond Scores: Shaping Minds, Values, and Future Leaders.”
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {examFeatures.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >

                <div className="w-14 h-14 bg-gradient-to-br from-[var(--saffron)] to-[var(--temple-gold)] rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="text-white w-7 h-7"/>
                </div>

                <h3 className="text-xl font-semibold text-[var(--maroon)] mb-3">
                  {item.title}
                </h3>

                <p className="text-[var(--maroon-dark)]/80">
                  {item.text}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* CO CURRICULAR */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center gap-4 mb-14">
            <Users className="text-[var(--saffron-dark)] w-10 h-10"/>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--maroon)]">
              Co-Curricular & Extra-Curricular Activities
            </h2>
          </div>

          <p className="text-lg text-[var(--maroon-dark)] mb-10 max-w-4xl">
            Global Gurukul believes that true education extends far beyond the classroom. In harmony with the ancient Gurukul tradition and modern educational ideals, the school nurtures every dimension of a student’s personality — physical, intellectual, emotional, social, and spiritual.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {activities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[var(--sandalwood-light)] rounded-3xl p-8"
              >

                <div className="flex items-center gap-4 mb-4">
                  <item.icon className="w-8 h-8 text-[var(--saffron-dark)]"/>
                  <h3 className="text-2xl font-semibold text-[var(--maroon)]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-[var(--maroon-dark)]/80 leading-relaxed">
                  {item.text}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}