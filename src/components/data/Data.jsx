import React from "react";
import CoursesImage1 from "../../images/home-image.png";

const mockCoursesProduct = () => [
  {
    id: 1,
    image: CoursesImage1,
    name: "Introduction Web development",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    teacher: "Rajibul Islam",
    listen: "15 Lessons",
    price: "Free",
  },
  {
    id: 2,
    image: CoursesImage1,
    name: "Introduction Web development",
    description:
      "Lorem consequatur quia dolorum nihil ad ipsum officiis? Dolorum.",
    teacher: "Rajibul Islam",
    listen: "15 Lessons",
    price: "Free",
  },
  {
    id: 3,
    image: CoursesImage1,
    name: "Introduction Web development",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    teacher: "Rajibul Islam",
    listen: "15 Lessons",
    price: "$35.0",
  },
  {
    id: 4,
    image: CoursesImage1,
    name: "Introduction Web development",
    description:
      "Lorem consequatur quia dolorum nihil ad ipsum officiis? Dolorum.",
    teacher: "Rajibul Islam",
    listen: "15 Lessons",
    price: "$30.0",
  },
  {
    id: 5,
    image: CoursesImage1,
    name: "Introduction Web development",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    teacher: "Rajibul Islam",
    listen: "15 Lessons",
    price: "Free",
  },
];

export default function Data() {
  return new Promise((resolve) => {
    resolve({
      success: true,
      coursesdata: mockCoursesProduct(),
    });
  });
}
