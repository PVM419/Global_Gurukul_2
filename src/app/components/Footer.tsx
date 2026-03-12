import { Link } from "react-router";
import { Flame, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[var(--sandalwood)] to-[var(--sandalwood-light)] border-t border-[var(--saffron)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--saffron)] to-[var(--maroon)] flex items-center justify-center shadow-lg">
                <Flame className="w-5 h-5 text-white" />
              </div> */}
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <img
                  src="/Logo-removebg.png"
                  alt="Company Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <div className="font-semibold text-[var(--maroon)]">GLOBAL GURUKUL</div>
                <div className="text-xs text-[var(--maroon-dark)]/70">Devotional Trust</div>
              </div>
            </div>
            <p className="text-sm text-[var(--maroon-dark)]/80 leading-relaxed">
              Reviving eternal Indian wisdom for a conscious world through education and spiritual awakening.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[var(--maroon)] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-[var(--maroon-dark)]/80 hover:text-[var(--saffron)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/teachings" className="text-sm text-[var(--maroon-dark)]/80 hover:text-[var(--saffron)] transition-colors">
                  Teachings
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-sm text-[var(--maroon-dark)]/80 hover:text-[var(--saffron)] transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-[var(--maroon-dark)]/80 hover:text-[var(--saffron)] transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[var(--maroon)] mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-[var(--maroon-dark)]/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--saffron)]" />
                <span>Global Gurukul Ashram, India</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--maroon-dark)]/80">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--saffron)]" />
                <span>globalgurukulvidyapith@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--maroon-dark)]/80">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--saffron)]" />
                <span>+91 99035 99901</span>
              </li>
            </ul>
          </div>

          {/* Donate */}
          <div>
            <h3 className="font-semibold text-[var(--maroon)] mb-4">Support Us</h3>
            <p className="text-sm text-[var(--maroon-dark)]/80 mb-4 leading-relaxed">
              Your devotional contribution helps us continue our mission of spiritual education.
            </p>
            <Link
              to="/donate"
              className="inline-block px-6 py-2 bg-gradient-to-r from-[var(--saffron)] to-[var(--temple-gold)] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              Donate
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--saffron)]/20 pt-8 text-center">
          <p className="text-sm text-[var(--maroon-dark)]/70 italic">
            "Knowledge is service. Service is devotion."
          </p>
          <p className="text-xs text-[var(--maroon-dark)]/60 mt-2">
            © {new Date().getFullYear()} Global Gurukul. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
