import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import DownloadCVButton from "@/app/DownloadCVButton";


const Home = () => {
    return (
        <section className=" flex flex-col justify-between">
            <div className="container mx-auto flex-grow">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-3xl">Full-Stack Developer</span>
                        <h1 className="h2 mt-4">
                            Hello, I&apos;m <br /> <span className="text-accent font-semibold">Khalil Najib</span>
                        </h1>
                        <p className="max-w-[600px] mt-6 text-white/95">
                            I am a passionate Full-Stack developer with a strong background
                            in JavaScript, React, and Node.js. I am currently looking for
                            new opportunities.
                        </p>
                        <div className="flex flex-col xl:flex-row items-center mt-12 gap-8">
                            <Button
                                variant="outline"
                                size="lg"
                                className="p-7 uppercase flex items-center gap-2"
                                aria-label="Download CV"
                            >
                                <DownloadCVButton />
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Social
                                    containerStyles="flex gap-2"
                                    iconStyles="w-11 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-white transition-all duration-500 mx-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
