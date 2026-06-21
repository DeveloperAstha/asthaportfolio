"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32 ">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Latest Works</h2>
              <p className="text-xl text-orange-500">( 04 )</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              <div className="flex items-start gap-6"><div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black"><div className="w-1.5 h-1.5 rounded-full bg-black"></div></div><div className="flex-1 flex flex-col gap-2"><h5>Theme: <a href="https://demo.kamleshyadav.com/themeforest/landing-page/miraculous/" target="_blank">Miraculous Theme</a></h5><p className="font-normal"><b>Developed under PixelNX-</b> A music streaming WordPress theme built with Elementor, designed for musicians, artists, and entertainment businesses — to showcase and stream their music. The theme allows visitors to play tracks anytime, offering a seamless audio experience tailored for the music and entertainment industry.</p></div></div>

              <div className="flex items-start gap-6"><div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black"><div className="w-1.5 h-1.5 rounded-full bg-black"></div></div><div className="flex-1 flex flex-col gap-2"><h5>Theme: <a href="https://demo.kamleshyadav.com/themeforest/landing-page/madicalequipment/" target="_blank">Medical Equipment</a></h5><p className="font-normal"><b>Developed under PixelNX-</b> Medical Equipment — eCommerce Elementor WordPress Theme is an eCommerce WordPress theme built for healthcare and medical businesses — including hospitals, clinics, pharmacies, medical suppliers, and clinical laboratories — to sell medical equipment, supplements, and pharmaceutical products online.</p></div></div>

              <div className="flex items-start gap-6"><div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black"><div className="w-1.5 h-1.5 rounded-full bg-black"></div></div><div className="flex-1 flex flex-col gap-2"><h5>Theme: <a href="https://demo.kamleshyadav.com/themeforest/landing-page/astrologer/" target="_blank">Astrology Theme</a></h5><p className="font-normal"><b>Developed under PixelNX-</b> Astrologer - Horoscope and Palmistry WordPress Theme is an attractive and intriguing WordPress Theme for Astrologers. This Theme comes with Elegant and very Detailed Home Pages with neat slider animations.</p></div></div>
              <div className="flex items-start gap-6"><div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black"><div className="w-1.5 h-1.5 rounded-full bg-black"></div></div><div className="flex-1 flex flex-col gap-2"><h5>Theme: <a href="https://demo.kamleshyadav.com/templatemonster/landingpage/moto-landing/" target="_blank">MOTO Theme</a></h5><p className="font-normal"><b>Developed under PixelNX-</b> Moto has launched with customization tools like never before. Explore some of the best themes and templates at Moto equipped with top-notch tools and features that will help you create your dream website without any technical expertise.</p></div></div>

              <div className="flex items-start gap-6"><div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black"><div className="w-1.5 h-1.5 rounded-full bg-black"></div></div><div className="flex-1 flex flex-col gap-2"><h5>Plugin: <a href="https://demo.kamleshyadav.com/plugin/healthpro/" target="_blank">Healthpro Plugin</a></h5><p className="font-normal"><b>Developed under PixelNX-</b> This plugin is ideal for physicians, healthcare institutions, hospitals, yoga fitness centres, and yoga studios. It calculates calorie intake, water intake, and BMI and shows results in graphical format.</p></div></div>
              <div className="flex items-start gap-6"><div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black"><div className="w-1.5 h-1.5 rounded-full bg-black"></div></div><div className="flex-1 flex flex-col gap-2"><h5>Plugin: <a href="https://demo.kamleshyadav.com/plugin/pixel-form/" target="_blank">Pixel Form</a></h5><p className="font-normal"><b>Developed under PixelNX-</b> Pixel FormBuilder Plugin! powerful plugin that allows website owners to create any type of form like contact form, subscription form, optin form lead pages, landing pages.</p></div></div>

              <div className="flex items-start gap-6"><div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black"><div className="w-1.5 h-1.5 rounded-full bg-black"></div></div><div className="flex-1 flex flex-col gap-2"><h5>Plugin: <a href="https://github.com/DeveloperAstha/CleanPress-Plugin" target="_blank">CleanPress WP Plugin</a></h5><p className="font-normal"> CleanPress is a lightweight WordPress plugin that helps you control and limit post revisions, preventing unnecessary database bloat. It lets you set custom revision limits and clean up existing revisions with a single click. Ideal for keeping your WordPress database fast, optimized, and easy to manage.</p></div></div>
              {/* {workData?.map((value: any, ind
              ex: any) => {
                return (
                  <div
                    key={index}
                    className="group flex flex-col gap-3 xl:gap-6"
                  >
                    <div className="relative">
                      <Image
                        src={getImgPath(value?.image)}
                        alt="image"
                        width={570}
                        height={414}
                        className="rounded-lg w-full h-full object-cover"
                      />
                      <Link
                        onClick={(e) => e.preventDefault()}
                        href={"#!"}
                        className="absolute top-0 left-0 backdrop-blur-xs bg-primary/15 w-full h-full hidden group-hover:flex rounded-lg"
                      >
                        <span className="flex justify-center items-center p-5 w-full">
                          <svg
                            width="65"
                            height="64"
                            viewBox="0 0 65 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.333374"
                              width="64"
                              height="64"
                              rx="32"
                              fill="#FE4300"
                            />
                            <path
                              d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                              stroke="#FFFF"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Link>
                    </div>
                    <div className="flex flex-col gap-0 xl:gap-2">
                      <div className="flex items-center justify-between">
                        <Link href={`${value.slug}`}>
                          <h5>{value?.title}</h5>
                        </Link>
                        <Image
                          src={getImgPath("/images/icon/right-arrow-icon.svg")}
                          alt="right-arrow-icon"
                          width={30}
                          height={30}
                        />
                      </div>
                      <p>Client: {value?.client}</p>
                    </div>
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
