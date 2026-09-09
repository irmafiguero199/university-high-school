import { Helmet } from 'react-helmet-async'

const schema = {
  "@context": "https://schema.org",
  "@type": "HighSchool",
  "name": "University High School",
  "alternateName": "UHS Fresno",
  "url": "https://www.universityhighschool.sbs",
  "logo": "https://www.universityhighschool.sbs/logo.svg",
  "email": "admin@universityhighschool.sbs",
  "telephone": "+1-319-555-5405",
  "taxID": "77-0515663",
  "identifier": { "@type": "PropertyValue", "propertyID": "EIN", "value": "77-0515663" },
  "foundingDate": "1998",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2611 E Matoian Way Ms Uh 134",
    "addressLocality": "Fresno",
    "addressRegion": "CA",
    "postalCode": "93740-0001",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 36.7378, "longitude": -119.7871 },
  "sameAs": [
    "https://www.facebook.com/universityhighschoolfresno",
    "https://www.instagram.com/universityhighschoolfresno",
    "https://www.linkedin.com/school/university-high-school-fresno"
  ]
}

export default function EducationalOrganizationSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
