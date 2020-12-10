import React, { useEffect, useState } from 'react';
import { matchPath } from 'react-router'
import { matchRoutes, renderRoutes } from "react-router-config";

const Root = ({ route }) => {
  return (
    <div>
      <p>Root</p>
      {renderRoutes(route.routes)}
    </div>
  )
}
const Home = ({ route }) => {
  return (<div>Home</div>)
}
const Child = ({ route, match }) => {
  return (
    <div>
      <h3>Child</h3>
      <pre>{JSON.stringify(match, null, 2)}</pre>
      {renderRoutes(route.routes, { someProps: "these are extra prop that are optional" })}
    </div>
  )
}
const GrandChild = ({ someProps }) => {
  return (
    <div>
      <h3>Grand Child</h3>
      <p>{someProps}</p>
    </div>
  )
}

const routes = [
  {
    // component: Root,
    routes: [
      {
        path: "/home",
        exact: true,
        component: Home
      },
      {
        path: "/child/:id",
        component: Child,
        routes: [
          {
            path: "/child/:id/grand-child",
            component: GrandChild
          }
        ]
      }
    ]
  }
];

export default function Todos() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const branch = matchRoutes(routes, "/childs/23")[0];
    console.log(branch, "bramch")
  }, [])

  useEffect(() => () => {

  }, [todos])

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