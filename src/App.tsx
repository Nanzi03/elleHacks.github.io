import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Contact from "./pages/Contact";
import Frame from "./pages/Frame";
import Group from "./pages/Group";
import Frame1 from "./pages/Frame1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame":
        title = "";
        metaDescription = "";
        break;
      case "/group-151":
        title = "";
        metaDescription = "";
        break;
      case "/frame1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Contact />} />
      <Route path="/frame" element={<Frame />} />
      <Route path="/group-151" element={<Group />} />
      <Route path="/frame1" element={<Frame1 />} />
    </Routes>
  );
}
export default App;
