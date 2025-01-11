'use client'

import { useTaskContext } from '@/components/TaskContext'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'

export default function TaskList() {
  const { tasks, toggleTask, deleteTask } = useTaskContext()

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500'
      case 'medium': return 'bg-yellow-500'
      case 'low': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Card key={task.id} className="transition-all duration-300 hover:shadow-md">
          <CardContent className="flex items-center p-4">
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => toggleTask(task.id)}
              className="mr-4"
            />
            <div className="flex-grow">
              <h3 className={`text-lg font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                {task.title}
              </h3>
              <p className="text-sm text-muted-foreground">{task.description}</p>
              <div className="flex items-center mt-2 space-x-2">
                <Badge variant="secondary">{task.category}</Badge>
                <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                <span className="text-sm text-muted-foreground">Due: {task.dueDate}</span>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => deleteTask(task.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

