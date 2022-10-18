import { Box, Paper } from "@mui/material";
import React, { useState, useRef } from "react";
import CreateIngredientDialog from "../../organisms/CreateIngredientDialog/CreateIngredientDialog";
import MuiTable from "../../organisms/MuiTable/MuiTable";

export default function RecipesPage() {
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const defaultRows = [
    {
      id: "1",
      calories: 150,
      carbs: 60,
      fat: 15,
      protein: 18,
      name: "potein bar",
    },
    {
      id: "1",
      calories: 150,
      carbs: 60,
      fat: 15,
      protein: 18,
      name: "protein bar",
    },
    {
      id: "1",
      calories: 150,
      carbs: 60,
      fat: 15,
      protein: 18,
      name: "protein bar",
    },
    {
      id: "1",
      calories: 150,
      carbs: 60,
      fat: 15,
      protein: 18,
      name: "protein bar",
    },
    {
      id: "1",
      calories: 150,
      carbs: 60,
      fat: 15,
      protein: 18,
      name: "protein bar",
    },
    {
      id: "1",
      calories: 150,
      carbs: 60,
      fat: 15,
      protein: 18,
      name: "protein bar",
    },
    {
      id: "1",
      calories: 150,
      carbs: 60,
      fat: 15,
      protein: 18,
      name: "protein bar",
    },
  ]
  const [rows, setRows] = useState(defaultRows)

  return (
    <>
      <Box sx={{ width: "90%", margin: "auto", paddingTop: 5 }}>
        <Paper
          sx={{
            width: "90%",
            mb: 2,
            margin: "auto",
            backgroundColor: "#37474F",
            color: "white",
          }}
        >
          <MuiTable
            addIconOnClick={() => {
              setOpenCreateDialog(true);
            }}
            tableTitle="Recipes"
            handleSearch={(value) => setRows(defaultRows.filter((row) => row.name.includes(value)))}
            headCells={[
              {
                id: "name",
                numeric: false,
                disablePadding: true,
                label: "Recipe name",
              },
              {
                id: "calories",
                numeric: true,
                disablePadding: false,
                label: "Calories",
              },
              {
                id: "fat",
                numeric: true,
                disablePadding: false,
                label: "Fat (g)",
              },
              {
                id: "carbs",
                numeric: true,
                disablePadding: false,
                label: "Carbs (g)",
              },
              {
                id: "protein",
                numeric: true,
                disablePadding: false,
                label: "Protein (g)",
              },
            ]}
            rowOnClick={(row) => {}}
            rows={rows}
          />
        </Paper>
      </Box>
      <CreateIngredientDialog
        open={openCreateDialog}
        setOpen={setOpenCreateDialog}
      />
    </>
  );
}
