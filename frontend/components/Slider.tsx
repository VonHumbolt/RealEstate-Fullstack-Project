"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Pointer from "./Pointer";
import { motion } from "framer-motion";

function Slider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    if (currentIndex != 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1);
    }
  };

  const nextImage = () => {
    if (currentIndex != images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="rounded-xl relative"
    >
      <ChevronLeft
        className="size-12 text-primary cursor-pointer absolute top-1/2"
        onClick={previousImage}
      />
      <ChevronRight
        className="size-12 text-primary cursor-pointer absolute top-1/2 right-0"
        onClick={nextImage}
      />
      <Image
        src={images[currentIndex]}
        alt="slider_image"
        className="rounded-xl h-[450px] object-cover"
        width={1000}
        height={1000}
      />
      <div className="flex justify-center items-center space-x-2 mt-4">
        {images.map((_, index) => (
          <Pointer key={index} isSelect={currentIndex == index} />
        ))}
      </div>
    </motion.div>
  );
}

export default Slider;
