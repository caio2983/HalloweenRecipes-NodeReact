import React from "react";
import Image from "next/image";
import "../app/globals.css";
import Link from "next/link";
import CarouselComponent from "@/components/carousel";

const Home: React.FC = () => {
  return (
    <div>
      <CarouselComponent></CarouselComponent>
      <ul>
        <li>
          <Link href="/recipeCategory/doces">Doces</Link>
        </li>
        <li>
          <Link href="/recipeCategory/bebidas">Bebidas</Link>
        </li>
        <li>
          <Link href="/recipeCategory/sobremesas">Sobremesas</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
