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
      active: false,
    },
    {
      icon: <Settings sx={{ color: "rgb(216, 216, 216)" }} />,
      label: "Settings",
      active: false,
    },
    {
      icon: <Home sx={{ color: "rgb(216, 216, 216)" }} />,
      label: "Home",
      active: false,
    },
    {
      icon: <Assignment sx={{ color: "rgb(216, 216, 216)" }} />,
      label: "Reports",
      active: false,
    },
    {
      icon: <BarChart sx={{ color: "rgb(216, 216, 216)" }} />,
      label: "Stats",
      active: false,
    },
    {
      icon: <Star sx={{ color: "rgb(216, 216, 216)" }} />,
      label: "Favorites",
      active: false,
    },
    {
      icon: <Language sx={{ color: "rgb(216, 216, 216)" }} />,
      label: "Globe",
      active: false,
    },
    {
      icon: <Dashboard sx={{ color: "rgb(216, 216, 216)" }} />,
      label: "Dashboard",
      active: true,
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
          height: 84,
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
        {navItems.map(({ icon, label, active }) => (
          <ListItem
            disablePadding
            key={label}
            sx={{ display: "block", bgcolor: active ? "rgb(25, 35, 54)" : "" }}
          >
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
