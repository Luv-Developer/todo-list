"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Calendar, BarChart2, Settings } from 'lucide-react'

const Navigation = () => {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Calendar, label: 'Calendar', href: '/calendar' },
    { icon: BarChart2, label: 'Analytics', href: '/analytics' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ]

  return (
    <nav className="flex flex-col justify-between w-16 bg-secondary">
      <div className="flex flex-col items-center pt-8 space-y-8">
        {navItems.map(({ icon: Icon, label, href }) => (
          <Link
            key={href}
            href={href}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              pathname === href ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-primary/20'
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="sr-only">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navigation

