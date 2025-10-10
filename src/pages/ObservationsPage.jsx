import { FileText, Calendar, MapPin, Cloud, ExternalLink, Youtube } from 'lucide-react'

export default function ObservationsPage() {
  const observations = [
    {
      date: '2025-07-17',
      time: '08:19 AM - 09:30 AM',
      location: 'Jungnangcheon Stream Downstream, Dobong-gu, Seoul',
      coordinates: '37.6500, 127.0470',
      weather: 'Overcast, intermittent rain, post-monsoon conditions',
      temperature: '22-24°C',
      species: [
        {
          family: 'Ardeidae',
          common: 'Heron species',
          scientific: 'Ardea sp.',
          count: 1,
          behavior: 'Stationary hunting posture on rock in mid-stream rapids',
          features: 'Gray plumage, long neck, S-curved hunting stance'
        },
        {
          family: 'Anatidae/Rallidae',
          common: 'Waterfowl (probable Common Moorhen)',
          scientific: 'Gallinula sp.',
          count: 3,
          behavior: 'Dabbling and swimming in calm water zones adjacent to rapids',
          features: 'Dark small bodies, maintaining 2-3m spacing, group behavior'
        }
      ],
      waterConditions: {
        clarity: 'Highly turbid (brown), visibility <30cm',
        flowRate: '3-4x normal due to monsoon',
        foam: 'White foam from rapids',
        temperature: '18-20°C (estimated)'
      },
      description: 'Observed herons in stationary hunting posture on rocks in mid-stream rapids. Multiple waterfowl maintaining consistent spacing in calm water zones. Monsoon-induced turbidity and increased flow rate creating enriched feeding opportunities. Despite urban setting, diverse avian species utilizing different micro-habitats and foraging strategies.',
      significance: 'Demonstrates ecological functionality of urban waterways and monsoon-period biodiversity patterns. Shows how different species employ unique foraging strategies to coexist in the same habitat. The boundary between rapids and calm waters creates diverse micro-habitats supporting multiple species.',
      videoUrl: 'https://youtube.com/shorts/AIkFiOy0PGw',
      githubUrl: 'https://github.com/CassianK/Nature-report/blob/main/observations/2025/07-july/jungrang-stream.md'
    },
    {
      date: '2025-07-12',
      time: 'Morning',
      location: 'Korea National Arboretum, Pocheon, Gyeonggi-do',
      weather: 'Clear',
      temperature: '25-28°C',
      species: [
        {
          family: 'Nymphalidae',
          common: 'Indian Fritillary',
          scientific: 'Argyreus hyperbius',
          count: 1,
          behavior: 'Nectaring on garden flowers',
          features: 'Orange base coloration with distinct black markings'
        }
      ],
      description: 'Single individual of Indian Fritillary observed nectaring on garden flowers. Orange base coloration with distinct black markings clearly visible. The butterfly exhibited typical nectaring behavior, moving between flowers in the arboretum garden.',
      significance: 'Lepidopteran biodiversity documentation. The Indian Fritillary is a common species in Korea but serves as an indicator of healthy garden ecosystems. Its presence demonstrates the arboretum\'s role in supporting pollinator populations.',
      githubUrl: 'https://github.com/CassianK/Nature-report/blob/main/observations/2025/07-july/2025-07-12-korea-national-arboretum.md'
    },
    {
      date: '2025-06-06',
      time: 'Research Period',
      location: 'Soyosan, Dongducheon, Gyeonggi-do',
      coordinates: '37.9500, 127.0700',
      weather: 'Variable',
      temperature: '18-22°C',
      species: [
        {
          family: 'Felidae',
          common: 'Leopard Cat',
          scientific: 'Prionailurus bengalensis',
          count: 'No direct observation (scat evidence)',
          behavior: 'Habitat suitability assessment',
          features: 'Endangered Species Class II'
        }
      ],
      habitatAssessment: {
        elevation: '587m',
        forestType: 'Mixed deciduous-coniferous forest',
        waterSources: 'Abundant valleys and streams',
        dmzDistance: '20km',
        suitability: 'High - optimal elevation and forest structure'
      },
      description: 'No direct observation of leopard cats, but scat evidence discovered. Comprehensive habitat suitability evaluation conducted. Soyosan features 587m elevation, mixed forest composition, and abundant water sources - all optimal for leopard cat habitat. Located 20km from DMZ, suggesting potential ecological corridor.',
      significance: 'Critical endangered species habitat assessment. Highlights importance of DMZ ecological connectivity and need for systematic monitoring. Soyosan represents a vital stepping stone habitat between urban areas and the DMZ wildlife corridor. High visitor numbers and habitat fragmentation pose conservation challenges requiring management intervention.',
      githubUrl: 'https://github.com/CassianK/Nature-report/blob/main/docs/species-guides/mammals/prionailurus-bengalensis-soyosan-study.md'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <FileText size={80} className="mx-auto mb-8 opacity-90" />
          <h1 className="hero-title mb-8">FIELD OBSERVATIONS</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-95">
            Systematic documentation of wildlife encounters with scientific methodology
          </p>
        </div>
      </section>

      {/* Observations */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-20">
            {observations.map((obs, index) => (
              <article key={index} className="border-l-4 border-black pl-8 md:pl-12 py-8">
                {/* Metadata */}
                <div className="flex flex-wrap gap-4 md:gap-6 mb-6 text-xs md:text-sm text-gray-600 uppercase tracking-wider">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {obs.date} {obs.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {obs.location}
                  </span>
                  {obs.weather && (
                    <span className="flex items-center gap-2">
                      <Cloud size={16} />
                      {obs.weather}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{fontFamily: 'var(--font-serif)'}}>
                  {obs.species.map(s => s.common).join(' & ')}
                </h2>

                {/* Species Details */}
                <div className="mb-6 space-y-4">
                  {obs.species.map((sp, idx) => (
                    <div key={idx} className="bg-gray-50 p-6 rounded-sm">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="font-bold text-lg">{sp.common}</span>
                        <span className="text-sm italic text-gray-600">({sp.scientific})</span>
                        <span className="text-sm font-bold text-gray-700">{sp.count} individual{sp.count !== 1 && 's'}</span>
                      </div>
                      <p className="text-gray-700 mb-2"><strong>Behavior:</strong> {sp.behavior}</p>
                      <p className="text-gray-600 text-sm"><strong>Features:</strong> {sp.features}</p>
                    </div>
                  ))}
                </div>

                {/* Water Conditions (if applicable) */}
                {obs.waterConditions && (
                  <div className="mb-6 bg-blue-50 p-6 rounded-sm border-l-4 border-blue-500">
                    <h3 className="font-bold text-lg mb-3">Water Conditions</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Clarity:</strong> {obs.waterConditions.clarity}</li>
                      <li><strong>Flow Rate:</strong> {obs.waterConditions.flowRate}</li>
                      <li><strong>Temperature:</strong> {obs.waterConditions.temperature}</li>
                      <li><strong>Foam:</strong> {obs.waterConditions.foam}</li>
                    </ul>
                  </div>
                )}

                {/* Habitat Assessment (if applicable) */}
                {obs.habitatAssessment && (
                  <div className="mb-6 bg-yellow-50 p-6 rounded-sm border-l-4 border-yellow-500">
                    <h3 className="font-bold text-lg mb-3">Habitat Assessment</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Elevation:</strong> {obs.habitatAssessment.elevation}</li>
                      <li><strong>Forest Type:</strong> {obs.habitatAssessment.forestType}</li>
                      <li><strong>Water Sources:</strong> {obs.habitatAssessment.waterSources}</li>
                      <li><strong>DMZ Distance:</strong> {obs.habitatAssessment.dmzDistance}</li>
                      <li><strong>Suitability:</strong> {obs.habitatAssessment.suitability}</li>
                    </ul>
                  </div>
                )}

                {/* Description */}
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {obs.description}
                </p>

                {/* Scientific Significance */}
                <div className="bg-gray-50 p-6 border-l-4 border-yellow-500 mb-6">
                  <p className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-2">
                    Scientific Significance
                  </p>
                  <p className="text-gray-700 leading-relaxed">{obs.significance}</p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {obs.videoUrl && (
                    <a 
                      href={obs.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-bold text-sm uppercase tracking-wider hover:bg-red-700 transition-colors"
                    >
                      <Youtube size={18} />
                      Watch Video
                    </a>
                  )}
                  {obs.githubUrl && (
                    <a 
                      href={obs.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Full Report on GitHub
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{fontFamily: 'var(--font-serif)'}}>
            Methodology
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              All observations follow rigorous scientific protocols to ensure data quality and reproducibility. 
              Our methodology combines traditional field observation techniques with modern documentation tools.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 border-l-4 border-black">
                <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)'}}>
                  Field Protocols
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Photographic/video documentation (iPhone Cinematic mode)</li>
                  <li>• Behavioral notation and time-stamped observations</li>
                  <li>• Environmental measurements (weather, water conditions)</li>
                  <li>• GPS coordinates for all observation sites</li>
                  <li>• Species identification using field guides</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 border-l-4 border-black">
                <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)'}}>
                  Data Management
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Structured JSON format for machine readability</li>
                  <li>• Markdown documentation for human readability</li>
                  <li>• Version control via GitHub</li>
                  <li>• Cross-referenced with academic literature</li>
                  <li>• Open data under CC BY-SA 4.0 license</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="https://github.com/CassianK/Nature-report" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-ng-primary inline-flex items-center gap-3"
              >
                <ExternalLink size={20} />
                Contribute on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

