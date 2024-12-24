import { useTranslations } from '@/i18n/useTranslations';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const mobileElements = [
  { x: "66", y: "66", circle: { cx: "60", cy: "60", r: "55" } },
  { x: "96", y: "190", circle: { cx: "96", cy: "190", r: "55" } },
  { x: "200", y: "96", circle: { cx: "200", cy: "96", r: "55" } },
  { x: "260", y: "220", circle: { cx: "260", cy: "220", r: "55" } }
];

const desktopElements = [
  { x: "100", y: "170", circle: { cx: "100", cy: "170", r: "100" } },
  { x: "330", y: "100", circle: { cx: "330", cy: "100", r: "90" } },
  { x: "530", y: "260", circle: { cx: "530", cy: "260", r: "100" } },
  { x: "745", y: "140", circle: { cx: "745", cy: "140", r: "100" } }
];


const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const messages = useTranslations();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile
    );
  }, []);

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

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? texts.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
  };
  const elements = isMobile ? mobileElements : desktopElements;

  return (
    <motion.div
      className="w-full px-4 md:px-8 lg:px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative w-full sm:aspect-square md:aspect-[2/1] md:h-auto max-w-6xl mx-auto justify-center items-center">
        <svg
          className="w-full"
          viewBox={isMobile ? "-20 -20 365 365" : "-100 -100 1035 561"}
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
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
            <radialGradient id="paint0_radial_9_1003" cx="0.5" cy="0.5" r=".4" gradientUnits="objectBoundingBox">
              <stop offset="0.41" stopColor="#082555" />
              <stop offset="1" stopColor="#1C6EF6" />
            </radialGradient>
            <linearGradient
              id="borderGradient"
              x1="0"
              y1="0.5"
              x2="1"
              y2="0.5"
              gradientUnits="objectBoundingBox"
            >
              <stop stopColor="#99C0FF" />
              <stop offset="1" stopColor="#1C6EF6" />
            </linearGradient>
            <pattern
              id="imagePattern"
              patternUnits="userSpaceOnUse"
              width="100%"
              height="100%"
            >
              <image
                href="/BlurredEllipse.png"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>

          {/* Conditional Background shape */}
          {isMobile ? (
            <path d="M315.733 196.891C305.192 170.525 278.478 155.862 251.916 159.248C247.504 159.816 243.178 157.706 240.958 153.847C238.408 149.419 239.116 143.847 242.659 140.167C262.155 119.884 265.603 87.8323 248.638 63.453C230.719 37.6925 195.57 29.9633 168.507 45.8094C142.011 61.3339 131.875 93.5558 142.899 120.821C144.353 124.425 143.305 128.559 140.405 131.151L138.818 132.57C135.767 135.295 131.393 135.957 127.69 134.216C121.04 131.085 113.767 129.146 106.191 128.635C101.884 128.342 98.1337 125.579 96.5373 121.558L96.0839 120.414C94.223 115.731 95.5077 110.348 99.3711 107.112C115.685 93.4139 124.356 71.4564 119.907 48.8462C113.833 18.0528 84.777 -3.21409 53.6427 0.399764C19.089 4.41095 -4.74349 36.4059 0.801356 70.3969C5.48661 99.0901 29.5647 119.742 57.4211 121.152C62.078 121.388 66.1965 124.226 67.9157 128.569C69.7388 133.157 68.4069 138.445 64.534 141.501C47.7672 154.755 38.4723 176.551 42.3452 199.341C47.6161 230.305 76.1432 252.319 107.381 249.481C142.02 246.331 166.646 214.942 161.942 180.828C161.158 175.123 159.599 169.721 157.398 164.707C155.604 160.62 156.586 155.852 159.911 152.872C162.792 150.299 166.977 149.75 170.387 151.576C180.286 156.883 191.499 159.343 202.711 158.662C207.038 158.397 211.137 160.592 213.3 164.348L214.849 167.034C217.183 171.083 216.795 176.201 213.744 179.73C198.961 196.863 194.408 221.63 204.1 243.748C217.929 275.28 255.326 289.12 286.479 273.634C314.553 259.68 327.352 226.02 315.705 196.891H315.733Z"
              fill="#DDE2E9"
            />
          ) : (
            <g clipPath="url(#clip0_9_983)" filter="url(#filter0_bii_9_983)">
              <path d="M827.864 101.584C809.895 58.9231 761.728 36.5532 717.501 50.3835C679.648 62.2275 655.564 96.0886 653.948 132.827C653.372 145.915 646.477 157.889 635.123 164.442L633.488 165.389C621.372 172.388 606.246 172.295 594.52 164.665C582.794 157.035 568.448 151.224 553.21 148.774C528.793 144.857 504.988 149.535 484.863 160.581C469.105 169.232 449.593 166.874 436.12 154.993C424.078 144.374 419.042 127.945 422.945 112.369C425.974 100.266 426.55 87.2892 424.134 74.1272C415.79 28.3849 373.236 -3.87973 326.89 0.371477C287.681 3.97294 257.112 31.6893 247.597 66.9799C243.825 80.9588 233.047 91.9674 219.129 95.9958C205.154 100.061 190.084 96.497 179.38 86.6394C154.014 63.2671 117.704 52.4256 81.1512 61.4292C28.1716 74.4984 -6.74547 126.33 1.09648 180.296C9.92331 241.001 67.5115 281.415 127.125 269.943C172.17 261.273 205.099 225.537 212.309 182.876C214.817 168.081 225.911 156.181 240.332 152.004L240.462 151.967C253.247 148.254 266.868 151.447 277.088 159.968C296.061 175.766 321.371 183.805 347.759 180.073C356.771 178.792 365.264 176.249 373.124 172.61C388.827 165.352 407.354 168.322 420.325 179.758C433.11 191.026 438.127 208.625 433.463 225.017C431.753 231.032 430.545 237.288 429.913 243.767C424.413 299.218 463.418 350.159 518.423 359.459C577.052 369.391 632.429 329.645 641.832 271.112C642.891 264.485 643.318 257.894 643.151 251.434C642.798 237.567 650.157 224.664 662.18 217.721L663.927 216.719C675.56 209.999 689.757 210.147 701.594 216.478C723.763 228.359 750.764 230.995 776.167 221.49C824.166 203.538 847.934 149.238 827.846 101.584H827.864Z"
                fill="#A3B4D1"
                fillOpacity="0.21"
              />
            </g>
          )}
          <AnimatePresence mode="wait">
            {[0, 1, 2, 3].map((index) => (
              currentIndex === index && (
                <motion.g
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <g style={{ opacity: currentIndex === index ? 1 : 0, transition: 'opacity 0.3s ease', cursor: 'pointer' }}>
                    <g filter="url(#filter0_bf_9_1003)">
                      <circle
                        cx={elements[index].circle.cx}
                        cy={elements[index].circle.cy}
                        r={elements[index].circle.r}
                        fill="url(#paint0_radial_9_1003)"
                      />
                      <circle
                        cx={elements[index].circle.cx}
                        cy={elements[index].circle.cy}
                        r={Number(elements[index].circle.r) + 5}
                        stroke="url(#borderGradient)"
                        strokeWidth="10"
                        strokeLinejoin="bevel"
                        strokeDasharray="20 20"
                      />
                    </g>
                  </g>
                </motion.g>
              )))}
          </AnimatePresence>

          {elements.map((element, index) => {
            const stepKey = `step${index + 1}` as keyof typeof messages;
            return <motion.text
              onClick={() => setCurrentIndex(index)}
              key={index}
              x={element.x}
              y={element.y}
              textAnchor="middle"
              fontFamily='Lato'
              className={`text-sm md:text-lg cursor-pointer ${isMobile ? 'text-[10px]' : ''}`}
              fill={currentIndex === index ? '#fff' : '#8B9AAE'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {messages[stepKey]}
            </motion.text>
          }
          )}

          <clipPath id="clip0_9_983">
            <rect width="835" height="361" fill="#A3B4D136" />
          </clipPath>
        </svg>
        {/* Navigation buttons */}
        <motion.button
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrev}
          className="absolute left-0 p-2 md:p-4"
        >
          <img src="/rightArrow.png" alt="Previous" className="w-6 h-6 md:w-8 md:h-8 rotate-180" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className="absolute right-0 p-2 md:p-4"
        >
          <img src="/rightArrow.png" alt="Next" className="w-6 h-6 md:w-8 md:h-8" />
        </motion.button>
      </div>

      {/* Animate text content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full mt-8"
          style={{ height: 200 }}
        >
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-medium text-center text-xl md:text-3xl text-gradient mb-4 md:mb-6">
              {texts[currentIndex].title}
            </h2>
            <p className="font-medium text-center text-base md:text-lg text-black">
              {texts[currentIndex].content}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Animate pagination dots */}
      <div className="flex justify-center gap-3 mt-6 md:mt-10">
        {texts.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1 h-1 md:w-4 md:h-4 rounded-full transition-colors`}
            style={{
              backgroundColor: currentIndex === index ? '#618FDC' : '#BFCCE4',
              width: "10px",
              height: "10px"
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SliderComponent;