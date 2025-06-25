// import { Box, Button, Typography, useTheme } from "@mui/material";
// import FilterListAltIcon from "@mui/icons-material/FilterListAlt";
// import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
// import SettingsIcon from "@mui/icons-material/Settings";
// import { buttonColors } from "../common/color";

// function Header() {
//   const theme = useTheme();
//   const mode = theme.palette.mode;
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "space-between",
//         width: "100%",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: 3,
//         }}
//       >
//         <Button variant="contained" sx={{ bgcolor: "#bebdcc" }}>
//           <FilterListAltIcon
//             sx={{ bgcolor: "#2b3b5c", color: "white", marginRight: 1 }}
//           />{" "}
//           Filters
//         </Button>
//         <Button variant="text"> Reset To Default</Button>
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: 3,
//         }}
//       >
//         <Typography variant="body1">John Doe</Typography>
//         <Button
//           variant="contained"
//           sx={{
//             borderRadius: "50%",
//             width: 25,
//             height: 25,
//             bgcolor: "",
//             padding: 0,
//             minWidth: 0,
//             color: "white",
//           }}
//         >
//           s
//         </Button>
//         <Button sx={{ padding: 0 }}>
//           <SettingsIcon sx={{ color: buttonColors[mode].settings }} />
//         </Button>
//         <Button sx={{ padding: 0 }}>
//           <NotificationImportantIcon
//             sx={{ color: buttonColors[mode].notifications }}
//           />
//         </Button>
//       </Box>
//     </Box>
//   );
// }

// export default Header;


import { Box, Button, Typography, useTheme } from "@mui/material";
import FilterListAltIcon from "@mui/icons-material/FilterListAlt";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { buttonColors } from "../common/color";
import "../App.css";
import MenuIcon from "@mui/icons-material/Menu";

export interface IProps {
  setTheme: (_theme: boolean) => void;
  setSideBarOpen: (sidebar: boolean) => void;
  sideBarOpen: boolean;
}

function Header({ setTheme, setSideBarOpen, sideBarOpen }: Readonly<IProps>) {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const changeTheme = () => {
    const isDarkMode = localStorage.getItem("theme") === "true";
    localStorage.setItem("theme", (!isDarkMode).toString());
    setTheme(!isDarkMode);
  };

  return (
    <div className={`header-component header-container-${mode}`}>
      {/* Left Section */}
      <div className="header-left">
        <Box
          sx={{
            height: 64,
            w: "100px",
            mr: 2,
            minWidth: 70,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: " #1E1E2C",
          }}
        >
          <Button onClick={() => setSideBarOpen(!sideBarOpen)}>
            <MenuIcon
              sx={{
                color: "white",
                transition: "transform 0.2s ease-in-out",
                transform: !sideBarOpen ? "rotate(0deg)" : "rotate(90deg)",
              }}
            />
          </Button>
        </Box>
        <Button
          variant="contained"
          sx={{ bgcolor: buttonColors[mode]?.filterButton }}
        >
          <FilterListAltIcon sx={{ bgcolor: "#2b3b5c", color: "white" }} />
          <Typography
            sx={{
              color: "#2B3B5C",
              display: { xs: "none", sm: "block" },
              ml: 1,
            }}
          >
            Filters
          </Typography>
        </Button>
        <Button
          variant="text"
          sx={{
            color: "#0FA9DE",
            display: { xs: "none", sm: "block" },
            marginLeft: 2,
          }}
        >
          Reset To Default
        </Button>
      </div>

      {/* Right Section */}
      <div className="header-right">
        <Typography
          variant="body1"
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          John Doe
        </Typography>
        <Button
          variant="contained"
          sx={{
            borderRadius: "50%",
            width: 25,
            height: 25,
            bgcolor: buttonColors[mode]?.avatar,
            color: "white",
            padding: 0,
            minWidth: 0,
          }}
        >
          S
        </Button>
        <Button sx={{ padding: 0, display: { xs: "none", sm: "flex" } }}>
          <SettingsIcon sx={{ color: buttonColors[mode]?.settings }} />
        </Button>
        <Button sx={{ padding: 0 }}>
          <NotificationImportantIcon
            sx={{
              color: buttonColors[mode]?.notifications,
            }}
          />
        </Button>
        <Button onClick={changeTheme} sx={{ padding: 0 }}>
          <DarkModeIcon sx={{ color: buttonColors[mode]?.moonIcon }} />
        </Button>
      </div>
    </div>
  );
}

export default Header;
