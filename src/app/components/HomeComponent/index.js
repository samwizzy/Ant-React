import React from 'react';

export default function Home() {
  const [state, setState] = React.useState('chukwubunna')
  React.useEffect(() => {
    getAsync().then(response => setState(response))
  }, [state])

  const getAsync = () => {
    const request = new Promise(function (resolve, reject) {
      return setTimeout(() => resolve("Hello World"), 10000)
    });
    return request;
  }
  console.log("I am a use effect", state)

  return (
    <div>
      <h1 className="title">Home</h1>
      <h3 className="title">{state}</h3>
      <h2 className="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2>
    </div>
  )
} 