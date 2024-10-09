import React, { Component } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import "../app/globals.css";

export default function Recipes() {
  return (
    <div>
      <section id="title" className="recipe-heading-footer">
        Spooky Halloween cookies
      </section>

      <section id="recipe-image" className="relative">
        <Image
          src="/static/spookycookies.jpg"
          alt="Spooky Cookies"
          layout="fill"
          objectFit="cover"
        />
      </section>

      <section id="recipe" className="flex">
        <div id="ingredients" className="w-1/4 h-[500px] bg-red-500">
          <h2>Ingredients</h2>
          <ul>
            <li>125g/4½oz unsalted butter, softened</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div id="instructions" className="w-3/4 h-[850px] bg-cyan-500">
          <h2>Cooking instructions</h2>
        </div>
      </section>
    </div>
  );
}
