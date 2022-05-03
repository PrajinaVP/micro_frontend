import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      // ToDo - Need to remove min and max height in material table
      style={{
        position: "relative",
        bottom: "0",
        width: "100%",
      }}
    >
      <Divider />
      <Box
        sx={{
          display: "flex",
          padding: "32px 10px !important",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          backgroundColor: "#EDEDED",
          height: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
          }}
        >
          © {new Date().getFullYear()} Micro Frontend Demo
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
