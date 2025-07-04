// App.tsx
import React, { lazy, useState } from "react";
import "./App.css";
import SearchInput from "./components/input";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Box } from "@mui/material";
import IconTextButton from "./components/customButton";
import TabItem from "./components/tabs";
import CustomButton from "./components/button";
// import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import CloudUploadRoundedIcon from "./asserts/uploadIcon.svg";
// import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import RemoveCircleRoundedIcon from "./asserts/dndIcon.svg";
const TableComponent = lazy(() => import("./components/table"));

function Main() {
  const [activeTab, setActiveTab] = useState("Property Management");
  const [value, setValue] = useState("");

  const tabs = [
    { label: "Analytics", width: 176 },
    { label: "Property Management", number: 68, width: 210 },
    { label: "Scheduled Updates", width: 176 },
  ];

  return (
    <div className="container">
      <div className="top-row">
        <div className="left-section">
          <Box className="icon-box">
            <AssignmentIcon sx={{ fontSize: "22px", color: "#FFFFFF" }} />
          </Box>
          <p className="dashboard-title">Listing Dashboard</p>
        </div>
        <div className="view-connection-bt">
          <IconTextButton
            text="View Connections"
            bgColor="#556EE6"
            width={162}
            borderRadius={"4px"}
          />
        </div>
      </div>

      <Box className="tabs-row">
        {tabs.map((tab) => (
          <TabItem
            key={tab.label}
            label={tab.label}
            number={tab.number}
            isActive={activeTab === tab.label}
            onClick={() => setActiveTab(tab.label)}
            width={tab.width}
          />
        ))}
      </Box>

      <Box className="content-box">
        <div className="filters-row">
          <div className="status-buttons">
            <CustomButton
              text="Mismatched"
              number={27}
              bgColor=" #3307A899;"
              lineSize="95px"
            />
            <CustomButton
              text="Missing"
              number={10}
              bgColor="#ED743299"
              lineSize="55px"
            />
            <CustomButton text="Duplicates" number={19} bgColor=" #383E4C99;" />
            <CustomButton
              text="Issues with Updates/ Deletion"
              number={10}
              bgColor="#F46A6A99"
              width={280}
            />
          </div>

          <div className="action-buttons">
            <div className="search-input-wrapper">
              <SearchInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>

            <div className="button-pair">
              <IconTextButton
                text="Bulk Manage Holiday Hours"
                // icon={<CloudUploadRoundedIcon fontSize="small" />}
                icon={
                  <img
                    src={CloudUploadRoundedIcon}
                    alt={""}
                    style={{ width: "20px", height: "14px" }}
                  />
                }
                bgColor="#77B83D"
                width={220}
              />
              <IconTextButton
                text="Ignore Websites from Listing"
                // icon={<RemoveCircleRoundedIcon fontSize="small" />}
                icon={
                  <img
                    src={RemoveCircleRoundedIcon}
                    alt={""}
                    style={{ width: "23.98px", height: "23.98px" }}
                  />
                }
                bgColor="#F1AC58"
                width={220}
              />
            </div>
          </div>
        </div>

        <div className="table-wrapper">
          <TableComponent />
        </div>
      </Box>
    </div>
  );
}

export default Main;
