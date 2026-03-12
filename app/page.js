import FadeIn from '../components/FadeIn'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Certifications from '../components/Certifications'
import Education from '../components/Education'
import Contact from '../components/Contact'
import ThemeToggle from '../components/ThemeToggle'

export default function Home() {
  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <ThemeToggle />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8">
        <FadeIn><Hero /></FadeIn>
        <FadeIn delay={0.1}><Experience /></FadeIn>
        <FadeIn delay={0.15}><Projects /></FadeIn>
        <FadeIn delay={0.2}><Skills /></FadeIn>
        <FadeIn delay={0.25}><Certifications /></FadeIn>
        <FadeIn delay={0.3}><Education /></FadeIn>
        <FadeIn delay={0.35}><Contact /></FadeIn>
      </main>
      <aside className="hidden lg:flex w-96 border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 h-screen flex-col">
  <div className="p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200">💬 Ask my Resume Assistant</p>
    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
      Powered by RAG · Answers questions about my experience &amp; skills
    </p>
  </div>
  <iframe
    src="https://pradeepkna-interactivecv.hf.space"
    frameBorder="0"
    className="w-full flex-1"
    title="Interactive CV Assistant"
    allow="microphone"
  />
</aside>

    </div>
  )
}