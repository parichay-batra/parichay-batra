"use client";
import { ACCORDIAN_CATEGORIES } from "@/utils/constants";
import AccordianItem from "./item";
import { useState } from "react";

const Accordian = () => {
  const categories = ACCORDIAN_CATEGORIES;
  const [openIndex, setOpenIndex] = useState<any>(null);
  const handleClick = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <div className="mb-32 w-full md:w-1/2 lg:w-6/12 flex flex-col justify-center p-4 mt-4">
      {categories.map((category, index) => {
        return (
          <AccordianItem
            key={index}
            category_name={category.category_name}
            category_description={category.description}
            url={category.url}
            handleClick={() => handleClick(index)}
            isOpen={openIndex === index ? true : false}
          />
        );
      })}
    </div>
  );
};

export default Accordian;
