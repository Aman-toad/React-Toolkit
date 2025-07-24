import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home.jsx"
import ContactForm from '../pages/Contact.jsx';
import JsonFormatter from '../pages/JSONFormatter.jsx';
import RegexTester from '../pages/RegexTester.jsx';
import MarkDownPreview from '../pages/MarkDownPreviewer.jsx';
import Base64 from '../pages/Base64Tool.jsx';
import JWTDecoder from '../pages/JWTdecoder.jsx';
import ColorPicker from '../pages/colorPicker.jsx';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path='/json-formatter' element={<JsonFormatter />} />
      <Route path='/regex-tester' element={<RegexTester />} />
      <Route path="/markdown-preview" element={<MarkDownPreview />} />
      <Route path="/base64" element={<Base64 />} />
      <Route path="/jwt-decoder" element={<JWTDecoder />} />
      <Route path="/color-picker" element={<ColorPicker />} />
    </Routes>
  )
}

export default AllRoutes;