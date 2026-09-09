import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ShieldCheck } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="University High School logo" className="h-10 w-10" />
            <span className="font-serif text-lg font-bold text-white">University High School</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            An accredited college-preparatory high school in Fresno, California,
            serving grades 9–12 with a rigorous, technology-enriched curriculum.
          </p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-gold-400">
            <ShieldCheck size={14} aria-hidden="true" /> Accredited Institution · EIN 77-0515663
          </p>
          <div className="mt-4 flex gap-3">
            <a href="https://www.facebook.com/universityhighschoolfresno" aria-label="Facebook" className="rounded-full bg-slate-800 p-2 hover:bg-primary-600"><Facebook size={16} /></a>
            <a href="https://www.instagram.com/universityhighschoolfresno" aria-label="Instagram" className="rounded-full bg-slate-800 p-2 hover:bg-primary-600"><Instagram size={16} /></a>
            <a href="https://www.linkedin.com/school/university-high-school-fresno" aria-label="LinkedIn" className="rounded-full bg-slate-800 p-2 hover:bg-primary-600"><Linkedin size={16} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About &amp; History</Link></li>
            <li><Link to="/academics" className="hover:text-white">Academics</Link></li>
            <li><Link to="/admissions" className="hover:text-white">Admissions</Link></li>
            <li><Link to="/accreditation" className="hover:text-white">Accreditation &amp; Legal Status</Link></li>
            <li><Link to="/faculty" className="hover:text-white">Faculty &amp; Administration</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Photo Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">Programs</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/academics" className="hover:text-white">Honors &amp; AP Courses</Link></li>
            <li><Link to="/academics" className="hover:text-white">STEM &amp; Robotics</Link></li>
            <li><Link to="/student-life" className="hover:text-white">Athletics</Link></li>
            <li><Link to="/student-life" className="hover:text-white">Arts &amp; Theater</Link></li>
            <li><Link to="/news" className="hover:text-white">School News</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white">Contact</h3>
          <address className="mt-4 space-y-3 text-sm not-italic">
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" aria-hidden="true" />
              <span>University High School<br />2611 E Matoian Way Ms Uh 134<br />Fresno, CA 93740-0001, United States</span>
            </p>
            <p>
              <a href="tel:+13195555405" className="flex items-center gap-2 hover:text-white">
                <Phone size={16} className="shrink-0 text-gold-400" aria-hidden="true" /> +1 (319) 555-5405
              </a>
            </p>
            <p>
              <a href="mailto:admin@universityhighschool.sbs" className="flex items-center gap-2 hover:text-white">
                <Mail size={16} className="shrink-0 text-gold-400" aria-hidden="true" /> admin@universityhighschool.sbs
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} University High School · EIN 77-0515663 · 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001</p>
          <p className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <a href="https://www.universityhighschool.sbs" className="hover:text-white">www.universityhighschool.sbs</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
