"use client";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" }
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent
                className="flex flex-col"
                aria-labelledby="mobile-nav-title"
            >
                <div className="mt-32 mb-35 text-center text-1xl">
                    <Link href="/">
                        <h4 id="mobile-nav-title" className="text-4xl font-semibold">
                             <span className="text-accent">Kn</span>
                        </h4>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-7">
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
                            capitalize font-medium hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <div></div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
