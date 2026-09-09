import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'
import { ShieldCheck, Target, HeartHandshake, Lightbulb } from 'lucide-react'

const timeline = [
  { year: '1998', title: 'Foundation', text: 'University High School opens its doors in Fresno, California, with 180 founding students and a college-preparatory mission.' },
  { year: '2005', title: 'First graduating class of 100%', text: 'Every senior in the class of 2005 earns acceptance to a four-year college or university.' },
  { year: '2014', title: 'STEM expansion', text: 'New science laboratories and an engineering design studio open, launching the STEM pathway.' },
  { year: '2020', title: 'Digital learning transformation', text: 'The school adopts Google Workspace for Education for all instruction, ensuring continuity and collaboration.' },
  { year: '2026', title: '1,200+ students strong', text: 'UHS today serves more than 1,200 students in grades 9–12 with 68 full-time faculty members.' }
]

const values = [
  { icon: Target, title: 'Academic Excellence', text: 'A rigorous, inquiry-driven curriculum that challenges every student to reach university-level readiness.' },
  { icon: HeartHandshake, title: 'Community', text: 'Small advisory groups and family partnership keep every student known, supported and accountable.' },
  { icon: Lightbulb, title: 'Innovation', text: 'Technology, research and creative problem-solving are woven into daily learning.' },
  { icon: ShieldCheck, title: 'Integrity', text: 'Honesty, responsibility and respect guide our classrooms, teams and code of conduct.' }
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About University High School | History, Mission &amp; Values — Fresno, CA — EIN 77-0515663</title>
        <meta name="description" content="History, mission and values of University High School, an accredited college-preparatory high school at 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001 (EIN 77-0515663)." />
        <link rel="canonical" href="https://www.universityhighschool.sbs/about" />
      </Helmet>

      <section className="bg-primary-900 py-16 text-center">
        <h1 className="font-serif text-4xl font-bold text-white">About University High School</h1>
        <p className="mx-auto mt-3 max-w-2xl text-primary-100">
          An accredited institution (EIN 77-0515663) serving Fresno, California since 1998.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <SectionHeader eyebrow="Our History" title="Nearly three decades of excellence in Fresno" />
        <div className="mt-8 space-y-4 leading-relaxed text-slate-600">
          <p>
            University High School was founded in 1998 in Fresno, California, by a group of
            educators and families who believed every student in the Central Valley deserved
            access to a rigorous, college-preparatory education. From its first class of
            180 students, the school has grown into a vibrant community of more than
            1,200 students in grades 9 through 12.
          </p>
          <p>
            The school operates as an accredited educational institution under U.S. federal
            identification number EIN 77-0515663, with its official address at
            2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001. University High School
            maintains full institutional records, a published board-approved governance
            structure, and transparent academic policies available to all families.
          </p>
          <p>
            Today, UHS graduates matriculate to public and private universities across
            California and the nation, carrying forward the school's motto:
            <em className="font-serif"> “Knowledge, Character, Community.”</em>
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="Timeline" title="Milestones" />
          <ol className="mt-12 space-y-0 border-l-2 border-primary-200 pl-8">
            {timeline.map(t => (
              <li key={t.year} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-primary-600 ring-4 ring-primary-100" aria-hidden="true" />
                <p className="text-sm font-bold text-primary-600">{t.year}</p>
                <h3 className="mt-1 text-lg font-bold text-ink">{t.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader eyebrow="Our Values" title="What guides us every day" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card text-center">
              <Icon size={32} className="mx-auto text-primary-600" aria-hidden="true" />
              <h3 className="mt-3 font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
