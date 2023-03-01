import dayjs, { Dayjs } from "dayjs";
import React, { useContext, useEffect, useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md';
import CalendarContext from '../context/CalendarContext';
import { useCalendarFunctions } from "../hooks/useCalendarFunctions";
import { Task } from "../interfaces/interfaces";
import TaskOnCalendar from "./TaskOnCalendar";

interface Props {
  day: Dayjs
  rowIdx: number
}

const Day = ({day, rowIdx}: Props) => {

  const { activeDrop, dayTasks} = useContext(CalendarContext)
  const { addTaskToDay, selectTaskOnCalendar, deleteTask } = useCalendarFunctions() 
  const [dayFilterTasks, setDayFilterTasks] = useState<Task[]>([])

  useEffect(() => {
    const filterDayTasks = dayTasks.filter(dayTask => dayTask.day === day.valueOf())
    setDayFilterTasks(filterDayTasks)

  },[dayTasks])

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }

  return (
    <div  className="border border-gray-200 flex flex-col">
 
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        <p
          className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}
        >
          {day.format("DD")}
        </p>  
      </header>
      <div className={`h-20 ${activeDrop ? `border-2 border-dashed border-emerald-300` : ``}`}  onClick={() => addTaskToDay(day.valueOf())} >
        {dayFilterTasks.map((task, index) =>  
        <div key={index} className="flex items-center">
            <TaskOnCalendar selectTaskOnCalendar={selectTaskOnCalendar} task={task}/>
            <MdDeleteOutline onClick={() => deleteTask(task.id)}/>
        </div>
        )}
      </div>
   </div>   
  )
}

export default Day