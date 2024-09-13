import React from "react";
import AnimatedLineDiv from "../AnimatedLineDiv";

const WhyWeLoveItHere = () => {
  const reasons = [
    {
      id: 1,
      title: "Work with brands",
      description: "Collaborating with renowned brands to deliver exceptional solutions and forge lasting partnerships.",
      icon: "👩‍💻", // Placeholder for icon
      color: "text-teal-500",
    },
    {
      id: 2,
      title: "Learn and Grow",
      description: "Fostering a culture of continuous learning, providing ample opportunities for professional development and personal growth.",
      icon: "📚", // Placeholder for icon
      color: "text-yellow-500",
    },
    {
      id: 3,
      title: "Work/Life balance",
      description: "Nurturing a supportive environment that values work-life harmony, empowering our employees to thrive both personally and professionally.",
      icon: "🏡", // Placeholder for icon
      color: "text-pink-500",
    },
    {
      id: 4,
      title: "Cutting edge",
      description: "Embracing the latest advancements in technology, we stay at the forefront of innovation to deliver state-of-the-art solutions that surpass industry standards.",
      icon: "✂️", // Placeholder for icon
      color: "text-teal-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          WHY WE LOVE IT HERE
        </h2>
        <AnimatedLineDiv/>
        <p className="text-lg text-gray-600 mb-10">
          We believe that our employees are our biggest strength, we cannot
          achieve our goals if your team is not on board. That is why we put our
          team first in everything.
        </p>

        <div className="grid grid-cols-1 text-center items-center sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="py-16 px-6 bg-white rounded-lg shadow-lg border"
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
