//import Counter from "./components/Counter";
import { useEffect, useState } from "react";
import { AuthContext } from "./context/index.js";
import "./styles/App.css";

import Navbar from "./UI/Navbar/Navbar.jsx";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <Navbar />
    </AuthContext.Provider>
  );
}
