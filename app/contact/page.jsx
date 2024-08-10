"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
<<<<<<< HEAD
=======
import { Textarea } from "@/components/ui/textarea";
>>>>>>> c02e956f4660735108214f9b5e298eb7eded86e2
import { Button } from "@/components/ui/button";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "06 17 45 47 07",
        link: "",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "khalilnajib031@gmail.com",
        link: "",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Morocco Rabat",
        description: "Rabat, Morocco",
        link: "",
    },
];

const contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }} // Start invisible
            animate={{ opacity: 1, transition: { delay: 2, duration: 0.5, ease: "easeIn" } }}
            className="p-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px] ">
                    <div className="xl:h[56%] order-1 xl:order-none xl:w-1/2 ">
                        <form className="flex flex-col gap-4 p-12 bg-[#27272c] sm:h-[550px]  rounded-2xl ">
                            <h3 className="text-4xl text-accent">Wanna Work Together</h3>
                            <p className="text-white-50">
                                Let&apos;s connect! Fill out this form and I&apos;ll get back to you soon.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                                <Input type="text" placeholder="First Name" />
                                <Input type="text" placeholder="Last Name" />
                                <Input type="email" placeholder="Email Address" />
                                <Input type="tel" placeholder="Phone Number" />
                            </div>
                            <Button type="submit" >
                                Submit
                            </Button>
                        </form>
                    </div>


                    <div className="flex-1 flex items-center xl:justify-center order-2 xl:order-none mb-8 xl:mb-0 xl:w-1/2">
                        <div className="flex flex-col gap-4">
                            {info.map((item, index) => (
                                <Link href={item.link} key={index}>
                                    <div className="flex items-center gap-4 hover:text-accent transition-all duration-300">
                                        <div className="text-xl">{item.icon}</div>
                                        <div>
                                            <h4 className="font-medium text-white">{item.title}</h4>
                                            <p className="text-white-50">{item.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default contact;
