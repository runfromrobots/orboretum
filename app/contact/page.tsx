export default function Contact() {
  return (
    <div>
      <section className="bg-forest-800 text-wheat py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Contact & Get Involved</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="section-heading">Get in Touch</h2>
          <div className="prose">
            <p>
              Have questions about visiting, educational programming, research partnerships, or the Orboretum's mission? We'd love to hear from you.
            </p>

            <div className="bg-forest-50 p-6 rounded-lg mt-6">
              <h3 className="font-semibold text-forest-900 mb-2">Contact Information</h3>
              <p className="text-sm mb-2">
                <strong>Email:</strong> <a href="mailto:hello@theorboretum.org" className="text-creek">hello@theorboretum.org</a>
              </p>
              <p className="text-sm">
                <strong>Location:</strong> 472 Anderson Road, Sprakers, NY 12166
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest-50 py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="section-heading">Join Our Board</h2>
          <div className="prose">
            <p>
              The Orboretum is a brand-new 501(c)(3) nonprofit in formation, and we're building a founding Board of Directors to guide our growth. We're seeking passionate, committed individuals with expertise and interest in:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Forest ecology and conservation</li>
              <li>Education and public engagement</li>
              <li>Local and natural history</li>
              <li>Finance and nonprofit governance</li>
              <li>Community partnerships and Indigenous relations</li>
              <li>Land stewardship and sustainable management</li>
            </ul>
            <p>
              <strong>No prior board experience necessary—just a passion for this landscape and its mission.</strong>
            </p>
            <p>
              If you're interested in joining our founding board or have questions about the opportunity, <a href="mailto:hello@theorboretum.org" className="text-creek font-semibold">send us an email</a>. We'd love to meet you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="section-heading">How You Can Help</h2>
          <div className="prose">
            <p>
              The Orboretum is a brand-new project, and we're growing through community support. Whether you have a few hours or want to get deeply involved, there are many ways to participate:
            </p>

            <h3>Volunteer</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Trail maintenance and water quality remediation</li>
              <li>Plant propagation and collection care</li>
              <li>Event support and community outreach</li>
              <li>Interpretive and educational content development</li>
            </ul>

            <h3>Support Our Work</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Make a tax-deductible donation (501(c)(3) status)</li>
              <li>Sponsor educational programming or trail improvements</li>
              <li>Provide in-kind support (materials, expertise, resources)</li>
              <li>Share your knowledge and skills</li>
            </ul>

            <h3>Partner With Us</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>School field trip partnerships</li>
              <li>University research collaborations</li>
              <li>Community and nonprofit partnerships</li>
              <li>Indigenous community engagement</li>
            </ul>

            <p>
              <a href="mailto:hello@theorboretum.org" className="text-creek font-semibold">Contact us</a> to explore how you can be part of this journey.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-forest-50 py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="section-heading">Current Team</h2>
          <div className="prose">
            <p>
              The Orboretum's work is guided by a small founding team committed to the property's conservation and mission. As we grow, we're inviting community members to join us as board members, volunteers, and partners.
            </p>
            <p className="text-sm italic text-forest-700">
              Board members and team information coming soon.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
