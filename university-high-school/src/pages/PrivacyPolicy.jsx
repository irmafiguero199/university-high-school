import { Helmet } from 'react-helmet-async'

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | University High School — Fresno, CA — EIN 77-0515663</title>
        <link rel="canonical" href="https://www.universityhighschool.sbs/privacy-policy" />
      </Helmet>
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="font-serif text-4xl font-bold text-ink">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: September 1, 2026 · Applies to www.universityhighschool.sbs</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700">
          <div>
            <h2 className="text-lg font-bold text-ink">1. Who we are</h2>
            <p className="mt-2">
              This website is operated by University High School (EIN 77-0515663), an accredited
              educational institution located at 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001,
              United States. For any privacy question, contact
              <a href="mailto:admin@universityhighschool.sbs" className="font-semibold text-primary-700 hover:underline"> admin@universityhighschool.sbs </a>
              or call <a href="tel:+13195555405" className="font-semibold text-primary-700 hover:underline">+1 (319) 555-5405</a>.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink">2. Information we collect</h2>
            <p className="mt-2">
              When families submit inquiry or contact forms, we collect the name, email address
              and message content provided voluntarily. We also maintain student education
              records as required for school operations.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink">3. Student data &amp; FERPA</h2>
            <p className="mt-2">
              Education records of students are protected under the Family Educational Rights
              and Privacy Act (FERPA). Student records are never sold or shared with third
              parties for marketing purposes. Access is limited to school officials with a
              legitimate educational interest, and to parents or eligible students as provided by law.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink">4. Google Workspace for Education</h2>
            <p className="mt-2">
              Student accounts on Google Workspace for Education are managed and supervised by
              the school under its verified institutional domain. Google does not own student
              data and does not use it for advertising, in accordance with the
              Google Workspace for Education terms of service.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink">5. How we use information</h2>
            <p className="mt-2">
              Information is used solely to respond to inquiries, process admissions,
              administer enrollment and operate the educational program. We do not sell
              personal information.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink">6. Your rights</h2>
            <p className="mt-2">
              Parents and eligible students may request access to, correction of, or deletion
              of personal information by contacting the school office at the address above.
              Requests are answered within 30 days.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
