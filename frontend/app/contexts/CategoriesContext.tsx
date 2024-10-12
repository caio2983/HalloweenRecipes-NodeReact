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
      title: "Sweets",
      description:
        "Delicious Halloween-themed candies and spooky treats for all ages.",
      link: "/recipeCategory/Sweet/0",
      text: "Get ready to indulge in spooky sweets and candies that will delight everyone at your Halloween party. From ghostly gummies to eerie chocolates, these treats are perfect for adding sweetness to the scare!",
    },
    {
      id: 1,
      title: "Beverages",
      description:
        "Chilling drinks and potions to serve at your Halloween party.",
      link: "/recipeCategory/Beverage/1",
      text: "Get ready to brew some eerie and fun drinks for your Halloween party! From creepy punch bowls to magical potions, our Halloween-themed beverages will thrill guests of all ages. Perfect for adding a spooky touch to your celebration!",
    },
    {
      title: "Desserts",
      description:
        "Frightfully fun desserts that are perfect for your spooky celebration.",
      link: "/recipeCategory/Dessert/2",
      text: "Prepare for spine-chilling desserts that will leave your guests craving more! From haunted cupcakes to ghostly puddings, these desserts will add a frightfully delicious finish to your Halloween party.",
    },
    {
      title: "Cakes",
      description:
        "Spooky cakes that are as tasty as they are terrifyingly creative.",
      link: "/recipeCategory/Cake/3",
      text: "Sink your teeth into terrifyingly creative cakes that will steal the show! These spooky cakes are not only fun to look at but also irresistibly delicious for every Halloween gathering.",
    },
    {
      title: "Snacks",
      description:
        "Quick and creepy snacks to keep the Halloween spirit alive.",
      link: "/recipeCategory/Snack/4",
      text: "Keep the Halloween spirit alive with quick and creepy snacks that everyone will love! From monster bites to spooky chips, these snacks are perfect for keeping your guests satisfied throughout the party.",
    },
  ]);

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContext;
