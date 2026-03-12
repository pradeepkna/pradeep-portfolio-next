export default function Contact() {
  return (
    <section id="contact" className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
      <p className="text-sm text-gray-700 mb-3">
        I'm open to opportunities in product management, technical product ownership,
        and AI-driven platforms. Feel free to reach out or chat with my Resume Assistant on the right.
      </p>
      <div className="flex flex-wrap gap-4 text-sm">
        <a href="mailto:pradeepkna@gmail.com" className="text-blue-600 hover:underline">
          📧 pradeepkna@gmail.com
        </a>
        <a href="tel:+491634731195" className="text-blue-600 hover:underline">
          📞 +49 163 473 1195
        </a>
        <a
          href="https://www.linkedin.com/in/pradeep-k-narayan-0b798926"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          🔗 LinkedIn
        </a>
      </div>
    </section>
  )
}