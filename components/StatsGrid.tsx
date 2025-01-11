import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const stats = [
  { title: 'Tasks Completed', value: '12', change: '+2', changeType: 'increase' },
  { title: 'Productivity Score', value: '85%', change: '+5%', changeType: 'increase' },
  { title: 'Overdue Tasks', value: '3', change: '-1', changeType: 'decrease' },
]

export default function StatsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className={`text-xs ${
              stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'
            }`}>
              {stat.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

