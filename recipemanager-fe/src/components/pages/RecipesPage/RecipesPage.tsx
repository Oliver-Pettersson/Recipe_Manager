import { Box, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useData } from "../../../contexts/DataContext";
import CreateRecipeDialog from "../../organisms/CreateRecipeDialog/CreateRecipeDialog";
import DetailedRecipeDialog from "../../organisms/DetailedRecipeDialog/DetailedRecipeDialog";
import MuiTable from "../../organisms/MuiTable/MuiTable";

export default function RecipesPage() {
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
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
  ];
  const { recipes, userRecipes } = useData();
  const [rows, setRows] = useState(defaultRows);
  const [userRows, setUserRows] = useState(defaultRows);
  useEffect(() => {
    console.log(recipes);
  }, [recipes]);
  useEffect(() => {
    
  }, [userRecipes])
  

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
            tableTitle="Own Recipes"
            handleSearch={(value) =>
              setUserRows(defaultRows.filter((row) => row.name.includes(value)))
            }
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
            rowOnClick={(row) => {
              setOpenDetailsDialog(true);
            }}
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
            addIconOnClick={() => {
              setOpenCreateDialog(true);
            }}
            tableTitle="Recipes"
            handleSearch={(value) =>
              setRows(defaultRows.filter((row) => row.name.includes(value)))
            }
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
            rowOnClick={(row) => {
              setOpenDetailsDialog(true);
            }}
            rows={rows}
          />
        </Paper>
      </Box>
      <CreateRecipeDialog
        open={openCreateDialog}
        setOpen={setOpenCreateDialog}
      />
      <DetailedRecipeDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
      />
    </>
  );
}
