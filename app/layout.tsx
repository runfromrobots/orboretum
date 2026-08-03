import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Orboretum',
  description: 'A new arboretum preserving and cultivating native and heritage trees in the Mohawk Valley, NY.',
  openGraph: {
    title: 'The Orboretum',
    description: 'A new arboretum preserving and cultivating native and heritage trees in the Mohawk Valley, NY.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-forest-900 text-wheat sticky top-0 z-50 shadow">
          <nav className="container py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-serif font-bold">
              The Orboretum
            </a>
            <ul className="flex gap-8">
              <li><a href="/visit" className="nav-link">Visit</a></li>
              <li><a href="/collections" className="nav-link">Collections</a></li>
              <li><a href="/education" className="nav-link">Education</a></li>
              <li><a href="/history" className="nav-link">History</a></li>
              <li><a href="/contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>
        </header>

        <main>
          {children}
        </main>

        <footer className="bg-forest-900 text-wheat py-12 mt-16">
          <div className="container space-y-4">
            <p className="text-sm">The Orboretum preserves, cultivates, and interprets native and heritage trees on a historically significant landscape in the Mohawk Valley.</p>
            <div className="flex justify-between text-sm border-t border-forest-800 pt-4">
              <p>472 Anderson Road, Sprakers, NY</p>
              <p>&copy; {new Date().getFullYear()} The Orboretum</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
