import { useTranslations } from "@/i18n/useTranslations";
import Link from "next/link";

export default function Footer() {
  const messages = useTranslations();
  return (
    <div  className="bg-metropoliBg pb-48" style={{
      backgroundImage: 'url(/waves_bottom.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      height: "515px",
      transform: "rotate(180deg)"
    }}>
      <footer className="metropoliBg-dark" style={{transform:"rotate(-180deg)",height: "215px", borderRadius: "40px 40px 0px 0px" }}>
        <div className="px-10 md:px-28 pt-14 flex justify-between">
          <div className="flex justify-between flex-col items-center">
            <img src="/GM_logo.png" alt="logo dorado" width={65} className="mb-4"/>
            <img src="/GM_logo_text.png" alt="texto logo" width={177}/>
          </div>
          <div>
            <p className="mb-3">{messages.menu}</p>
            <Link href="/privacy-policy">
              <p className="block">{messages.competenciesAndValues}</p>
            </Link>
            <Link href="/legal-notice">
              <p className="block">{messages.roads}</p>
            </Link>
            <Link href="/terms-and-conditions">
              <p className="block">{messages.sendRequest}</p>
            </Link>
          </div>
          <div>
            <p className="mb-3">{messages.legal}</p>
            <Link href="/privacy-policy">
              <p className="block">{messages.privacyPolicy}</p>
            </Link>
            <Link href="/legal-notice">
              <p className="block">{messages.legal}</p>
            </Link>
            <Link href="/terms-and-conditions">
              <p className="block">{messages.termsAndConditions}</p>
            </Link>
          </div>
          <div>
            <p>{messages.languages}</p>
            <div className="flex mb-2">
              <img src="/flagmx.png" alt="español" className="mr-2" width={17}/>
              <img src="/flagusa.png" alt="english" width={17}/>
            </div>
            <p>{messages.followUs}</p>
            <div className="flex mb-2">
              <img src="/facebook.png" alt="facebook" className="mr-2" width={18}/>
              <img src="/linkedin.png" alt="inkedin" width={18}/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}