import "./App.css";
import RegisterPage from "./user/pages/RegisterPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./user/pages/LoginPage";
import PostsPage from "./post/pages/PostsPage";
import EditUserPage from "./user/pages/EditUserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user">
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="edit" element={<EditUserPage />} />
        </Route>
        <Route path="/post">
          <Route index element={<PostsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
