import Hi from "./component/Hi";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";


/*import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
//import NoPage from "./pages/NoPage";

<BrowserRouter>
    <Routes>
      <Route path="layout" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        
      </Route>
    </Routes>
  </BrowserRouter>
    */
function App() {
  return (
    <>
    <Hi />
    <Home />
    <Blogs />
    <Contact />
    
    
    </>
  );
}

export default App;
