/* eslint-disable no-unused-vars */
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import GeneralView from './components/GeneralView/GeneralView'
import DetailedView from './components/DetailedView/DetailedView'
import FavView from './components/FavView/FavView'

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <GeneralView /> },
    { path: '/favs', element: <FavView /> },
    { path: '/:id', element: <DetailedView /> },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
