import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";
import NewPost from "./components/NewPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/new-post" element={<NewPost />} />
      </Routes>
    </Router>
  );
}

export default App;
