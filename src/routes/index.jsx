import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home.jsx"
import ContactForm from '../pages/Contact.jsx';
import JsonFormatter from '../pages/JSONFormatter.jsx';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path='/json-formatter' element={<JsonFormatter/>} />
    </Routes>
  )
}

export default AllRoutes;