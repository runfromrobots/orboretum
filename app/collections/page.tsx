export default function Collections() {
  const plantCategories = [
    {
      name: 'Native & Regionally Indigenous Species',
      description: 'The core of our collection, prioritizing trees and woody plants native to the Mohawk Valley and Northeastern hardwood forest, including species historically significant to the Mohawk people.',
      examples: [
        'Eastern White Pine (Pinus strobus)',
        'Sugar Maple (Acer saccharum)',
        'American Beech (Fagus grandifolia)',
        'Hemlock (Tsuga canadensis)',
        'Shagbark Hickory (Carya ovata)',
      ],
    },
    {
      name: 'Heritage & Historically Documented Cultivars',
      description: 'Remnants of mid-20th century gardens preserved and interpreted as a record of regional horticultural history. Propagation efforts are ongoing for historically significant specimens.',
      examples: [
        'Japanese Lilies',
        'Garden Peonies',
        'Garden Phlox',
      ],
    },
    {
      name: 'Educational & Interpretive Plantings',
      description: 'Curated selections chosen to illustrate ecological concepts, historical connections, and sensory accessibility, concentrated along primary trail corridors.',
      examples: [
        'Species demonstrating forest succession',
        'Trees with mast production cycles',
        'Plants highlighting watershed function',
      ],
    },
  ]

  return (
    <div>
      <section className="bg-forest-800 text-wheat py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Our Collections</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="section-heading">About Our Collections</h2>
          <div className="prose">
            <p>
              The Orboretum maintains a documented living collection of native, heritage, and educational plantings. All accessions are recorded following ArbNet and BGCI (Botanic Gardens Conservation International) living collections standards, ensuring scientific rigor and long-term stewardship.
            </p>
            <p>
              Our collection reflects four layers of the property's history: pre-colonial Mohawk territory, Revolutionary War era significance, mid-20th century horticultural stewardship, and six decades of conservation management.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-forest-50 py-16 md:py-24">
        <div className="container max-w-4xl">
          {plantCategories.map((category, idx) => (
            <div key={idx} className="mb-12 last:mb-0">
              <h3 className="text-2xl font-serif font-bold text-forest-900 mb-3">
                {category.name}
              </h3>
              <p className="text-forest-800 mb-4">
                {category.description}
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-creek">
                <p className="text-sm font-semibold text-forest-800 mb-2">Examples:</p>
                <ul className="list-disc pl-6 space-y-1 text-forest-700">
                  {category.examples.map((example, i) => (
                    <li key={i} className="text-sm">{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="section-heading">Collection Management & Succession</h2>
          <div className="prose">
            <p>
              The Orboretum is committed to the long-term health and diversity of its collections. Our approach includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Forest Stewardship Plan:</strong> Developed in partnership with NY DEC Region 4, guiding sustainable management and maintenance practices</li>
              <li><strong>Succession Planning:</strong> Establishing protocols for propagation, regeneration, and renewal of the collection</li>
              <li><strong>Research Partnerships:</strong> Collaborating with academic institutions to document, study, and conserve our collections</li>
              <li><strong>Community Engagement:</strong> Inviting visitors to participate in restoration and interpretive activities</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-forest-50 py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="section-heading">Plant Identification & Digital Access</h2>
          <div className="prose">
            <p>
              While our 1.5-mile trail system features labeled plantings, we're developing a comprehensive digital plant directory and interactive map to support both on-site and remote exploration of our collections.
            </p>
            <p>
              <strong>Coming soon:</strong> A searchable database of our plant accessions, including scientific names, locations, historical notes, and ecological significance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="section-heading">Interested in Our Collections?</h2>
          <div className="prose">
            <p>
              Whether you're a researcher, educator, horticulturist, or simply curious about trees, we'd love to connect with you.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="/contact" className="btn btn-primary">Get in Touch</a>
              <a href="/education" className="btn btn-secondary">Educational Programs</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
