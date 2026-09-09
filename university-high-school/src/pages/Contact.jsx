import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <section className="bg-primary-900 py-16 text-center">
        <h1 className="font-serif text-4xl font-bold text-white">Contact Us</h1>
        <p className="mx-auto mt-3 max-w-2xl text-primary-100">
          We welcome questions from current and prospective families.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Address Card */}
          <div className="card">
            <h2 className="flex items-center gap-2 font-bold text-ink">
              <MapPin size={20} className="text-primary-600" aria-hidden="true" /> Address
            </h2>
            <address className="mt-3 text-sm not-italic leading-relaxed text-slate-600">
              University High School<br />
              2611 E Matoian Way Ms Uh 134<br />
              Fresno, CA 93740-0001<br />
              United States
            </address>
          </div>

          {/* Phone & Email Card */}
          <div className="card">
            <h2 className="flex items-center gap-2 font-bold text-ink">
              <Phone size={20} className="text-primary-600" aria-hidden="true" /> Phone
            </h2>
            <a href="tel:+13195555405" className="mt-2 block text-sm font-semibold text-primary-700 hover:underline">
              +1 (319) 555-5405
            </a>

            <h2 className="mt-5 flex items-center gap-2 font-bold text-ink">
              <Mail size={20} className="text-primary-600" aria-hidden="true" /> Email
            </h2>
            <a href="mailto:admin@universityhighschool.sbs" className="mt-2 block text-sm font-semibold text-primary-700 hover:underline">
              admin@universityhighschool.sbs
            </a>
          </div>

          {/* Office Hours Card */}
          <div className="card">
            <h2 className="flex items-center gap-2 font-bold text-ink">
              <Clock size={20} className="text-primary-600" aria-hidden="true" /> Office hours
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex justify-between">
                <span>Monday – Friday</span>
                <span className="font-semibold text-ink">7:30 a.m. – 4:00 p.m.</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday – Sunday</span>
                <span className="font-semibold text-ink">Closed</span>
              </li>
            </ul>
          </div>

          {/* Institutional Info Card */}
          <div className="card !bg-primary-50 !ring-primary-200">
            <h2 className="flex items-center gap-2 font-bold text-ink">
              <ShieldCheck size={20} className="text-primary-600" aria-hidden="true" /> Institutional information
            </h2>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
              <li><strong>Legal name:</strong> University High School</li>
              <li><strong>EIN:</strong> 77-0515663</li>
              <li><strong>Status:</strong> Accredited educational institution</li>
              <li>
                <strong>Website:</strong>{' '}
                <a href="https://www.universityhighschool.sbs" className="font-semibold text-primary-700 hover:underline">
                  www.universityhighschool.sbs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
