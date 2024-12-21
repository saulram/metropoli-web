"use client"
import DescriptiveText from "@/components/DescriptiveText";
import Footer from "@/components/footer";
import Navigation from "@/components/Navigation";
import { useTranslations } from "@/i18n/useTranslations";

export default function CompetenciesAndValues() {
  const messages = useTranslations();

  return (
    <div>
      <Navigation />
      <div className="px-10 md:px-28 py-28 bg-white" style={{
        background: '#d1d7e1 url(/waves.png) center/cover no-repeat',
        rotate: '180deg'
      }}>
        <div style={{ rotate: '180deg' }}>
          <h1 className="font-black text-center text-[#444444] text-xl mb-4">{messages.business}</h1>
          <hr className="hr-gradient" />
          <div className="mt-28 mb-4">
            <h2 className="values-title-gradient text-40 md:w-2/5 mb-14">{messages.firefighting}</h2>
            <div className="grid grid-cols-3 gap-0">
              <div className=""></div>
              <div className="col-span-2">
                <div className=' md:w-4/5'>
                  <DescriptiveText title={messages.deserveToBeHeard} text={messages.weHandleFires} active={true} />
                </div>
                <div className='mt-10 md:w-4/5'>
                  <p className="text-[#444444] text-lg">{messages.marketExperience}</p>
                  <DescriptiveText title={messages.leadersSeekPeace} text='' />
                </div>
                <div className='mt-10 mb-14 md:w-4/5'>
                  <DescriptiveText title={messages.yourPathToYourPeace} text='' button={messages.startsHere} />
                </div>
                <div className="rounded-md px-3.5 py-2.5 text-sm font-bold text-white shadow-sm focus:outline-none"
                  style={{
                    background: 'linear-gradient(90deg, #1E2D49 0%, #112039 25.5%, rgba(25, 57, 113, 0.99299) 78.5%, rgba(14, 80, 187, 0.98) 100%)',
                    border: '0.5px solid',
                    borderImageSource: 'linear-gradient(90deg, #99C0FF 0%, #1C6EF6 100%)',
                    boxShadow: '0px 4px 4px 0px #00000040 inset',
                    width: '230px',
                    textAlign: 'center',
                    borderRadius: '10px'
                  }}>{messages.EnsureYourPeaceOfMind}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#d1d7e1] px-10 md:px-28 " style={{
        marginTop: '-1px',
        background: '#d1d7e1 url(/waves.png) center/cover no-repeat',
      }}>

        <p className="text-black text-3xl md:w-2/5 mb-40 z-10" >
          <b className="text-[#444444] font-normal">{messages.longTrajectory}</b> <b className="values-title-gradient font-normal">{messages.clientsFromAllIndustries}</b> <b className="text-[#444444] font-normal">{messages.comprehensiveInsurancePrograms}</b>
        </p>
        <div className="stain"
          style={{
            left: 0,
            position: 'absolute', // Asegúrate de que el div esté posicionado correctamente
          }} />
        <div className="grid grid-cols-3 gap-3 mb-40">
          <div className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-2xl">{messages.art}</p>
          </div>
          <div className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-2xl">{messages.vehicles}</p>
          </div>
          <div className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-2xl">{messages.aviationAndDrones}</p>
          </div>

          <div className="flex flex-col containersemitransparente justify-center items-center p-10 text-center">
            <p className="values-title-gradient font-bold text-2xl">{messages.employeeBenefits}</p>
            <p className="text-[#444]">{messages.healthAndLifeInsurance}</p>
          </div>
          <div className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-2xl">{messages.flexibleBenefits}</p>
          </div>
          <div className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-2xl">{messages.cargoTransport}</p>
          </div>

          <div className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-2xl">{messages.constructionCivilWorks}</p>
          </div>
          <div className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-2xl">{messages.businessInsurance}</p>
          </div>
          <div className="flex flex-col containersemitransparente justify-center items-center p-10 text-center">
            <p className="values-title-gradient font-bold text-2xl">{messages.bonds}</p>
            <p className="text-[#444]">{messages.administrativeInsurance}</p>
          </div>

          <div className="flex flex-col containersemitransparente justify-center items-center p-10 text-center">
            <p className="values-title-gradient font-bold text-2xl">{messages.financialLines}</p>
            <p className="text-[#444]">{messages.cyberAndCredit}</p>
          </div>
          <div className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-2xl">{messages.microInsurance}</p>
          </div>
          <div className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-2xl">{messages.civilLiability}</p>
          </div>

          <div className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-2xl">{messages.vessels}</p>
          </div>
          <div className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-2xl">{messages.terrorism}</p>
          </div>
          <div className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-2xl">{messages.etc}</p>
          </div>

        </div>

        <div className="flex justify-center items-center mb-40">
          <p className="text-center md:w-3/5 values-title-gradient text-2xl font-normal">
            {messages.everythingIsInsurable}
          </p>
        </div>

        <div className="flex justify-center items-center w-full mb-14">
          <img src="/business-page.svg" alt="business-img-page" />
        </div>
        <div className="flex justify-center items-center w-full mb-40">
          <div className="rounded-md px-3.5 py-2.5 text-sm font-bold text-white shadow-sm focus:outline-none"
            style={{
              background: 'linear-gradient(90deg, #1E2D49 0%, #112039 25.5%, rgba(25, 57, 113, 0.99299) 78.5%, rgba(14, 80, 187, 0.98) 100%)',
              border: '0.5px solid',
              borderImageSource: 'linear-gradient(90deg, #99C0FF 0%, #1C6EF6 100%)',
              boxShadow: '0px 4px 4px 0px #00000040 inset',
              width: '230px',
              textAlign: 'center',
              borderRadius: '10px'
            }}>{messages.EnsureYourPeaceOfMind}</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}