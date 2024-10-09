import React, { Component } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import PropTypes from "prop-types";
import "../../app/globals.css";

export default function RecipeCategory() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <h1>Receitas de {category}</h1>
    </div>
  );
}
