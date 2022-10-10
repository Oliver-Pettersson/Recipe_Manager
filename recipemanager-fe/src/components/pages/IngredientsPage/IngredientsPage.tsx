import { Box, Paper } from "@mui/material";
import React from "react";
import MuiTable from "../../organisms/MuiTable/MuiTable";

export default function IngredientsPage() {
  return (
    <Box sx={{ width: "90%", margin: "auto", paddingTop: 5 }}>
      <Paper sx={{ width: "90%", mb: 2, margin: "auto", backgroundColor: "#37474F", color: "white"  }}>
        <MuiTable
          rows={[
            {
              calories: 150,
              carbs: 60,
              fat: 15,
              protein: 18,
              name: "protein bar",
            },
            {
              calories: 150,
              carbs: 60,
              fat: 15,
              protein: 18,
              name: "protein bar",
            },
            {
              calories: 150,
              carbs: 60,
              fat: 15,
              protein: 18,
              name: "protein bar",
            },
          ]}
        />
      </Paper>
    </Box>
  );
}
