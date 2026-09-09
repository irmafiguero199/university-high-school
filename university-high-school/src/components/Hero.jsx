import { Link } from 'react-router-dom'
import { ShieldCheck, Award, Users, GraduationCap, BookOpen } from 'lucide-react'

const stats = [
  { icon: Users, value: '1,200+', label: 'Students enrolled' },
  { icon: GraduationCap, value: '96%', label: 'Graduation rate' },
  { icon: BookOpen, value: '24', label: 'AP & Honors courses' },
  { icon: Award, value: '18:1', label: 'Student-teacher ratio' }
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-900">
      <img src="/images/campus/campus-main.png" alt="University High School modern campus building in Fresno, California"
           className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-900/85 to-primary-800/70" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32">
        <div className="max-w-2xl">
          <p className="badge bg-white/10 text-gold-400 ring-1 ring-gold-400/40">
            <ShieldCheck size={14} aria-hidden="true" />
            Accredited Institution · EIN 77-0515663 · Fresno, California
          </p>
          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            University High School
          </h1>
          <p className="mt-4 font-serif text-xl italic text-primary-200">
            “Knowledge, Character, Community.”
          </p>
          <p className="mt-6 text-lg leading-relaxed text-primary-100">
            An accredited college-preparatory high school in Fresno, California, preparing
            students in grades 9–12 for university success through rigorous academics,
            advanced STEM programs and a close-knit learning community.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/admissions" className="btn-primary !bg-gold-500 !text-ink hover:!bg-gold-400">Apply for Admission</Link>
            <Link to="/academics" className="btn-outline !border-primary-300 !text-white hover:!bg-white/10">Explore Academics</Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            <span className="badge bg-white/10 text-white">Google Workspace for Education School</span>
            <span className="badge bg-white/10 text-white">WASC-Aligned Curriculum</span>
            <span className="badge bg-white/10 text-white">College Board Approved Courses</span>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 bg-primary-950/80">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon size={28} className="shrink-0 text-gold-400" aria-hidden="true" />
              <div>
                <p className="text-2xl font-bold text-white">{value}</p>
                <p className="text-xs text-primary-200">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
