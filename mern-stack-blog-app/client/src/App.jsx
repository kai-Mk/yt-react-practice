import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/home";
import AddBlog from "./pages/addBlog/AddBlog";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add_Blog" element={<AddBlog />} />
            </Routes>
        </div>
    );
}

export default App;
