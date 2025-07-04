import React from "react";
import { Button, Typography, Box } from "@mui/material";

type CustomButtonProps = {
  text: string;
  number: number;
  width?: number;
  bgColor?: string;
  lineSize?: string;
};

const CustomButton = ({
  text,
  number,
  width = 200,
  bgColor = "#7E66C4",
  lineSize = "79px",
}: CustomButtonProps) => {
  return (
    <Button
      disableElevation
      variant="contained"
      sx={{
        height: "86px",
        minWidth: `${width}px`,
        width: "100%",
        backgroundColor: bgColor,
        borderRadius: "14px",
        padding: "0 24px",
        textTransform: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "Poppins",
        "&:hover": {
          backgroundColor: bgColor,
        },
      }}
    >
      {/* Left: Text + underline */}
      <Box
        sx={{
          maxWidth: "149px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "16px",
            color: "#FFFFFF",
            wordWrap: "break-word",
            textAlign: "left",
            marginTop: "23px",
          }}
        >
          {text}
        </Typography>
        <Box
          sx={{
            width: `${lineSize}`,
            height: "2px",
            backgroundColor: "#BDBECB",
            marginTop: "4px",
          }}
        />
      </Box>

      {/* Right: Number */}
      <Box
        sx={{
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Typography
          sx={{
            fontSize: "50px",
            fontWeight: 600,
            lineHeight: "50px",
            color: "#FFFFFF",
            fontFamily: "Poppins",
          }}
        >
          {number}
        </Typography>
      </Box>
    </Button>
  );
};

export default CustomButton;
