import { useTranslations } from "@/i18n/useTranslations";
import { useState } from "react";

export default function CreateMore() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const messages = useTranslations();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? texts.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
  };

  const texts = [
    {
      title: messages.peaceOfMind,
      content: messages.insuranceStress,
      title2: messages.weUnderstand,
      content2: messages.differentApproach
    },
    {
      title: messages.freedomToEnjoy,
      content: messages.experience,
      content2: messages.longTermRelationships
    },
  ];

  return (
    <div className="py-36 px-10 md:px-28" style={{
      background: '#F1F1F1 url(/waves.png) center/cover no-repeat',
    }}>
      <div className="w-full overflow-hidden relative">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {texts.map((text, index) => (
            <div key={index} className="w-full flex-shrink-0 flex justify-center items-center">
              <div className='lg:w-2/5 w-2/3'>
                <p className="font-medium text-center text-3xl text-gradient mb-6">{text.title}</p>
                <p className="font-medium text-center text-lg text-black mb-6">{text.content}</p>
                <p className="font-medium text-center text-3xl text-gradient mb-6">{text?.title2}</p>
                <p className="font-medium text-center text-lg text-black">{text?.content2}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handlePrev} className="px-4 py-2 rounded-md mr-2 absolute" style={{ bottom: '0%', left: "0%" }}><img src='/rightArrow.png' alt='rightArrow' className="rotate-180" /></button>
        <button onClick={handleNext} className="px-4 py-2 rounded-md absolute" style={{ bottom: '0%', right: "0%" }}><img src='/rightArrow.png' alt='rightArrow' /></button>

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
      <div className="w-full overflow-hidden relative">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {texts.map((text, index) => (
            <div key={index + 'img'} className="w-full flex-shrink-0 flex justify-center items-center">
              <img src={`slide${index + 1}.png`} alt={'slide' + index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}