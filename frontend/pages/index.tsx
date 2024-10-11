import React from "react";
import Image from "next/image";
import "../app/globals.css";
import Link from "next/link";
import CarouselComponent from "@/components/carousel";
import CategoryCard from "@/components/categoryCard";
import { useState } from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      <section id="carousel-container" className="py-0 h-[80vh] ">
        <CarouselComponent></CarouselComponent>
      </section>

      <section
        id="home-text"
        className="flex flex-col gap-[50px] items-center h-auto"
      >
        <div className="w-full flex flex-col items-center">
          <div className="relative h-[200px] w-[200px]">
            <Image
              src="/images/ghost.gif"
              fill
              objectFit="cover"
              alt="pumpkin gif"
            ></Image>
          </div>
          <span className="block h-[2px] bg-bloodRed w-[30%] "></span>
        </div>
        <p className="font-body text-bloodRed px-[10%] text-xl text-center font-bold">
          From eerie treats to spooky feasts, this website brings you a
          hauntingly delicious collection of recipes sourced from various
          culinary enthusiasts across the web. Whether you're hosting a ghoulish
          gathering or just getting into the spooky spirit, our curated recipes
          are crafted to bring both thrills and chills to your table. Discover
          an array of frighteningly fun dishes, from devilish desserts to
          monstrous mains. Explore spine-chilling culinary creations that range
          from the wickedly simple to the devilishly elaborate, perfect for your
          next haunted celebration! 🩸
        </p>
      </section>

      <section
        id="recipe-categories"
        className="flex flex-col gap-[50px] items-center h-auto"
      >
        <div className="w-full flex flex-col items-center">
          <h2 className="mb-[16px] text-white font-body font-bold">
            Recipe categories
          </h2>
          <span className="block h-[2px] bg-bloodRed w-[30%] "></span>
        </div>

        <CategoryCard></CategoryCard>

        {/* <div className=" w-[80vw]">
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
        </div> */}
      </section>
    </div>
  );
};

export default Home;
