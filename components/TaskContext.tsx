'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface Task {
  id: number
  title: string
  description: string
  category: string
  priority: 'low' | 'medium' | 'high'
  dueDate: string
  completed: boolean
}

interface TaskContextType {
  tasks: Task[]
  addTask: (task: Omit<Task, 'id' | 'completed'>) => void
  toggleTask: (id: number) => void
  deleteTask: (id: number) => void
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const useTaskContext = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider')
  }
  return context
}

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    if (typeof window !== 'undefined') {
      const savedTasks = localStorage.getItem('tasks')
      return savedTasks ? JSON.parse(savedTasks) : []
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task: Omit<Task, 'id' | 'completed'>) => {
    setTasks(prevTasks => [
      ...prevTasks,
      { ...task, id: Date.now(), completed: false }
    ])
  }

  const toggleTask = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}

