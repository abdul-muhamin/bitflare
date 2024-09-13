import React from "react";
import AnimatedLineDiv from "../AnimatedLineDiv"
import Image from "next/image";
const perks = [
  {
    id: 1,
    title: "When good work is done, we are the first to appreciate it.",
    imgSrc: "/images/team.png", // Placeholder path
  },
  {
    id: 2,
    title: "Excellent career growth and get an opportunity to work with experts.",
    imgSrc: "/images/team.png",
  },
  {
    id: 3,
    title: "Flexible working hours and even work from home in some cases.",
    imgSrc: "/images/team.png",
  },
  {
    id: 4,
    title: "Benefits of Insurance, Snacks Bar, and a fitness club.",
    imgSrc: "/images/team.png",
  },
  {
    id: 5,
    title: "We have lots of fun and entertainment by doing sports, dinners and hangouts.",
    imgSrc: "/images/team.png",
  },
  {
    id: 6,
    title: "A Cool and Calm environment so that you can do what you do best.",
    imgSrc: "/images/team.png",
  },
];

const Benifits = () => {
  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
        BENEFITS & PERKS
        </h2>
        <AnimatedLineDiv/>
        <p className="text-lg text-gray-600 mb-10">
        We believe that either your work is the passion,or you are working so that you can follow your passion. Either way, we give the flexibility and support so that you can focus on what you really love
        </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-5">
      {perks.map((perk) => (
        <div key={perk.id} className="rounded overflow-hidden">
          <img
            src={perk.imgSrc}
            alt={perk.title}
            className="w-full h-48 object-cover transition-all hover:scale-150"
          />
          <div className="px-6 py-4">
            <div className="font-semibold text-lg mb-2">{perk.title}</div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </section>
  );
};

export default Benifits;
