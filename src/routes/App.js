import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Search from "./Search";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Main" element={<Main/>} />
        <Route path="/Search" element={<Search/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;