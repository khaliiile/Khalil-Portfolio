"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4, ease: "easeIn" } }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: "easeInOut" } }}
                    className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] mix-blend-lighten"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="/assets/khalil.png"
                            quality={100}
                            className="object-contain"
                            fill
                            alt="profile picture"
                            loading="lazy"
                        />
                    </div>
                </motion.div>
                <motion.svg
                    className="w-[200px] md:w-[300px] xl:w-[400px] absolute top-0 left-0"
                    fill="transparent"
                    viewBox="0 0 400 400"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="200"
                        cy="200"
                        r="210"
                        stroke="#4343EC"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: 20,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;