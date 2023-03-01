import { useContext, useEffect, useState } from 'react'
import Month from './components/Month'
import { getMonth } from "../util";
import CreateEventButton from './components/CreateEventButton';
import { MdDeleteOutline } from 'react-icons/md';
import TaskLabel from './components/TaskLabel';
import { Task } from './interfaces/interfaces';
import CalendarContext from './context/CalendarContext';
import TaskModal from './components/TaskModal';



// const tasks: Task[] = [{id:"1", title:"Limpieza" ,label:"bg-red-400"}, {id:"2", title:"Jardin", label: "bg-green-400"}, { id:"3", title:"Cocina", label: "bg-gray-400"}]

function App() {
 
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    const  {tasks, showEventModal}  = useContext(CalendarContext);




  useEffect(() => {
    setCurrentMonth(getMonth(1));
  }, []);


  const deleteTask = (taskId: string) => {
    console.log(taskId)
  } 


  return (
     <div className="p-10">
        
        <Month month={currentMonth}/>
        <CreateEventButton/>
        {showEventModal && <TaskModal />}
        {/* <TaskLabel/> */}
       
        <div className="flex flex-wrap gap-y-10 mt-10">
          {tasks.map((task, index) =>  
          <div key={index} className="flex items-center pr-4">
            <TaskLabel task={task} />
              <MdDeleteOutline onClick={() => deleteTask(task.id)}/>
          </div>
           )}
       </div>
    </div>
  )
}

export default App
