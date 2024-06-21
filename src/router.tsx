import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Home from "./pages/Home";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills/Skills";

import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    element: <Home />,
    children: [
      { path: "/", element: <About /> },
      { path: "/experience", element: <Experience /> },
      { path: "/education", element: <Education /> },
      { path: "/skills", element: <Skills /> },

      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
