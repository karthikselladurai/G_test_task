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
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BookIcon from "@mui/icons-material/Book";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
// import MenuIcon from "@mui/icons-material/Menu";
import MenuIcon from "../asserts/menuBar.svg";
import useMediaQuery from "@mui/material/useMediaQuery";

export interface IProps {
  setSideBarOpen: (sidebar: boolean) => void;
  sideBarOpen: boolean;
}
function SideBar({ setSideBarOpen, sideBarOpen }: Readonly<IProps>) {
  const drawerWidth = sideBarOpen ? 200 : 52;

  const navItems = [
    {
      icon: (
        <SupervisorAccountIcon
          sx={{ width: 20, height: 20, color: "#ffffff" }}
        />
      ),
    },
    {
      icon: <DonutSmallIcon sx={{ width: 20, height: 20, color: "#ffffff" }} />,
    },
    {
      icon: <KeyboardIcon sx={{ width: 20, height: 20, color: "#ffffff" }} />,
    },
    {
      icon: <Settings sx={{ width: 20, height: 20, color: "#ffffff" }} />,
    },
    {
      icon: <Home sx={{ width: 20, height: 20, color: "#ffffff" }} />,
    },
    {
      icon: <ReceiptIcon sx={{ width: 20, height: 20, color: "#ffffff" }} />,
    },
    {
      icon: (
        <StackedLineChartIcon
          sx={{ width: 20, height: 20, color: "#ffffff" }}
        />
      ),
    },
    {
      icon: <Star sx={{ width: 20, height: 20, color: "#ffffff" }} />,
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM5 14C4.45 14 4 13.55 4 13V10C4 9.45 4.45 9 5 9C5.55 9 6 9.45 6 10V13C6 13.55 5.55 14 5 14ZM9 14C8.45 14 8 13.55 8 13V12C8 11.45 8.45 11 9 11C9.55 11 10 11.45 10 12V13C10 13.55 9.55 14 9 14ZM9 9C8.45 9 8 8.55 8 8C8 7.45 8.45 7 9 7C9.55 7 10 7.45 10 8C10 8.55 9.55 9 9 9ZM13 14C12.45 14 12 13.55 12 13V5C12 4.45 12.45 4 13 4C13.55 4 14 4.45 14 5V13C14 13.55 13.55 14 13 14Z"
            fill="white"
          />
        </svg>
      ),
    },

    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 0H2C0.9 0 0 0.9 0 2V20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM4 12V9.53L10.88 2.65C11.08 2.45 11.39 2.45 11.59 2.65L13.36 4.42C13.56 4.62 13.56 4.93 13.36 5.13L6.47 12H4ZM15 12H8.5L10.5 10H15C15.55 10 16 10.45 16 11C16 11.55 15.55 12 15 12Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM5 14C4.45 14 4 13.55 4 13V8C4 7.45 4.45 7 5 7C5.55 7 6 7.45 6 8V13C6 13.55 5.55 14 5 14ZM9 14C8.45 14 8 13.55 8 13V5C8 4.45 8.45 4 9 4C9.55 4 10 4.45 10 5V13C10 13.55 9.55 14 9 14ZM13 14C12.45 14 12 13.55 12 13V11C12 10.45 12.45 10 13 10C13.55 10 14 10.45 14 11V13C14 13.55 13.55 14 13 14Z"
            fill="white"
          />
        </svg>
      ),
    },

    {
      icon: (
        <SystemUpdateAltIcon sx={{ width: 20, height: 20, color: "#ffffff" }} />
      ),
    },
    {
      icon: (
        <HourglassEmptyIcon sx={{ width: 20, height: 20, color: "#ffffff" }} />
      ),
    },
    {
      icon: (
        <DynamicFeedIcon sx={{ width: 20, height: 20, color: "#ffffff" }} />
      ),
    },
    {
      icon: <GroupAddIcon sx={{ width: 20, height: 20, color: "#ffffff" }} />,
    },
    {
      icon: <BookIcon sx={{ width: 20, height: 20, color: "#ffffff" }} />,
    },
    {
      icon: (
        <Dashboard sx={{ width: 20, height: 20, px: 0, color: "#ffffff" }} />
      ),
    },
  ];
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: { sm: "52px", xs: sideBarOpen ? "52px" : 0 },
        overflow: "hidden",
        flexShrink: 0,
        // display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          width: { sm: "52px", xs: sideBarOpen ? "52px" : 0 },
          overflowX: "hidden",
          boxSizing: "border-box",
          backgroundColor: "#2B3B5C",
          color: "#fff",
        },
      }}
    >
      <Box
        sx={{
          width: "52px",
          height: "68.5px",
          display: "flex",
          alignItems: "center",
          px: 2,
          backgroundColor: " #1E1E2C",
        }}
      >
        <Button
          // onClick={() => setSideBarOpen(!sideBarOpen)}
          sx={{ minWidth: 0, p: 1 }}
        >
          {/* <MenuIcon
            sx={{
              color: "white",
              // transition: "transform 0.2s ease-in-out",
              // transform: !sideBarOpen ? "rotate(0deg)" : "rotate(90deg)",
            }}
          /> */}
          <img
            src={MenuIcon}
            alt={""}
            style={{ width: "22.37px", height: "13.75px" }}
          />
        </Button>
      </Box>

      <List sx={{ px: 0, width: "52px" }}>
        {navItems.map(({ icon }, index) => (
          <ListItem disablePadding key={index} sx={{ px: 0, display: "block" }}>
            <Tooltip title={""} placement="right">
              <ListItemButton
                sx={{
                  minHeight: 30,
                  justifyContent: sideBarOpen ? "initial" : "center",
                  flexDirection: "column",
                  px: 0,
                  minWidth: 0,
                }}
              >
                <ListItemIcon
                  sx={{
                    // mr: sideBarOpen ? 2 : "auto",
                    display: "flex",

                    justifyContent: "center",
                    color: "#fff",
                    width: "20px",
                    height: "20px",
                    px: 0,
                    minWidth: 0,
                  }}
                >
                  {icon}
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SideBar;
