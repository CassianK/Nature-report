import { Waves, Youtube } from 'lucide-react'
import videosData from '../data/videos.json'

export default function StreamPage() {
  const streamVideos = videosData.videos.filter(v => v.category === 'stream')
  const playlistUrl = videosData.playlists.stream

  return (
    <div className="pt-20">
      <section className="hero-fullscreen">
        <img src="/images/hero/stream-hero.jpg" alt="Jungnangcheon Stream" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <Waves size={80} className="mb-6 opacity-90" />
          <h1 className="hero-title text-shadow-heavy">
            JUNGNANGCHEON<br/>STREAM
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mt-8 opacity-95">
            Urban waterway ecology in Nowon & Dobong districts
          </p>
          {playlistUrl && (
            <a 
              href={playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-bold text-sm uppercase tracking-wider hover:bg-red-700 transition-colors"
            >
              <Youtube size={24} />
              View Full Playlist (44 videos)
            </a>
          )}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="section-title mb-16">Urban Stream Ecology</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-black pl-8">
              <h3 className="text-4xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)'}}>Avian Diversity</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Jungnangcheon supports a remarkable diversity of waterbirds despite its urban setting. 
                Herons (Ardeidae), cormorants (Phalacrocoracidae), and waterfowl utilize the stream's 
                varied microhabitats—from rapids to calm pools.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Monsoon periods trigger increased biological activity as elevated water levels and 
                turbidity create enhanced foraging opportunities. Species exhibit distinct niche 
                partitioning strategies to minimize competition.
              </p>
            </div>
            <div className="border-l-4 border-black pl-8">
              <h3 className="text-4xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)'}}>Mammalian & Herpetofauna</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Raccoon dogs (Nyctereutes procyonoides) maintain populations along the riparian corridor, 
                demonstrating adaptability to human-modified landscapes. Amphibians and reptiles, 
                including various frog species and snakes, indicate ecological functionality.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
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
                    src={video.coverImage || '/images/cards/default-card.jpg'}
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

