// import { motion } from "motion/react";
// import { Mail, MapPin, Phone, Send } from "lucide-react";
// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const SERVICE_ID = "service_ey7ui85";
//   const TEMPLATE_ID = "template_hmrkj8j";
//   const PUBLIC_KEY = "_F7alTHwweUrtf1xJ";

//   //---------------------------------------------
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         SERVICE_ID,
//         TEMPLATE_ID,
//         {
//           name: formData.name,
//           email: formData.email,
//           message: formData.message,
//         },
//         PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setSubmitted(true);

//           setTimeout(() => {
//             setFormData({ name: "", email: "", message: "" });
//             setSubmitted(false);
//           }, 3000);
//         },
//         (error) => {
//           console.log(error);
//           alert("Failed to send message.");
//         }
//       );
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

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
//               Contact & Blessings
//             </h1>
//             <p className="text-xl text-[var(--saffron-dark)] italic max-w-3xl mx-auto">
//               We welcome your questions, your presence, and your sacred journey with us
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="bg-white/80 backdrop-blur-md border border-[var(--saffron)]/30 rounded-3xl p-10 shadow-xl">
//                 <h2 className="text-3xl font-bold text-[var(--maroon)] mb-6">
//                   Send Us a Message
//                 </h2>
//                 <p className="text-[var(--maroon-dark)]/80 mb-8">
//                   Whether you seek spiritual guidance, wish to volunteer, or want to learn more about
//                   our Gurukul, we are here to connect with you.
//                 </p>

//                 {!submitted ? (
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div>
//                       <label htmlFor="name" className="block text-[var(--maroon)] mb-2">
//                         Your Name
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 bg-[var(--sandalwood-light)]/30 border border-[var(--saffron)]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--saffron)] text-[var(--maroon-dark)]"
//                         placeholder="Enter your name"
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="email" className="block text-[var(--maroon)] mb-2">
//                         Email Address
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 bg-[var(--sandalwood-light)]/30 border border-[var(--saffron)]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--saffron)] text-[var(--maroon-dark)]"
//                         placeholder="your.email@example.com"
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="message" className="block text-[var(--maroon)] mb-2">
//                         Your Message
//                       </label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                         rows={6}
//                         className="w-full px-4 py-3 bg-[var(--sandalwood-light)]/30 border border-[var(--saffron)]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--saffron)] text-[var(--maroon-dark)] resize-none"
//                         placeholder="Share your thoughts, questions, or intentions..."
//                       />
//                     </div>

//                     <button
//                       type="submit"
//                       className="w-full py-4 bg-gradient-to-r from-[var(--saffron)] to-[var(--temple-gold)] text-white rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
//                     >
//                       <Send className="w-5 h-5" />
//                       Send Message
//                     </button>
//                   </form>
//                 ) : (
//                   <motion.div
//                     initial={{ scale: 0.8, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     className="text-center py-12"
//                   >
//                     <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--saffron)] to-[var(--temple-gold)] flex items-center justify-center mx-auto mb-6">
//                       <Send className="w-8 h-8 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-[var(--maroon)] mb-3">
//                       Message Received! 🙏
//                     </h3>
//                     <p className="text-[var(--maroon-dark)]/80">
//                       Thank you for reaching out. We will respond with blessings soon.
//                     </p>
//                   </motion.div>
//                 )}
//               </div>
//             </motion.div>

//             {/* Contact Information */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="space-y-8"
//             >
//               {/* Contact Details */}
//               <div className="bg-white/80 backdrop-blur-md border border-[var(--maroon)]/30 rounded-3xl p-10 shadow-xl">
//                 <h2 className="text-3xl font-bold text-[var(--maroon)] mb-8">
//                   Visit Us
//                 </h2>

//                 <div className="space-y-6">
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--saffron)] to-[var(--temple-gold)] flex items-center justify-center flex-shrink-0">
//                       <MapPin className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-[var(--maroon)] mb-2">Address</h3>
//                       <p className="text-[var(--maroon-dark)]/80 leading-relaxed">
//                         Jora Shiv Mondir, Monirampore, Barrackpore, <br />
//                         Kolkata - 700120, West Bengal, <br />
//                         India
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--maroon)] to-[var(--maroon-dark)] flex items-center justify-center flex-shrink-0">
//                       <Mail className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-[var(--maroon)] mb-2">Email</h3>
//                       <p className="text-[var(--maroon-dark)]/80">
//                         globalgurukulvidyapith@gmail.com

//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--temple-gold)] to-[var(--saffron)] flex items-center justify-center flex-shrink-0">
//                       <Phone className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-[var(--maroon)] mb-2">Phone</h3>
//                       <p className="text-[var(--maroon-dark)]/80">
//                         +91 99035 99901<br />
//                         <span className="text-sm italic">Available: 9 AM - 6 PM IST</span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Image */}
//               <div className="rounded-3xl overflow-hidden shadow-xl">
//                 <ImageWithFallback
//                   src="/a1.jpeg"
//                   alt="Temple lamp"
//                   className="w-full h-74 object-cover"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Blessing Quote */}
//       <section className="py-20 bg-gradient-to-b from-white to-[var(--sandalwood-light)]">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="bg-gradient-to-br from-[var(--sandalwood)]/60 to-[var(--sandalwood-light)]/60 backdrop-blur-md border border-[var(--temple-gold)]/30 rounded-3xl p-12 shadow-2xl text-center"
//           >
//             <div className="text-5xl mb-6">🙏</div>
//             <h2 className="text-3xl font-bold text-[var(--maroon)] mb-6">
//               Final Blessing
//             </h2>
//             <blockquote className="text-xl md:text-2xl text-[var(--maroon-dark)] italic leading-relaxed mb-6">
//               "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"<br />
//               (Sarve Bhavantu Sukhinah, Sarve Santu Niramayah)
//             </blockquote>
//             <p className="text-[var(--maroon-dark)]/80 leading-relaxed">
//               May all beings be happy. May all beings be free from illness.<br />
//               May all see what is auspicious. May none suffer.
//             </p>
//             <div className="mt-8 pt-8 border-t border-[var(--saffron)]/20">
//               <p className="text-sm text-[var(--maroon-dark)]/70 italic">
//                 With love and light from Global Gurukul
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }
//----------------------------------------------------------

import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = "service_ey7ui85";
  const TEMPLATE_ID = "template_hmrkj8j";
  const PUBLIC_KEY = "_F7alTHwweUrtf1xJ";

  //---------------------------------------------
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);

          setTimeout(() => {
            setFormData({ name: "", email: "", message: "" });
            setSubmitted(false);
          }, 3000);
        },
        (error) => {
          console.log(error);
          setLoading(false);
          alert("Failed to send message.");
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Contact & Blessings
            </h1>
            <p className="text-xl text-[var(--saffron-dark)] italic max-w-3xl mx-auto">
              We welcome your questions, your presence, and your sacred journey
              with us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/80 backdrop-blur-md border border-[var(--saffron)]/30 rounded-3xl p-10 shadow-xl">
                <h2 className="text-3xl font-bold text-[var(--maroon)] mb-6">
                  Send Us a Message
                </h2>
                <p className="text-[var(--maroon-dark)]/80 mb-8">
                  Whether you seek spiritual guidance, wish to volunteer, or
                  want to learn more about our Gurukul, we are here to connect
                  with you.
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[var(--maroon)] mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[var(--sandalwood-light)]/30 border border-[var(--saffron)]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--saffron)] text-[var(--maroon-dark)]"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[var(--maroon)] mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[var(--sandalwood-light)]/30 border border-[var(--saffron)]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--saffron)] text-[var(--maroon-dark)]"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[var(--maroon)] mb-2"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-[var(--sandalwood-light)]/30 border border-[var(--saffron)]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--saffron)] text-[var(--maroon-dark)] resize-none"
                        placeholder="Share your thoughts, questions, or intentions..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-gradient-to-r from-[var(--saffron)] to-[var(--temple-gold)] text-white rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              repeat: Infinity,
                              duration: 1,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--saffron)] to-[var(--temple-gold)] flex items-center justify-center mx-auto mb-6">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--maroon)] mb-3">
                      Message Received! 🙏
                    </h3>
                    <p className="text-[var(--maroon-dark)]/80">
                      Thank you for reaching out. We will respond with blessings
                      soon.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white/80 backdrop-blur-md border border-[var(--maroon)]/30 rounded-3xl p-10 shadow-xl">
                <h2 className="text-3xl font-bold text-[var(--maroon)] mb-8">
                  Visit Us
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--saffron)] to-[var(--temple-gold)] flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--maroon)] mb-2">
                        Address
                      </h3>
                      <p className="text-[var(--maroon-dark)]/80 leading-relaxed">
                        Jora Shiv Mondir, Monirampore, Barrackpore <br />
                        Kolkata - 700120, West Bengal <br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--maroon)] to-[var(--maroon-dark)] flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--maroon)] mb-2">
                        Email
                      </h3>
                      <p className="text-[var(--maroon-dark)]/80">
                        globalgurukulvidyapith@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--temple-gold)] to-[var(--saffron)] flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--maroon)] mb-2">
                        Phone
                      </h3>
                      <p className="text-[var(--maroon-dark)]/80">
                        +91 99035 99901
                        <br />
                        <span className="text-sm italic">
                          Available: 9 AM - 6 PM IST
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="/a1.jpeg"
                  alt="Temple lamp"
                  className="w-full h-74 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blessing Quote */}
      <section className="py-20 bg-gradient-to-b from-white to-[var(--sandalwood-light)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[var(--sandalwood)]/60 to-[var(--sandalwood-light)]/60 backdrop-blur-md border border-[var(--temple-gold)]/30 rounded-3xl p-12 shadow-2xl text-center"
          >
            <div className="text-5xl mb-6">🙏</div>
            <h2 className="text-3xl font-bold text-[var(--maroon)] mb-6">
              Final Blessing
            </h2>

            <blockquote className="text-xl md:text-2xl text-[var(--maroon-dark)] italic leading-relaxed mb-6">
              "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
              <br />
              (Sarve Bhavantu Sukhinah, Sarve Santu Niramayah)
            </blockquote>

            <p className="text-[var(--maroon-dark)]/80 leading-relaxed">
              May all beings be happy. May all beings be free from illness.
              <br />
              May all see what is auspicious. May none suffer.
            </p>

            <div className="mt-8 pt-8 border-t border-[var(--saffron)]/20">
              <p className="text-sm text-[var(--maroon-dark)]/70 italic">
                With love and light from Global Gurukul
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}