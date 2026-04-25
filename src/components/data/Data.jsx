import React from "react";
import CoursesImage1 from "../../images/home-image.png";
import ScholerImage from "../../images/scholership.png";

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

const mockCompetitionsProduct = () => [
  {
    id: 1,
    image: ScholerImage,
    title: "National Scholarship Exam 2026",
    tagline: "Test your knowledge, compete nationwide, and win scholarships!",
    deadline: "30/05/2026",

    whyJoin: [
      "Based on your school syllabus",
      "Improve your skills and confidence",
      "Compete with students across the country",
      "Opportunity to win Scholarships, Certificates & Course Access",
    ],

    examStructure: {
      stages: [
        {
          name: "Preliminary Test",
          level: "Basic Level",
        },
        {
          name: "Merit Test",
          level: "Intermediate Level",
        },
        {
          name: "Final Scholarship Exam",
          level: "Advanced Level",
        },
      ],
      mode: "Online",
    },

    subjects: [
      "English",
      "Bangla",
      "Mathematics",
      "Science (Physics, Chemistry, Biology)",
      "ICT / General Knowledge",
    ],

    results: {
      evaluation: "Smart and accurate evaluation system",
      publishTime: "7-14 days",
      features: ["National Merit List", "Leaderboard"],
    },

    rewards: {
      topPerformers: [
        "Cash Scholarships / Stipends",
        "National Rank Certificate",
        "Special Awards & Recognition",
      ],
      allParticipants: [
        "Digital Certificate of Participation",
        "Free / Discounted Online Course Access",
        "Detailed Performance Report",
      ],
    },

    registration: {
      fee: "149 BDT",
      paymentMethods: ["bKash", "Nagad"],
    },

    participationSteps: [
      "Complete Online Registration",
      "Pay the Entry Fee",
      "Receive Confirmation / Admit Card",
      "Join the Exam as per schedule",
    ],

    features: [
      "Personal Student Dashboard",
      "Live Exam Timer",
      "Instant Score Preview",
      "Nationwide Leaderboard",
      "Mobile-Friendly Platform",
    ],

    slogans: [
      "Your Talent, Your Scholarship",
      "Learn, Compete, Achieve",
      "Start Today, Win Tomorrow",
    ],
  },
];

const mockJobsProduct = () => [
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
      competitionsdata: mockCompetitionsProduct(),
      jobsdata: mockJobsProduct(),
    });
  });
}
