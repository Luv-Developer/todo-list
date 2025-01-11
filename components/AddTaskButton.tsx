'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import AddTaskModal from './AddTaskModal'

export default function AddTaskButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button
        className="fixed bottom-8 right-8 rounded-full w-16 h-16 shadow-lg"
        onClick={() => setIsModalOpen(true)}
      >
        <Plus className="w-8 h-8" />
        <span className="sr-only">Add Task</span>
      </Button>
      <AddTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

