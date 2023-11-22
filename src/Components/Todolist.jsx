import React, { useState } from 'react'
import Edit from './icons/edit'
import { Save } from './icons/Save'
import { Delete } from './icons/Delete'

export const Todolist = (props) => {

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      {console.log(props, "props")}
      <div className='flex items-start relative pb-2 mb-3'>
        <input type='checkbox' className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-1 shadow-sm shadow-slate-800"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}

        />

        <input className={`ml-3 pl-3 outline-none border-b-2
          text-${props.color}-950 border-${props.color}-900
          focus:border-red-900 bg-gray-300 rounded-full shadow-sm
          shadow-black
          ${isChecked
            ? "line-through text-gray-500"
            : null
          }`
        }
          type='text'
          Value={props.disabled === false ? props.newTo : props.text}
          disabled={props.disabled}
          onChange={(e) => props.initialValue(e.target.value)}
        />

        <li
          onClick={() => { props.onSelect(props.id) }}
          className='text-red-950 mr-3 ml-9 font-bold cursor-pointer shadow-sm shadow-black rounded-full w-5 h-5
        hover:bg-red-950 hover:text-gray-200'><Delete /></li>

        {/* edit button */}
        {props.disabled === true ?

          <li
            onClick={() => props.onEdit(props.id)}
            className='text-red-950 text-xs shadow-sm
           shadow-black rounded-full w-5 h-5 flex items-center  hover:bg-red-950 hover:text-gray-200'>
            <Edit />
          </li>


          : <button
            onClick={props.onSave}
            className='text-red-950 shadow-sm
          shadow-black rounded-full w-5 h-5 flex items-center  hover:bg-red-900 hover:text-gray-200'><Save /></button>}




      </div>

    </div>
  )
}
