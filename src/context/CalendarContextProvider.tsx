import { useState } from "react";
import { Task } from "../interfaces/interfaces";
import CalendarContext from "./CalendarContext";
import { TASK_INITIAL_STATE } from "../../util";
import uuid from "react-uuid";
import { useCalendarFunctions } from "../hooks/useCalendarFunctions";

interface Props {
    children: JSX.Element | JSX.Element[]
}



function CalendarContextProvider({children}: Props) {

    //------Label Tasks-------------------------
    const [task, setTask] = useState<Task>(TASK_INITIAL_STATE)
    const [tasks, setTasks] = useState<Task[]>([])
    const [showEventModal, setShowEventModal] = useState<boolean>(false)
    //------Select Task To add on Calendar-------
    const [selectedTask, setSelectedTask] = useState<Task>(TASK_INITIAL_STATE)
    const [activeDrop, setActiveDrop] = useState<boolean>(false)
    //------Add Task to Calendar-----------------
    const [onCalendarTask, setOnCalendarTask] = useState<Task>(TASK_INITIAL_STATE)
    const [onCalendar, setOnCalendar] = useState<boolean>(false)
    //------General day tasks array-------
    const [dayTasks, setDayTasks] = useState<Task[]>([])

    return(
        <CalendarContext.Provider value={{
            task,
            setTask,
            tasks,
            setTasks,
            showEventModal,
            setShowEventModal,
            selectedTask,
            setSelectedTask,
            activeDrop,
            setActiveDrop,
            onCalendarTask,
            setOnCalendarTask,
            onCalendar,
            setOnCalendar,
            dayTasks,
            setDayTasks,
            }}>
            {children}
        </CalendarContext.Provider>
    )
}

export default CalendarContextProvider