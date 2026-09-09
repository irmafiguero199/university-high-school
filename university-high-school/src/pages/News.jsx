import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'

const articles = [
  { date: 'August 28, 2026', tag: 'School Life', title: 'First day of classes for the 2026–2027 school year', text: 'We welcomed more than 1,200 students back to campus. Families can review the full academic calendar and bell schedule on the Admissions page or request a copy from the main office.' },
  { date: 'August 15, 2026', tag: 'Technology', title: 'Google Workspace for Education onboarding completed', text: "All student accounts are now active on the school's verified institutional domain. Google Classroom is enabled for every course section, and teachers have completed professional development on digital assignments and feedback." },
  { date: 'August 5, 2026', tag: 'Admissions', title: 'Fall open house scheduled for November 14', text: 'Prospective families are invited to tour the campus at 2611 E Matoian Way Ms Uh 134, Fresno, meet faculty and learn about the admissions process for grades 9–12. RSVP via admin@universityhighschool.sbs.' },
  { date: 'July 30, 2026', tag: 'STEM', title: 'Robotics team advances to regional championship', text: 'The UHS Robotics Club earned first place in the Fresno district design challenge with an autonomous computer-vision robot. The team will represent the school at the Central Valley regional championship in October.' },
  { date: 'June 12, 2026', tag: 'Commencement', title: 'Class of 2026 celebrates graduation', text: 'The 214 members of the class of 2026 celebrated commencement with families and faculty. Graduates earned admission offers from universities across California and beyond.' },
  { date: 'May 20, 2026', tag: 'Community', title: 'Environmental Action club launches river clean-up partnership', text: 'Students completed their third quarterly clean-up along the San Joaquin River, collecting more than 120 pounds of debris in partnership with a local conservation group.' }
]

export default function News() {
  return (
    <>
      <Helmet>
        <title>School News | University High School — Fresno, CA — EIN 77-0515663</title>
        <meta name="description" content="Announcements and news from University High School, 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001. EIN 77-0515663." />
        <link rel="canonical" href="https://www.universityhighschool.sbs/news" />
      </Helmet>
      <section className="bg-primary-900 py-16 text-center">
        <h1 className="font-serif text-4xl font-bold text-white">School News</h1>
        <p className="mx-auto mt-3 max-w-2xl text-primary-100">Announcements from the administration of University High School.</p>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader eyebrow="Announcements" title="Latest news" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map(a => (
            <article key={a.title} className="card">
              <div className="flex items-center justify-between">
                <span className="badge bg-gold-500/15 text-gold-600">{a.tag}</span>
                <time className="text-xs text-slate-500">{a.date}</time>
              </div>
              <h2 className="mt-3 text-lg font-bold leading-snug text-ink">{a.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-slate-500">
          Media inquiries: <a href="mailto:admin@universityhighschool.sbs" className="font-semibold text-primary-700 hover:underline">admin@universityhighschool.sbs</a>
        </p>
      </section>
    </>
  )
}
