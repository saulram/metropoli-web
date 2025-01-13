import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { FaChevronDown } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import { useLanguage } from '@/i18n/LanguageContext';
import { useTranslations } from '@/i18n/useTranslations';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
    const { language, setLanguage } = useLanguage();
    const messages = useTranslations();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Desktop Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="fixed top-0 left-0 right-0 z-10 backdrop-blur  flex-row items-center justify-between p-4 text-text font-sans sm:hidden md:flex"
                style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    lineHeight: '18px',
                    textAlign: 'center',
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                    background: "#ffffff00"
                }}>
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-1/4 text-lg font-bold cursor-pointer">
                    <Link href="/">
                        <img src={"/logotipo_negro.svg"} alt={"logotipo"} />
                    </Link>
                </motion.div>

                {/* Navigation Links */}
                <div className="flex w-3/5 items-center justify-end gap-8">
                    {/* Anchor Link */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        <Link href="/competenciesAndValues" className="text-sm font-semibold text-text/90 hover:text-text">
                            {messages.competenciesAndValues}
                        </Link>
                    </motion.div>

                    {/* Dropdown */}
                    <Popover>
                        {({ open }) => (
                            <>
                                <PopoverButton className="text-sm font-semibold text-text/90 focus:outline-none hover:text-text flex items-center">
                                    <motion.p
                                        className="flex items-center space-x-1"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}>
                                        {messages.roads}
                                        <motion.span
                                            animate={{ rotate: open ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                            style={{marginLeft:"8px"}}
                                            >
                                            
                                            <FaChevronDown className="ml-1" />
                                        </motion.span>
                                    </motion.p>
                                </PopoverButton>
                                <AnimatePresence>
                                    {open && (
                                        <PopoverPanel
                                        as={motion.div}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute z-10 mt-2 w-48 rounded-md shadow-lg overflow-hidden"                                    >
                                        <div className="absolute inset-0 bg-white/80 blur-sm" />
                                        <div className="relative z-20 p-3">
                                            <motion.div whileHover={{ x: 5 }}>
                                                <Link href="/business" className="block rounded-lg py-2 px-3 transition bg-white/20 hover:bg-gray-200/50">
                                                    <p className="text-strongBlue font-medium">{messages.business}</p>
                                                </Link>
                                            </motion.div>
                                            <motion.div whileHover={{ x: 5 }}>
                                                <Link href="/personalOrFamily" className="block rounded-lg py-2 px-3 transition  bg-white/20 hover:bg-gray-200/50">
                                                    <p className="text-strongBlue font-medium">{messages.personalOrFamily}</p>
                                                </Link>
                                            </motion.div>
                                        </div>
                                    </PopoverPanel>
                                    )}
                                </AnimatePresence>
                            </>
                        )}
                    </Popover>

                    {/* Button */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        <Link href="/contact-us">
                            <button
                                className="rounded-md px-3.5 py-2.5 text-sm font-bold text-white shadow-sm focus:outline-none"
                                style={{
                                    background: 'linear-gradient(90deg, #1E2D49 0%, #112039 25.5%, rgba(25, 57, 113, 0.99299) 78.5%, rgba(14, 80, 187, 0.98) 100%)',
                                    border: '0.5px solid',
                                    borderImageSource: 'linear-gradient(90deg, #99C0FF 0%, #1C6EF6 100%)',
                                    boxShadow: '0px 4px 4px 0px #00000040 inset',
                                    width: '175px',
                                    textAlign: 'center',
                                    borderRadius: '10px'
                                }}>
                                {messages.sendRequest}
                            </button>
                        </Link>
                    </motion.div>

                    {/* Language Selector */}
                    <motion.div
                        className="text-sm font-semibold text-gray-900 flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}>
                        <span
                            className={`cursor-pointer ${language === 'es' ? 'text-blue-500' : ''} mx-1`}
                            onClick={() => setLanguage('es')}
                        >
                            ES
                        </span>
                        {' | '}
                        <span
                            className={`cursor-pointer ${language === 'en' ? 'text-blue-500' : ''} mx-1`}
                            onClick={() => setLanguage('en')}
                        >
                            EN
                        </span>
                    </motion.div>
                </div>
            </motion.nav>

            {/* Mobile Navigation */}
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed top-0 left-0 right-0 z-50 flex md:hidden">
                <div className="flex w-full items-center justify-between px-4 py-3 bg-transparent backdrop-blur">
                    {/* Logo */}
                    <Link href="/">
                        <motion.div
                            className="flex-shrink-0"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>
                            <img
                                src="/logotipo_negro.svg"
                                alt="METROPOLI"
                                className="h-3"
                            />
                        </motion.div>
                    </Link>

                    {/* Mobile Send Request Button & Menu */}
                    <div className="flex items-center space-x-4">
                        <Link href={'contact-us'}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="rounded-md px-3.5 py-2.5 text-sm font-bold text-white shadow-sm focus:outline-none"
                                style={{
                                    background: 'linear-gradient(90deg, #1E2D49 0%, #112039 25.5%, rgba(25, 57, 113, 0.99299) 78.5%, rgba(14, 80, 187, 0.98) 100%)',
                                    border: '0.5px solid',
                                    borderImageSource: 'linear-gradient(90deg, #99C0FF 0%, #1C6EF6 100%)',
                                    boxShadow: '0px 4px 4px 0px #00000040 inset',
                                    textAlign: 'center',
                                    borderRadius: '10px'
                                }}>
                                {messages.sendRequest}
                            </motion.button>
                        </Link>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-gray-900 focus:outline-none"
                        >
                            <IoMenu size={24} />
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu Panel */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 20 }}
                            className="fixed inset-0 bg-white z-50"
                            style={{
                                backgroundImage: 'url(/waves.png)',
                                height: '100vh',
                                backgroundPosition: 'center bottom',
                                backgroundRepeat: 'no-repeat'
                            }}>
                            <div className="min-h-screen flex flex-col">
                                {/* Header */}
                                <div className="flex items-center justify-between px-4 py-3 border-b">
                                    <img
                                        src="/logotipo_negro.png"
                                        alt="METROPOLI"
                                        className="h-6"
                                    />
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-700 hover:text-gray-900"
                                    >
                                        <IoClose size={24} />
                                    </motion.button>
                                </div>

                                {/* Mobile Navigation Items */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex-1 px-4 py-6 space-y-6 mb-10">
                                    <motion.div whileHover={{ x: 5 }}>
                                        <Link href="/competenciesAndValues" className="block text-lg font-semibold text-gray-900">
                                            {messages.competenciesAndValues}
                                        </Link>
                                    </motion.div>

                                    <div className="block text-lg mb-10">
                                        <Popover>
                                            {({ open }) => (
                                                <>
                                                    <PopoverButton className="w-full">
                                                        <motion.div
                                                            className="flex items-center justify-between mb-4"
                                                            whileHover={{ x: 5 }}>
                                                            <span className="font-semibold text-gray-900">
                                                                {messages.roads}
                                                            </span>
                                                            <motion.span
                                                                animate={{ rotate: open ? 180 : 0 }}
                                                                transition={{ duration: 0.2 }}>
                                                                <FaChevronDown className="text-gray-500" />
                                                            </motion.span>
                                                        </motion.div>
                                                    </PopoverButton>
                                                    <AnimatePresence>
                                                        {open && (
                                                            <PopoverPanel
                                                                as={motion.div}
                                                                initial={{ opacity: 0, y: -10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: -10 }}
                                                                className="pl-2">
                                                                <div className="space-y-4">
                                                                    <motion.div whileHover={{ x: 10 }}>
                                                                        <Link href="business" className="block text-gray-900 hover:text-gray-700">
                                                                            {messages.business}
                                                                        </Link>
                                                                    </motion.div>
                                                                    <motion.div whileHover={{ x: 10 }}>
                                                                        <Link href="personalOrFamily" className="block">
                                                                            <span className="text-gray-900 hover:text-gray-700">
                                                                                {messages.personalOrFamily}
                                                                            </span>
                                                                        </Link>
                                                                    </motion.div>
                                                                </div>
                                                            </PopoverPanel>
                                                        )}
                                                    </AnimatePresence>
                                                </>
                                            )}
                                        </Popover>
                                    </div>
                                    {/* Language Selector */}
                                    <div className="px-4 py-4">
                                        <div className="flex items-center space-x-2 text-sm">
                                            <span
                                                onClick={() => setLanguage('es')}
                                                className={`cursor-pointer ${language === 'es' ? 'text-gray-900' : 'text-gray-500'}`}
                                            >
                                                Es
                                            </span>
                                            <span className="text-gray-500">|</span>
                                            <span
                                                onClick={() => setLanguage('en')}
                                                className={`cursor-pointer ${language === 'en' ? 'text-gray-900' : 'text-gray-500'}`}
                                            >
                                                En
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}