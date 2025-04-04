import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Apps from "./pages/Apps";
import Words from "./pages/Words";
import Navbar from "./components/Navbar";
import { DarkModeProvider } from "./context/DarkModeContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Navbar />
        <div className="container mt-5 pt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:category/:id" element={<ArticleDetail />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/words" element={<Words />} />
          </Routes>
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
