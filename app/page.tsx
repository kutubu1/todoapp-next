"use client"

import { useState } from "react";


export default function Home() {
  const [userInput, setUserInput] = useState('');
  const [list, setList] = useState([]);

  const updateInput = (value) => {
    setUserInput(value);
  }

  const addItem = () =>{
    if (userInput !== ""){
      const userInputItem = {
        id: Math.random(),
        value: userInput,
      };
      setList([...list, userInputItem]);
      setUserInput('');
    }
  };

  const deleteItem = (key) => {
    const updatedList = 
        list.filter((item) => item.id !== key);
     setList(updatedList);   
  }

  const editItem = (index) => {
    const editedTodo = prompt('Edit the todo:');
    if(editedTodo !== null && editedTodo.trim() !== ''){
      const updatedTodos = [...list];
      updatedTodos[index].value = editedTodo;
      setList(updatedTodos);
    }
  }

  return ( 
   <div className="w-full font-serif mx-auto p-2">

    <div className="text-center text-3xl font-bold mb-3 text-green-500">
      Geeksforgeeks
    </div>

    <div className="text-center text-2xl font-bold mb-2 ">
      TODO LIST
    </div>
   
   <div className=" text-center mb-2">
    <input className="font-medium p-2 mr-1 flex-grow-1 border-r-2 border-spacing-1 border-blue-300" 
    placeholder="Add item..."
    value={userInput}
    onChange={(item) => updateInput(item.target.value)}
    />
    <button className="text-2xl px-1 py-2 bg-green-300 text-white border-none border-r-1 cursor-pointer" onClick={addItem}>
      ADD
    </button>
    
    <div className="bg-white-500 p-2 border-r-teal-100">
    {
        list.length > 0 ? (
          list.map((item, index) => (
            <div key={index} className="flex justify-around items-center mb-2" >
              <span className="text-1xl flex-grow-1">
                {item.value}
              </span>
              <span>
                <button className="p-2 bg-orange-600 text-white border-none border-r-1 mr-2 cursor-pointer" onClick={() => deleteItem(item.id)}>
                  Delete
                </button>

                <button className="p-2 bg-orange-600 text-white border-none border-r-1 mr-2 cursor-pointer" onClick={() => editItem(index)}> 
                Edit

               </button>
              </span>

            </div>
          ))
        ): (
          <div className="text-center text-xl text-brown-400">
            No items in the list
          </div>
        )}

    </div>
   
   </div>
   
   </div>
  );
}
