import React from "react";
import { Box, InputBase } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
import SearchIcon from "../asserts/searchIcon.svg";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({ value, onChange }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        minWidth: "231px",
        height: "35px",
        backgroundColor: "#F5F5F5",
        borderRadius: "6px",
        overflow: "hidden",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <InputBase
        value={value}
        onChange={onChange}
        placeholder="Search"
        sx={{
          flex: 1,
          paddingLeft: "12px",
          fontSize: "13px",
          color: "#8F95A3",
          fontFamily: "Poppins",
          "&::placeholder": {
            color: "#8F95A3",
            opacity: 1,
          },
        }}
      />
      <Box
        sx={{
          width: "35px",
          height: "35px",
          backgroundColor: "#8F95A3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTopRightRadius: "6px",
          borderBottomRightRadius: "6px",
        }}
      >
        {/* <SearchIcon
          sx={{
            fontSize: "15px",
            color: "#FFFFFF",
            width: "30px",
            height: "30px",
          }}
        /> */}
        <img
          src={SearchIcon}
          alt={""}
          style={{ width: "14.44px", height: "14.36px" }}
        />
      </Box>
    </Box>
  );
};

export default SearchInput;
