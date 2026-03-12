const certs = [
  {
    name: 'Machine Learning Specialization',
    year: '2023',
    issuer: 'Coursera / Stanford University',
    sub: ['Supervised ML: Regression & Classification', 'Advanced Learning Algorithms', 'Unsupervised Learning, Recommenders, Reinforcement Learning']
  },
  { name: 'Udacity Nanodegree – Cloud Developer', year: '2021', issuer: 'Udacity' },
  { name: 'Certified SAFe Product Owner / Product Manager', year: '2020', issuer: 'Scaled Agile Framework' },
  { name: 'AWS Certified Solutions Architect – Associate', year: '2019', issuer: 'Amazon Web Services' },
  { name: 'IPMA – Foundation Level', year: '2019', issuer: 'International Project Management Association' },
  { name: 'Foundation Level Certificate in Software Testing (ISTQB)', year: '2008', issuer: 'ISTQB' },
  { name: 'Sun Certified Java Programmer (SCJP) 1.5', year: '2008', issuer: 'Sun Microsystems' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Certifications</h2>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md p-4 text-sm">
        <ul className="space-y-3">
          {certs.map((c, i) => (
            <li key={i}>
              <span className="font-medium text-gray-900 dark:text-gray-100">{c.name}</span>
              <span className="text-gray-500 dark:text-gray-500 ml-2">{c.year} · {c.issuer}</span>
              {c.sub && (
                <ul className="list-disc list-inside ml-4 mt-1 space-y-0.5 text-gray-700 dark:text-gray-300">
                  {c.sub.map((s, j) => <li key={j}>{s}</li>)}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}