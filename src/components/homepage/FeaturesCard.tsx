"use client";

import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import { motion, AnimatePresence, Variants } from "motion/react";
import { BsArrowUpCircle } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoPeopleOutline } from "react-icons/io5";
import Link from "next/link";

export interface IFeatureCard {
  index: number;
  title: string;
  description: string;
  innerDescription: string;
  cardNumber: string;
  link: string;
}

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3, ease: "easeIn" } },
};

const FeaturesCard: React.FC<IFeatureCard> = ({
  index,
  title,
  description,
  innerDescription,
  link,

  cardNumber,
}) => {
  const [toggleCard, setToggleCard] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleToggleCard = () => {
    setToggleCard(!toggleCard);
    setCurrentIndex(index);
  };

  const handleMouseEnter = (i: number) => {
    setToggleCard(true);
    setCurrentIndex(i);
  };

  const handleMouseLeave = () => {
    setToggleCard(false);
    setCurrentIndex(0);
  };

  return (
    <div
      onMouseEnter={() => handleMouseEnter(index + 1)}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-lg overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {toggleCard && currentIndex === index + 1 ? (
          <motion.div
            key="back"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-black text-white h-full p-6 flex flex-col justify-center items-center rounded-lg"
          >
            <p className="text-base text-white text-center">
              {innerDescription}
            </p>
            <Link
              href={link}
              className="flex flex-row justify-center items-center gap-4 cursor-pointer mt-5"
            >
              <p className="text-base text-white">Read more</p>
              <FaArrowRight color="white" />
            </Link>
          </motion.div>
        ) : (
          <motion.div
            key="front"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            className="p-6 h-full"
          >
            <div className="flex flex-row items-center justify-between">
              {index === 0 && <BsArrowUpCircle size={60} />}
              {index === 1 && <HiOutlineLightBulb size={60} />}
              {index === 2 && <IoPeopleOutline size={60} />}
              <h1 className="text-6xl text-text-color-light/20">
                {cardNumber}
              </h1>
            </div>

            <h1 className="font-bold py-2 text-2xl mt-5">{title}</h1>
            <p className="text-base mt-2">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeaturesCard;
