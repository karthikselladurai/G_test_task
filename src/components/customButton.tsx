import React from "react";
import { Button, Typography, Box } from "@mui/material";

type IconTextButtonProps = {
  text: string;
  icon?: React.ReactNode;
  bgColor?: string;
  onClick?: () => void;
  width?: number | string;
};

const IconTextButton = ({
  text,
  icon,
  bgColor = "#1976d2",
  onClick,
  width = "auto",
}: IconTextButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      disableElevation
      sx={{
        backgroundColor: bgColor,
        borderRadius: "6px",
        height: "35px",
        width: width,
        "@media (max-width: 660px)": {
          width: "140px",
        },
        padding: "0 12px",
        textTransform: "none",
        fontFamily: "Poppins",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        "&:hover": {
          backgroundColor: bgColor,
        },
      }}
    >
      {icon && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          {icon}
        </Box>
      )}
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 400,
          lineHeight: "20px",
          color: "#fff",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {text}
      </Typography>
    </Button>
  );
};

export default IconTextButton;
