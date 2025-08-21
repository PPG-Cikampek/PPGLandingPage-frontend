import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

import logo from "../../../../assets/logos/ppg.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState("light");
    const [menuHeight, setMenuHeight] = useState(0);
    const menuRef = useRef(null);

    useEffect(() => {
        if (menuRef.current) {
            setMenuHeight(isOpen ? menuRef.current.scrollHeight : 0);
        }
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    const navLinks = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Bidang PPG", path: "/categories" },
        { id: 3, name: "Sistem Akademik", path: "http://localhost:3000/" },
    ];

    return (
        <nav className="fixed top-0 z-20 bg-linear-to-b from-primary/95 to-[#005e99]/80 shadow-md w-full">
            <div className="max-w-6xl mx-4 lg:mx-auto">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex shrink-0 gap-2">
                        <img src={logo} alt="Logo" className="h-8 w-auto" />
                        <span className="text-2xl font-semibold text-white">
                            PPG Cikmapek
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.id}
                                to={link.path}
                                className={({ isActive }) =>
                                    `block box-border text-white my-auto px-3 text-base font-normal transition duration-200 ${
                                        isActive
                                            ? "py-[18px] border-b-4 border-white"
                                            : "py-[19px] hover:ring-1 hover:ring-primary-subtle"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-md self-center dark:bg-gray-800 border border-transparent hover:border-white dark:hover:bg-gray-700 transition-colors duration-300"
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? (
                                <Moon className="w-5 h-5 text-gray-200  dark:text-gray-800" />
                            ) : (
                                <Sun className="w-5 h-5 text-gray-200  dark:text-gray-800" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="p-1 rounded-full text-white border border-transparent font-normal hover:border-white focus:outline-hidden transition-colors duration-200"
                            aria-expanded={isOpen}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation with Animation */}
                <div
                    ref={menuRef}
                    style={{ height: `${menuHeight}px` }}
                    className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.id}
                                to={link.path}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-[3px] text-base font-medium transition-colors duration-200 ${
                                        isActive
                                            ? "text-black bg-white"
                                            : "text-white hover:text-white hover:bg-primary"
                                    }`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
