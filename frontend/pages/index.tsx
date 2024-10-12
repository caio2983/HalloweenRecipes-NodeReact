import React from "react";
import Image from "next/image";
import "../app/globals.css";
import Link from "next/link";
import CarouselComponent from "@/components/Carousel";
import CategoryCard from "@/components/CategoryCard";
import { useState, useEffect, useContext } from "react";
import CategoriesContext from "@/app/contexts/CategoriesContext";

const Home: React.FC = () => {
  const categories: any = useContext(CategoriesContext);

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
        className="flex flex-col gap-[50px] items-center h-auto px-10%"
      >
        <div className="w-full flex flex-col items-center">
          <h2 className="mb-[16px] text-white font-body font-bold">
            Recipe categories
          </h2>
          <span className="block h-[2px] bg-bloodRed w-[30%] "></span>
        </div>

        <div className="flex flex-wrap gap-[32px] justify-center px-[1%]">
          {categories.map((category: any) => {
            return (
              <CategoryCard
                title={category.title}
                description={category.description}
                link={category.link}
              ></CategoryCard>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
