import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Certifications from '../components/Certifications'
import Education from '../components/Education'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen flex">
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* Resume assistant sidebar */}
      <aside className="hidden lg:flex w-96 border-l border-gray-200 bg-white sticky top-0 h-screen flex-col">
        <div className="p-3 border-b border-gray-200 bg-gray-50">
          <p className="text-sm font-medium text-gray-700">💬 Ask my Resume Assistant</p>
          <p className="text-xs text-gray-500 mt-0.5">
            Powered by RAG · Answers questions about my experience &amp; skills
          </p>
        </div>
        <iframe
          src="https://huggingface.co/spaces/pradeepkna/interactiveCV"
          className="w-full flex-1"
          title="Interactive CV Assistant"
        />
      </aside>
    </div>
  )
}