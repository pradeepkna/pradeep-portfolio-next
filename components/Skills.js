const skillGroups = [
  {
    title: 'Product & Delivery',
    items: [
      'IT Project Management',
      'Agile Methodologies (Scrum, SAFe)',
      'User Experience & Design Thinking',
      'Roadmapping, backlog management, stakeholder alignment',
      'GDPR & compliance management',
    ]
  },
  {
    title: 'Cloud & Architecture',
    items: [
      'AWS Cloud (S3, Lambda, API Gateway, CloudFront, IAM)',
      'Cloud-native architectures & microservices',
      'REST & SOAP Web Services',
      'CI/CD Pipelines, UML Modelling',
      'Database: SQL & NoSQL',
    ]
  },
  {
    title: 'AI & Data',
    items: [
      'Machine Learning, Generative AI',
      'LLM-based automation & agentic solutions',
      'RAG applications, vector search, embeddings',
      'Python for data science & prototyping',
    ]
  },
  {
    title: 'Languages',
    items: [
      'English – Bilingual proficiency',
      'German – C1',
      'Hindi – C1',
      'Kannada – Native speaker',
    ]
  },
  {
    title: 'Programming & Tools',
    items: ['Python, Java, C++', 'Java EE, Java-based Web Services', 'Test management: planning, debugging & coordination (ISTQB)'],
    wide: true
  },
]

export default function Skills() {
  return (
    <section id="skills" className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Skills</h2>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        {skillGroups.map((group, i) => (
          <div
            key={i}
            className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md p-4 ${group.wide ? 'md:col-span-2' : ''}`}
          >
            <h3 className="font-medium mb-2 text-gray-900 dark:text-gray-100">{group.title}</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-900 dark:text-gray-100">
              {group.items.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}