 import { useContext } from "react";
import uuid from "react-uuid"
import CalendarContext from "../context/CalendarContext";
import { Task } from "../interfaces/interfaces";  

type UseCalendarType = {
    addTaskToDay: (dayValue: number) => void
    selectTaskOnCalendar: (task: Task) => void
    deleteTask: (taskId: string) => void
}

export const useCalendarFunctions = (): UseCalendarType => {

    const { activeDrop, onCalendar, dayTasks,
         onCalendarTask, setOnCalendar, selectedTask,
         setDayTasks, setActiveDrop, setOnCalendarTask, } = useContext(CalendarContext)

    const addTaskToDay = (dayValue: number) => {
        if(activeDrop) {
          if(onCalendar) {
            const filterTasksByDay = dayTasks.filter(task => task.day === dayValue)
            const duplicatedTask = filterTasksByDay.map(task => task.id === onCalendarTask.id)
            onCalendarTask.id = uuid()
            const day: number = dayValue
            const addDayOnTask = {...onCalendarTask, day}
            checkDuplicatedTask(duplicatedTask, addDayOnTask)
            setOnCalendar(false)
            
          }
          else {
            const filterTasksByDay = dayTasks.filter(task => task.day === dayValue)
            const duplicatedTask = filterTasksByDay.map(task => task.id === selectedTask.id)
            selectedTask.id = uuid()
            const day: number = dayValue
            const addDayOnTask = {...selectedTask, day}
            checkDuplicatedTask(duplicatedTask, addDayOnTask)
        }
      }
    }
    
    const checkDuplicatedTask = (duplicatedTask: boolean[], addDayOnTask: Task) => {
              if(duplicatedTask.includes(true)) {
                const removeDupl = new Set(dayTasks)
                setDayTasks([...removeDupl])
                setActiveDrop(false)
              }else {
                setDayTasks([...dayTasks, addDayOnTask])
                setActiveDrop(false)
            }
    }

    const selectTaskOnCalendar = (task: Task) => {
      const filt = dayTasks.filter(dayTask => dayTask.id !== task.id)
      setDayTasks(filt)
      setActiveDrop(true)
      setOnCalendar(true)
      setOnCalendarTask(task)
      console.log(task)
    }

    const deleteTask = (taskId: string) => {
      const filterDayTasks = dayTasks.filter(task => task.id !== taskId)
      console.log(filterDayTasks)
      setDayTasks(filterDayTasks)
    }
    return { addTaskToDay, selectTaskOnCalendar, deleteTask }
  }