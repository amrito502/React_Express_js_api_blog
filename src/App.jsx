
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutPage/>} />
        <Route path="/blogs" element={<BlogPage/>} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/contact-us" element={<ContactPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
