"use client";
import React from 'react';
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyle, btnStyle, iconsStyles }) => {
    const swiper = useSwiper();

    return (
        <div className={containerStyle}>
            <button className={btnStyle} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={iconsStyles} />
            </button>

            <button className={btnStyle} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={iconsStyles} />
            </button>
        </div>
    );
};

export default WorkSliderBtns;
