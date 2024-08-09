"use client";
import Link from 'next/link';
import { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {  BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import WorkSliderBtns from "@/components/WorkSliderBtns";


const projects = [
    {
        num: "01",
        category: "front-end",
        title: "Portfolio Website",
        description: "A responsive Next.js website with Framer Motion and Tailwind CSS",
        stack: [
            { name: "Next.js" },
            { name: "Tailwind CSS" },
            { name: "Framer Motion" },
        ],
        image: "/assets/work/project1.png",
        live: "https://khaliiile.github.io/MyPortfoliio/",
        github: "https://github.com/khaliiile/MyPortfoliio",
    },
    {
        num: "02",
        category: "front-end",
        title: "Portfolio Website",
        description: "A modern, responsive website created using HTML, CSS, and Bootstrap. The project leverages the power of these technologies to deliver a clean and user-friendly interface that adapts seamlessly to various devices and screen sizes." +
            "",
        stack: [
            { name: "Html" },
            { name: " CSS" },
            { name: "bootstrap" },
        ],
        image: "/assets/work/project2.png",
        live: "https://khaliiile.github.io/hospital/",
        github: "https://github.com/khaliiile/hospital",
    },
    {
        num: "03",
        category: "front-end",
        title: "Portfolio Website",
        description: "A modern, responsive website created using HTML, CSS, and Bootstrap. The project leverages the power of these technologies to deliver a clean and user-friendly interface that adapts seamlessly to various devices and screen sizes.",
        stack: [
            { name: "Html" },
            { name: " CSS" },
            { name: "bootstrap" },
        ],
        image: "/assets/work/project3.png",
        live: "https://khaliiile.github.io/restaurant/",
        github: "https://github.com/khaliiile/restaurant",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handelSlideChange = (swiper) => {
        const currentSlide = swiper.activeIndex;
        setProject(projects[currentSlide]);
    };
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 ,transition: { delay: 2, duration: 0.5, ease: "easeIn"}}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            <div>
                                <div className="text-4xl leading-none font-extrabold text-transparent text-outline">
                                    {project.num}
                                </div>
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white">
                                {project.category} Project
                            </h2>
                            <p className="text-white/40">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => (
                                    <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <Link href={project.live} target='_blank'>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger
                                                    className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsArrowUpRight
                                                        className="text-white text-3xl group-hover:text-accent"/>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <a>Live Project</a>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                </div>
                                <div>
                                    <Link href={project.github}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger
                                                    className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>GitHub Repository</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper spaceBetween={30}
                                slidesPerView={1}
                                className="xl-[520px] mb-12"
                                onSlideChange={handelSlideChange}
                        >
                            {projects.map((item, index) => {
                                return <SwiperSlide key={index} className='w-full  '>
                                    <div className='h-[350px] w-full relative group flex justify-center items-center'>
                                        <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                                        <div className='absolute w-full h-full '>
                                            <Image
                                                src={item.image}
                                                layout='fill'
                                                alt='Project picture'

                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>

                            })}

                           <div className='mb-14'>
                               <WorkSliderBtns containerStyle=' flex gap-2 absolute right-0  xl:bottom-0 z-20 w-full
                            justify-between xl:w-max xl:justify-none'
                                               btnStyle='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex
                            justify-center items-center transition-all duration-500 rounded-full'
                               />
                           </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;