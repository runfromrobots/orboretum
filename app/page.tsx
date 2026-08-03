export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-forest-800 text-wheat py-20 md:py-32">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            The Orboretum
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            A new arboretum preserving and cultivating native and heritage trees on a historically significant landscape in the Mohawk Valley.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/visit" className="btn btn-primary">Plan Your Visit</a>
            <a href="/collections" className="btn btn-secondary">Explore Collections</a>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="section-heading">Our Mission</h2>
          <div className="prose">
            <p>
              The Orboretum preserves, cultivates, and interprets native and heritage trees on a historically significant 200-acre landscape in the Mohawk Valley, connecting visitors to the deep ecological and cultural history of this place through living collections, research, and education.
            </p>
          </div>
        </div>
      </section>

      {/* What's Here Section */}
      <section className="bg-forest-50 py-16 md:py-24">
        <div className="container">
          <h2 className="section-heading">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-serif font-bold text-creek mb-3">Trails & Landscape</h3>
              <p className="text-forest-800">Approximately 1.5 miles of stone trails wind through the 200-acre property, connecting you to diverse forest ecosystems and historically significant plantings.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-serif font-bold text-creek mb-3">Living Collections</h3>
              <p className="text-forest-800">Explore native species, heritage cultivars from mid-century gardens, and educational plantings chosen to illustrate ecological concepts and regional history.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-serif font-bold text-creek mb-3">History & Interpretation</h3>
              <p className="text-forest-800">Discover four layers of history: pre-colonial Mohawk territory, Revolutionary War era, mid-20th century horticulture, and six decades of conservation stewardship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="section-heading">Join Us</h2>
          <div className="prose">
            <p>
              The Orboretum is a brand new project, and we're building something meaningful together. We're seeking passionate volunteers and board members to help guide our mission as we grow.
            </p>
            <p>
              Interested in joining our founding board or contributing to the project? <a href="/contact" className="text-creek hover:text-forest-800 font-semibold">Get in touch</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
