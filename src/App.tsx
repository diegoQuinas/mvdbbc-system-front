import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import SearchMembers from "./pages/SearchMembers";
import MemberDetail from "./pages/MemberDetail";

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/search" element={<SearchMembers />} />
          <Route path="/member/:id" element={<SearchMembers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
