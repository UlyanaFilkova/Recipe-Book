import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axiosClient from "@/axiosClient.js";

export const useHomeStore = defineStore("homeStore", () => {
  const meals = ref([]);
  const mealsByName = ref([]);
  const mealsByIngredient = ref([]);
  const mealsByLetter = ref([]);

  const searchMealsByName = async (keyword) => {
    const response = await axiosClient.get(`search.php?s=${keyword}`);
    mealsByName.value = response.data.meals;
  };

  const searchMealsByIngredient = async (keyword) => {
    const response = await axiosClient.get(`filter.php?i=${keyword}`);
    mealsByIngredient.value = response.data.meals;
  };

  const searchMealsByLetter = async (keyword) => {
    const response = await axiosClient.get(`search.php?f=${keyword.toLowerCase()}`);
    mealsByLetter.value = response.data.meals;
  };

  return {
    meals,
    mealsByName,
    mealsByIngredient,
    mealsByLetter,
    searchMealsByName,
    searchMealsByIngredient,
    searchMealsByLetter,
  };
});
