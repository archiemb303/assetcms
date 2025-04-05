import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className="header bg-white">
            <div className="flex justify-between items-center px-5 py-5 w-full lg:max-w-[80%] mx-auto">

                <div className="flex items-center gap-4">
                    <h4 className="text-2xl text-[#056791]">Centers for Medicare and Medicaid Services</h4>
                </div>
            </div>
            <nav className="bg-[#056791] text-white">
                <div className="flex justify-between items-center px-5 py-5 w-full lg:max-w-[80%] mx-auto">
                    <div>
                        <button
                            className="lg:hidden text-white focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                        </button>

                        {/* Left-side Menu (Mobile Collapsible) */}
                        <ul
                            className={`lg:flex lg:gap-6 absolute z-2 lg:relative bg-[#056791] w-full lg:w-auto left-0 transition-all duration-300 ease-in-out 
                        ${isOpen ? "top-40 opacity-100 visible" : "top-[-300px] opacity-0 invisible lg:opacity-100 lg:visible lg:top-0"}`}
                        >
                            <li className="p-3 lg:p-0"><a href="/assetcms">Home</a></li>
                            <li className="p-3 lg:p-0">
                                <a
                                    href="https://asett.cms.gov/ASETT_ST_CMP_About"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    About ASETT
                                </a>
                            </li>
                            <li className="p-3 lg:p-0"><a href="https://asett.cms.gov/ASETT_ST_CMP_ContactUs"
                                target="_blank">Contact Us</a></li>
                            <li className="relative p-3 lg:p-0">
                                <button
                                    onClick={() => {
                                        if (window.innerWidth < 1024) {
                                            setIsDropdownOpen(!isDropdownOpen);
                                        }
                                    }}
                                    className="inline-flex items-center gap-1 w-full focus:outline-none"
                                >
                                    Support <ChevronDown className="size-4" />
                                </button>

                                {/* Dropdown Menu */}
                                <ul
                                    className={`
                                    mt-2 w-full lg:w-40 bg-white text-[#056791] border border-black
                                      ${isDropdownOpen ? "block" : "hidden"}
                                    lg:absolute lg:left-0 lg:mt-2 lg:block
                                    lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible
                            `}
                                >
                                    <li className="p-2 hover:bg-[#056791] hover:text-white">
                                        <a href="https://asett.cms.gov/ASETT_ST_CMP_DirectoryPage" target="_blank" rel="noopener noreferrer">ASETT Glossary</a>
                                    </li>
                                    <li className="p-2 hover:bg-[#056791] hover:text-white">
                                        <a href="https://asett.cms.gov/ASETT_ST_CMP_FAQ" target="_blank" rel="noopener noreferrer">FAQs</a>
                                    </li>
                                    <li className="p-2 hover:bg-[#056791] hover:text-white">
                                        <a href="https://asett.cms.gov/ASETT_ST_CMP_UserManual" target="_blank" rel="noopener noreferrer">User Manual</a>
                                    </li>
                                </ul>
                            </li>



                        </ul>
                    </div>
                    <ul className=" flex gap-6">
                        <li><a href="#register">Register</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
