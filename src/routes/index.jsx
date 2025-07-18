import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home.jsx"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/json" element={<JsonFormatter />} /> */}
    </Routes>
  )
}

export default AllRoutes;