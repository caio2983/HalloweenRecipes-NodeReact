"use client";

import { createContext, useState, ReactNode } from "react";

const CategoriesContext = createContext<any[]>([]);

interface CategoriesProviderProps {
  children: ReactNode;
}

export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
  // Dados usados pela UI nos cards de categorias e links para as páginas de categorias

  const [categories] = useState([
    {
      title: "Cakes",
      description:
        "Spooky cakes that are as tasty as they are terrifyingly creative.",
      link: "/recipeCategory/Cake/3",
      text: "Sink your teeth into terrifyingly creative cakes that will steal the show! These spooky cakes are not only fun to look at but also irresistibly delicious for every Halloween gathering.",
      thumb:
        "https://images.immediate.co.uk/production/volatile/sites/30/2024/08/spiders-web-cake-e9c4b29.gif?quality=90&webp=true&fit=1100,733",
    },

    {
      title: "Snacks",
      description:
        "Quick and creepy snacks to keep the Halloween spirit alive.",
      link: "/recipeCategory/Snack/4",
      text: "Keep the Halloween spirit alive with quick and creepy snacks that everyone will love! From monster bites to spooky chips, these snacks are perfect for keeping your guests satisfied throughout the party.",
      thumb:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/halloween_40352_16x9.jpg",
    },

    {
      id: 1,
      title: "Beverages",
      description:
        "Chilling drinks and potions to serve at your Halloween party.",
      link: "/recipeCategory/Beverage/1",
      text: "Get ready to brew some eerie and fun drinks for your Halloween party! From creepy punch bowls to magical potions, our Halloween-themed beverages will thrill guests of all ages. Perfect for adding a spooky touch to your celebration!",
      thumb:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/halloween_punch_45819_16x9.jpg",
    },
    {
      title: "Desserts",
      description:
        "Frightfully fun desserts that are perfect for your spooky celebration.",
      link: "/recipeCategory/Dessert/2",
      text: "Prepare for spine-chilling desserts that will leave your guests craving more! From haunted cupcakes to ghostly puddings, these desserts will add a frightfully delicious finish to your Halloween party.",
      thumb:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/blood_orange_halloween_70269_16x9.jpg",
    },
  ]);

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContext;
