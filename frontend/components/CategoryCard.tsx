"use client";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { CategoryCardProps } from "@/app/interfaces/CategoryCardInterface";
import Link from "next/link";

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="w-[45vw] h-[70vh]  flex flex-col items-center">
      <div className="h-[70%] w-full relative mb-[16px]">
        <Link href={link}>
          <Image
            src="/static/spookycookies.jpg"
            alt="Spooky Cookies"
            fill
            objectFit="cover"
          />
        </Link>
      </div>

      <Link href={link}>
        <h2 className="text-darkPurple font-body bold">{title}</h2>
      </Link>
      <p className="text-pumpkinOrange font-body ">{description}</p>
    </div>
  );
};

export default CategoryCard;
