import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Login } from "./pages/Login/Login";
import { Blogpage } from "./components/Blogpage/Blogpage";
import { Homepage } from "./pages/Homepage/Homepage";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { RegistrationPage } from "./pages/Registration/Registration";
import { Addblog } from "./components/AddBlog/Addblog";
import { EditBlog } from "./components/EditBlog/EditBlog";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="" element={<Layout />}>
          <Route exact path="/blog" element={<Blogpage />} />
          <Route exact path="/addblog" element={<Addblog />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/editblog/:id" element={<EditBlog />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registration" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
