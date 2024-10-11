"use client";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

class CategoryCard extends Component {
  render() {
    return (
      <div className="w-[45vw] h-[70vh] border-2 border-darkPurple">
        <div className="h-[70%] w-full relative">
          <Image
            src="/static/spookycookies.jpg"
            alt="Spooky Cookies"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    );
  }
}

export default CategoryCard;
