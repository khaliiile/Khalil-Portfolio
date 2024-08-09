"use client";

import React from 'react';
import { FiDownload } from 'react-icons/fi';

function DownloadCVButton() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = "/assets/cv.pdf";
        link.download = "cv.pdf";
        link.click();
    };

    return (
        <span className="flex p-2" onClick={handleDownload}>
            Download CV
            <FiDownload className="text-xl mx-2" />
        </span>
    );
}

export default DownloadCVButton;
