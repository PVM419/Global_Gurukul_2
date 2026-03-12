import { motion } from "motion/react";
import { Heart, Users, Book, Utensils, Check } from "lucide-react";
import { useState, useEffect } from "react";

export default function Donate() {
  const [step, setStep] = useState<"initial" | "qr" | "complete">("initial");

  // 🔥 Your UPI Link
  const upiLink =
    "upi://pay?pa=vaydicmath53042@sbi&pn=PavitraVaidikMath&cu=INR";

  // Smart Donate Button Logic
  const handleDonateClick = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      // Try opening UPI app
      window.location.href = upiLink;

      // Fallback to QR if app doesn't open
      setTimeout(() => {
        setStep("qr");
      }, 1500);
    } else {
      // Desktop → show QR
      setStep("qr");
    }
  };

  // Auto return after Thank You
  useEffect(() => {
    if (step === "complete") {
      const timer = setTimeout(() => {
        setStep("initial");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--sacred-white)] to-[var(--sandalwood-light)]">

      {/* HERO */}
      <section className="py-20 bg-gradient-to-b from-[var(--sandalwood-light)] to-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-4xl mx-auto px-4"
        >
          <Heart className="w-20 h-20 text-[var(--saffron)] fill-[var(--saffron)] mx-auto mb-6 animate-pulse" />

          <h1 className="text-4xl md:text-6xl font-bold text-[var(--maroon)] mb-4">
            Offer Your Contribution
          </h1>

          <p className="text-xl text-[var(--saffron-dark)] italic">
            Not charity. Only devotion 🙏
          </p>
        </motion.div>
      </section>

      {/* IMPACT */}
      {/* <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {[
            { icon: Utensils, title: "1000+ Meals Daily", desc: "Helping nourish young minds." },
            { icon: Book, title: "Free Education", desc: "Supporting underprivileged children." },
            { icon: Users, title: "500+ Students", desc: "Building future leaders." },
            { icon: Heart, title: "100% Transparency", desc: "Every contribution is valued." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[var(--saffron)]/30 hover:shadow-xl transition"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--saffron)] to-[var(--temple-gold)] rounded-xl flex items-center justify-center mb-3">
                <item.icon className="text-white w-6 h-6" />
              </div>

              <h3 className="text-xl font-semibold text-[var(--maroon)]">
                {item.title}
              </h3>

              <p className="text-[var(--maroon-dark)]/80">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section> */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {[
            { icon: Utensils, title: "1000+ Meals Daily", desc: "Helping nourish young minds." },
            { icon: Book, title: "Free Education", desc: "Supporting underprivileged children." },
            { icon: Users, title: "500+ Students", desc: "Building future leaders." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[var(--saffron)]/30 hover:shadow-xl transition text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--saffron)] to-[var(--temple-gold)] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <item.icon className="text-white w-6 h-6" />
              </div>

              <h3 className="text-xl font-semibold text-[var(--maroon)] mb-2">
                {item.title}
              </h3>

              <p className="text-[var(--maroon-dark)]/80">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DONATION CARD */}
      <section className="py-20">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-10 text-center border border-[var(--temple-gold)]/40">

            {step === "initial" && (
              <>
                <h2 className="text-2xl font-bold text-[var(--maroon)] mb-6">
                  Donate With Devotion
                </h2>

                <p className="mb-8 text-[var(--maroon-dark)] text-lg">
                  Click below to donate any amount according to your heart.
                </p>

                <button
                  onClick={handleDonateClick}
                  className="w-full py-4 bg-gradient-to-r from-[var(--saffron)] to-[var(--temple-gold)] text-white text-xl rounded-full shadow-lg cursor-pointer hover:scale-105 transition"
                >
                  Donate Now ❤️
                </button>
              </>
            )}

            {step === "qr" && (
              <>
                <h2 className="text-2xl font-bold text-[var(--maroon)] mb-6">
                  Scan QR & Complete Payment
                </h2>

                <img
                  src="/qr2.jpeg"
                  alt="UPI QR"
                  className="mx-auto w-64 h-64 object-contain rounded-xl shadow-lg border"
                />

                <p className="mt-6 text-[var(--maroon-dark)]">
                  Scan using your UPI app and enter any amount.
                </p>

                <button
                  onClick={() => setStep("complete")}
                  className="mt-8 px-6 py-3 bg-[var(--saffron)] text-white rounded-full shadow cursor-pointer hover:scale-105 transition"
                >
                  I Have Paid
                </button>
              </>
            )}

            {step === "complete" && (
              <>
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[var(--saffron)] to-[var(--temple-gold)] flex items-center justify-center mb-6">
                  <Check className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-3xl font-bold text-[var(--maroon)] mb-3">
                  Thank You 🙏
                </h2>

                <p className="text-[var(--saffron-dark)]">
                  Your offering has been received with gratitude.
                </p>
              </>
            )}

          </div>

          <div className="mt-10 text-center bg-white/70 border border-[var(--saffron)]/30 rounded-2xl px-6 py-5 shadow">
            <p className="text-sm text-[var(--maroon-dark)]/70">
              Contributions are used for education, meals & spiritual upliftment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}