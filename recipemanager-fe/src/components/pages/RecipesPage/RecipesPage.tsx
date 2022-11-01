import { Box, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useData } from "../../../contexts/DataContext";
import RecipesService from "../../../services/RecipesService";
import Recipe from "../../../types/Recipe/Recipe";
import DisplayRecipeDTO from "../../../types/Recipe/DisplayRecipeDTO";
import CreateRecipeDialog from "../../organisms/CreateRecipeDialog/CreateRecipeDialog";
import DetailedRecipeDialog from "../../organisms/DetailedRecipeDialog/DetailedRecipeDialog";
import MuiTable from "../../organisms/MuiTable/MuiTable";

export default function RecipesPage() {
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [detailsDialog, setDetailsDialog] = useState<{
    isOpen: boolean;
    recipe?: Recipe;
  }>({ isOpen: false, recipe: undefined });
  const defaultRows = [
    {
      id: "b84066b6-74b6-4ebf-b11e-1d00e45e8cf4",
      calories: 150,
      carbs: 60,
      fat: 15,
      protein: 18,
      name: "potein bar",
    },
    {
      id: "10b114f9-e15e-4c13-aa7f-49a8021cacbb",
      calories: 150,
      carbs: 60,
      fat: 15,
      protein: 18,
      name: "protein bar",
    },
    {
      id: "2a0401aa-e257-4f8b-a03e-88fae6f975fa",
      calories: 150,
      carbs: 60,
      fat: 15,
      protein: 18,
      name: "protein bar",
    },
  ];
  const getDetailedRecipe = (value: DisplayRecipeDTO) => {
    return RecipesService().getById(value.id)
  }
  const { recipes, userRecipes } = useData();
  const [rows, setRows] = useState(recipes);
  const [userRows, setUserRows] = useState(userRecipes);
  useEffect(() => {
    console.log("recipes", recipes);
    setRows(recipes)
  }, [recipes]);
  useEffect(() => {setUserRows(userRecipes)}, [userRecipes]);

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
              console.log(row)
              const foundItem = userRecipes.find(
                (userRecipe) => userRecipe.id === row.id
              )
              if (foundItem === undefined) return;
              getDetailedRecipe(foundItem).then((value) => setDetailsDialog({
                isOpen: true,
                recipe: value,
              }))
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
              console.log(row)
              const foundItem = recipes.find(
                (item) => item.id === row.id
              )
              if (foundItem === undefined) return;
              getDetailedRecipe(foundItem).then((value) => setDetailsDialog({
                isOpen: true,
                recipe: value,
              }))
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
        open={detailsDialog.isOpen}
        recipeEntity={detailsDialog.recipe}
        setOpen={(value: boolean) =>
          setDetailsDialog({ isOpen: value, recipe: detailsDialog.recipe })
        }
      />
    </>
  );
}
