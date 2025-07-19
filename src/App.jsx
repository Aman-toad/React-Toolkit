import react, { useState } from 'react'
import '../src/styles/App.css'
import AllRoutes from './routes/index.jsx'
import CustomCursor from './components/CustomCursor.jsx'

function App() {

  return (
    <>
      <CustomCursor />
      <AllRoutes />
    </>
  )
}

export default App
