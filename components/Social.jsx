import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import Link from "next/link";

const social = [
    { icon: <FaGithub />, path: "https://github.com/khaliiile?tab=repositories" },
    { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/khalil-najib-015896309" },
    { icon: <FiTwitter />, path: "https://x.com/khalil__Najib" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {social.map(({ icon, path }) => (
                <Link href={path} className={iconStyles} target="_blank" rel="noreferrer" key={path}>
                    {icon}
                </Link>
            ))}
        </div>
    );
};

export default Social;