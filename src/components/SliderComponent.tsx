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
        {texts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '14rem',
              height: '14rem',
              marginTop: index%2==0?'-5rem':'5rem',
              color: index==currentIndex ? 'white' : '#8B9AAE',
              backdropFilter: 'blur(10px)',
              boxShadow: index==currentIndex ? '0px 5px 6px 8px #24385930 inset' : '10px 7px 6px 8px #BCC9DE inset',
            }}
            className={`rounded-full mb-24 ${currentIndex === index ? 'rounded-gradient' : 'bg-[#A3B4D136]'}`}
          >
            {steps[index]}
          </button>
        ))}
        <div className='absolute' style={{ top: '50%', left: '50%', width:"30px", height:"30px"}} >
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