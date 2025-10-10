import { Droplets } from 'lucide-react'
import streamImg from '../assets/stream.jpg'
import videosData from '../data/videos.json'

export default function StreamPage() {
  const streamVideos = videosData.videos.filter(v => v.category === 'stream')

  return (
    <div className="pt-20">
      <section className="hero-fullscreen">
        <img src={streamImg} alt="Jungnangcheon Stream" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <Droplets size={80} className="mb-6 opacity-90" />
          <h1 className="hero-title text-shadow-heavy">
            JUNGNANGCHEON<br/>STREAM
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mt-8 opacity-95">
            An urban waterway ecosystem thriving with diverse birdlife and aquatic species
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="section-title mb-16">Ecological Significance</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold mb-6" style={{fontFamily: 'var(--font-serif)'}}>Avian Diversity</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                The Jungnangcheon Stream serves as a critical habitat for various bird species, including herons, cormorants, and moorhens. 
                The boundary between rapids and calm waters creates diverse micro-habitats where different species employ unique foraging strategies.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                During monsoon season, increased organic matter influx temporarily enriches the ecosystem, 
                attracting more birds downstream and expanding their feeding range.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6" style={{fontFamily: 'var(--font-serif)'}}>Urban Wildlife</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Despite its urban setting, the stream supports mammals like raccoon dogs and amphibians, 
                demonstrating the ecological value of urban waterways.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Riparian vegetation and stone crevices provide essential habitats, 
                maintaining biodiversity even in heavily modified environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <h2 className="section-title mb-16">Observations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {streamVideos.map(video => (
              <a 
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white overflow-hidden scale-on-hover block"
              >
                <div className="card-image-container">
                  <img 
                    src={streamImg} 
                    alt={video.title} 
                    className="card-image-fill"
                  />
                </div>
                <div className="p-8">
                  <div className="category-badge mb-4">{video.location}</div>
                  <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)'}}>
                    {video.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{video.description}</p>
                  <div className="text-sm font-bold uppercase tracking-wider text-gray-500">
                    Watch on YouTube →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
