import React, { useContext } from "react";
import CalendarContext from "../context/CalendarContext";
import uuid from 'react-uuid'
export default function CreateEventButton() {

  const  { setShowEventModal } = useContext(CalendarContext)

  return (
    <button
    
      onClick={() => setShowEventModal(true)}
      
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
   
      <span className="pl-3 pr-7"> Create New Task</span>
    </button>
  );
}
