// import { Box, Button, useTheme } from "@mui/material";
// import { useEffect } from "react";
// import SideBar from "../components/SideBar";
// import Header from "../components/Header";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import { buttonColors } from "../common/color";
// import Main from "../main";

// interface IProps {
//   setTheme: (_theme: boolean) => void;
// }

// function AppRouter({ setTheme }: IProps) {
//   const theme = useTheme();
//   const mode = theme.palette.mode;
//   const changeTheme = () => {
//     const currentTheme = localStorage.getItem("theme");
//     if (currentTheme === "true") {
//       localStorage.setItem("theme", "false");
//       setTheme(false);
//       document.querySelector("body")?.classList.add("dark");
//     } else {
//       localStorage.setItem("theme", "true");
//       setTheme(true);
//       document.querySelector("body")?.classList.remove("dark");
//     }
//   };

//   useEffect(() => {
//     localStorage.setItem("theme", "false");
//   }, []);

//   return (
//     <div className="app-layout">
//         <SideBar />
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginLeft: 8,
//             padding: 2,
//             bgcolor: buttonColors[mode].headerBackGround,
//           }}
//         >
//           <Header />
//           <Button onClick={() => changeTheme()}>
//             <DarkModeIcon />
//           </Button>
//         </Box>
//         <Box
//           sx={{
//             marginLeft: 8,
//             height:'calc(100% - 70px)'
//           }}
          
//         >
//           <Main />
//         </Box>
//     </div>
//   );
// }

// export default AppRouter;

import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import "../App.css";
import Main from "../main";

export interface IProps {
  setTheme: (_theme: boolean) => void;
}

function AppRouter({ setTheme }: Readonly<IProps>) {
  useEffect(() => {
    localStorage.setItem("theme", "true");
  }, []);
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <div className="content-area">
      <div className="sidebar-container">
        <SideBar setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen} />
      </div>
      <div className="header-container">
        <Header
          setSideBarOpen={setSideBarOpen}
          sideBarOpen={sideBarOpen}
          setTheme={setTheme}
        />
      </div>
      <Main />
    </div>
  );
}

export default AppRouter;
