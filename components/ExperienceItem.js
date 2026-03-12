export default function ExperienceItem({ title, company, dates, bullets }) {
  return (
    <details className="border border-gray-200 rounded-md p-4 bg-white">
      <summary className="cursor-pointer flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
        <span className="font-medium">{title}</span>
        <span className="text-sm text-gray-500 whitespace-nowrap">{company} · {dates}</span>
      </summary>
      <ul className="mt-3 list-disc list-inside text-sm text-gray-800 space-y-1">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </details>
  )
}