"use client";

import bishop from "@/assets/images/bishops.jpg";
import arnolds from "@/assets/images/arnolds.jpg";
import helenas from "@/assets/images/helena.jpg";
import marrys from "@/assets/images/marry.jpg";
import vibgyor from "@/assets/images/vibgyor.jpg";
import Image from "next/image";
export default function LogoCloud() {
  const SCHOOLS = [
    {
      name: "Bishop's",
      src: bishop,
    },
    {
      name: "Arnold's",
      src: arnolds,
    },
    {
      name: "St Marry's",
      src: marrys,
    },
    {
      name: "Hellena's",
      src: helenas,
    },
    {
      name: "VIBGYOR",
      src: vibgyor,
    },
  ];
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-xl font-semibold text-gray-900">
          Trusted by Leading Educational Institutions
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {SCHOOLS.map((school, index) => {
            return (
              <Image
                key={index}
                alt={school.name}
                src={school.src}
                width={150}
                className="col-span-2 object-contain rounded-full lg:col-span-1"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
