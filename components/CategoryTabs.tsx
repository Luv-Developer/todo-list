'use client'

import { useState } from 'react'
import { useTaskContext } from '@/components/TaskContext'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'personal', label: 'Personal' },
  { id: 'work', label: 'Work' },
  { id: 'goals', label: 'Goals' },
]

export default function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState('all')
  const { tasks } = useTaskContext()

  const filteredTasks = activeCategory === 'all'
    ? tasks
    : tasks.filter(task => task.category === activeCategory)

  return (
    <div>
      <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
        <TabsList>
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="px-4 py-2 text-sm font-medium transition-colors duration-200"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <p className="mb-4 text-sm text-muted-foreground">
        Showing {filteredTasks.length} task{filteredTasks.length !== 1 ? 's' : ''}
      </p>
    </div>
  )
}

