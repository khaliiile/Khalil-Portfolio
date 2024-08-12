"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
    title: "About Me",
    description: "I'm a full-stack developer with a passion for technology and design. I've worked on various projects, from small websites to large-scale applications.",
    info: [
        {
            fieldlName: "FullName",
            fieldlValue: "Khalil Najib",
        },
        {
            fieldlName: "experience",
            fieldlValue: "3 years ",
        },
        {
            fieldlName: "Freelancer",
            fieldlValue: "Available",
        },
        {
            fieldlName: "languages",
            fieldlValue: "English,French,Arabic",
        },
        {
            fieldlName: "Email",
            fieldlValue: "KhalilNajib031@gmail.com",
        },
        {
            fieldlName: "Phone",
            fieldlValue: "+212 617 454707",
        },
    ],
};

const experience = {
    icon: '/assets/resume/badge.svg',
    title: "Experience",
    description: "A summary of my professional background ",
    items: [
        {
            company: "Directorate of Modernization and Information Systems",
            position: "Senior full-stack developer",
            duration: "2022 - 2023",
        },
        {
            company: "formation Online Development",
            position: "full stack developer",
            duration: "2022 - 2024",
        },
    ],
};

const education = {
    icon: '/assets/resume/cap.svg',
    title: "Education",
    description: "A summary of my academic background",
    items: [
        {
            institution: "Jaber Iben Hyan   ", 
            degree: "Baccalaureate Degree physical science", 
            duration: "2021",
        },
        {
            institution: "Specialized Institute of Applied Technology Sala Aljadida", 
            degree: "  Digital Development with Full Stack Web Option",
            duration: "2023",
        },
    ],
};
const skills = {
    title: "Skills",
    description: "A summary of my technical skills and experience.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS3",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <FaDatabase />,
            name: "SQL",
        },
    ],
};

const resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col  xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full ">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap[30px] text-center xl:text-left ">
                                <h3 className="text-4xl font-bold mb-3 ">{experience.title}</h3>
                                <p className="max-w-[600px] text-white mx-auto xl:mx-0 mb-4 ">{experience.description}</p>
                                <ScrollArea className="h-[400px] ">
                                    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        {experience.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#232329]  h-[215px] rounded-xl flex flex-col items-start justify-between px-6 py-4 shadow-md transition-all duration-200 ease-in-out hover:scale-105 cursor-none"
                                            >
                                                <div>
                                                    <h3 className="text-lg font-medium text-accent ">{item.position}</h3>
                                                    <p className="text-gray-100 mt-2">{item.company}</p>
                                                </div>
                                                <span className="text-gray-200">{item.duration}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap[30px] text-center xl:text-left ">
                                <h3 className="text-4xl font-bold mb-3 ">{education.title}</h3>
                                <p className="max-w-[600px] text-white mx-auto xl:mx-0 mb-4 ">{education.description}</p>
                                <ScrollArea className="h-[400px] ">
                                    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2"> {/* Two-column grid for medium screens and up */}
                                        {education.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#232329]      h-[215px] rounded-xl flex flex-col items-start justify-between px-6 py-4 shadow-md transition-all duration-200 ease-in-out hover:scale-105 cursor-none"
                                            >
                                                <div>
                                                    <h3 className="text-lg font-medium text-accent mt-2 ">{item.degree}</h3>
                                                    <p className="text-gray-100 mt-2" >{item.institution}</p>
                                                </div>
                                                <span className="text-gray-200 mt5">{item.duration}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip content={skill.name}>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-3xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-2">
                                                <span className="text-accent ">{item.fieldlName}:</span>
                                                <span>{item.fieldlValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default resume;