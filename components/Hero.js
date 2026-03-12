export default function Hero() {
  return (
    <section id="top" className="mb-12">
      <header className="flex flex-col md:flex-row md:items-center gap-6 mb-4">
        <img
          src="/photo.jpg"
          alt="Pradeep Narayan"
          className="w-28 h-28 rounded-full object-cover border border-gray-200 dark:border-gray-700 flex-shrink-0"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Pradeep Narayan</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            Technical Product Manager &amp; Product Owner · Cloud, Connected Car &amp; AI
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Ingolstadt, Germany</p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <a href="mailto:pradeepkna@gmail.com" className="text-blue-600 hover:underline">pradeepkna@gmail.com</a>
            <span className="text-gray-400">·</span>
            <a href="https://www.linkedin.com/in/pradeep-k-narayan-0b798926" target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>
            <span className="text-gray-400">·</span>
            <a href="https://huggingface.co/spaces/pradeepkna/interactiveCV" target="_blank" className="text-blue-600 hover:underline">Interactive CV</a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <a
            href="/Pradeep-Narayan.pdf"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md"
          >
            ⬇ Download CV
          </a>
        </div>
      </header>
      <p className="text-sm text-gray-700 dark:text-gray-300 max-w-2xl mt-4">
        Technical Product Manager with 10+ years of end-to-end ownership across connected car services,
        cloud-native platforms, and AI/ML applications. Open to Senior Product Owner / Technical PM roles
        in cloud, data, and AI-driven platforms.
      </p>
      <nav className="mt-4 flex flex-wrap gap-3 text-sm">
        {['experience','projects','skills','certifications','education','contact'].map(s => (
          <a key={s} href={`#${s}`} className="text-blue-600 hover:underline capitalize">{s}</a>
        ))}
      </nav>
    </section>
  )
}