import { FileText, Calendar, MapPin, Cloud } from 'lucide-react'

export default function ObservationsPage() {
  const observations = [
    {
      date: '2025-07-17',
      time: '08:19 AM',
      location: 'Jungnangcheon Stream, Dobong-gu, Seoul',
      weather: 'Overcast, intermittent rain, monsoon influence',
      species: 'Ardeidae sp., Anatidae/Rallidae sp.',
      description: 'Heron observed in stationary hunting posture on rock in mid-stream rapids. Multiple waterfowl maintaining 2-3m spacing in calm water zones. Monsoon-induced turbidity and increased flow rate creating enriched feeding opportunities.',
      significance: 'Demonstrates ecological functionality of urban waterways and monsoon-period biodiversity patterns.'
    },
    {
      date: '2025-07-12',
      time: 'Morning',
      location: 'National Arboretum',
      weather: 'Clear',
      species: 'Argyreus hyperbius (Indian Fritillary)',
      description: 'Single individual observed nectaring on garden flowers. Orange base coloration with distinct black markings clearly visible.',
      significance: 'Lepidopteran biodiversity documentation.'
    },
    {
      date: '2025-06-06',
      time: 'Research Period',
      location: 'Soyosan, Dongducheon, Gyeonggi-do',
      weather: 'Variable',
      species: 'Prionailurus bengalensis (Leopard Cat) - habitat assessment',
      description: 'No direct observation. Scat evidence discovered. Habitat suitability evaluation: 587m elevation, mixed forest, abundant water sources. Located 20km from DMZ.',
      significance: 'Endangered species habitat assessment. Highlights importance of DMZ ecological connectivity and need for systematic monitoring.'
    }
  ]

  return (
    <div className="pt-20">
      <section className="py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <FileText size={80} className="mx-auto mb-8 opacity-90" />
          <h1 className="hero-title mb-8">FIELD OBSERVATIONS</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-95">
            Systematic documentation of wildlife encounters with scientific methodology
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {observations.map((obs, index) => (
              <div key={index} className="border-l-4 border-black pl-12 py-8">
                <div className="flex flex-wrap gap-6 mb-6 text-sm text-gray-600 uppercase tracking-wider">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {obs.date} {obs.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {obs.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Cloud size={16} />
                    {obs.weather}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)'}}>
                  {obs.species}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {obs.description}
                </p>
                <div className="bg-gray-50 p-6 border-l-4 border-yellow-500">
                  <p className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-2">Scientific Significance</p>
                  <p className="text-gray-700 leading-relaxed">{obs.significance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-8" style={{fontFamily: 'var(--font-serif)'}}>Methodology</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            All observations follow rigorous scientific protocols including photographic/video documentation, 
            behavioral notation, environmental measurements, and GPS coordinates. 
            Data is structured in JSON format and cross-referenced with academic literature.
          </p>
          <a 
            href="https://github.com/CassianK/Nature-report" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-ng-primary"
          >
            Contribute on GitHub
          </a>
        </div>
      </section>
    </div>
  )
}
