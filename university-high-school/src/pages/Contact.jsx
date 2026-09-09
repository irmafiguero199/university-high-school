import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <>
      <Helmet>
        <title>Contact University High School | Fresno, CA — EIN 77-0515663</title>
        <meta name="description" content="Contact University High School: 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001 · Phone +1 (319) 555-5405 · Email admin@universityhighschool.sbs · EIN 77-0515663." />
        <link rel="canonical" href="https://www.universityhighschool.sbs/contact" />
      </Helmet>

      <section className="bg-primary-900 py-16 text-center">
        <h1 className="font-serif text-4xl font-bold text-white">Contact Us</h1>
        <p className="mx-auto mt-3 max-w-2xl text-primary-100">
          We welcome questions from current and prospective families.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="card">
              <h2 className="flex items-center gap-2 font-bold text-ink"><MapPin size={20} className="text-primary-600" aria-hidden="true" /> Address</h2>
              <address className="mt-3 text-sm not-italic leading-relaxed text-slate-600">
                University High School<br />
                2611 E Matoian Way Ms Uh 134<br />
                Fresno, CA 93740-0001<br />
                United States
              </address>
            </div>
            <div className="card">
              <h2 className="flex items-center gap-2 font-bold text-ink"><Phone size={20} className="text-primary-600" aria-hidden="true" /> Phone</h2>
              <a href="tel:+13195555405" className="mt-3 block text-sm font-semibold text-primary-700 hover:underline">+1 (319) 555-5405</a>
              <h2 className="mt-5 flex items-center gap-2 font-bold text-ink"><Mail size={20} className="text-primary-600" aria-hidden="true" /> Email</h2>
              <a href="mailto:admin@universityhighschool.sbs" className="mt-3 block text-sm font-semibold text-primary-700 hover:underline">admin@universityhighschool.sbs</a>
            </div>
            <div className="card">
              <h2 className="flex items-center gap-2 font-bold text-ink"><Clock size={20} className="text-primary-600" aria-hidden="true" /> Office hours</h2>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                <li className="flex justify-between"><span>Monday – Friday</span><span className="font-semibold text-ink">7:30 a.m. – 4:00 p.m.</span></li>
                <li className="flex justify-between"><span>Saturday – Sunday</span><span className="font-semibold text-ink">Closed</span></li>
              </ul>
            </div>
            <div className="card !bg-primary-50 !ring-primary-200">
              <h2 className="flex items-center gap-2 font-bold text-ink"><ShieldCheck size={20} className="text-primary-600" aria-hidden="true" /> Institutional information</h2>
              <ul className="mt-3 space-y-1 text-sm text-slate-700">
                <li><strong>Legal name:</strong> University High School</li>
                <li><strong>EIN:</strong> 77-0515663</li>
                <li><strong>Status:</strong> Accredited educational institution</li>
                <li><strong>Website:</strong> <a href="https://www.universityhighschool.sbs" className="font-semibold text-primary-700 hover:underline">www.universityhighschool.sbs</a></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="card">
              <h2 className="font-serif text-2xl font-bold text-ink">Send us a message</h2>
              <p className="mt-2 text-sm text-slate-600">
                Fields marked with an asterisk are required. Messages are answered within one school day.
              </p>
              {sent ? (
                <p className="mt-6 flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 ring-1 ring-green-200">
                  <CheckCircle2 size={18} aria-hidden="true" /> Your message has been sent. Thank you for contacting University High School.
                </p>
              ) : (
                <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={e => { e.preventDefault(); setSent(true) }}>
                  <div>
                    <label htmlFor="c-name" className="mb-1 block text-sm font-semibold text-ink">Full name *</label>
                    <input id="c-name" required className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200" />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="mb-1 block text-sm font-semibold text-ink">Email address *</label>
                    <input id="c-email" type="email" required className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="c-topic" className="mb-1 block text-sm font-semibold text-ink">Topic</label>
                    <select id="c-topic" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200">
                      <option>Admissions inquiry</option><option>Attendance or records</option>
                      <option>Counseling appointment</option><option>General question</option><option>Media request</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="c-msg" className="mb-1 block text-sm font-semibold text-ink">Message *</label>
                    <textarea id="c-msg" rows={6} required className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200" />
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit" className="btn-primary"><Send size={16} aria-hidden="true" /> Send message</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
