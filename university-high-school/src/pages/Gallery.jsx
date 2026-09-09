import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'

const photos = [
  { src: '/images/campus/campus-main.png', alt: 'Modern University High School campus building in Fresno, California', cap: 'Main campus building' },
  { src: '/images/gallery/classroom-hands.png', alt: 'Engaged students raising hands during a lesson at University High School', cap: 'Active learning in the classroom' },
  { src: '/images/gallery/science-lab.png', alt: 'Students working on a chemistry experiment in the UHS laboratory', cap: 'Hands-on science laboratory' },
  { src: '/images/gallery/library-students.png', alt: 'Students collaborating on research in the school library', cap: 'Collaborative study in the library' },
  { src: '/images/gallery/robotics-stem.png', alt: 'UHS Robotics Club members assembling a competition robot', cap: 'Robotics & STEM workshop' },
  { src: '/images/gallery/auditorium-rehearsal.png', alt: 'Drama Society rehearsal on the auditorium stage', cap: 'Theater & performing arts' },
  { src: '/images/gallery/varsity-basketball.png', alt: 'University High School varsity basketball team portrait', cap: 'Varsity athletics' },
  { src: '/images/gallery/graduation-ceremony.png', alt: 'Graduation ceremony for the senior class at UHS', cap: 'Graduation ceremony' }
]

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Photo Gallery | University High School — Campus &amp; Student Life — EIN 77-0515663</title>
        <meta name="description" content="Photos of University High School campus, classrooms, laboratories, athletics and events at 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001. EIN 77-0515663." />
        <link rel="canonical" href="https://www.universityhighschool.sbs/gallery" />
      </Helmet>
      <section className="bg-primary-900 py-16 text-center">
        <h1 className="font-serif text-4xl font-bold text-white">Photo Gallery</h1>
        <p className="mx-auto mt-3 max-w-2xl text-primary-100">Campus, classrooms and student life at University High School.</p>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader eyebrow="Our Campus" title="Life at University High School" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map(p => (
            <figure key={p.src} className="group overflow-hidden rounded-xl shadow ring-1 ring-slate-200">
              <img src={p.src} alt={p.alt} loading="lazy" className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <figcaption className="bg-white px-4 py-3 text-sm font-semibold text-ink">{p.cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}
