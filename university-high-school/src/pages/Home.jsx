import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { BookOpen, FlaskConical, Cpu, Palette, Trophy, Globe, ArrowRight, ShieldCheck } from 'lucide-react'

const programs = [
  { icon: BookOpen, title: 'Honors & AP', text: '24 Advanced Placement and honors courses across mathematics, sciences, humanities and languages.' },
  { icon: FlaskConical, title: 'STEM Pathway', text: 'Laboratory sciences, engineering design and research methods with hands-on experimentation.' },
  { icon: Cpu, title: 'Computer Science', text: 'Programming, robotics and data literacy powered by Google Workspace for Education tools.' },
  { icon: Palette, title: 'Visual & Performing Arts', text: 'Studio art, music ensembles, theater production and digital media programs.' },
  { icon: Trophy, title: 'Athletics', text: 'CIF-participating varsity programs in basketball, soccer, track, volleyball and cross country.' },
  { icon: Globe, title: 'World Languages', text: 'Spanish, French and Mandarin courses preparing students for a global future.' }
]

const news = [
  { date: 'August 28, 2026', title: 'First day of classes for the 2026–2027 school year', text: 'We welcomed 1,200+ students back to campus. Families can find the full academic calendar on the Admissions page.' },
  { date: 'August 15, 2026', title: 'University High School completes Google Workspace for Education onboarding', text: 'All student accounts are now provisioned under our verified institutional domain, with Classroom and Meet enabled for every course section.' },
  { date: 'July 30, 2026', title: 'Robotics team advances to regional championship', text: 'The UHS Robotics Club earned first place in the Fresno district design challenge and will compete at the Central Valley regional in October.' }
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>University High School | Accredited College-Prep High School in Fresno, CA — EIN 77-0515663</title>
        <meta name="description" content="University High School is an accredited college-preparatory high school at 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001. EIN 77-0515663. Email: admin@universityhighschool.sbs." />
        <link rel="canonical" href="https://www.universityhighschool.sbs/" />
      </Helmet>

      <Hero />

      {/* Welcome */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader align="left" eyebrow="Welcome" title="A rigorous education, rooted in community">
              <span className="sr-only">University High School</span>
            </SectionHeader>
            <p className="mt-4 leading-relaxed text-slate-600">
              Founded in 1998 and located at 2611 E Matoian Way Ms Uh 134 in Fresno, California,
              University High School (EIN 77-0515663) serves students in grades 9 through 12.
              Our faculty of 68 credentialed educators delivers a college-preparatory curriculum
              enriched with Advanced Placement courses, competitive athletics and nationally
              recognized STEM and arts programs.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Every classroom operates on Google Workspace for Education, giving students
              structured, secure access to Classroom, Drive, Docs and Meet under school
              supervision — supporting collaboration between school and home.
            </p>
            <Link to="/about" className="btn-outline mt-6">Our History &amp; Mission <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <img src="/images/gallery/classroom-hands.png" alt="Students actively participating in a University High School classroom"
               className="rounded-2xl shadow-lg ring-1 ring-slate-200" loading="lazy" />
        </div>
      </section>

      {/* Programs */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="Academics" title="Programs designed for university success" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map(({ icon: Icon, title, text }) => (
              <article key={title} className="card hover:shadow-md">
                <Icon size={32} className="text-primary-600" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation band */}
      <section className="bg-ink py-10" aria-label="Accreditation information">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left">
          <p className="inline-flex items-center gap-2 text-white">
            <ShieldCheck size={22} className="text-gold-400" aria-hidden="true" />
            <span className="font-semibold">University High School · EIN 77-0515663 · 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001</span>
          </p>
          <Link to="/accreditation" className="btn-primary !bg-gold-500 !text-ink hover:!bg-gold-400 shrink-0">Accreditation Details</Link>
        </div>
      </section>

      {/* Latest news */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader eyebrow="News" title="Latest announcements" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {news.map(item => (
            <article key={item.title} className="card">
              <time className="text-xs font-semibold uppercase tracking-wider text-primary-600">{item.date}</time>
              <h3 className="mt-2 text-lg font-bold leading-snug text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/news" className="btn-outline">View all news <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  )
}
