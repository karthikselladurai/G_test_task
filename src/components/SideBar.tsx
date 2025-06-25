// import {
//   Box,
//   Button,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   Tooltip,
//   Typography,
//   useTheme,
// } from "@mui/material";

// import {
//   People,
//   Language,
//   Settings,
//   Home,
//   Dashboard,
//   BarChart,
//   Star,
//   Assignment,
// } from "@mui/icons-material";
// import MenuIcon from "@mui/icons-material/Menu";

// const navItems = [
//   { icon: <People />, label: "Users" },
//   { icon: <Settings />, label: "Settings" },
//   { icon: <Home />, label: "Home" },
//   { icon: <Assignment />, label: "Reports" },
//   { icon: <BarChart />, label: "Stats" },
//   { icon: <Star />, label: "Favorites" },
//   { icon: <Language />, label: "Globe" },
//   { icon: <Dashboard />, label: "Dashboard" },
// ];

// function SideBar() {
//   const theme = useTheme();
//   const mode = theme.palette.mode;
//   return (
//     <Box>
//       <Drawer variant="permanent" open={true} sx={{ width: 200 }}>
//         <Button
//           sx={{ height: 100, borderRadius: 0, backgroundColor: "#3d4044" }}
//         >
//           <MenuIcon sx={{ color: "white" }} />
//         </Button>
//         <List sx={{ backgroundColor: "#2b3b5c", height: "100%" }}>
//           {navItems.map(({ icon, label }, index) => (
//             <Tooltip title={label} placement="right" key={index}>
//               <ListItem disablePadding>
//                 <ListItemButton sx={{ justifyContent: "center", py: 2 }}>
//                   <ListItemIcon sx={{ color: "#fff", minWidth: 0 }}>
//                     {icon}
//                   </ListItemIcon>
//                 </ListItemButton>
//               </ListItem>
//             </Tooltip>
//           ))}
//         </List>
//       </Drawer>
//     </Box>
//   );
// }

// export default SideBar;


import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  People,
  Language,
  Settings,
  Home,
  Dashboard,
  BarChart,
  Star,
  Assignment,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

export interface IProps {
  setSideBarOpen: (sidebar: boolean) => void;
  sideBarOpen: boolean;
}
function SideBar({ setSideBarOpen, sideBarOpen }: Readonly<IProps>) {
  const drawerWidth = sideBarOpen ? 200 : 70;

  const navItems = [
    {
      icon: <People sx={{ color: "rgb(216, 216, 216)" }} />,
      label: "Users",
    },
    {
      icon: <Settings sx={{ color: "rgb(216, 216, 216)" }} />,
      label: "Settings",
    },
    {
      icon: <Home sx={{ color: "rgb(216, 216, 216)" }} />,
      label: "Home",
    },
    {
      icon: <Assignment sx={{ color: "rgb(216, 216, 216)" }} />,
      label: "Reports",
    },
    {
      icon: <BarChart sx={{ color: "rgb(216, 216, 216)" }} />,
      label: "Stats",
    },
    {
      icon: <Star sx={{ color: "rgb(216, 216, 216)" }} />,
      label: "Favorites",
    },
    {
      icon: <Language sx={{ color: "rgb(216, 216, 216)" }} />,
      label: "Globe",
    },
    {
      icon: <Dashboard sx={{ color: "rgb(216, 216, 216)" }} />,
      label: "Dashboard",
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: { sm: drawerWidth, xs: sideBarOpen ? "100%" : 0 },
        flexShrink: 0,
        // display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          width: { sm: drawerWidth, xs: sideBarOpen ? "100%" : 0 },
          boxSizing: "border-box",
          backgroundColor: "#2B3B5C",
          color: "#fff",
        },
      }}
    >
      <Box
        sx={{
          height: 64,
          display: "flex",
          alignItems: "center",
          px: 2,
          backgroundColor: " #1E1E2C",
        }}
      >
        <Button
          onClick={() => setSideBarOpen(!sideBarOpen)}
          sx={{ minWidth: 0, p: 1 }}
        >
          <MenuIcon
            sx={{
              color: "white",
              transition: "transform 0.2s ease-in-out",
              transform: !sideBarOpen ? "rotate(0deg)" : "rotate(90deg)",
            }}
          />
        </Button>
      </Box>

      <List>
        {navItems.map(({ icon, label }) => (
          <ListItem disablePadding key={label} sx={{ display: "block" }}>
            <Tooltip title={!sideBarOpen ? label : ""} placement="right">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: sideBarOpen ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: sideBarOpen ? 2 : "auto",
                    justifyContent: "center",
                    color: "#fff",
                  }}
                >
                  {icon}
                </ListItemIcon>
                {sideBarOpen && (
                  <Typography sx={{ color: "#ffff" }}>{label}</Typography>
                )}
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SideBar;
