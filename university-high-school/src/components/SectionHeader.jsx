export default function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className="text-sm font-bold uppercase tracking-widest text-primary-600">{eyebrow}</p>}
      <h2 className="mt-2 font-serif text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-lg text-slate-600">{children}</p>}
    </div>
  )
}
