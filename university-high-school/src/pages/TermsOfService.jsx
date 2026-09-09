import { Helmet } from 'react-helmet-async'

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service &amp; School Regulations | University High School — Fresno, CA — EIN 77-0515663</title>
        <link rel="canonical" href="https://www.universityhighschool.sbs/terms" />
      </Helmet>
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="font-serif text-4xl font-bold text-ink">Terms of Service &amp; School Regulations</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: September 1, 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700">
          <div>
            <h2 className="text-lg font-bold text-ink">1. Legal identification</h2>
            <p className="mt-2">
              This website is the official online presence of University High School, an accredited
              educational institution with federal identification number EIN 77-0515663, located at
              2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001, United States. Official contact:
              <a href="mailto:admin@universityhighschool.sbs" className="font-semibold text-primary-700 hover:underline"> admin@universityhighschool.sbs</a>.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink">2. Use of this website</h2>
            <p className="mt-2">
              The content of this site is provided for the information of current and prospective
              families, students and partners of University High School. Content may not be
              reproduced for commercial purposes without written authorization from the school administration.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink">3. Enrollment &amp; conduct (summary)</h2>
            <p className="mt-2">
              Enrollment at University High School is governed by the School Handbook and Code of
              Conduct, provided to every family at registration. The handbook covers academic
              integrity, attendance requirements, acceptable use of school technology (including
              Google Workspace accounts), and behavioral expectations on campus and at school events.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink">4. Accuracy of information</h2>
            <p className="mt-2">
              The school makes every effort to keep academic calendars, admissions dates and
              institutional information accurate and current. Official decisions are always
              confirmed in writing by the administration.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink">5. Contact</h2>
            <p className="mt-2">
              Questions about these terms may be directed to the main office at
              <a href="tel:+13195555405" className="font-semibold text-primary-700 hover:underline"> +1 (319) 555-5405 </a>
              or <a href="mailto:admin@universityhighschool.sbs" className="font-semibold text-primary-700 hover:underline">admin@universityhighschool.sbs</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
