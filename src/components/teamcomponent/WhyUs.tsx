import React from "react";

const WhyUs = () => {
  const stats = [
    { id: 1, label: "Dedicated professionals", value: "25+", icon: "👩‍💻", color: "text-yellow-500" },
    { id: 2, label: "Countries Served", value: "12+", icon: "🌍", color: "text-teal-500" },
    { id: 3, label: "Delivered Projects", value: "260+", icon: "📊", color: "text-pink-500" },
    { id: 4, label: "Years of experience", value: "2+", icon: "📅", color: "text-teal-500" },
    { id: 5, label: "Repeat Client-Ratio", value: "15+", icon: "🔄", color: "text-pink-500" },
    { id: 6, label: "Startups we worked with", value: "10+", icon: "🤝", color: "text-yellow-500" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Us?</h2>
        <p className="text-lg text-gray-600 mb-10">
          Our company has received high accolades and recognition as a leading provider of mobile and web development services by reputable industry experts.
        </p>

        {/* Grid layout for 3 items in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="p-6 bg-white rounded-lg shadow-lg">
              <div className={`text-4xl ${stat.color} mb-4`}>{stat.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
