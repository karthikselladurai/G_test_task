import { Box, Button, Typography } from "@mui/material";
import FilterListAltIcon from "@mui/icons-material/FilterListAlt";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import SettingsIcon from "@mui/icons-material/Settings";
import "../App.css";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

export interface IProps {
  setSideBarOpen: (sidebar: boolean) => void;
  sideBarOpen: boolean;
}

function Header({ setSideBarOpen, sideBarOpen }: Readonly<IProps>) {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <div className={`header-component `}>
      {/* Left Section */}
      <div className="header-left">
        <Box
          sx={{
            height: isMobile ? "68.5px" : "84px",
            mr: 2,
            minWidth: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: " #1E1E2C",
          }}
        >
          <Button
            onClick={() => (isMobile ? setSideBarOpen(!sideBarOpen) : null)}
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
        <Button
          variant="contained"
          sx={{
            bgcolor: "#BDBECC",
            width: { xs: "100%", sm: "119px" },
            height: "38px",
          }}
        >
          <FilterListAltIcon sx={{ bgcolor: "#2b3b5c", color: "white" }} />
          <Typography
            sx={{
              color: "#2B3B5C",
              display: { xs: "none", sm: "block" },
              ml: 1,
              fontSize: "12px",
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
            fontSize: "11px",
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
            display: {
              xs: "none",
              sm: "flex",
              fontSize: "14px",
              width: "115px",
            },
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
            bgcolor: "#00A6E5",
            color: "white",
            padding: 0,
            minWidth: 0,
          }}
        >
          S
        </Button>
        <Button sx={{ padding: 0 }}>
          <SettingsIcon sx={{ color: "#8C8D94" }} />
        </Button>
        <Button sx={{ padding: 0 }}>
          <NotificationImportantIcon
            sx={{
              color: "#C62828",
            }}
          />
        </Button>
      </div>
    </div>
  );
}

export default Header;
