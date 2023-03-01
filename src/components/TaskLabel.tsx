import { useContext } from 'react';
import CalendarContext from '../context/CalendarContext';
import { Task } from '../interfaces/interfaces';

interface Props {
  task: Task;
}

const TaskLabel = ({ task }: Props) => {

  const { setSelectedTask, setActiveDrop } = useContext(CalendarContext)
  
  const addTask = (task: Task) => {

    console.log(task)
    setSelectedTask(task)
    setActiveDrop(true)
  }
  

  return (
     <div className=" flex" 
       
      >
          <div  onClick={() => addTask(task) }
            className={`bg-${task.label}-400 p-1 mr-3 text-white font-bold uppercase text-sm rounded mb-1 truncate cursor-pointer w-44 text-center`}
          >
            {task.title}
           
          </div>
      </div>
  )
}

export default TaskLabel