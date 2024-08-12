"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "06 17 45 47 07",
    link: "tel:0617454707",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "khalilnajib031@gmail.com",
    link: "mailto:khalilnajib031@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Morocco Rabat",
    description: "Rabat, Morocco",
    link: "https://maps.google.com?q=Rabat,+Morocco",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        setStatus("Email sent successfully!");
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send email.");
    }

    // Clear the status after 10 seconds
    setTimeout(() => {
      setStatus("");
    }, 5000);
  };

  return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2, duration: 0.5, ease: "easeIn" } }}
          className="p-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[60px]">
            <div className="xl:h[56%] order-1 xl:order-none xl:w-1/2">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] sm:h-[540px] rounded-[22px]">
                <h3 className="text-2xl text-accent">Wanna Work Together</h3>
                <p className="text-white-50">Let's connect! Fill out this form</p>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-2 text-primary ">
                  <input
                      id="fullName"
                      className="h-[45px] p-4 mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                  />
                  <input
                      id="email"
                      className="h-[45px] p-4 mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                  />
                  <textarea
                      id="message"
                      className="h-[120px] text-primary p-4 mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                  />
                </div>
                <Button type="submit" className="mt-4" aria-label="Submit Contact Form">
                  Submit
                </Button>
                {status && (
                    <div role="alert" className="rounded-xl border border-gray-100 bg-white p-2">
                      <div className="flex items-start gap-4">
                    <span className="text-green-600">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75"
                        />
                      </svg>
                    </span>
                        <div className="flex-1">
                          <strong className="block font-medium text-gray-900">{status}</strong>
                        </div>
                      </div>
                    </div>
                )}
              </form>
            </div>

            <div className="flex-1 flex items-center xl:justify-center order-2 xl:order-none mb-8 xl:mb-0 xl:w-1/2">
              <div className="flex flex-col gap-6">
                {info.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <div className="flex items-center gap-6 hover:text-accent transition-all duration-300">
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

export default Contact;
