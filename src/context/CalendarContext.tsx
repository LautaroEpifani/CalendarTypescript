import { createContext, Dispatch, SetStateAction  } from "react";
import { Task } from "../interfaces/interfaces";
import { TASK_INITIAL_STATE } from "../../util";

const INITIAL_STATE = {
    task: TASK_INITIAL_STATE,
    setTask: () => {},
    tasks: [],
    setTasks: () => [],
    showEventModal: false,
    setShowEventModal: () => {},
    selectedTask: TASK_INITIAL_STATE,
    setSelectedTask: () => {},
    activeDrop: false,
    setActiveDrop: () => {},
    onCalendarTask: TASK_INITIAL_STATE,
    setOnCalendarTask: () => {},
    onCalendar: false,
    setOnCalendar: () => {},
    dayTasks: [],
    setDayTasks: () => [],
}

type GlobalContent = {
    task: Task
    setTask: Dispatch<SetStateAction<Task>>
    tasks: Task[]
    setTasks: Dispatch<SetStateAction<Task[]>>
    showEventModal: boolean
    setShowEventModal: Dispatch<SetStateAction<boolean>>
    selectedTask: Task
    setSelectedTask: Dispatch<SetStateAction<Task>>
    activeDrop: boolean
    setActiveDrop: Dispatch<SetStateAction<boolean>>
    onCalendarTask: Task
    setOnCalendarTask: Dispatch<SetStateAction<Task>>
    onCalendar: boolean
    setOnCalendar: Dispatch<SetStateAction<boolean>>
    dayTasks: Task[]
    setDayTasks: Dispatch<SetStateAction<Task[]>>
}

const CalendarContext = createContext<GlobalContent>(INITIAL_STATE)

export default CalendarContext