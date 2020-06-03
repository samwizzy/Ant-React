import React, { useEffect } from 'react';

export default function Todos() {
	useEffect(() => {
		console.log("I am in Todo components")
	})

  return (
    <div>
			<h1 className="title">Todos</h1>
      <h2 className="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2>
    </div>
  )
} 