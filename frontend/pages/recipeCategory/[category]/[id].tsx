import React, { Component } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import CarouselComponent from "@/components/Carousel";
import PropTypes from "prop-types";
import "../../../app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoriesContext from "@/app/contexts/CategoriesContext";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";

export default function RecipeCategory() {
  // [id] : id da categoria de receita
  const router = useRouter();
  const { category, id } = router.query;

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const categories: any = useContext(CategoriesContext);

  const categoryId = router.query.id
    ? parseInt(router.query.id as string, 10)
    : 0; // Quando o client entra na página da categoria, router.query.id ainda não está definido
  //, por isso o código faz essa verificação para que categoryId só seja definido quando router.query.id estiver definido
  // caso contrário o useEffect usa categoryId como NaN

  useEffect(() => {
    if (categoryId !== null) {
      console.log("TESTE", categoryId);

      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://127.0.0.1:5000/${categoryId + 1}`
          ); // Adicionar 1 ao categoryId pra alinhar com o categoriaId do banco de dados

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

      <section
        id="recipe-cards"
        className="h-full w-full flex px-[10%] flex-wrap  justify-around"
      >
        {data.map((recipe: any) => {
          return (
            <Link
              href={`/recipePage/${recipe.titulo}/${recipe.id}`}
              className="no-underline"
            >
              <div className="h-[400px] w-[500px] m-[32px]  ">
                <div
                  key={recipe.id}
                  className="h-[60%] w-full relative mb-[8px]"
                >
                  <Image
                    src={recipe.imageLink}
                    alt={recipe.titulo}
                    fill
                    objectFit="cover"
                  />
                </div>

                <div className="flex flex-col justify-center p-[5%] h-auto">
                  <h2 className="text-darkPurple font-body bold ">
                    {recipe.titulo}
                  </h2>

                  <p className="text-pumpkinOrange font-body line-clamp-3 m-0 ">
                    {recipe.descricao}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
