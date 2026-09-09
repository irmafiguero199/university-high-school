import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import SectionHeader from '../components/SectionHeader.jsx'
import { CheckCircle2, CalendarDays, FileText, Send } from 'lucide-react'

const steps = [
  { title: 'Submit an inquiry', text: 'Complete the pre-application form below or email the admissions office at admin@universityhighschool.sbs.' },
  { title: 'Visit the campus', text: 'Join an open house at 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001. Tour classrooms, labs and meet faculty.' },
  { title: 'Apply online', text: 'Submit the application form, transcripts from the current school, and two recommendation letters.' },
  { title: 'Family interview', text: 'A 30-minute conversation between the family, the student and a member of the admissions team.' },
  { title: 'Enrollment decision', text: 'Decisions are released by email. Accepted families confirm enrollment with a signed registration packet.' }
]

const documents = [
  'Completed application form (signed by parent or guardian)',
  'Official transcripts from the current and previous school years',
  'Two letters of recommendation (one from a current teacher)',
  'Copy of birth certificate or passport for age verification',
  'Proof of California residency (utility bill or lease agreement)',
  'Immunization records as required by California state law'
]

const calendar = [
  { date: 'October 1, 2026', event: 'Applications open for the 2027–2028 school year' },
  { date: 'November 14, 2026', event: 'Fall open house — 9:00 a.m. to 12:00 p.m.' },
  { date: 'January 15, 2027', event: 'Priority application deadline' },
  { date: 'February 20, 2027', event: 'Family interviews completed' },
  { date: 'March 15, 2027', event: 'Admission decisions released by email' },
  { date: 'April 10, 2027', event: 'Enrollment confirmation deadline' }
]

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <>
      <Helmet>
        <title>Admissions | University High School — Fresno, CA — EIN 77-0515663</title>
        <meta name="description" content="Apply to University High School, Fresno, CA. Admissions process, required documents and calendar for grades 9–12. EIN 77-0515663 · 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001." />
        <link rel="canonical" href="https://www.universityhighschool.sbs/admissions" />
      </Helmet>

      <section className="bg-primary-900 py-16 text-center">
        <h1 className="font-serif text-4xl font-bold text-white">Admissions</h1>
        <p className="mx-auto mt-3 max-w-2xl text-primary-100">
          Join University High School in Fresno, California — grades 9 through 12.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader eyebrow="Process" title="Five steps to enrollment" />
        <ol className="mt-12 grid gap-6 md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.title} className="card relative">
              <span className="absolute -top-3 left-6 rounded-full bg-primary-600 px-3 py-1 text-xs font-bold text-white">{i + 1}</span>
              <h3 className="mt-2 font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
          <div>
            <h2 className="flex items-center gap-2 font-serif text-2xl font-bold text-ink">
              <FileText size={24} className="text-primary-600" aria-hidden="true" /> Required documents
            </h2>
            <ul className="mt-6 space-y-3">
              {documents.map(d => (
                <li key={d} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary-600" aria-hidden="true" /> {d}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 flex items-center gap-2 font-serif text-2xl font-bold text-ink">
              <CalendarDays size={24} className="text-primary-600" aria-hidden="true" /> Key dates
            </h2>
            <ul className="mt-6 space-y-3">
              {calendar.map(c => (
                <li key={c.date} className="flex flex-col rounded-lg bg-slate-50 px-4 py-3 ring-1 ring-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-600">{c.date}</span>
                  <span className="mt-1 text-sm text-slate-700">{c.event}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card h-fit">
            <h2 className="font-serif text-2xl font-bold text-ink">Pre-application inquiry</h2>
            <p className="mt-2 text-sm text-slate-600">
              Tell us about your student and our admissions team will respond within two school days.
              You can also email <a href="mailto:admin@universityhighschool.sbs" className="font-semibold text-primary-700 hover:underline">admin@universityhighschool.sbs</a>.
            </p>
            {submitted ? (
              <p className="mt-6 flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 ring-1 ring-green-200">
                <CheckCircle2 size={18} aria-hidden="true" /> Thank you! Your inquiry has been received by the admissions office.
              </p>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>
                <div>
                  <label htmlFor="student-name" className="mb-1 block text-sm font-semibold text-ink">Student full name</label>
                  <input id="student-name" required className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="grade" className="mb-1 block text-sm font-semibold text-ink">Grade applying for</label>
                    <select id="grade" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200">
                      <option>Grade 9</option><option>Grade 10</option><option>Grade 11</option><option>Grade 12</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="year" className="mb-1 block text-sm font-semibold text-ink">School year</label>
                    <select id="year" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200">
                      <option>2026–2027</option><option>2027–2028</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="parent-email" className="mb-1 block text-sm font-semibold text-ink">Parent/guardian email</label>
                  <input id="parent-email" type="email" required className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-semibold text-ink">Questions or comments</label>
                  <textarea id="message" rows={4} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center"><Send size={16} aria-hidden="true" /> Submit inquiry</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
