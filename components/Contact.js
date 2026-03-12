'use client'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)

    const res = await fetch('https://formspree.io/f/mvzwrpzd', { // ← paste your endpoint
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })

    if (res.ok) {
      setStatus('sent')
      e.target.reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Get in touch</h2>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
        I'm open to opportunities in product management, technical product ownership,
        and AI-driven platforms. Fill in the form below or reach out directly.
      </p>

      <div className="flex flex-wrap gap-4 text-sm mb-6">
        <a href="mailto:pradeepkna@gmail.com" className="text-blue-600 hover:underline">
          📧 pradeepkna@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/pradeep-k-narayan-0b798926" target="_blank" className="text-blue-600 hover:underline">
          🔗 LinkedIn
        </a>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-200 dark:border-gray-700 rounded-md px-3 py-2 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-200 dark:border-gray-700 rounded-md px-3 py-2 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full border border-gray-200 dark:border-gray-700 rounded-md px-3 py-2 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending' || status === 'sent'}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-medium px-5 py-2 rounded-md transition"
        >
          {status === 'idle' && 'Send message'}
          {status === 'sending' && 'Sending...'}
          {status === 'sent' && '✓ Message sent!'}
          {status === 'error' && 'Error – try again'}
        </button>
      </form>
    </section>
  )
}