import React, { useState, useEffect } from "react";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  useGridApiRef,
} from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
// import ErrorIcon from "@mui/icons-material/Error";
import ErrorIcon from "../asserts/infoIcon.svg";
// import ReportIcon from "@mui/icons-material/Report";
import ReportIcon from "../asserts/reportIcon.png";
// import LaunchIcon from "@mui/icons-material/Launch";
import LaunchIcon from "../asserts/redirectIcon.png";
// import SwapVertIcon from "@mui/icons-material/SwapVert";
import SwapVertIcon from "../asserts/sortIcon.svg";
import { initialRows, generateMoreRows, Row } from "./data";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/400.css";
import dayjs from "dayjs";

// Styled DataGrid
const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: "none",
  "--DataGrid-rowBorderColor": "transparent",
  "& .MuiDataGrid-columnHeader": {
    position: "sticky",
    top: 0,
    backgroundColor: "#8F95A324",
    color: "#383E4C",
    zIndex: 2,
    borderBottom: "none",
    "& .MuiDataGrid-columnHeaderTitle": {
      padding: "4px 8px",
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: "16px",
      textTransform: "uppercase",
      textAlign: "center",
    },
  },
  "& .MuiDataGrid-sortIcon": {
    display: "none !important",
  },
  "& .MuiDataGrid-row": {
    backgroundColor: "#0DA9EB0F",
    "&:nth-of-type(odd)": {
      backgroundColor: "#ffffff",
    },
    borderBottom: "none !important",
    "& .MuiDataGrid-cell": {
      borderBottom: "none !important",
    },
  },
  "& .MuiDataGrid-columnSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-cell": {
    padding: "12px 16px",
    borderRight: "none",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: 400,
    color: "#6B6D82",
    display: "flex",
    alignItems: "flex-start", // Allow content to grow vertically
    whiteSpace: "normal", // Allow wrapping
    wordBreak: "break-word", // Break long words if needed
    "&:focus-within": {
      outline: "none",
    },
  },
  "& .MuiDataGrid-footerContainer": {
    display: "none",
  },
  '& .MuiDataGrid-cell[data-field="propertyName"]': {
    color: "#3464EB",
  },
  "&:focus": {
    outline: "none",
  },
  "&:focus-visible": {
    outline: "none",
  },
}));

const SkeletonRow = () => (
  <div
    style={{
      display: "flex",
      height: "60px",
      padding: "0 16px",
      alignItems: "center",
      backgroundColor: "#fff",
    }}
  >
    {Array(9)
      .fill(null)
      .map((_, index) => (
        <div
          key={`skeleton-cell-${index}-${Math.random().toString(36)}`}
          style={{
            flex: 1,
            height: "20px",
            background:
              "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
            backgroundSize: "200% 100%",
            animation: "pulse 1.2s ease-in-out infinite",
            borderRadius: "4px",
            margin: "0 4px",
          }}
        />
      ))}
  </div>
);

const TableComponent: React.FC = () => {
  const [rows, setRows] = useState<Row[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isViewAllDisabled, setIsViewAllDisabled] = useState(false);
  const apiRef = useGridApiRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setRows(
        initialRows.map((row) => ({
          ...row,
          // Updated to current date and time
        }))
      );
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const addMoreRows = () => {
    if (isViewAllDisabled) return;
    setIsLoading(true);
    setTimeout(() => {
      const lastId = rows.length > 0 ? rows[rows.length - 1].id : 0;
      setRows([
        ...rows,
        ...generateMoreRows(lastId).map((row) => ({
          ...row,
          // Updated to current date and time
        })),
      ]);
      setIsLoading(false);
      setIsViewAllDisabled(true);
    }, 1000);
  };

  const renderSortHeader = (params: any) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Poppins",
          fontWeight: 700,
          fontSize: "12px",
          lineHeight: "16px",
          textTransform: "uppercase",
        }}
      >
        <span style={{ marginRight: "4px" }}>{params.colDef.headerName}</span>
        {/* <SwapVertIcon sx={{ fontSize: 16, color: "#383E4C" }} /> */}
        <img
          src={SwapVertIcon}
          alt={""}
          // style={{ width: "22.37px", height: "13.75px" }}
        />
      </div>
    );
  };

  const columns: GridColDef[] = [
    {
      field: "propertyName",
      headerName: "PROPERTY NAME",
      flex: 1,
      minWidth: 140,
      sortable: true,
      renderHeader: renderSortHeader,
    },
    {
      field: "address",
      headerName: "ADDRESS",
      flex: 1,
      minWidth: 140,
      sortable: false,
    },
    {
      field: "phone",
      headerName: "PHONE",
      flex: 1,
      minWidth: 140,
      sortable: false,
    },
    {
      field: "businessHours",
      headerName: "BUSINESS HOURS",
      flex: 1,
      minWidth: 140,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          {" "}
          {/* Removed maxHeight and overflow */}
          {params.value}
          {params.value === "Present" && (
            // <ErrorIcon sx={{ color: "#556EE6", fontSize: 16 }} />
            <img
              src={ErrorIcon}
              alt={""}
              style={{ width: "20px", height: "20px" }}
            />
          )}
        </div>
      ),
    },
    {
      field: "category",
      headerName: "CATEGORY",
      flex: 1,
      minWidth: 140,
      sortable: false,
    },
    {
      field: "website",
      headerName: "WEBSITE",
      flex: 1,
      minWidth: 140,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          {" "}
          {/* Removed maxHeight and overflow */}
          {params.value}
          {params.value === "Available" && (
            // <LaunchIcon sx={{ color: "#3464EB", fontSize: 16 }} />
            <img
              src={LaunchIcon}
              alt={""}
              style={{ width: "18.01px", height: "18.01px" }}
            />
          )}
        </div>
      ),
    },
    {
      field: "mismatched",
      headerName: "MISMATCHED",
      flex: 1,
      minWidth: 140,
      sortable: true,
      renderHeader: renderSortHeader,
      renderCell: (params: GridRenderCellParams) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
             paddingLeft:"19px",
            gap: "14px",
            whiteSpace: "normal",
            wordBreak: "break-word",
            color: params.value > 0 ? "#3464EB" : " #6B6D82",
          }}
        >
          {" "}
          {/* Removed maxHeight and overflow */}
          {params.value}
          {(params.value === 2 || params.value === 7 || params.value === 8) && (
            // <ReportIcon sx={{ color: "#F46A6A", fontSize: 16 }} />
            <img
              src={ReportIcon}
              alt={""}
              style={{ width: "20px", height: "20px" }}
            />
          )}
        </div>
      ),
    },
    {
      field: "missing",
      headerName: "MISSING",
      flex: 1,
      minWidth: 140,
      sortable: true,
      renderHeader: renderSortHeader,
      renderCell: (params: GridRenderCellParams) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
             paddingLeft:"19px",
            gap: "14px",
            whiteSpace: "normal",
            wordBreak: "break-word",
            color: params.value > 0 ? "#3464EB" : " #6B6D82",
          }}
        >
          {" "}
          {/* Removed maxHeight and overflow */}
          {params.value}
          {(params.value ===2 || params.value ===5 || params.value ===6 || params.value ===9) && (
            // <ReportIcon sx={{ color: "#F46A6A", fontSize: 16 }} />
            <img
              src={ReportIcon}
              alt={""}
              style={{ width: "20px", height: "20px" }}
            />
          )}
        </div>
      ),
    },
    {
      field: "lastUpdate",
      headerName: "LAST UPDATE DATE & TIME",
      flex: 1,
      minWidth: 200,
      sortable: true,
      renderHeader: renderSortHeader,
      renderCell: (params: GridRenderCellParams) => {
        const { missing } = params.row;
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            alignItems: "center",
             paddingLeft:"15px",
              gap: "14px",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              color: (missing ===0 || missing===8) ? "#3464EB" : " #6B6D82",
            }}
          >
            {" "}
            {/* Removed maxHeight and overflow */}
            {params.value}
            {(missing ===0 || missing===8 ||missing===1) && (
              // <ReportIcon sx={{ color: "#F46A6A", fontSize: 16 }} />
              <img
                src={ReportIcon}
                alt={""}
                style={{ width: "20px", height: "20px" }}
              />
            )}
          </div>
        );
      },
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: "0 auto",
        background: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        fontFamily: "Poppins",
        fontSize: "12px",
      }}
    >
      {isLoading && rows.length === 0 ? (
        <div style={{ height: "80vh", overflowY: "auto" }}>
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <SkeletonRow
                key={`skeleton-cell-${index}-${Math.random().toString(36)}`}
              />
            ))}
        </div>
      ) : (
        <div style={{ height: "calc(100% - 50px)" }}>
          <StyledDataGrid
            // disableExtendRowFullWidth={true}
            apiRef={apiRef}
            rows={rows}
            columns={columns}
            disableRowSelectionOnClick
            getRowHeight={() => "auto"} // Allow dynamic row height based on content
            hideFooter
            sortingMode="client"
            disableColumnMenu
            loading={isLoading && rows.length > 0}
            sx={{
              overflowY: "auto",
              "& .MuiDataGrid-virtualScroller": {
                overflowY: "auto !important",
              },

              "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus": {
                outline: "none",
              },
              "& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-cell:focus-within":
                {
                  outline: "none",
                },

              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#cbd5e1",
                borderRadius: "6px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#a0aec0",
              },

              "& .MuiDataGrid-cellEmpty": {
                display: "none",
              },
            }}
          />
          <div
            style={{
              textAlign: "right",
              marginTop: "8px",
              padding: "2px 16px",
              color: "#0DA9DE",
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: 400,
              cursor: isViewAllDisabled ? "not-allowed" : "pointer",
              opacity: isViewAllDisabled ? 0.5 : 1,
            }}
            onClick={addMoreRows}
          >
            View All
          </div>
        </div>
      )}
    </div>
  );
};

export default TableComponent;
