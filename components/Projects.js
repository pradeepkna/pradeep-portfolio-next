import ExperienceItem from './ExperienceItem'

const projects = [
  {
    title: 'InteractiveCV – RAG-based Resume Assistant',
    company: 'Hugging Face',
    dates: 'Ongoing',
    bullets: [
      'Built a Retrieval-Augmented Generation (RAG) application that answers recruiter questions about experience, skills, certifications, and job preferences.',
      'Embedded directly on this portfolio as an interactive sidebar assistant.',
    ]
  },
  {
    title: 'Lateral Control Strategies for Agricultural Vehicles',
    company: 'Robotics Research Lab · TU Kaiserslautern',
    dates: '2012',
    bullets: [
      'Research project on autonomous lateral control algorithms for agricultural vehicles.',
    ]
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="space-y-4">
        {projects.map((p, i) => <ExperienceItem key={i} {...p} />)}
      </div>
    </section>
  )
}