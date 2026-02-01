import { BrowserRouter, Link } from "react-router-dom";
import AppRouter from "../../components/AppRouter";
import MyButton from "../button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../../context";
export default function Navbar() {
  return (
    <BrowserRouter>
      <Paths />
      <AppRouter />
    </BrowserRouter>
  );
}
// <Route path="*" element={<Navigate to="/posts" replace />} />
function Paths() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className="navbar">
      <MyButton onClick={logout}>Выйти</MyButton>
      <nav className="navbar__links">
        <Link to="/about">О нас</Link>
        <Link to="/posts">Посты</Link>
      </nav>
    </div>
  );
}
