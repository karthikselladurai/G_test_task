import { Box, Typography } from "@mui/material";

type TabItemProps = {
  label: string;
  number?: number;
  isActive: boolean;
  onClick: () => void;
  width?: number;
};

const TabItem = ({ label, number, isActive, onClick, width }: TabItemProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "relative",
        minWidth: `${width}px`,
        "@media (max-width: 660px)": {
          minWidth: "80px",
          height: "40px",
        },
        height: "48px",
        borderTopLeftRadius: "10px",
        fontSize: "14px",
        padding: "8px",
        margin: "1px",
        borderTopRightRadius: "10px",
        backgroundColor: isActive ? "#fff" : "#6B6D8224",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: isActive ? "1px solid #E3E3EC" : "none",
        borderBottom: isActive ? "none" : "1px solid transparent",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "14px",
          "@media (max-width: 660px)": {
            fontSize: "9px",
          },
          fontWeight: 400,
          color: isActive ? "#C2212A" : "#6B6D82",
        }}
      >
        {label}
      </Typography>
      {typeof number === "number" && (
        <Box
          sx={{
            position: "absolute",
            top: "-14px",
            right: "8px",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: "#C0392B",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "Poppins",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {number}
        </Box>
      )}
    </Box>
  );
};

export default TabItem;
