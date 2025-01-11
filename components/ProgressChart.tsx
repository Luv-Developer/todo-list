'use client'

import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useTaskContext } from '@/components/TaskContext'

ChartJS.register(ArcElement, Tooltip, Legend)


export default function ProgressChart() {
  const { tasks } = useTaskContext()

  const completedTasks = tasks.filter(task => task.completed).length
  const inProgressTasks = tasks.filter(task => !task.completed && new Date(task.dueDate) >= new Date()).length
  const overdueTasks = tasks.filter(task => !task.completed && new Date(task.dueDate) < new Date()).length

  const data = {
    labels: ['Completed', 'In Progress', 'Overdue'],
    datasets: [
      {
        data: [completedTasks, inProgressTasks, overdueTasks],
        backgroundColor: ['#10B981', '#F59E0B', '#EF4444'],
        hoverBackgroundColor: ['#059669', '#D97706', '#DC2626'],
      },
    ],
  }

  const totalTasks = tasks.length
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Task Completion Rate</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        <p className="text-center mt-4 text-lg font-medium">
          You're {completionPercentage}% done with your tasks!
        </p>
      </CardContent>
    </Card>
  )
}

