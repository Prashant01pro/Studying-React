import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Shoes from "./pages/Shoes";
import ShoesBrand from "./pages/ShoesBrand";

export default function App() {
  return (
    <div>
      <Navbar />
      <Footer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/Men" element={<Men/>} /> */}
        {/* <Route path="/Men/shoes" element={<Shoes />} /> */}

        {/* Nested Routing Correct */}
        <Route path="/men" element={<Men />}>
          <Route path="shoes" element={<Shoes />} />
          <Route path="shoes/:id" element={<ShoesBrand/>}/>
        </Route>  

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

// export default function App() {
//   return (
//     <div>
//       <h1 className="text-white">This is Nav Bar</h1>
//       {/* Routes are the container where all the Route exist */}
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/about" element={<About/>} />
//         <Route path="/contact" element={<Contact/>} />
//       </Routes>
//       <h1 className="text-white">This is Footer</h1>
//     </div>
//   )
// }
