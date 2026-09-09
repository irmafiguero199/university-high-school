import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | University High School — Fresno, CA</title>
      </Helmet>
      <section className="mx-auto max-w-2xl px-4 py-24 text-center">
        <p className="font-serif text-7xl font-bold text-primary-600">404</p>
        <h1 className="mt-4 font-serif text-3xl font-bold text-ink">Page not found</h1>
        <p className="mt-3 text-slate-600">
          The page you are looking for does not exist. Visit the University High School home page
          or contact the office at <a href="mailto:admin@universityhighschool.sbs" className="font-semibold text-primary-700 hover:underline">admin@universityhighschool.sbs</a>.
        </p>
        <Link to="/" className="btn-primary mt-8">Back to home</Link>
      </section>
    </>
  )
}
