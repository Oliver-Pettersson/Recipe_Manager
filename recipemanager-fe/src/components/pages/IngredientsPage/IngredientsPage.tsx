import { Box, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useData } from "../../../contexts/DataContext";
import Food from "../../../types/Food/Food";
import CreateIngredientDialog from "../../organisms/CreateIngredientDialog/CreateIngredientDialog";
import MuiTable from "../../organisms/MuiTable/MuiTable";

export default function IngredientsPage() {
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const {ingredients, userIngredients} = useData()
  const [rows, setRows] = useState<Food[]>([])
  const [userRows, setUserRows] = useState<Food[]>([])
  
  useEffect(() => {
    setRows(ingredients)
  }, [ingredients])

  useEffect(() => {
    setUserRows(userIngredients)
  }, [userIngredients])
  

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
          handleSearch={(value) => setUserRows(userIngredients.filter((row) => row.name.includes(value)))}
            addIconOnClick={() => {
              setOpenCreateDialog(true);
            }}
            tableTitle="Own Ingredients"
            headCells={[
              {
                id: "name",
                numeric: false,
                disablePadding: true,
                label: "Ingredient (100g serving)",
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
            rows={userRows}
          />
        </Paper>
      </Box>
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
          handleSearch={(value) => setRows(ingredients.filter((row) => row.name.includes(value)))}
            addIconOnClick={() => {
              setOpenCreateDialog(true);
            }}
            tableTitle="Ingredients"
            headCells={[
              {
                id: "name",
                numeric: false,
                disablePadding: true,
                label: "Ingredient (100g serving)",
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
