import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { FaChevronDown } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import { useLanguage } from '@/i18n/LanguageContext';
import { useTranslations } from '@/i18n/useTranslations';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
    const { language, setLanguage } = useLanguage();
    const messages = useTranslations();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex-row items-center justify-between p-4 text-text font-sans sm:hidden md:flex"
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
                <div className="w-1/4 text-lg font-bold">
                    <Link href="/">
                        <img src={"/logotipo_negro.png"} alt={"logotipo"} />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex w-3/5 items-center justify-end gap-8">
                    {/* Anchor Link */}
                    <Link href="/competenciesAndValues" className="text-sm font-semibold text-text/90 hover:text-text">
                        {messages.competenciesAndValues}
                    </Link>

                    {/* Dropdown */}
                    <Popover>
                        <PopoverButton className="text-sm font-semibold text-text/90 focus:outline-non</a>e hover:text-text flex items-center">
                            <p className="flex items-center space-x-1">
                                {messages.roads}<FaChevronDown className="ml-1" />
                            </p>
                        </PopoverButton>
                        <PopoverPanel className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                            <div className="p-3">
                                <Link href="/business" className="block rounded-lg py-2 px-3 transition hover:bg-gray-200">
                                    <p className="text-gray-500">{messages.business}</p>
                                </Link>
                                <Link href="/personalOrFamily" className="block rounded-lg py-2 px-3 transition hover:bg-gray-200">
                                    <p className="text-gray-500">{messages.personalOrFamily}</p>
                                </Link>
                            </div>

                        </PopoverPanel>
                    </Popover>

                    {/* Button */}
                    <Link href="/sendRequest">
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

                    {/* Language Selector */}
                    <div className="text-sm font-semibold text-gray-900 flex items-center justify-center">
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
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex md:hidden">
                <div className="flex w-full items-center justify-between px-4 py-3 bg-white">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src="/logotipo_negro.png"
                            alt="METROPOLI"
                            className="h-6"
                        />
                    </div>

                    {/* Mobile Send Request Button & Menu */}
                    <div className="flex items-center space-x-4">
                        <button
                            className="rounded-md px-3.5 py-2.5 text-sm font-bold text-white shadow-sm focus:outline-none"
                            onClick={() => {

                            }}
                            style={{
                                background: 'linear-gradient(90deg, #1E2D49 0%, #112039 25.5%, rgba(25, 57, 113, 0.99299) 78.5%, rgba(14, 80, 187, 0.98) 100%)',
                                border: '0.5px solid',
                                borderImageSource: 'linear-gradient(90deg, #99C0FF 0%, #1C6EF6 100%)',
                                boxShadow: '0px 4px 4px 0px #00000040 inset',
                                textAlign: 'center',
                                borderRadius: '10px'
                            }}>
                            {messages.sendRequest}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-gray-900 focus:outline-none"
                        >
                            <IoMenu size={24} />
                        </button>
                    </div>
                </div>
                {/* Mobile Menu Panel */}
                {isOpen && (
                    <div className="fixed inset-0 bg-white z-50" style={{
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
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-700 hover:text-gray-900"
                                >
                                    <IoClose size={24} />
                                </button>
                            </div>

                            {/* Mobile Navigation Items */}
                            <div className="flex-1 px-4 py-6 space-y-6">
                                <a href="#section" className="block text-lg font-semibold text-gray-900">
                                    {messages.competenciesAndValues}
                                </a>

                                <div className="block text-lg">
                                    <Popover>
                                        <PopoverButton className="w-full">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="font-semibold text-gray-900">
                                                    {messages.roads}
                                                </span>
                                                <FaChevronDown className="text-gray-500" />
                                            </div>
                                        </PopoverButton>
                                        <PopoverPanel className="pl-2">
                                            <div className="space-y-4">
                                                <a href="#" className="block text-gray-900 hover:text-gray-700">
                                                    {messages.business}
                                                </a>
                                                <a href="#" className="block">
                                                    <span className="text-gray-900 hover:text-gray-700">{messages.personalFamily}</span>
                                                </a>
                                            </div>
                                        </PopoverPanel>
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
                            </div>

                        </div>


                    </div>
                )}
            </nav>
        </>
    );
}