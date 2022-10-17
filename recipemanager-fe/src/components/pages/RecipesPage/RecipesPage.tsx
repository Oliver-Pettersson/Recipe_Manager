import { Box, Paper } from "@mui/material";
import React, { useState, useRef } from "react";
import CreateIngredientDialog from "../../organisms/CreateIngredientDialog/CreateIngredientDialog";
import MuiTable from "../../organisms/MuiTable/MuiTable";

export default function RecipesPage() {
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const defaultRows = useRef([
    {
      id: "1",
      calories: 150,
      carbs: 60,
      fat: 15,
      protein: 18,
      name: "cake",
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
      name: "pizza",
    },
    {
      id: "1",
      calories: 150,
      carbs: 60,
      fat: 15,
      protein: 18,
      name: "lasagna",
    },
    {
      id: "1",
      calories: 150,
      carbs: 60,
      fat: 15,
      protein: 18,
      name: "carrot",
    },
    {
      id: "1",
      calories: 150,
      carbs: 60,
      fat: 15,
      protein: 18,
      name: "pudding",
    },
    {
        id: "1",
        calories: 150,
        carbs: 60,
        fat: 15,
        protein: 18,
        name: "pudding",
      },
    {
      id: "1",
      calories: 150,
      carbs: 60,
      fat: 15,
      protein: 18,
      name: "lamb",
    },
  ])
  const [rows, setRows] = useState(defaultRows.current)


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
            handleSearch={(value) => setRows(defaultRows.current.filter((row) => row.name.includes(value)))}
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
