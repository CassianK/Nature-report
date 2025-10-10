import { Mountain } from 'lucide-react'
import mountainImg from '../assets/mountain-hero.jpg'
import videosData from '../data/videos.json'

export default function MountainPage() {
  const mountainVideos = videosData.videos.filter(v => v.category === 'mountain')

  return (
    <div className="pt-20">
      <section className="hero-fullscreen">
        <img src={mountainImg} alt="Korean Mountains" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <Mountain size={80} className="mb-6 opacity-90" />
          <h1 className="hero-title text-shadow-heavy">
            MOUNTAIN<br/>ECOSYSTEMS
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mt-8 opacity-95">
            Biodiversity hotspots from Bukhansan to Soyosan
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="section-title mb-16">Mountain Ranges</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-black pl-8">
              <h3 className="text-4xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)'}}>Bukhansan (836m)</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Seoul's iconic mountain hosting diverse wildlife and feral cats coexisting with native species. 
                Historic temples like Jungheungsa add cultural significance to its ecological value.
              </p>
            </div>
            <div className="border-l-4 border-black pl-8">
              <h3 className="text-4xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)'}}>Dobongsan (740m)</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Famous for its dramatic rock formations including Jayunbong and Geobukbawi. 
                A premier destination for both hiking and rock climbing.
              </p>
            </div>
            <div className="border-l-4 border-black pl-8">
              <h3 className="text-4xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)'}}>Unaksan (935m)</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Located in Gapyeong, renowned for its sacred Jeongmulbogung temple and spectacular cloud formations. 
                Higher elevation supports diverse alpine ecosystems.
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-8 bg-yellow-50 p-6">
              <h3 className="text-4xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)'}}>Soyosan (587m)</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>Critical research site for the endangered leopard cat (Prionailurus bengalensis).</strong> 
                Located 20km from the DMZ, this mountain represents a vital ecological corridor for endangered species conservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <h2 className="section-title mb-16">Field Observations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mountainVideos.map(video => (
              <div key={video.id} className="bg-white overflow-hidden scale-on-hover">
                <div className="card-image-container">
                  <div className="card-image-fill bg-gradient-to-br from-green-800 to-emerald-800 flex items-center justify-center text-white text-6xl">
                    {video.species[0]?.includes('고양이') ? '🐱' :
                     video.species[0]?.includes('거미') ? '🕷️' :
                     video.species[0]?.includes('개구리') ? '🐸' :
                     video.species[0]?.includes('여치') ? '🦗' : '⛰️'}
                  </div>
                </div>
                <div className="p-8">
                  <div className="category-badge mb-4">{video.location}</div>
                  <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)'}}>
                    {video.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
