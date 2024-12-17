import { useTranslations } from '@/i18n/useTranslations';
import React, { useState } from 'react';

const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const messages = useTranslations();

  const texts = [
    {
      title: messages.kickoff,
      content: messages.kickoffDescription
    },
    {
      title: messages.discovery,
      content: messages.discoveryDescription
    },
    {
      title: messages.implementation,
      content: messages.implementationDescription
    },
    {
      title: messages.accompaniment,
      content: messages.accompanimentDescription
    }
  ];

  const steps = [
    messages.step1,
    messages.step2,
    messages.step3,
    messages.step4
  ]

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? texts.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='px-10 md:px-28 '>
      <div className="w-full flex justify-center mt-10 gap-3 relative">
        <svg width="835" height="361" viewBox="0 0 835 361" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="filter0_bii_9_983" x="-79.8" y="-79.8" width="994.6" height="520.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="39.9" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_9_983" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_9_983" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.219608 0 0 0 0 0.34902 0 0 0 0.19 0" />
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow_9_983" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.738833 0 0 0 0 0.788153 0 0 0 0 0.869531 0 0 0 1 0" />
              <feBlend mode="normal" in2="effect2_innerShadow_9_983" result="effect3_innerShadow_9_983" />
            </filter>

            <filter id="filter0_bf_9_1003" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="24" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_9_1003" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_9_1003" result="shape" />
              <feGaussianBlur stdDeviation="18.6" result="effect2_foregroundBlur_9_1003" />
            </filter>

            <radialGradient id="paint0_radial_9_1003" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse">
              <stop offset="0.41" stopColor="#082555" />
              <stop offset="1" stopColor="#1C6EF6" />
            </radialGradient>

            <linearGradient id="paint1_linear_9_1003" x1="48" y1="148" x2="248" y2="148" gradientUnits="userSpaceOnUse">
              <stop stopColor="#99C0FF" />
              <stop offset="1" stopColor="#1C6EF6" />
            </linearGradient>
          </defs>

          {/* Background shape */}
          <g clipPath="url(#clip0_9_983)" filter="url(#filter0_bii_9_983)">
            <path d="M827.864 101.584C809.895 58.9231 761.728 36.5532 717.501 50.3835C679.648 62.2275 655.564 96.0886 653.948 132.827C653.372 145.915 646.477 157.889 635.123 164.442L633.488 165.389C621.372 172.388 606.246 172.295 594.52 164.665C582.794 157.035 568.448 151.224 553.21 148.774C528.793 144.857 504.988 149.535 484.863 160.581C469.105 169.232 449.593 166.874 436.12 154.993C424.078 144.374 419.042 127.945 422.945 112.369C425.974 100.266 426.55 87.2892 424.134 74.1272C415.79 28.3849 373.236 -3.87973 326.89 0.371477C287.681 3.97294 257.112 31.6893 247.597 66.9799C243.825 80.9588 233.047 91.9674 219.129 95.9958C205.154 100.061 190.084 96.497 179.38 86.6394C154.014 63.2671 117.704 52.4256 81.1512 61.4292C28.1716 74.4984 -6.74547 126.33 1.09648 180.296C9.92331 241.001 67.5115 281.415 127.125 269.943C172.17 261.273 205.099 225.537 212.309 182.876C214.817 168.081 225.911 156.181 240.332 152.004L240.462 151.967C253.247 148.254 266.868 151.447 277.088 159.968C296.061 175.766 321.371 183.805 347.759 180.073C356.771 178.792 365.264 176.249 373.124 172.61C388.827 165.352 407.354 168.322 420.325 179.758C433.11 191.026 438.127 208.625 433.463 225.017C431.753 231.032 430.545 237.288 429.913 243.767C424.413 299.218 463.418 350.159 518.423 359.459C577.052 369.391 632.429 329.645 641.832 271.112C642.891 264.485 643.318 257.894 643.151 251.434C642.798 237.567 650.157 224.664 662.18 217.721L663.927 216.719C675.56 209.999 689.757 210.147 701.594 216.478C723.763 228.359 750.764 230.995 776.167 221.49C824.166 203.538 847.934 149.238 827.846 101.584H827.864Z" fill="#E9F1FF" fillOpacity="0.21" />
          </g>

          {/* Highlight circles with gradients */}
          <g style={{ opacity: currentIndex === 0 ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            <g filter="url(#filter0_bf_9_1003)">
              <circle cx="100" cy="170" r="60" fill="url(#paint0_radial_9_1003)" />
              <circle cx="100" cy="170" r="65" stroke="url(#paint1_linear_9_1003)" strokeWidth="10" strokeLinejoin="bevel" strokeDasharray="20 20" />
            </g>
          </g>

          <g style={{ opacity: currentIndex === 1 ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            <g filter="url(#filter0_bf_9_1003)">
              <circle cx="330" cy="100" r="60" fill="url(#paint0_radial_9_1003)" />
              <circle cx="330" cy="100" r="65" stroke="url(#paint1_linear_9_1003)" strokeWidth="10" strokeLinejoin="bevel" strokeDasharray="20 20" />
            </g>
          </g>

          <g style={{ opacity: currentIndex === 2 ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            <g filter="url(#filter0_bf_9_1003)">
              <circle cx="530" cy="260" r="60" fill="url(#paint0_radial_9_1003)" />
              <circle cx="530" cy="260" r="65" stroke="url(#paint1_linear_9_1003)" strokeWidth="10" strokeLinejoin="bevel" strokeDasharray="20 20" />
            </g>
          </g>

          <g style={{ opacity: currentIndex === 3 ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            <g filter="url(#filter0_bf_9_1003)">
              <circle cx="745" cy="140" r="60" fill="url(#paint0_radial_9_1003)" />
              <circle cx="745" cy="140" r="65" stroke="url(#paint1_linear_9_1003)" strokeWidth="10" strokeLinejoin="bevel" strokeDasharray="20 20" />
            </g>
          </g>

          {/* Text labels */}
          <text x="100" y="170" textAnchor="middle" fontFamily="Arial" fontSize="16" fill="#1E365C">1. Kickoff</text>
          <text x="330" y="100" textAnchor="middle" fontFamily="Arial" fontSize="16" fill="#1E365C">2. Descubrimiento</text>
          <text x="530" y="260" textAnchor="middle" fontFamily="Arial" fontSize="16" fill="#1E365C">3. Implementación</text>
          <text x="745" y="140" textAnchor="middle" fontFamily="Arial" fontSize="16" fill="#1E365C">4. Acompañamiento</text>

          <clipPath id="clip0_9_983">
            <rect width="835" height="361" fill="white" />
          </clipPath>
        </svg>
        {/* {texts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '14rem',
              height: '14rem',
              marginTop: index % 2 == 0 ? '-5rem' : '5rem',
              color: index == currentIndex ? 'white' : '#8B9AAE',
              backdropFilter: 'blur(10px)',
              boxShadow: index == currentIndex ? '0px 5px 6px 8px #24385930 inset' : '10px 7px 6px 8px #BCC9DE inset',
            }}
            className={`rounded-full mb-24 ${currentIndex === index ? 'rounded-gradient' : 'bg-[#A3B4D136]'}`}
          >
            {steps[index]}
          </button>
        ))} */}
        <div className='absolute' style={{ top: '50%', left: '50%', width: "30px", height: "30px" }} >
        </div>
      </div>
      <div className="w-full overflow-hidden relative">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {texts.map((text, index) => (
            <div key={index} className="w-full flex-shrink-0 flex justify-center items-center">
              <div className='w-3/5'>
                <p className="font-medium text-center text-3xl text-gradient mb-6">{text.title}</p>
                <p className="font-medium text-center text-lg text-black">{text.content}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handlePrev} className="px-4 py-2 rounded-md mr-2 absolute" style={{ top: '50%', left: "0%" }}><img src='/rightArrow.png' alt='rightArrow' className="rotate-180" /></button>
        <button onClick={handleNext} className="px-4 py-2 rounded-md absolute" style={{ top: '50%', right: "0%" }}><img src='/rightArrow.png' alt='rightArrow' /></button>
      </div>
      <div className="w-full flex justify-center mt-10 gap-3">
        {texts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full ${currentIndex === index ? 'bg-[#618FDC]' : 'bg-[#BFCCE4]'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;