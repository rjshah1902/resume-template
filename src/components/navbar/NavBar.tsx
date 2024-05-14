import React from 'react'
import { useRef, useState } from 'react';
// @ts-ignore
import html2pdf from 'html2pdf.js';

const NavBar = () => {

    const contentRef = useRef();

    const saveTemplate = () => {
        console.log('saving..');
        const opt = {
            margin: 0,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 4 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };
        html2pdf().set(opt).from(contentRef.current).save();
    };

    return (
        <>
            <div className="w-full shrink-0 py-2 px-3 flex justify-between sticky top-0 z-[999]">
                <p className="font-bold text-lg px-4 py-2 bg-secondary rounded-full shadow-lg">
                    MagicalResume
                </p>
                <div className="w-[200px] shrink-0 md:w-0"></div>
                <div className="py-1 pr-1 pl-5 rounded-full bg-secondary flex items-center gap-5 shadow-lg">
                    <p className='cursor-pointer'>Font</p>
                    <p>Theme</p>
                    <p>Layout</p>
                    <p>Format</p>
                    <button
                        onClick={saveTemplate}
                        className="h-full px-5 bg-[#2bd3bd] rounded-full">
                        Download
                    </button>
                </div>
                <div className="w-[200px] shrink-0 md:w-0"></div>
                <div className="p-1.5 rounded-full bg-secondary shadowl-lg">
                    <div className="h-full w-full px-6 rounded-full text-black bg-white/70 flex items-center justify-center whitespace-nowrap">
                        <p>My Documents</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
