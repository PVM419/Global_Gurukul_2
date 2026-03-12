import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Teachings from "./pages/Teachings";
import Education from "./pages/Education";
import Gallery from "./pages/Gallery";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import EducationalTeaser from "./pages/EducationalTeaser";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "teachings", Component: Teachings },
      { path: "education", Component: Education },
      { path: "gallery", Component: Gallery },
      { path: "donate", Component: Donate },
      { path: "contact", Component: Contact },
      { path: "educational-teaser", Component: EducationalTeaser }, // ← new route
      { path: "*", Component: NotFound },
    ],
  },
]);