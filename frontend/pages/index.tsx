import React from "react";
import Image from "next/image";
import "../app/globals.css";
import Link from "next/link";
import CarouselComponent from "@/components/carousel";
import { useState } from "react";

const Home: React.FC = () => {
  return (
    <div>
      <section id="carousel-container" className="p-32 py-0 h-[80vh]">
        <CarouselComponent></CarouselComponent>
      </section>

      <section id="recipe-categories" className="flex h-[100vh] ">
        <div className=" w-[80vw]">
          <ul className=" flex items-center flex-col justify-around gap-0 px-16 py-8 h-full">
            <div className="border-2 border-black w-full h-1/5">
              <li>
                <Link href="/recipeCategory/doces">Doces</Link>
              </li>
            </div>

            <div className="border-2 border-black w-full h-1/5">
              <li>
                <Link href="/recipeCategory/bebidas">Bebidas</Link>
              </li>
            </div>

            <div className="border-2 border-black w-full h-1/5">
              <li>
                <Link href="/recipeCategory/sobremesas">Sobremesas</Link>
              </li>
            </div>

            <div className="border-2 border-black w-full h-1/5">
              <li>
                <Link href="/recipeCategory/doces">Bolos</Link>
              </li>
            </div>

            <div className="border-2 border-black w-full h-1/5">
              <li>
                <Link href="/recipeCategory/doces">Snacks</Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="w-[20vw] h-full relative">
          <Image
            src="/images/brewing.gif"
            layout="fill"
            objectFit="cover"
            alt="pumpkin gif"
          ></Image>
        </div>
      </section>
    </div>
  );
};

export default Home;
