import { useState } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import "../App.css";
import Main from "../main";

function AppRouter() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <div className="content-area">
      <div className="sidebar-container">
        <SideBar setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen} />
      </div>
      <div className="header-container">
        <Header setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen} />
      </div>
      <Main />
    </div>
  );
}

export default AppRouter;
