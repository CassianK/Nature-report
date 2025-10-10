import { BookOpen } from 'lucide-react'

export default function SpeciesPage() {
  return (
    <div className="pt-20">
      <section className="py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <BookOpen size={80} className="mx-auto mb-8 opacity-90" />
          <h1 className="hero-title mb-8">SPECIES GUIDES</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-95">
            Comprehensive identification guides and ecological information
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-20">
            <div>
              <h2 className="text-5xl font-bold mb-12" style={{fontFamily: 'var(--font-serif)'}}>BIRDS (AVES)</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="border-l-4 border-blue-600 pl-8">
                  <h3 className="text-3xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)'}}>Ardeidae (Herons)</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Large wading birds with long necks and legs. Hunt by standing motionless in S-shaped posture, 
                    striking prey with lightning speed. Species include Grey Heron, Intermediate Egret, and Little Egret.
                  </p>
                  <p className="text-sm text-gray-600"><strong>Habitat:</strong> Rivers, lakes, wetlands, coastal areas</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-8">
                  <h3 className="text-3xl font-bold mb-4" style={{fontFamily: 'var(--font-serif)'}}>Phalacrocoracidae (Cormorants)</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Diving birds that hunt fish underwater. Distinctive behavior of spreading wings to dry after fishing. 
                    Freshwater cormorants commonly observed in urban streams.
                  </p>
                  <p className="text-sm text-gray-600"><strong>Habitat:</strong> Rivers, lakes, reservoirs</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-12 border-l-4 border-yellow-500">
              <h2 className="text-5xl font-bold mb-8" style={{fontFamily: 'var(--font-serif)'}}>MAMMALS (MAMMALIA)</h2>
              <h3 className="text-3xl font-bold mb-6 text-yellow-900" style={{fontFamily: 'var(--font-serif)'}}>
                Leopard Cat (Prionailurus bengalensis) - Endangered Species Class II
              </h3>
              <p className="text-xl text-gray-800 leading-relaxed mb-6">
                Korea's only remaining wild felid species. Primarily nocturnal, feeding on small rodents. 
                Optimal habitat: mixed forests at 200-600m elevation with abundant valleys and ridges.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>Soyosan Research:</strong> Habitat suitability assessment conducted at Soyosan (587m), 
                located 20km from the DMZ. The mountain's mixed forest structure and elevation make it ideal leopard cat habitat, 
                though high visitor numbers and uncertain connectivity to DMZ populations pose conservation challenges.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Conservation Status:</strong> Requires systematic monitoring and ecological corridor establishment
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold mb-12" style={{fontFamily: 'var(--font-serif)'}}>AMPHIBIANS & INSECTS</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-2xl font-bold mb-3" style={{fontFamily: 'var(--font-serif)'}}>Frogs</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Inhabit both urban streams and mountain valleys. Riparian vegetation and rock crevices provide essential habitat.
                  </p>
                </div>
                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-2xl font-bold mb-3" style={{fontFamily: 'var(--font-serif)'}}>Butterflies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Including the Indian Fritillary (Argyreus hyperbius), observed nectaring on flowers in forest clearings.
                  </p>
                </div>
                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-2xl font-bold mb-3" style={{fontFamily: 'var(--font-serif)'}}>Beetles</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nocturnal predators like the red-headed cardinal beetle play crucial roles in forest ecosystems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
