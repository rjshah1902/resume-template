import React, { useEffect, useState } from 'react'
export interface NavBarProps {
    clickEvent: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ clickEvent }) => {

    const [colorCode, setColorCode] = useState("");
    const [headerColorCode, setHeaderColorCode] = useState("");
    const [bgColorCode, setBgColorCode] = useState("");

    useEffect(() => {
        const textCode = localStorage.getItem("colorCode");
        const header = localStorage.getItem("headerColorCode");
        const bg = localStorage.getItem("bgColorCode");
        if (textCode && textCode !== " ") setColorCode(textCode);
        if (header && header !== " ") setHeaderColorCode(header);
        if (bg && bg !== " ") setBgColorCode(bg);
    }, []);

    useEffect(() => {
        if (colorCode !== "") localStorage.setItem("colorCode", colorCode);
        if (headerColorCode !== "") localStorage.setItem("headerColorCode", headerColorCode);
        if (bgColorCode !== "") localStorage.setItem("bgColorCode", bgColorCode);
    }, [colorCode, headerColorCode, bgColorCode]);

    return (
        <>
            <div className="w-full shrink-0 py-2 px-3 flex justify-between sticky top-0 z-[999]">
                <p className="font-bold text-lg px-4 py-2 bg-secondary rounded-full shadow-lg">
                    MagicalResume
                </p>
                <div className="w-[200px] shrink-0 md:w-0"></div>
                <div className="py-1 pr-1 pl-5 rounded-full bg-secondary flex items-center gap-5 shadow-lg h-14">
                    <details className="dropdown cursor-pointer">
                        <summary className="m-1 btn">Font</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><a>Font 1</a></li>
                            <li><a>Font 2</a></li>
                        </ul>
                    </details>
                    <details className="dropdown cursor-pointer">
                        <summary className="m-1 btn">Colors</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li>
                                <label htmlFor="">Color For Background</label><br />
                                <input type="color" className='form-control w-full' name='bgColorCode' onChange={(e) => setBgColorCode(e.target.value)} />
                            </li>
                            <li>
                                <label htmlFor="">Color For Header</label><br />
                                <input type="color" className='form-control w-full' name='headerColorCode' onChange={(e) => setHeaderColorCode(e.target.value)} />
                            </li>
                            <li>
                                <label htmlFor="">Color For Text</label><br />
                                <input type="color" className='form-control w-full' name='colorCode' onChange={(e) => setColorCode(e.target.value)} />
                            </li>
                        </ul>
                    </details>
                    <p>Layout</p>
                    <p>Format</p>
                    <button
                        onClick={clickEvent}
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
