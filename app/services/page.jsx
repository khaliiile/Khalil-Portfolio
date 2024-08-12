"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
    {
        num: "01",
        title: "Frontend Development",
        desc: "Crafting responsive and interactive interfaces using React.js, Next.js, and modern JavaScript frameworks.",

    },
    {
        num: "02",
        title: "Backend Development",
        desc: "Building robust and scalable server-side applications with Node.js, Express.js, and database integration.",

    },
    {
        num: "03",
        title: "Database Management",
        desc: "Designing, optimizing, and managing databases using MySQL, MongoDB, and other database systems.",

    },
    {
        num: "04",
        title: "DevOps & Cloud",
        desc: "Implementing CI/CD pipelines, containerization, and cloud deployment using Docker, Kubernetes, and AWS.",

    }
];

const Items = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" } }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => (
                        <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 ">
                                    {service.num}
                                </div>
                                <Link
                                    className="w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-90 cursor-none"
                                    aria-label={`Learn more about ${service.title}`}
                                    href='#'
                                >
                                    <BsArrowDownRight className="text-primary text-2xl" />
                                </Link>
                            </div>
                            <h2 className="text-[32px] font-semibold leading-none text-white group-hover:text-accent transition-all duration-500">
                                {service.title}
                            </h2>
                            <p className="text-white/60">{service.desc}</p>
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Items;
