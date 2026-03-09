"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";

const bannerVideos = [
    "https://cdn.clinicalvisuals.com/siteImages/bytech/bytec_01.webm",
    "https://cdn.clinicalvisuals.com/siteImages/bytech/bytec_02.webm",
    "https://cdn.clinicalvisuals.com/siteImages/bytech/bytec_03.webm",
    "https://cdn.clinicalvisuals.com/siteImages/bytech/bytec_04.webm",
];

const slides = [
    {
        id: 1,
        title: "Mobile Platforms, you can count on.",
        description: "Bytec Healthcare's medical mobile workstations are engineered to meet the demanding needs of modern healthcare environments.",
    },
    {
        id: 2,
        title: "Efficiency Meets Intelligence",
        description: "Introducing the TSI OmniTrak™ Solution – make your job easier wirelessly connecting modules to help improve indoor space conditions.",
    },
    {
        id: 3,
        title: "Stay Safe In the Face of Wildfire Smoke",
        description: "Wildfires occurring in the wildland-urban interface present a major health hazard for local communities not only outside but also inside buildings.",
    }
];

export default function Hero() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

    return (
        <section
            className="relative w-full overflow-hidden flex items-center justify-center h-screen bg-black"
        >
            <div className="absolute inset-0 z-0">
                <video
                    key={currentVideoIndex}
                    src={bannerVideos[currentVideoIndex]}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                ></video>
            </div>

            {/* Hero Swiper */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                loop={true}
                speed={1000}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true, el: '.custom-pagination' }}
                className="h-full w-full z-20"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        {({ isActive }) => (
                            <div className="container mx-auto px-4 flex flex-col justify-end h-full w-full text-center text-white pb-36">
                                <div className="relative max-w-4xl mx-auto z-20 text-shadow-xl">
                                    <motion.h1
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                        transition={{ duration: 0.8 }}
                                        className="text-2xl md:text-4xl font-bold leading-tight mb-4"
                                    >
                                        {slide.title}
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="text-xs md:text-sm lg:text-base font-light opacity-90 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
                                    >
                                        {slide.description}
                                    </motion.p>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}

                {/* Custom Pagination centered below description */}
                <div className="custom-pagination"></div>
            </Swiper>

            <style jsx global>{`
                .custom-pagination {
                    position: absolute !important;
                    bottom: 6rem !important;
                    left: 0 !important;
                    width: 100% !important;
                    display: flex !important;
                    justify-content: center !important;
                    z-index: 30 !important;
                }
                
                @media (max-width: 768px) {
                    .custom-pagination {
                        bottom: 5rem !important;
                    }
                }
                .custom-pagination .swiper-pagination-bullet {
                    width: 6px;
                    height: 6px;
                    background: rgba(255, 255, 255, 0.4);
                    opacity: 1;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                    margin: 0 5px !important;
                    cursor: pointer;
                }
                .custom-pagination .swiper-pagination-bullet-active {
                    background: #ffffff;
                    width: 6px;
                }
            `}</style>
        </section >
    );
}
