import React from 'react'
import '../../assets/css/AddProject.css'
import { MdOutlineAdd } from "react-icons/md";

function AddProject() {
  return (
    <div className='add-project-btn'>
        <div className="add-project-icon">
            <MdOutlineAdd />
        </div>
        <div className="add-project-title mutes">
            Add Project
        </div>
    </div>
  )
}

export default AddProject