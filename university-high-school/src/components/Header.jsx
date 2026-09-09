import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/academics', label: 'Academics' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/student-life', label: 'Student Life' },
  { to: '/faculty', label: 'Faculty' },
  { to: '/accreditation', label: 'Accreditation' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' }
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Official top bar: school identifiers required for institutional verification */}
      <div className="bg-ink text-xs text-slate-200">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-gold-400" aria-hidden="true" />
            <strong className="font-semibold text-white">EIN 77-0515663</strong>
            <span className="hidden sm:inline">· Accredited Institution · Fresno, California</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} aria-hidden="true" />
            <span className="hidden md:inline">2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001</span>
            <span className="md:hidden">Fresno, CA 93740</span>
          </span>
          <span className="flex items-center gap-4">
            <a href="tel:+13195555405" className="inline-flex items-center gap-1.5 hover:text-white" aria-label="Call University High School">
              <Phone size={14} aria-hidden="true" /> +1 (319) 555-5405
            </a>
            <a href="mailto:admin@universityhighschool.sbs" className="hidden items-center gap-1.5 hover:text-white sm:inline-flex" aria-label="Email University High School">
              <Mail size={14} aria-hidden="true" /> admin@universityhighschool.sbs
            </a>
          </span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="University High School logo" className="h-10 w-10" />
            <span className="leading-tight">
              <span className="block font-serif text-lg font-bold text-ink">University High School</span>
              <span className="block text-xs font-medium text-primary-600">College Preparatory · Fresno, CA</span>
            </span>
          </Link>
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map(item => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === '/'}
                    className={({ isActive }) =>
                      'rounded-lg px-3 py-2 text-sm font-semibold ' +
                      (isActive ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-100 hover:text-ink')}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li><Link to="/admissions" className="btn-primary ml-2 !py-2">Apply Now</Link></li>
            </ul>
          </nav>
          <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-ink hover:bg-slate-100 lg:hidden"
                  aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && (
          <nav aria-label="Mobile navigation" className="border-t border-slate-200 bg-white px-4 pb-4 lg:hidden">
            <ul className="flex flex-col gap-1 pt-2">
              {nav.map(item => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === '/'} onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      'block rounded-lg px-3 py-2 text-sm font-semibold ' +
                      (isActive ? 'bg-primary-50 text-primary-700' : 'text-slate-700 hover:bg-slate-100')}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li><Link to="/admissions" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full justify-center">Apply Now</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
