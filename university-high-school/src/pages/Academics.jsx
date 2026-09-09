import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'
import { GraduationCap, FlaskConical, Cpu, Languages, Laptop, LineChart } from 'lucide-react'

const departments = [
  { icon: GraduationCap, title: 'English & Humanities', grades: 'Grades 9–12', text: 'Literature, composition, rhetoric and research writing. AP English Language and AP English Literature offered annually.' },
  { icon: FlaskConical, title: 'Mathematics & Sciences', grades: 'Grades 9–12', text: 'Algebra I through AP Calculus BC; biology, chemistry, physics and AP sciences with weekly laboratory sessions.' },
  { icon: Cpu, title: 'Computer Science & Engineering', grades: 'Grades 10–12', text: 'Intro to programming, AP Computer Science A, robotics, and a capstone engineering design sequence.' },
  { icon: Languages, title: 'World Languages', grades: 'Grades 9–12', text: 'Spanish, French and Mandarin with honors and AP tracks and a conversational exchange program.' },
  { icon: LineChart, title: 'Social Studies', grades: 'Grades 9–12', text: 'U.S. history, world history, government, economics, and AP U.S. History and AP Government.' },
  { icon: Laptop, title: 'Digital Learning Platform', grades: 'All grades', text: 'Every course runs on Google Classroom within Google Workspace for Education — assignments, feedback and portfolios in one secure place.' }
]

export default function Academics() {
  return (
    <>
      <Helmet>
        <title>Academics at University High School | Curriculum &amp; Programs — Fresno, CA — EIN 77-0515663</title>
        <meta name="description" content="College-preparatory curriculum at University High School, Fresno, CA: 24 AP & Honors courses, STEM pathway and Google Workspace for Education. EIN 77-0515663." />
        <link rel="canonical" href="https://www.universityhighschool.sbs/academics" />
      </Helmet>

      <section className="bg-primary-900 py-16 text-center">
        <h1 className="font-serif text-4xl font-bold text-white">Academics</h1>
        <p className="mx-auto mt-3 max-w-2xl text-primary-100">
          A college-preparatory curriculum for grades 9–12 at University High School, Fresno, California.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader eyebrow="Curriculum" title="Departments & academic pathways" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map(({ icon: Icon, title, grades, text }) => (
            <article key={title} className="card">
              <div className="flex items-center justify-between">
                <Icon size={30} className="text-primary-600" aria-hidden="true" />
                <span className="badge bg-primary-50 text-primary-700">{grades}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
          <img src="/images/gallery/science-lab.png" alt="University High School students conducting a chemistry experiment in the school laboratory"
               className="rounded-2xl shadow-lg ring-1 ring-slate-200" loading="lazy" />
          <div>
            <h2 className="font-serif text-3xl font-bold text-ink">STEM & Innovation</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Our STEM pathway pairs laboratory sciences with engineering design, coding and
              data analysis. Students progress from foundational coursework to the senior
              capstone, in which teams design, build and present an original project —
              recent capstones include a solar-powered irrigation prototype for Central
              Valley farms and an autonomous robotics platform.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary-600" aria-hidden="true" />Weekly laboratory instruction in biology, chemistry and physics</li>
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary-600" aria-hidden="true" />AP Computer Science A and AP Calculus BC offered every year</li>
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary-600" aria-hidden="true" />Robotics club competing in regional design challenges</li>
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary-600" aria-hidden="true" />Student research mentorship with local university faculty</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="font-serif text-3xl font-bold text-ink">Academic support & digital tools</h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Students and parents can reach the academic office at
          <a href="mailto:admin@universityhighschool.sbs" className="font-semibold text-primary-700 hover:underline"> admin@universityhighschool.sbs </a>
          or <a href="tel:+13195555405" className="font-semibold text-primary-700 hover:underline">+1 (319) 555-5405</a>.
          Weekly office hours, peer tutoring and a structured advisory program support every learner.
        </p>
      </section>
    </>
  )
}
