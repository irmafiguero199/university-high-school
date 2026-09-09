import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'
import { Bot, Music, Recycle, Languages as LangIcon, Trophy, Theater } from 'lucide-react'

const clubs = [
  { icon: Bot, title: 'Robotics Club', text: 'Design, build and program competition robots. Regional champions in the 2026 Fresno district challenge.' },
  { icon: Recycle, title: 'Environmental Action', text: 'Campus recycling programs, a student garden and quarterly clean-up days along the San Joaquin River.' },
  { icon: Music, title: 'Music & Jazz Ensemble', text: 'Concert band, choir and a student-led jazz combo performing at school and community events.' },
  { icon: Theater, title: 'Drama Society', text: 'Two mainstage productions each year plus student-directed one-acts in the black-box studio.' },
  { icon: LangIcon, title: 'World Language Club', text: 'Conversation tables, film nights and the annual International Fair celebrating our multilingual community.' },
  { icon: Trophy, title: 'Varsity Athletics', text: 'Basketball, soccer, volleyball, track and cross country with CIF-participating programs.' }
]

export default function StudentLife() {
  return (
    <>
      <Helmet>
        <title>Student Life | University High School — Fresno, CA — EIN 77-0515663</title>
        <meta name="description" content="Clubs, athletics, arts and STEM projects at University High School, 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001. EIN 77-0515663." />
        <link rel="canonical" href="https://www.universityhighschool.sbs/student-life" />
      </Helmet>

      <section className="bg-primary-900 py-16 text-center">
        <h1 className="font-serif text-4xl font-bold text-white">Student Life</h1>
        <p className="mx-auto mt-3 max-w-2xl text-primary-100">
          Beyond the classroom at University High School — clubs, teams, arts and service.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader eyebrow="Clubs & Activities" title="Something for every student" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clubs.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card">
              <Icon size={30} className="text-primary-600" aria-hidden="true" />
              <h3 className="mt-3 font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold text-ink">Innovation in action</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Our students don't just study STEM — they build with it. In the 2026 season,
              the UHS Robotics Club designed an autonomous line-following robot with
              computer-vision navigation, earning first place at the Fresno district
              design challenge and qualifying for the Central Valley regional championship.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              The Environmental Action club runs a campus-wide composting program and
              partners with local farms on water-conservation research — a project that
              began as a science fair entry and grew into a year-long community partnership.
            </p>
          </div>
          <img src="/images/gallery/robotics-stem.png" alt="University High School students building a robotics project in the STEM workshop"
               className="rounded-2xl shadow-lg ring-1 ring-slate-200" loading="lazy" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader eyebrow="Gallery" title="Life on campus" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <img src="/images/gallery/library-students.png" alt="Students studying together in the University High School library" className="h-56 w-full rounded-xl object-cover shadow" loading="lazy" />
          <img src="/images/gallery/varsity-basketball.png" alt="University High School varsity basketball team" className="h-56 w-full rounded-xl object-cover shadow" loading="lazy" />
          <img src="/images/gallery/auditorium-rehearsal.png" alt="Students rehearsing on the University High School auditorium stage" className="h-56 w-full rounded-xl object-cover shadow" loading="lazy" />
          <img src="/images/gallery/graduation-ceremony.png" alt="University High School graduation ceremony in the auditorium" className="h-56 w-full rounded-xl object-cover shadow" loading="lazy" />
        </div>
      </section>
    </>
  )
}
