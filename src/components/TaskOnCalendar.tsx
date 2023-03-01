import React from 'react'
import { Task } from '../interfaces/interfaces'

interface Props {
    task: Task
    selectTaskOnCalendar: (task: Task) => void
}

const TaskOnCalendar = ({selectTaskOnCalendar, task}: Props) => {
  return (
    <div onClick={() => selectTaskOnCalendar(task)}  className={`text-white bg-${task.label}-400 flex justify-center items-center rounded-lg mb-1 mx-1 w-11/12`}>
            <p className=" text-center">{task.title}</p>
    </div>
  )
}

export default TaskOnCalendar