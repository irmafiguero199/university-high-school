import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export default function Newsletter() {
  const [sent, setSent] = useState(false)
  return (
    <section className="bg-primary-700" aria-labelledby="newsletter-title">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 lg:flex-row">
        <div className="text-center lg:text-left">
          <h2 id="newsletter-title" className="font-serif text-2xl font-bold text-white">Stay informed about University High School</h2>
          <p className="mt-1 text-sm text-primary-100">Receive school announcements, calendar updates and admissions news by email.</p>
        </div>
        {sent ? (
          <p className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary-700">
            <CheckCircle2 size={18} aria-hidden="true" /> Thank you! Your subscription request has been received.
          </p>
        ) : (
          <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row" onSubmit={e => { e.preventDefault(); setSent(true) }}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input id="newsletter-email" type="email" required placeholder="parent@example.com"
              className="w-full rounded-lg border-0 px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-gold-400" />
            <button type="submit" className="btn-primary shrink-0 !bg-gold-500 !text-ink hover:!bg-gold-400">
              <Send size={16} aria-hidden="true" /> Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
