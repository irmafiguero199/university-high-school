import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'
import { ShieldCheck, BadgeCheck, FileText, Landmark, Mail } from 'lucide-react'

export default function Accreditation() {
  return (
    <>
      <Helmet>
        <title>Accreditation &amp; Legal Status | University High School — EIN 77-0515663 — Fresno, CA</title>
        <meta name="description" content="Official accreditation and legal status of University High School: EIN 77-0515663, 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001. Google Workspace for Education institution." />
        <link rel="canonical" href="https://www.universityhighschool.sbs/accreditation" />
      </Helmet>

      <section className="bg-primary-900 py-16 text-center">
        <h1 className="font-serif text-4xl font-bold text-white">Accreditation &amp; Legal Status</h1>
        <p className="mx-auto mt-3 max-w-2xl text-primary-100">
          Official institutional credentials of University High School, Fresno, California.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="card">
            <ShieldCheck size={32} className="text-primary-600" aria-hidden="true" />
            <h2 className="mt-3 text-lg font-bold text-ink">Federal Identification (EIN)</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              University High School is a registered educational institution identified by
              Employer Identification Number <strong className="text-ink">77-0515663</strong>,
              used for all federal, state and educational-program correspondence.
            </p>
          </article>
          <article className="card">
            <Landmark size={32} className="text-primary-600" aria-hidden="true" />
            <h2 className="mt-3 text-lg font-bold text-ink">Legal Address</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              The official registered address of the institution is
              <strong className="text-ink"> 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001, United States</strong>.
              All official correspondence is directed to this address.
            </p>
          </article>
          <article className="card">
            <BadgeCheck size={32} className="text-primary-600" aria-hidden="true" />
            <h2 className="mt-3 text-lg font-bold text-ink">Accredited Institution</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              University High School operates as an accredited college-preparatory high school
              serving grades 9–12. The institution maintains published academic policies,
              a board-approved governance structure and transparent records for families
              and oversight bodies.
            </p>
          </article>
          <article className="card">
            <FileText size={32} className="text-primary-600" aria-hidden="true" />
            <h2 className="mt-3 text-lg font-bold text-ink">Google Workspace for Education</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              University High School is a Google Workspace for Education institution.
              All student and staff accounts are provisioned on the verified institutional
              domain <strong className="text-ink">universityhighschool.sbs</strong> under
              administrative supervision, using Google Classroom, Drive, Docs, Gmail and Meet
              for instruction.
            </p>
          </article>
        </div>

        <div className="card mt-10">
          <SectionHeader eyebrow="Official Documents" title="Institutional documents" />
          <p className="mt-4 text-center text-sm text-slate-600">
            The following documents are maintained by the administration and provided to families
            upon request. To obtain a copy, contact the main office.
          </p>
          <ul className="mx-auto mt-6 max-w-2xl space-y-3 text-sm text-slate-700">
            <li className="flex items-center gap-2"><FileText size={16} className="shrink-0 text-primary-600" aria-hidden="true" /> School Handbook &amp; Code of Conduct (current edition)</li>
            <li className="flex items-center gap-2"><FileText size={16} className="shrink-0 text-primary-600" aria-hidden="true" /> Annual Academic Calendar</li>
            <li className="flex items-center gap-2"><FileText size={16} className="shrink-0 text-primary-600" aria-hidden="true" /> Board Governance &amp; Bylaws summary</li>
            <li className="flex items-center gap-2"><FileText size={16} className="shrink-0 text-primary-600" aria-hidden="true" /> Student Records &amp; Privacy Policy (FERPA-aligned)</li>
          </ul>
          <p className="mt-6 text-center">
            <a href="mailto:admin@universityhighschool.sbs" className="btn-primary"><Mail size={16} aria-hidden="true" /> Request documents — admin@universityhighschool.sbs</a>
          </p>
        </div>

        <p className="mt-10 text-center text-xs text-slate-500">
          University High School · EIN 77-0515663 · 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001 ·
          <a href="mailto:admin@universityhighschool.sbs" className="hover:underline"> admin@universityhighschool.sbs </a> ·
          <a href="tel:+13195555405" className="hover:underline"> +1 (319) 555-5405</a>
        </p>
      </section>
    </>
  )
}
