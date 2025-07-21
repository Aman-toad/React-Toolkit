import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home.jsx"
import ContactForm from '../pages/Contact.jsx';
import JsonFormatter from '../pages/JSONFormatter.jsx';
import RegexTester from '../pages/RegexTester.jsx';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path='/json-formatter' element={<JsonFormatter/>} />
      <Route path='/regex-tester' element={<RegexTester/>} />
    </Routes>
  )
}

export default AllRoutes;