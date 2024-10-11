"use client";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

export default function CarouselComponent() {
  return (
    <Carousel className="border-b-2 border-darkPurple ">
      <Carousel.Item>
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
      </Carousel.Item>
    </Carousel>
  );
}
