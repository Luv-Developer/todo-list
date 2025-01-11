import TaskList from '@/components/TaskList'
import AddTaskButton from '@/components/AddTaskButton'
import CategoryTabs from '@/components/CategoryTabs'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Tasks</h1>
      <CategoryTabs />
      <TaskList />
      <AddTaskButton />
    </div>
  )
}

