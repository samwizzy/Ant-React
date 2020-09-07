import React, { useEffect, useState } from 'react';

export default function Todos() {
  const [todos, setTodos] = useState([])

  useEffect(() => () => {
    console.log("I am in Todo components")

  }, [todos])

  console.log(todos, "todos state")

  return (
    <div>
      <h1 className="title">Todos</h1>
      <h2 className="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2>
      <button className="button is-primary" onClick={() => setTodos(state => ([...state, "samuel"]))}>Add</button>
    </div>
  )
} 