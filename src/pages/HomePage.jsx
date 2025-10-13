import { ArrowRight, Play, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'
import videosData from '../data/videos.json'

export default function HomePage() {
  const stats = {
    videos: videosData.videos.length,
    locations: [...new Set(videosData.videos.map(v => v.location))].length,
    species: [...new Set(videosData.videos.flatMap(v => v.species))].filter(s => s).length
  }

  const featured = videosData.videos.slice(0, 3)
  
  // 이미지 경로 헬퍼 함수
  const getHeroImage = () => {
    return '/images/hero/home-hero.jpg'
  }
  
  const getCardImage = (video) => {
    return video.coverImage || '/images/cards/default-card.jpg'
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-fullscreen">
        <img src={getHeroImage()} alt="Korean Mountains" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title text-shadow-heavy mb-8">
            NATURE<br/>REPORT<br/>KOREA
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mb-12 opacity-95" style={{fontFamily: 'var(--font-sans)'}}>
            Documenting Korea's biodiversity through scientific observation and visual storytelling
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/observations" className="btn-ng-primary">
              Explore Observations
              <ArrowRight size={20} />
            </Link>
            <a href="https://www.youtube.com/@DK2560" target="_blank" rel="noopener noreferrer" className="btn-ng-secondary">
              <Play size={20} />
              Watch Videos
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            <div className="fade-up">
              <div className="stat-number-large">{stats.videos}</div>
              <div className="stat-label-caps">Observations</div>
            </div>
            <div className="fade-up" style={{animationDelay: '0.1s'}}>
              <div className="stat-number-large">{stats.locations}</div>
              <div className="stat-label-caps">Locations</div>
            </div>
            <div className="fade-up" style={{animationDelay: '0.2s'}}>
              <div className="stat-number-large">{stats.species}+</div>
              <div className="stat-label-caps">Species</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <h2 className="section-title text-center mb-16">Featured Stories</h2>
          <div className="grid md:grid-cols-3 gap-0">
            {featured.map((video, index) => (
              <Link 
                key={video.id}
                to={`/${video.category}`}
                className="card-hover relative group"
              >
                <div className="card-image-container">
                  <img src={getCardImage(video)} alt={video.title} className="card-image-fill" />
                  <div className="card-overlay-gradient">
                    <div className="category-badge">{video.category}</div>
                    <h3 className="card-title mb-3">{video.title}</h3>
                    <p className="text-sm opacity-90 leading-relaxed">{video.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <div className="divider-gold"></div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8" style={{fontFamily: 'var(--font-serif)'}}>
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90 font-light">
            To systematically document and share Korea's natural heritage through citizen science,
            contributing to biodiversity conservation and environmental awareness.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <h2 className="section-title text-center mb-16">Explore Ecosystems</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/stream" className="scale-on-hover">
              <div className="relative h-[500px] overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-cyan-900 opacity-80"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
                  <h3 className="text-5xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)'}}>
                    JUNGNANGCHEON STREAM
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    Urban waterway ecosystem with diverse birdlife and aquatic species
                  </p>
                  <div className="flex items-center text-sm font-bold uppercase tracking-wider">
                    Explore <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/mountain" className="scale-on-hover">
              <div className="relative h-[500px] overflow-hidden bg-black">
                <img src={mountainHero} alt="Mountains" className="absolute inset-0 w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
                  <h3 className="text-5xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)'}}>
                    MOUNTAIN ECOSYSTEMS
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    Biodiversity hotspots from Bukhansan to Soyosan
                  </p>
                  <div className="flex items-center text-sm font-bold uppercase tracking-wider">
                    Explore <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
