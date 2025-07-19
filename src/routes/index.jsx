import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home.jsx"
import ContactForm from '../pages/Contact.jsx';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
  )
}

export default AllRoutes;