import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Skills from "./components/skills/Skill";
import Contact from "./components/contact";

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/education",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Education />
          </Suspense>
        ),
      },
      {
        path: "/experience",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Experience />
          </Suspense>
        ),
      },
      {
        path: "/skills",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Skills />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
