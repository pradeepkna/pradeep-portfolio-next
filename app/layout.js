import './globals.css'

export const metadata = {
  title: 'Pradeep Narayan – Product & AI',
  description: 'Technical Product Manager & Product Owner · Cloud, Connected Car & AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}