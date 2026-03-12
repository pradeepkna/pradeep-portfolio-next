const degrees = [
  {
    degree: 'Master of Science – Commercial Vehicle Technology',
    school: 'Technical University of Kaiserslautern · Kaiserslautern, Germany · 2013',
    detail: 'Core subjects: Architecture of Digital Systems, Automotive Software Engineering, Real-time Systems, Vehicle Dynamics & Control, Autonomous Mobile Robots, Vehicle Production.'
  },
  {
    degree: 'Bachelor of Engineering – Mechanical Engineering',
    school: 'B.M.S. College of Engineering (VTU) · Bangalore, India · 2007',
  },
]

export default function Education() {
  return (
    <section id="education" className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <div className="space-y-4 text-sm">
        {degrees.map((d, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-md p-4">
            <p className="font-medium">{d.degree}</p>
            <p className="text-gray-500">{d.school}</p>
            {d.detail && <p className="mt-1 text-gray-700">{d.detail}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}