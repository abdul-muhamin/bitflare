// src/components/teamcomponent/Benifits.tsx
import React from "react";
import AnimatedLineDiv from "../AnimatedLineDiv";
import Image from "next/image";
import { Perk } from "../../utils/interface";
import perksData from "../../../public/data.json";

const Benifits: React.FC = () => {
  const perks: Perk[] = perksData.perksData; // Access the `perksData` key

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          BENEFITS & PERKS
        </h2>
        <AnimatedLineDiv />
        <p className="text-lg text-gray-600 mb-10">
          We believe that either your work is the passion, or you are working so that you can follow your passion. Either way, we give the flexibility and support so that you can focus on what you really love.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-5">
          {perks.map((perk) => (
            <div key={perk.id} className="rounded overflow-hidden">
              <Image
                src={perk.imgSrc}
                alt={perk.title}
                width={500} // Set appropriate width
                height={300} // Set appropriate height
                className="w-full h-48 object-cover transition-all hover:scale-105"
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
