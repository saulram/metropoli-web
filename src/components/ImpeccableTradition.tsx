import { useTranslations } from "@/i18n/useTranslations";
import { useEffect, useRef, useState } from "react";
import DescriptiveTextInContainer from "./DescriptiveTextInContainer";

const ImpeccableTradition = () => {
  const messages = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="bg-metropoliBg pb-48" style={{
      backgroundImage: 'url(/waves_bottom.png)',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
    }}>
      <div className='px-10 md:px-28 py-28' ref={ref}>
        <div className="w-full md:w-2/5">
          <h2 className={`font-normal text-40 text-gradient mb-2 ${isVisible ? 'slide-in-left' : 'hidden'}`}>
            {messages.impeccableTrajectory}
          </h2>
          <h2 className={`font-normal text-2xl text-gradient mb-4 ${isVisible ? 'slide-in-left' : 'hidden'}`}>
            {messages.sixtyYearsExperience}
          </h2>
          <h2 className={`font-normal text-lg text-black ${isVisible ? 'slide-in-left' : 'hidden'}`} style={{ animationDelay: '0.2s' }}>
            {messages.decadesOfKnowledge}
          </h2>
        </div>
      </div>

      <div className="flex gap-24">
        <div className="w-1/2"></div>
        <div className="w-1/2 ps-28 scrollable-container" ref={containerRef}>
          <div className='w-72'>
            <DescriptiveTextInContainer title={messages.claimsPaid} text={messages.weDeliver} containerRef={containerRef} isActiveProp={true} />
          </div>
          <div className='mt-10 w-72'>
            <DescriptiveTextInContainer title={messages.clientRenewal} text={messages.trustEarned} containerRef={containerRef} />
          </div>
          <div className='mt-10 w-72'>
            <DescriptiveTextInContainer title={messages.aaaCompanies} text={messages.bigCompaniesTrust} containerRef={containerRef} />
          </div>
          <div className='mt-10 w-72'>
            <DescriptiveTextInContainer title={messages.globalClients} text={messages.noBorders} containerRef={containerRef} />
          </div>
          <div className='mt-10 w-72'>
            <DescriptiveTextInContainer title={messages.reinsuranceAccess} text={messages.tbsBroker} containerRef={containerRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpeccableTradition;