import React, { Component } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import CarouselComponent from "@/components/Carousel";
import PropTypes from "prop-types";
import "../../../app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoriesContext from "@/app/contexts/CategoriesContext";
import { useContext, useEffect, useState } from "react";

export default function RecipeCategory() {
  const router = useRouter();
  const { category, id } = router.query;

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const categories: any = useContext(CategoriesContext);

  const categoryId = router.query.id
    ? parseInt(router.query.id as string, 10)
    : 0;

  useEffect(() => {
    if (categoryId !== null) {
      console.log("TESTE", categoryId);

      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://127.0.0.1:5000/${categoryId + 1}`
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
  }, [categoryId]);

  return (
    <div>
      <section
        id="title"
        className="flex flex-col items-center justify-center border-b-2 border-darkPurple h-[35vh] px-[20%] gap-[16px] mb-[50px]"
      >
        <h1 className="font-body bold text-pumpkinOrange">
          {category} recipes
        </h1>

        <p className="text-darkPurple font-bold text-center">
          {categories[categoryId]?.text}
        </p>
      </section>

      <section id="recipe-cards" className="h-auto w-full">
        {data.map((recipe: any) => {
          return (
            <div className="h-[300px] w-[500px] border-2 border-bloodRed">
              <div
                key={recipe.id}
                className="h-[70%] w-full relative mb-[16px]"
              >
                <Image
                  src={recipe.imageLink}
                  alt={recipe.titulo}
                  fill
                  objectFit="cover"
                />
              </div>

              <h2 className="text-darkPurple font-body bold">
                {recipe.titulo}
              </h2>

              <p className="text-pumpkinOrange font-body ">
                {recipe.descricao}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
