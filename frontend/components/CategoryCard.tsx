"use client";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

export default function CategoryCard() {
  return (
    <div className="w-[45vw] h-[70vh]  flex flex-col items-center">
      <div className="h-[70%] w-full relative mb-[16px]">
        <Image
          src="/static/spookycookies.jpg"
          alt="Spooky Cookies"
          fill
          objectFit="cover"
        />
      </div>

      <h2 className="text-darkPurple font-body bold">Sweets</h2>
      <p className="text-pumpkinOrange font-body ">Description</p>
    </div>
  );
}
