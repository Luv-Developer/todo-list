import ProgressChart from '@/components/ProgressChart'
import StatsGrid from '@/components/StatsGrid'

export default function AnalyticsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Analytics</h1>
      <ProgressChart />
      <StatsGrid />
    </div>
  )
}

