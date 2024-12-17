import { useTranslations } from "@/i18n/useTranslations";
import SliderComponent from "./SliderComponent";

const WayToGo = () => {
  const messages = useTranslations();

  return (
    <div style={{ background: '#F1F1F1' }}>
      <div className='px-10 md:px-28 pt-28'>
        <div className="w-3/5">
          <h1 className="font-medium text-40 text-gradient">
            {messages.whichPath}
          </h1>
          <h2 className="font-medium text-2xl text-black">
            {messages.thinkingOfOthers}
          </h2>
          <h2 className="font-medium text-2xl text-gradient lg:w-3/5">
            {messages.investingWisely}
          </h2>
        </div>
        <div className="flex justify-around mt-32">
          <div className="text-center">
            <img src="/business.png" alt="business" />
            <h3 className="font-medium text-xl mt-3 text-slate-400">
              {messages.business}
            </h3>
          </div>
          <div className="text-center">
            <img src="/family.png" alt="family" />
            <h3 className="font-medium text-xl mt-3 text-slate-400">
              {messages.personalOrFamily}
            </h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-32 ">
          <h3 className="text-black text-xl">{messages.yourPathToPeace}</h3>
          <h3 className="text-black text-3xl mt-4 text-gradient">{messages.focusOnValue}</h3>
          <h3 className="text-black text-lg mt-4 text-black w-2/5 text-center">{messages.weEliminateRisks}</h3>
        </div>
      </div>
      <div className="relative w-full">
        <img src="path.png" alt="path" className="w-full" />
        <div className='absolute' style={{ bottom: '15%', right: '5%', width: '30%' }}>
          <h3 className="font-medium text-end text-40 text-gradient">{messages.discoverHow}</h3>
          <h3 className="font-medium text-end text-lg text-black">{messages.simpleProcess}</h3>
        </div>
      </div>
      <div className='pb-32'>
        <SliderComponent />
      </div>
    </div>
  )
}
export default WayToGo;