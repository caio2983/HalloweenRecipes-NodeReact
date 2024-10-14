import React, { Component } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import CarouselComponent from "@/components/Carousel";
import PropTypes from "prop-types";
import "../../../app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoriesContext from "@/app/contexts/CategoriesContext";
import { useContext, useEffect, useState } from "react";
import { Recipe } from "@/app/interfaces/Recipe";

export default function RecipePage() {
  const router = useRouter();
  const { recipetitulo, recipeid } = router.query;
  const [data, setData] = useState<Recipe[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const recipeId = router.query.recipeid
    ? parseInt(router.query.recipeid as string, 10)
    : 0; // Quando o client entra na página da categoria, router.query.recipeid ainda não está definido

  useEffect(() => {
    if (recipeId !== null) {
      console.log("TESTE", recipeId);

      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://127.0.0.1:5000/recipe/${recipeId}`
          );

          if (!response.ok) {
            throw new Error("Error in network response");
          }

          const result = await response.json();
          setData(result);
          console.log(result);
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [recipeId]);

  return (
    <div className="">
      <section
        id="title"
        className="recipe-heading-footer text-pumpkinOrange font-title"
      >
        <h2>{data.length > 0 ? data[0].titulo : "Loading..."}</h2>
      </section>

      <section id="recipe-image" className="relative mb-[64px]">
        {data.length > 0 && (
          <Image
            src={data[0].imageLink}
            alt="Spooky Cookies"
            layout="fill"
            objectFit="cover"
          />
        )}
      </section>

      <section
        id="recipe-description"
        className="flex flex-col gap-[50px] items-center h-auto mb-[64px]"
      >
        <p className="font-body text-bloodRed px-[10%] text-xl text-center font-bold">
          {data.length > 0 && data[0].descricao}
        </p>
        <span className="block h-[2px] bg-bloodRed w-[30%] "></span>
      </section>

      <section id="recipe" className="flex px-[5%]">
        <div
          id="ingredients"
          className="w-1/2 h-[500px] flex flex-col items-center px-[2%] mb-[64px]"
        >
          <h3 className="text-darkPurple font-title font-bold mb-[32px]">
            Ingredients
          </h3>
          <ul className="p-0">
            {data.length > 0 &&
              data[0].ingredientes.map((ingredient: any) => {
                return (
                  <li className="flex flex-col gap-[8px] " key={ingredient[0]}>
                    <h4 className="text-pumpkinOrange font-body self-center mb-[32px] ">
                      {ingredient[0]}
                    </h4>
                    {ingredient.slice(1).map((item: string, index: number) => {
                      return (
                        <p key={index} className="text-white font-body">
                          {item}
                        </p>
                      );
                    })}
                  </li>
                );
              })}
          </ul>
        </div>

        <div
          id="instructions"
          className="w-1/2 h-[850px] flex flex-col items-center"
        >
          <h3 className="text-darkPurple font-title font-bold mb-[64px]">
            Cooking instructions
          </h3>

          <ul>
            {data.length > 0 &&
              data[0].instructions.map((instruction: any) => {
                return (
                  <li
                    className="flex flex-col gap-[16px] "
                    key={instruction[0]}
                  >
                    {/* <p className="text-pumpkinOrange font-body self-center ">
                    {instruction[0]}
                  </p> */}
                    {instruction.slice(0).map((item: string, index: number) => {
                      return (
                        <p key={index} className="text-white font-body">
                          {item}
                        </p>
                      );
                    })}
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    </div>
  );
}
