export default function History() {
  return (
    <div>
      <section className="bg-forest-800 text-wheat py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">History & Land Acknowledgment</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="bg-creek text-wheat p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-serif font-bold mb-4">Land Acknowledgment</h2>
            <p>
              The Orboretum sits within the traditional territory of the Mohawk people (Kanien'kehá:ka), one of the six nations of the Haudenosaunee Confederacy. We honor this history and recognize the ongoing presence of the Mohawk community at Kanatsiohareke, located nearby. This land's stewardship and interpretation are guided by respect for Indigenous knowledge and partnership with local communities.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-forest-50 py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="section-heading">Four Layers of History</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-forest-900 mb-3">1. Pre-Colonial Mohawk History</h3>
              <p className="text-forest-800 mb-3">
                The property lies within the traditional territory of the Mohawk Nation, one of the founding members of the Haudenosaunee Confederacy. The Mohawk people have stewarded this landscape for centuries, developing deep ecological knowledge of the region's forests, waterways, and plants. This history is central to the Orboretum's interpretive mission.
              </p>
              <p className="text-forest-800">
                We are committed to ongoing partnership with Kanatsiohareke, an active Mohawk community located nearby, to ensure that interpretation and education honor this heritage authentically.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-forest-900 mb-3">2. Revolutionary War Era</h3>
              <p className="text-forest-800 mb-3">
                The Mohawk Valley was a major theater of conflict during the American Revolution. The property's location places it within the landscape of significant historical events, including the 1781 Ross and Butler Raid and broader military campaigns that reshaped the region.
              </p>
              <p className="text-forest-800">
                This history informs our interpretive programming and connects visitors to the complex legacies of this period.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-forest-900 mb-3">3. Mid-20th Century Horticultural Stewardship</h3>
              <p className="text-forest-800 mb-3">
                A prior owner named Maryanne Granger cultivated heritage gardens on the property, likely in the 1940s–50s. Three documented plantings from her era remain: Japanese lilies, peonies, and garden phlox—likely heirloom or antique cultivars with significant horticultural value.
              </p>
              <p className="text-forest-800">
                These plantings are preserved and interpreted as a living record of regional horticultural history. Propagation efforts are ongoing to ensure these specimens continue to flourish and inform our collections program.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-forest-900 mb-3">4. Six Decades of Conservation Stewardship</h3>
              <p className="text-forest-800 mb-3">
                For 67 years, Joan Vermeulen stewarded this property with a deep commitment to conservation and forest management. Her tenure established the ecological foundation and conservation ethic that guide the Orboretum today.
              </p>
              <p className="text-forest-800">
                The mature forest character, diverse plant communities, and ecological health of the property reflect generations of thoughtful stewardship—a legacy we honor and build upon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="section-heading">The Mohawk Valley Watershed</h2>
          <div className="prose">
            <p>
              The property drains into Yatesville Creek, which flows into the Mohawk River—a designated priority watershed for the state of New York. This hydrological connection is both a historical fact and a contemporary conservation asset.
            </p>
            <p>
              The Mohawk River has long connected this region's peoples, communities, and ecosystems. By stewarding our 200 acres thoughtfully, the Orboretum contributes to watershed health and the broader Mohawk River system.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-forest-50 py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="section-heading">Our Conservation Commitment</h2>
          <div className="prose">
            <p>
              The Orboretum is pursuing long-term protection of this landscape through:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Forest Stewardship Plan:</strong> Partnership with NY DEC Region 4 to guide sustainable management</li>
              <li><strong>Conservation Easement:</strong> Working toward permanent protection through a qualified land trust</li>
              <li><strong>Trail Remediation:</strong> Addressing water quality and erosion as part of broader watershed stewardship</li>
              <li><strong>Research Partnerships:</strong> Collaborating with academic and conservation organizations to document and protect our collections</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="section-heading">Learn More</h2>
          <div className="prose">
            <p>
              History informs every aspect of the Orboretum's work. Visit us to explore these layers in person, or reach out if you have stories, research, or knowledge to share about this landscape.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="/visit" className="btn btn-primary">Plan Your Visit</a>
              <a href="/contact" className="btn btn-secondary">Get in Touch</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
