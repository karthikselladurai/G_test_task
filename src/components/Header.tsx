import { Box, Button, Typography } from "@mui/material";
import FilterListAltIcon from "@mui/icons-material/FilterListAlt";
// import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import NotificationImportantIcon from "../asserts/bellicon.svg";
// import SettingsIcon from "@mui/icons-material/Settings";
import SettingsIcon from "../asserts/settingIcon.svg";
import "../App.css";
// import MenuIcon from "@mui/icons-material/Menu";
import MenuIcon from "../asserts/menuBar.svg";
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
            sx={{
              width: "38px",
              height: "38px",
              p: 0,
            }}
          >
            {/* <MenuIcon
              sx={{
                // width: "22.37px",
                // height: "13.75px",
                color: "white",
                transition: "transform 0.2s ease-in-out",
                transform: !sideBarOpen ? "rotate(0deg)" : "rotate(90deg)",
              }}
              className="menu-icon"
            /> */}
            <img
              src={MenuIcon}
              alt={""}
              style={{ width: "22.37px", height: "13.75px" }}
            />
          </Button>
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#BDBECC",
            width: { xs: "100%", sm: "119px" },
            height: "38px",
            borderRadius: "4.8px",
          }}
        >
          <FilterListAltIcon
            sx={{
              bgcolor: "#2b3b5c",
              color: "white",
              width: "20px",
              height: "20px",
            }}
          />
          <Typography
            sx={{
              color: "#2B3B5C",
              display: { xs: "none", sm: "block" },
              ml: 1,
              fontSize: "12px",
              fontWeight: 400,
            }}
          >
            FILTERS
          </Typography>
        </Button>
        <Button
          variant="text"
          sx={{
            color: "#0FA9DE",
            display: { xs: "none", sm: "block" },
            marginLeft: 2,
            fontSize: "11px",
            width: 89,
            height: 20,
            padding: 0,
            fontWeight: 400,
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
              height: 25.8,
              width: "114.82px",
              fontWeight: 700,
              color: " #6B6D82",
              display: "flex",
              alignItems: "center",
            },
          }}
        >
          John Doe
        </Typography>
        <Button
          variant="contained"
          sx={{
            borderRadius: "50%",
            width: "24.86px",
            height: "25.24px",
            bgcolor: "#00A6E5",
            color: "white",
            padding: 0,
            minWidth: 0,
            fontSize: "12px",
            fontWeight: 700,
          }}
        >
          S
        </Button>
        <Button sx={{ padding: 0 }}>
          {/* <SettingsIcon
            sx={{ color: "#8C8D94", width: "16.57px", height: "16.46px" }}
          /> */}
          <img
            src={SettingsIcon}
            alt={""}
            style={{ width: "16.57px", height: "16.46px" }}
          />
        </Button>
        <Button sx={{ padding: 0 }}>
          {/* <NotificationImportantIcon
            sx={{
              color: "#C62828",
              width: "15.39px",
              height: "17.56px",
            }}
          /> */}
          <img
            src={NotificationImportantIcon}
            alt={""}
            style={{ width: "15.39px", height: "17.56px" }}
          />
        </Button>
      </div>
    </div>
  );
}

export default Header;
