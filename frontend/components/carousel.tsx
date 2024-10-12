"use client";
import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { useEffect, useState } from "react";

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
      {data.map((recipe: any) => {
        return (
          <Carousel.Item>
            <div className="h-[80vh] ">
              <Image
                src={recipe.imageLink}
                alt="Spooky Cookies"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}

      {/* <Carousel.Item>
        <div className="h-[80vh] ">
          <Image
            src="/static/spookycookies.jpg"
            alt="Spooky Cookies"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="h-[80vh]">
          <Image
            src="/static/spookycookies.jpg"
            alt="Spooky Cookies"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="h-[80vh]">
          <Image
            src="/static/spookycookies.jpg"
            alt="Spooky Cookies"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}
