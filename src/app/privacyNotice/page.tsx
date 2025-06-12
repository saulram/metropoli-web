"use client"
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { useTranslations } from "@/i18n/useTranslations";

// Utilidad para parsear [[b]]...[[/b]] a <b>...</b>
function parseBold(text: string) {
  const parts = text.split(/(\[\[b\]\]|\[\[\/b\]\])/);
  let bold = false;
  return parts.map((part, i) => {
    if (part === '[[b]]') { bold = true; return null; }
    if (part === '[[/b]]') { bold = false; return null; }
    return bold ? <b key={i}>{part}</b> : part;
  });
}

export default function PrivacyNotice() {
  const messages = useTranslations();
  // Definir los índices de las listas para mapearlos
  const section2_list1 = [0,1,2,3,4,5,6];
  const section2_list2 = [0,1,2,3,4];
  const section2_list3 = [0,1,2,3,4,5];
  const section2_list4 = [0,1,2,3,4];
  const section2_list5 = [0,1];
  const section2_list6 = [0,1,2];
  const section3_list1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  const section4_list1 = [0,1,2,3,4];
  const section5_list1 = [0,1,2,3];
  const section6_list1 = [0,1,2,3];
  const section9_list1 = [0,1,2,3,4];
  return (
    <div style={{
      background: '#d1d7e1 url(/waves.png) bottom/cover no-repeat',
    }}>
      <Navigation />
      <div className="px-10 pb-28 md:px-28 bg-white text-black" style={{
        background: '#d1d7e1 url(/waves.png) center/cover no-repeat',
        rotate:'180deg'
      }}>
        <div className="stain" />
        <div style={{
          zIndex: 10,
          position: 'relative',
          rotate:'180deg'
        }}>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-black text-center text-[#444444] text-xl mb-4"
          >
            {messages.privacyNotice_title}
          </motion.h1>
          <hr className="hr-gradient mb-6" />
          {/* Sección 1 */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <p className="mb-4">
              {parseBold(messages.privacyNotice_section1_p1!)}
            </p>
            <p>
              {parseBold(messages.privacyNotice_section1_p2!)}
            </p>
          </motion.div>

          {/* Sección 2: Solicitante */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <p className="mb-2">{parseBold(messages.privacyNotice_section2_p1!)}</p>
            <ul className="list-disc ml-6 mb-2">
              {section2_list1.map(idx => {
                const key = `privacyNotice_section2_list1_${idx}`;
                return <li key={idx}>{parseBold(messages[key as keyof typeof messages] as string)}</li>;
              })}
            </ul>
            <p className="mb-2">{parseBold(messages.privacyNotice_section2_p2!)}</p>
            <p className="mb-2">{parseBold(messages.privacyNotice_section2_p3!)}</p>
            <p className="mb-2">{parseBold(messages.privacyNotice_section2_p4!)}</p>
            <ul className="list-disc ml-6 mb-2">
              {section2_list2.map(idx => {
                const key = `privacyNotice_section2_list2_${idx}`;
                return <li key={idx}>{parseBold(messages[key as keyof typeof messages] as string)}</li>;
              })}
            </ul>
            <p className="mb-2">{parseBold(messages.privacyNotice_section2_p5!)}</p>
            <ul className="list-disc ml-6 mb-2">
              {section2_list3.map(idx => {
                const key = `privacyNotice_section2_list3_${idx}`;
                return <li key={idx}>{parseBold(messages[key as keyof typeof messages] as string)}</li>;
              })}
            </ul>
            <p className="mb-2">{parseBold(messages.privacyNotice_section2_p6!)}</p>
            <ul className="list-disc ml-6 mb-2">
              {section2_list4.map(idx => {
                const key = `privacyNotice_section2_list4_${idx}`;
                return <li key={idx}>{parseBold(messages[key as keyof typeof messages] as string)}</li>;
              })}
            </ul>
            <p className="mb-2">{parseBold(messages.privacyNotice_section2_p7!)}</p>
            <ul className="list-disc ml-6 mb-2">
              {section2_list5.map(idx => {
                const key = `privacyNotice_section2_list5_${idx}`;
                return <li key={idx}>{parseBold(messages[key as keyof typeof messages] as string)}</li>;
              })}
            </ul>
            <p className="mb-2">{parseBold(messages.privacyNotice_section2_p8!)}</p>
            <ul className="list-disc ml-6 mb-2">
              {section2_list6.map(idx => {
                const key = `privacyNotice_section2_list6_${idx}`;
                return <li key={idx}>{parseBold(messages[key as keyof typeof messages] as string)}</li>;
              })}
            </ul>
            <p className="pb-2">
              {parseBold(messages.privacyNotice_section2_p9!)}
            </p>
            <p className="pb-2">
              {parseBold(messages.privacyNotice_section3_p1!)}
            </p>
          </motion.div>
        </div>
      </div>
      <div className="px-10 pb-28 md:px-28 bg-white text-black" style={{
        background: '#d1d7e1',
      }}>
        <div className="stain md:top-[2100px] sm:top-[3600px]"/>
        <div style={{
          zIndex: 10,
          position: 'relative',
        }}>
          {/* Sección 3: Finalidades primarias */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <ul className="list-disc ml-6 mb-2">
              {section3_list1.map(idx => {
                const key = `privacyNotice_section3_list1_${idx}`;
                return <li key={idx}>{parseBold(messages[key as keyof typeof messages] as string)}</li>;
              })}
            </ul>
          </motion.div>

          {/* Sección 4: Finalidades secundarias */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <p className="mb-2"><b>{messages.privacyNotice_section4_title}</b></p>
            <p className="mb-2">{parseBold(messages.privacyNotice_section4_p1!)}</p>
            <ul className="list-disc ml-6 mb-2">
              {section4_list1.map(idx => {
                const key = `privacyNotice_section4_list1_${idx}`;
                return <li key={idx}>{parseBold(messages[key as keyof typeof messages] as string)}</li>;
              })}
            </ul>
            <p className="mb-2">{parseBold(messages.privacyNotice_section4_p2!)}</p>
          </motion.div>

          {/* Sección 5: Transferencias de datos */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <p className="mb-2"><b>{messages.privacyNotice_section5_title}</b></p>
            <p className="mb-2">{parseBold(messages.privacyNotice_section5_p1!)}</p>
            <ul className="list-disc ml-6 mb-2">
              {section5_list1.map(idx => {
                const key = `privacyNotice_section5_list1_${idx}`;
                return <li key={idx}>{parseBold(messages[key as keyof typeof messages] as string)}</li>;
              })}
            </ul>
          </motion.div>

          {/* Sección 6: Derechos ARCO */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <p className="mb-2"><b>{messages.privacyNotice_section6_title}</b></p>
            <p className="mb-2">{parseBold(messages.privacyNotice_section6_p1!)}</p>
            <p className="mb-2">{parseBold(messages.privacyNotice_section6_p2!)}</p>
            <ul className="list-disc ml-6 mb-2">
              {section6_list1.map(idx => {
                const key = `privacyNotice_section6_list1_${idx}`;
                return <li key={idx}>{parseBold(messages[key as keyof typeof messages] as string)}</li>;
              })}
            </ul>
            <p className="mb-2">{parseBold(messages.privacyNotice_section6_p3!)}</p>
          </motion.div>

          {/* Sección 7: Revocación del consentimiento */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <p className="mb-2"><b>{messages.privacyNotice_section7_title}</b></p>
            <p className="mb-2">{parseBold(messages.privacyNotice_section7_p1!)}</p>
            <p className="mb-2">{parseBold(messages.privacyNotice_section7_p2!)}</p>
          </motion.div>

          {/* Sección 8: Limitación del uso o divulgación */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <p className="mb-2"><b>{messages.privacyNotice_section8_title}</b></p>
            <p className="mb-2">{parseBold(messages.privacyNotice_section8_p1!)}</p>
          </motion.div>

          {/* Sección 9: Tecnologías de rastreo */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <p className="mb-2"><b>{messages.privacyNotice_section9_title}</b></p>
            <p className="mb-2">{parseBold(messages.privacyNotice_section9_p1!)}</p>
            <p className="mb-2">{parseBold(messages.privacyNotice_section9_p2!)}</p>
            <ul className="list-disc ml-6 mb-2">
              {section9_list1.map(idx => {
                const key = `privacyNotice_section9_list1_${idx}`;
                return <li key={idx}>{parseBold(messages[key as keyof typeof messages] as string)}</li>;
              })}
            </ul>
            <p className="mb-2">{parseBold(messages.privacyNotice_section9_p3!)}</p>
          </motion.div>

          {/* Sección 10: Cambios al aviso */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <p className="mb-2"><b>{messages.privacyNotice_section10_title}</b></p>
            <p className="mb-2">{parseBold(messages.privacyNotice_section10_p1!)}</p>
            <p className="mb-2">{parseBold(messages.privacyNotice_section10_p2!)}</p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
