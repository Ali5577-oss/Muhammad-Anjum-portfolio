import { memo } from 'react'
import { Mail, Linkedin, MessageCircle } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-label">Start a conversation</p>
          <h2 className="mt-3 text-4xl font-bold md:text-6xl">Let's talk.</h2>
          <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
            Interested in working together? Reach out via email or WhatsApp, and I'll get back to you within 24 hours. Pricing is flexible and based on your project needs, scope, and timeline.
          </p>
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-secondary">Tell me what you are building, what you need help with, or what opportunity you have in mind. Direct contact is the best way to start a practical conversation.</p>
          {/* Contact buttons */}
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {/* Email icon-only button */}
            <a
              href="mailto:kmanjum617@gmail.com"
              className="glow rounded-xl bg-gradient p-4 text-white shadow-glow transition-transform hover:scale-105"
              aria-label="Email me"
              title="Email me"
            >
              <Mail className="h-6 w-6" />
            </a>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/923424073529"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-green-500 px-5 py-3 font-semibold text-white shadow-lg shadow-green-500/20 transition-transform hover:scale-105"
            >
              {/* WhatsApp icon (inline SVG for clarity) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>

            {/* LinkedIn button */}
            <a
              href="https://www.linkedin.com/in/muhammad-anjum-tariq-a77697433?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition-transform hover:scale-105"
            >
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Contact)