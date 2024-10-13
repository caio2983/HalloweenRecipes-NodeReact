import React, { Component } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import CarouselComponent from "@/components/Carousel";
import PropTypes from "prop-types";
import "../../../app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoriesContext from "@/app/contexts/CategoriesContext";
import { useContext, useEffect, useState } from "react";

export default function RecipePage() {
  const router = useRouter();
  const { recipetitulo, recipeid } = router.query;

  const [data, setData] = useState([]);
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

  return <div></div>;
}
