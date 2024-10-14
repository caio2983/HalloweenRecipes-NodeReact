"use client";
import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CarouselComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/");
        if (!response.ok) {
          throw new Error("Error network repsonse");
        }

        const result = await response.json();
        setData(result);
        console.log(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Carousel className="border-b-2 border-darkPurple ">
      {data.slice(1, 6).map((recipe: any) => {
        return (
          <Carousel.Item>
            <Link
              href={`/recipePage/${recipe.titulo}/${recipe.id}`}
              className="no-underline"
            >
              <div className="h-[80vh] ">
                <Image
                  src={recipe.imageLink}
                  alt="Spooky Cookies"
                  layout="fill"
                  objectFit="cover"
                  className="opacidade"
                />
              </div>

              <Carousel.Caption>
                <h3 className="font-body font-bold m-0 ">{recipe.titulo}</h3>
                <p>
                  <a
                    className="no-underline text-zinc-300 font-body"
                    href={recipe.font[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </a>
                </p>
                <p className="font-body font-bold text-pumpkinOrange">
                  {recipe.descricao}
                </p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          //{" "}
        );
      })}
    </Carousel>
  );
}
