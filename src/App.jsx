import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './router/Home'
import About from './router/About'
import Layout from './Layout'
import Detail from './router/Detail'

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={'/About'} element={<About />} />
      </Route>
      <Route path={'/Detail'} element={<Detail />} />
    </Routes>
  )
}

export default App
