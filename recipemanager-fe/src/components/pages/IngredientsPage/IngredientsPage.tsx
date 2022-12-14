import { Box, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useData } from "../../../contexts/DataContext";
import IngredientsService from "../../../services/IngredientsService";
import Food from "../../../types/Food/Food";
import CreateIngredientDialog from "../../organisms/CreateIngredientDialog/CreateIngredientDialog";
import MuiTable from "../../organisms/MuiTable/MuiTable";

export default function IngredientsPage() {
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const {ingredients, userIngredients} = useData()
  const [rows, setRows] = useState<Food[]>([])
  const [userRows, setUserRows] = useState<Food[]>([])
  const {refreshIngredients} = useData()
  
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
            deleteFunction={(id: string) => {
              IngredientsService().deleteById(id).then(() => refreshIngredients())
            }}
            headCells={[
              {
                id: "name",
                numeric: false,
                disablePadding: true,
                label: "IngredientÂ (100g serving)",
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
                label: "FatÂ (g)",
              },
              {
                id: "carbs",
                numeric: true,
                disablePadding: false,
                label: "CarbsÂ (g)",
              },
              {
                id: "protein",
                numeric: true,
                disablePadding: false,
                label: "ProteinÂ (g)",
              },
              {
                id: "id",
                numeric: true,
                disablePadding: false,
                label: "",
              }
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
                label: "IngredientÂ (100g serving)",
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
                label: "FatÂ (g)",
              },
              {
                id: "carbs",
                numeric: true,
                disablePadding: false,
                label: "CarbsÂ (g)",
              },
              {
                id: "protein",
                numeric: true,
                disablePadding: false,
                label: "ProteinÂ (g)",
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
