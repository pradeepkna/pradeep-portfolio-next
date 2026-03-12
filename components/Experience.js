import ExperienceItem from './ExperienceItem'

const roles = [
  {
    title: 'Senior Product Owner – Smart Charging Services',
    company: 'Cariad SE · Ingolstadt',
    dates: 'Jan 2021 – Aug 2025',
    bullets: [
      'Product Owner for 3 business services in Smart Charging across multiple vehicle platforms, with 2 agile cross-functional teams.',
      'Full ownership of software modules from in-vehicle components through to backend services.',
      'Led VW-group-wide stakeholder collaboration to define customer journeys, business use-cases, and feature roadmaps.',
      'Accountable for budgeting, IT-security, GDPR, open-source compliance, and service transition to production.',
      'Directed the formation of a new team to manage an expanded portfolio of services.',
    ]
  },
  {
    title: 'Technical Project Lead / Product Owner – Connected Car Services',
    company: 'Audi AG · Ingolstadt',
    dates: 'Oct 2016 – Dec 2020',
    bullets: [
      'Led a cross-functional team in developing 3 backend RESTful web services from conception to release for Europe, China, and other markets.',
      'Subject Matter Expert for multiple connected backend services: integration into new car series, market rollouts, debugging.',
      'Requirements management, stakeholder alignment across VW brands, architectural decisions, and tech concept reviews.',
      'Mitigated security threats as part of a technical task force responding to a security incident.',
    ]
  },
  {
    title: 'Embedded Software Engineer',
    company: 'EXCO GmbH @ Roche Diabetes Care · Mannheim',
    dates: 'Sep 2013 – Sep 2016',
    bullets: [
      'Implemented a C++ display driver for an insulin pump — delivered 3 months ahead of schedule.',
      'Developed a unified design concept for rendering right-to-left language scripts on medical devices.',
      'Verified safety-critical embedded software: unit, integration, and system tests across 2 pump series.',
    ]
  },
  {
    title: 'Application Developer',
    company: 'IBM India (Global Business Services) · Bangalore',
    dates: 'Dec 2007 – Aug 2010',
    bullets: [
      'Delivered code for 5 major service features and 11+ CRs for a SOAP-based Java web-service application.',
      'Conducted peer reviews of system design documents and code for 20+ feature updates.',
      'Reviewed requirements with overseas customers to resolve ambiguity early in the development cycle.',
    ]
  },
]

export default function Experience() {
  return (
    <section id="experience" className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Experience</h2>
      <div className="space-y-4">
        {roles.map((r, i) => <ExperienceItem key={i} {...r} />)}
      </div>
    </section>
  )
}