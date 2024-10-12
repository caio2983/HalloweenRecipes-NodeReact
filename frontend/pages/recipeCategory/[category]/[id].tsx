import React, { Component } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import CarouselComponent from "@/components/Carousel";
import PropTypes from "prop-types";
import "../../../app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoriesContext from "@/app/contexts/CategoriesContext";
import { useContext } from "react";

export default function RecipeCategory() {
  const router = useRouter();
  const { category, id } = router.query;

  const categoryId = parseInt(id as string, 10);

  const categories: any = useContext(CategoriesContext);

  return (
    <div>
      <section
        id="title"
        className="flex flex-col items-center justify-center border-b-2 border-darkPurple h-[35vh] px-[15%] gap-[16px]"
      >
        <h1 className="font-body bold text-pumpkinOrange">
          {category} recipes
        </h1>
        <p className="text-darkPurple text-center">
          {categories[categoryId]?.text}
        </p>
      </section>

      <section className="w-1/4 h-1/4"></section>
    </div>
  );
}
