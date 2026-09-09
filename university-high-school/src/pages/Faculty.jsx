import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'
import { Mail, Phone, Users, Building2, BookOpen } from 'lucide-react'

const leadership = [
  { name: 'Dr. Elaine M. Torres', role: 'Principal', creds: 'Ed.D., Educational Leadership, Fresno State', img: '/images/faculty/principal.png', bio: 'Leads school-wide instruction and operations. 20 years in secondary education, 11 at UHS.' },
  { name: 'Mr. David K. Osei', role: 'Assistant Principal, Student Services', creds: 'M.A., School Administration', img: '/images/faculty/teacher-science.png', bio: 'Overseeing attendance, student conduct and family partnerships across all grade levels.' },
  { name: 'Ms. Rachel A. Nguyen', role: 'Director of Curriculum & Instruction', creds: 'M.Ed., Curriculum Design, UC Davis', img: '/images/faculty/teacher-math.png', bio: 'Coordinates the AP program, department chairs and the instructional coaching team.' }
]

const services = [
  { icon: Building2, title: 'Main Office & Attendance', text: 'Daily attendance, student records and visitor check-in. Room 101, main building.' },
  { icon: BookOpen, title: 'Counseling Department', text: 'Academic planning, college applications and student well-being. Appointments via the main office.' },
  { icon: Users, title: 'Admissions Office', text: 'Applications, campus tours and enrollment questions for prospective families.' }
]

export default function Faculty() {
  return (
    <>
      <Helmet>
        <title>Faculty &amp; Administration | University High School — Fresno, CA — EIN 77-0515663</title>
        <meta name="description" content="Meet the leadership team and services of University High School, 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001. EIN 77-0515663." />
        <link rel="canonical" href="https://www.universityhighschool.sbs/faculty" />
      </Helmet>

      <section className="bg-primary-900 py-16 text-center">
        <h1 className="font-serif text-4xl font-bold text-white">Faculty &amp; Administration</h1>
        <p className="mx-auto mt-3 max-w-2xl text-primary-100">
          68 credentialed educators and a dedicated administrative team serving Fresno families.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader eyebrow="Leadership" title="School administration" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {leadership.map(p => (
            <article key={p.name} className="card">
              <img src={p.img} alt={'Portrait of ' + p.name + ', ' + p.role + ' at University High School'}
                   className="h-56 w-full rounded-xl object-cover object-top" loading="lazy" />
              <h3 className="mt-4 text-lg font-bold text-ink">{p.name}</h3>
              <p className="text-sm font-semibold text-primary-600">{p.role}</p>
              <p className="mt-1 text-xs text-slate-500">{p.creds}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="Services" title="Student & family services" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="card">
                <Icon size={30} className="text-primary-600" aria-hidden="true" />
                <h3 className="mt-3 font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
          <div className="card mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-sm text-slate-600 sm:text-left">
              All administrative services are reached through the main office at
              2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001.
            </p>
            <div className="flex shrink-0 gap-3">
              <a href="tel:+13195555405" className="btn-outline !py-2"><Phone size={16} aria-hidden="true" /> +1 (319) 555-5405</a>
              <a href="mailto:admin@universityhighschool.sbs" className="btn-primary !py-2"><Mail size={16} aria-hidden="true" /> Email office</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
