import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { FaChevronDown } from "react-icons/fa";
import {useState} from "react";

export default function Navigation() {
    const [language, setLanguage] = useState('es');

    return (
        <nav className="flex items-center justify-between p-4 bg-metropoliBg text-text font-sans" style={{

            fontSize: '15px',
            fontWeight: 700,
            lineHeight: '18px',
            textAlign: 'center',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none'
        }}>
            {/* Logo */}
            <div className="w-1/4 text-lg font-bold"><img src={"/logotipo_negro.png"} alt={"logotipo "}/></div>

            {/* Navigation Links */}
            <div className="flex w-1/3 items-center justify-between gap-8">
                {/* Anchor Link */}
                <a href="#section" className="text-sm font-semibold text-text/90 hover:text-text">Competencias y Valores</a>

                {/* Dropdown */}
                <Popover>
                    <PopoverButton className="text-sm font-semibold text-text/90 focus:outline-none hover:text-text flex items-center">
                        <p className="flex items-center space-x-1">Caminos<FaChevronDown/></p>
                    </PopoverButton>
                    <PopoverPanel className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                        <div className="p-3">
                            <a className="block rounded-lg py-2 px-3 transition hover:bg-gray-200" href="#">
                                <p className="font-semibold text-gray-900">Insights</p>
                                <p className="text-gray-500">Measure actions your users take</p>
                            </a>
                            <a className="block rounded-lg py-2 px-3 transition hover:bg-gray-200" href="#">
                                <p className="font-semibold text-gray-900">Automations</p>
                                <p className="text-gray-500">Create your own targeted content</p>
                            </a>
                            <a className="block rounded-lg py-2 px-3 transition hover:bg-gray-200" href="#">
                                <p className="font-semibold text-gray-900">Reports</p>
                                <p className="text-gray-500">Keep track of your growth</p>
                            </a>
                        </div>
                        <div className="p-3">
                            <a className="block rounded-lg py-2 px-3 transition hover:bg-gray-200" href="#">
                                <p className="font-semibold text-gray-900">Documentation</p>
                                <p className="text-gray-500">Start integrating products and tools</p>
                            </a>
                        </div>
                    </PopoverPanel>
                </Popover>

                {/* Button */}
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
                    Enviar Solicitud
                </button>

                {/* Language Selector */}
                <div className="text-sm font-semibold text-gray-900">
                    <span
                        className={`cursor-pointer ${language === 'es' ? 'text-blue-500' : ''}`}
                        onClick={() => setLanguage('es')}
                    >
                        ES
                    </span>
                    {' | '}
                    <span
                        className={`cursor-pointer ${language === 'en' ? 'text-blue-500' : ''}`}
                        onClick={() => setLanguage('en')}
                    >
                        EN
                    </span>
                </div>
            </div>
        </nav>
    )
}