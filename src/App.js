import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import ProceedUpdate from "./pages/Home/ProceedUpdate";
import RequireAuth from "./pages/Login/RequireAuth";
import SignIn from "./pages/Login/SignIn";
import SignUp from "./pages/Login/SignUp";
import AddItem from "./pages/Manage/AddItem";
import ManageItems from "./pages/Manage/ManageItems";
import MyItems from "./pages/Manage/MyItems";
import Footer from "./pages/Shared/Footer";
import Navbar from "./pages/Shared/Navbar";
import NotFound from "./pages/Shared/NotFound";
import Update from "./pages/Update/Update";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tool/:toolId" element={<ProceedUpdate />} />
        <Route
          path="/update/:toolId"
          element={
            <RequireAuth>
              <Update />
            </RequireAuth>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/manageitems" element={<ManageItems />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/myitems" element={<MyItems />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
