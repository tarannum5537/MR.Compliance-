import { Routes, Route } from "react-router-dom";

import Cursor from "./components/Cursor/Cursor.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Home from "./pages/Home/Home.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import BlogDetails from "./pages/BlogDetails/BlogDetails.jsx";

// Navbar + Footer + custom cursor are shared by every page.
// Each page renders inside <Routes />.
export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
      </Routes>

      <Footer />
    </>
  );
}
