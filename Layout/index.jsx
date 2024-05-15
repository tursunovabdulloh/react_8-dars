import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "../Pages/Home";

function Layout() {
  const navigate = useNavigate();
  function LogOut() {
    localStorage.setItem("user", JSON.stringify(false));
    navigate("/");
  }
  return (
    <>
      <header className="">
        <div className="container">
          <button onClick={LogOut}>Log out</button>
          <Link to={"/signup"}>SignUp</Link>
        </div>
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <div className="container">
          <h1>footer</h1>
        </div>
      </footer>
    </>
  );
}

export default Layout;
