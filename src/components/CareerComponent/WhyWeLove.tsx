"use client";
import React from "react";
import AnimatedLineDiv from "../AnimatedLineDiv";
import { Reason } from "../../utils/interface";
import data from "../../../public/data.json"; // Import JSON data

const WhyWeLoveItHere = () => {
  const reasons: Reason[] = data.reasons; // Access 'reasons' property

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          WHY WE LOVE IT HERE
        </h2>
        <AnimatedLineDiv/>
        <p className="text-lg text-gray-600 mb-10">
          We believe that our employees are our biggest strength, we cannot
          achieve our goals if our team is not on board. That is why we put our
          team first in everything.
        </p>

        <div className="grid grid-cols-1 text-center items-center sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="py-16 px-6 h-[350px] bg-white rounded-lg shadow-lg border"
            >
              <div className={`text-4xl ${reason.color} mb-4`}>{reason.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 mt-2">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWeLoveItHere;
