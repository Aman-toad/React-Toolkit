import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home.jsx"
import ContactForm from '../pages/Contact.jsx';
import JsonFormatter from '../pages/JSONFormatter.jsx';
import RegexTester from '../pages/RegexTester.jsx';
import MarkDownPreview from '../pages/MarkDownPreviewer.jsx';
import Base64 from '../pages/Base64Tool.jsx';
import JWTDecoder from '../pages/JWTdecoder.jsx';
import ColorPicker from '../pages/colorPicker.jsx';
import QRGenerator from '../pages/QRgenerator.jsx';
import TechStackFinder from '../pages/TechStackFinder.jsx';
import JsonToCsv from '../pages/jsonToCsv.jsx';
import UUIDGenerator from '../pages/UuidGenerator.jsx';
import FakeUserData from '../pages/fakeData.jsx';
import MarkDownToHtml from '../pages/MarkdownToHtml.jsx';
import ResponsiveDesigntester from '../pages/ResponseTester.jsx';
import FaviconGenerator from '../pages/FaviconGenerator.jsx';
import TimeZoneConverter from '../pages/TimeZoneConvertor.jsx';

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
      <Route path="/qr-generator" element={<QRGenerator />} />
      <Route path="/techStackFinder" element={<TechStackFinder />} />
      <Route path='/json-csv' element={<JsonToCsv/>}/>
      <Route path='/uuidGenerator' element={<UUIDGenerator/>}/>
      <Route path='/fakeDataGenerator' element={<FakeUserData/>}/>
      <Route path='/markdown-html' element={<MarkDownToHtml/>}/>
      <Route path='/responsiveTester' element={<ResponsiveDesigntester/>}/>
      <Route path='/faviconGenerator' element={<FaviconGenerator/>}/>
      <Route path='/timeZone' element={<TimeZoneConverter/>}/>
    </Routes>
  )
}

export default AllRoutes;