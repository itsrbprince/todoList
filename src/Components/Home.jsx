import React, { useState, useRef } from 'react'
import { Todolist } from './Todolist'

export const Home = () => {


  const inputRef = useRef(null);

  var [items, setList] = useState([])

  let [toogle, setToogle] = useState(true)
  let [newVal, setNewVal] = useState([])
  var [color, setColor] = useState('')

  var [editId, setId] = useState("")

  var [editTodo, setTodo] = useState()


  const editItem = (id) => {
    setTodo(items[id])
    setColor('orange')
    setToogle(true)

    setId(id)
    setList((prev) => prev.map((prevData) => prevData.index === id ? { ...prevData, text: newVal } : prevData))

  }

  const saveHandler = () => {
    setToogle(false)
  }

  const editHandler = () => {
    var editText = editTodo

    props.updateValue(editText)
  }


  const deleteItem = (id) => {
    // console.log("delete")
    setList((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;

      })
    })
  }

  const addTodos = (e) => {
    e.preventDefault();
    var input = inputRef.current.todo.value;
    if (input == "") return
    setList(prev => [...prev, input])
    inputRef.current.todo.value = ""
  }
  return (
    <div className='pt-20 md:ml-32 max-md:ml-4 max-sm:ml-0'>
      <form onSubmit={addTodos} ref={inputRef}>
        <div className='max-w-sm h-32 md:ml-96 bg-slate-200 rounded-t-xl shadow-2xl shadow-black'>
          <h1 className='text-red-900 text-xl font-extrabold pt-4 shadow-2xl shadow-gray roun rounded-t-3xl drop-shadow-[2px_2px_var(--tw-shadow-color)]'>TO DO LIST</h1>
          <div className='pt-9'>
            <input type="text" placeholder="Add a task..."
              name='todo'
              className="bg-gray-400 rounded-full pl-3 border-b-2 border-orange-900 mr-7 outline-none placeholder:text-red-900" />
            <button
              className='text-slate-300 text-sm font-bold bg-red-950 shadow-sm shadow-slate-900 rounded-full w-12 h-7'>
              <h6 className='-mt-0.5'>Add</h6></button>
          </div>
          <div className='flex justify-end pr-7 pt-8 text-slate-300'>  <span className='bg-red-800 shadow-sm shadow-black rounded-full w-20'>Items : {items.length} </span></div>
        </div>

      </form>
      <div className='pl-8 md:ml-96 flex justify-start max-w-sm h-96 pt-12 bg-gray-300 shadow-2xl shadow-black overflow-y-auto rounded-b-xl'>

        <ol>
          {items.map((val, index) => {
            console.log(index, "index")
            return <Todolist id={index}
              key={index}
              text={val}
              onSelect={deleteItem}
              onEdit={editItem}
              onUp={editHandler}
              updateValue={setNewVal}
              disabled={editId === index && toogle === true ? false : true}
              initialValue={setTodo}
              newTo={editTodo}
              onSave={saveHandler}
              color={editId === index && toogle === true ? color : 'black'}

            />
          })
          }
        </ol>
      </div>
    </div>
  )
}