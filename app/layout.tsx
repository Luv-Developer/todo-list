import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ui/theme-provider'
import Navigation from '@/components/Navigation'
import { TaskProvider } from '@/components/TaskContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Modern To-Do App',
  description: 'A sleek and intuitive to-do list application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TaskProvider>
            <div className="flex h-screen bg-background text-foreground">
              <Navigation />
              <main className="flex-1 overflow-y-auto p-4">
                {children}
              </main>
            </div>
          </TaskProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

