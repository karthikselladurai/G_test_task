import { Box, Typography } from "@mui/material";

type TabItemProps = {
  label: string;
  number?: number;
  isActive: boolean;
  onClick: () => void;
};

const TabItem = ({ label, number, isActive, onClick }: TabItemProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "relative",
        minWidth: "176px",
        "@media (max-width: 660px)": {
          minWidth: "80px",
          height: "40px",
        },
        height: "48px",
        borderTopLeftRadius: "10px",
        fontSize:"14px",
        padding:"8px",
        borderTopRightRadius: "10px",
        backgroundColor: isActive ? "#fff" : "#EDEDEF",
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
          fontSize: "13px",
          "@media (max-width: 660px)": {
            fontSize: "9px",
          },
          fontWeight: 500,
          color: isActive ? "#C0392B" : "#8F95A3",
        }}
      >
        {label}
      </Typography>
      {typeof number === "number" && (
        <Box
          sx={{
            position: "absolute",
            top: "-8px",
            right: "8px",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: "#C0392B",
            color: "#fff",
            fontSize: "12px",
            fontWeight: 600,
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
