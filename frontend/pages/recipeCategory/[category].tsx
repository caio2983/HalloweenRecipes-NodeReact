import React, { Component } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import "../../components/carousel";
import PropTypes from "prop-types";
import "../../app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RecipeCategory() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <h1>Receitas de {category}</h1>
      <section className="w-1/4 h-1/4"></section>
    </div>
  );
}
