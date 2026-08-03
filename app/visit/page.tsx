export default function Visit() {
  return (
    <div>
      <section className="bg-forest-800 text-wheat py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Plan Your Visit</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="section-heading">Hours & Access</h2>
          <div className="prose bg-wheat border-l-4 border-creek p-6 mb-8">
            <p><strong>Status:</strong> The Orboretum is currently developing its visitor programming and trail infrastructure. Visit hours are being established for the 2024-2025 season.</p>
            <p>For current access information and to arrange group visits, please <a href="/contact" className="text-creek font-semibold">contact us</a>.</p>
          </div>
        </div>
      </section>

      <section className="bg-forest-50 py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="section-heading">Location & Parking</h2>
          <div className="prose">
            <p>
              <strong>The Orboretum</strong><br/>
              472 Anderson Road<br/>
              Sprakers, NY 12166
            </p>
            <p>
              The 200-acre property sits within the Mohawk Valley's forested landscape, adjacent to a 2,000-acre state forest corridor. The site drains into Yatesville Creek, which flows into the Mohawk River—a designated priority watershed.
            </p>

            <h3>Parking</h3>
            <p>
              Parking is available across the street in our tennis court and basketball court lot. Please look for signage.
            </p>

            <h3>Trail System</h3>
            <p>
              Approximately 1.5 miles of stone trails provide access to the property's diverse ecosystems. The trail system is currently undergoing maintenance to address water quality and erosion issues caused by underlying hydrology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="section-heading">What to Bring</h2>
          <div className="prose">
            <ul className="list-disc pl-6 space-y-2">
              <li>Comfortable walking shoes suitable for forest trails</li>
              <li>Water bottle</li>
              <li>Binoculars (great for bird watching)</li>
              <li>Camera or notebook for sketching</li>
              <li>Insect repellent (seasonal)</li>
              <li>Weather-appropriate clothing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-forest-50 py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="section-heading">Accessibility</h2>
          <div className="prose">
            <p>
              We're committed to making The Orboretum accessible to all visitors. The property is still developing its infrastructure, and we're working to ensure the trail system accommodates visitors of varying mobility levels. Please reach out with specific access needs, and we'll do our best to assist.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="section-heading">Group Visits & Educational Programs</h2>
          <div className="prose">
            <p>
              Are you a school, university, research group, or community organization interested in visiting The Orboretum? We offer:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>School Field Trips:</strong> K–12 programs aligned with NY State science and social studies standards</li>
              <li><strong>Research Partnerships:</strong> Access for academic researchers and forest ecology studies</li>
              <li><strong>Community Events:</strong> Group walks, seasonal programming, and interpretive experiences</li>
            </ul>
            <p>
              <a href="/contact" className="text-creek font-semibold">Contact us</a> to discuss your group's interests and availability.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
