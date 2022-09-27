import { Box } from "@mui/material";
import React from "react";

export default function CoverImage() {
  return (
    <Box
      component="img"
      width="80%"
      maxHeight="80%"
      sx={{ backgroundColor: "#62727B", display: "block", margin: "auto", objectFit: "cover" }}
      src={"/images/placeholder-image.png"}
    />
  );
}
