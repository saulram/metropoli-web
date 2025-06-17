"use client"
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { useTranslations } from "@/i18n/useTranslations";

export default function TermsAndConditions() {
  const messages = useTranslations();

  // Función para renderizar texto con negritas
  const renderTextWithBold = (text: string | undefined) => {
    if (!text) return text;
    
    const parts = text.split(/(\[\[b\]\].*?\[\[\/b\]\])/g);
    return parts.map((part, index) => {
      if (part.startsWith('[[b]]') && part.endsWith('[[/b]]')) {
        const boldText = part.replace(/\[\[b\]\]|\[\[\/b\]\]/g, '');
        return <strong key={index}>{boldText}</strong>;
      }
      return part;
    });
  };

  const clauseParagraphs: { [key: number]: number } = {
    2: 3,
    3: 1,
    4: 6,
    5: 1,
    6: 2,
    7: 1,
    8: 1,
    9: 1,
    10: 1,
    11: 1,
    12: 2,
    13: 1,
    14: 1,
    15: 1,
    16: 1,
    17: 1,
    18: 3,
  };

  return (
    <div style={{
      background: '#d1d7e1 url(/waves.png) bottom/cover no-repeat',
    }}>
      <Navigation />
      <div className="px-10 pb-28 md:px-28 bg-white text-black" style={{
        background: '#d1d7e1 url(/waves.png) center/cover no-repeat',
        rotate: '180deg',
      }}>
        <div style={{
          zIndex: 10,
          position: 'relative',
          rotate: '180deg'
        }}>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-black text-center text-[#444444] text-xl mb-4"
          >
            {messages.termsAndConditions_title}
          </motion.h1>
          <hr className="hr-gradient mb-6" />
          
          {/* Introducción */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mb-6"
          >
            <p className="text-justify mb-4">
              <strong>{messages.termsAndConditions_intro}</strong>
            </p>
          </motion.div>

          {/* Declaraciones */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mb-6"
          >
            <h2 className="font-bold text-lg mb-3">{messages.termsAndConditions_declarations_title}</h2>
            <p className="text-justify mb-2">{messages.termsAndConditions_declarations_intro}</p>
            <ul className="list-none ml-6 mb-4">
              <li className="text-justify mb-2">I. {messages.termsAndConditions_declarations_1}</li>
              <li className="text-justify mb-2">II. {messages.termsAndConditions_declarations_2}</li>
            </ul>
            <p className="text-justify mb-4">{messages.termsAndConditions_declarations_closing}</p>
          </motion.div>

          {/* Cláusulas */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mb-6"
          >
            <h2 className="font-bold text-lg mb-4">{messages.termsAndConditions_clauses_title}</h2>

            {/* Cláusula Primera - Definiciones */}
            <div className="mb-6">
              <h3 className="font-bold mb-3">{messages.termsAndConditions_clause1_title}</h3>
              <p className="text-justify mb-3">{messages.termsAndConditions_clause1_intro}</p>
              <div className="ml-4 space-y-2">
                <p className="text-justify"><strong>{messages.termsAndConditions_def_asegurado}</strong> {renderTextWithBold(messages.termsAndConditions_clause1_asegurado)}</p>
                <p className="text-justify"><strong>{messages.termsAndConditions_def_autenticacion}</strong> {renderTextWithBold(messages.termsAndConditions_clause1_autenticacion)}</p>
                <p className="text-justify"><strong>{messages.termsAndConditions_def_beneficiario}</strong> {renderTextWithBold(messages.termsAndConditions_clause1_beneficiario)}</p>
                <p className="text-justify"><strong>{messages.termsAndConditions_def_contrasena}</strong> {renderTextWithBold(messages.termsAndConditions_clause1_contrasena)}</p>
                <p className="text-justify"><strong>{messages.termsAndConditions_def_contrato}</strong> {renderTextWithBold(messages.termsAndConditions_clause1_contrato)}</p>
                <p className="text-justify"><strong>{messages.termsAndConditions_def_factor}</strong> {renderTextWithBold(messages.termsAndConditions_clause1_factor)}</p>
                <ul className="list-disc ml-6 mt-1">
                  <li>{renderTextWithBold(messages.termsAndConditions_clause1_factor_1)}</li>
                  <li>{renderTextWithBold(messages.termsAndConditions_clause1_factor_2)}</li>
                  <li>{renderTextWithBold(messages.termsAndConditions_clause1_factor_3)}</li>
                </ul>
                <p className="text-justify"><strong>{messages.termsAndConditions_def_identificador}</strong> {renderTextWithBold(messages.termsAndConditions_clause1_identificador)}</p>
                <p className="text-justify"><strong>{messages.termsAndConditions_def_medios}</strong> {renderTextWithBold(messages.termsAndConditions_clause1_medios)}</p>
                <ul className="list-disc ml-6 mt-1">
                  <li>{renderTextWithBold(messages.termsAndConditions_clause1_medios_1)}</li>
                  <li>{renderTextWithBold(messages.termsAndConditions_clause1_medios_2)}</li>
                  <li>{renderTextWithBold(messages.termsAndConditions_clause1_medios_3)}</li>
                </ul>
                <p className="text-justify"><strong>{messages.termsAndConditions_def_sms}</strong> {renderTextWithBold(messages.termsAndConditions_clause1_sms)}</p>
                <p className="text-justify"><strong>{messages.termsAndConditions_def_operaciones}</strong> {renderTextWithBold(messages.termsAndConditions_clause1_operaciones)}</p>
                <p className="text-justify"><strong>{messages.termsAndConditions_def_poliza}</strong> {renderTextWithBold(messages.termsAndConditions_clause1_poliza)}</p>
                <p className="text-justify"><strong>{messages.termsAndConditions_def_sesion}</strong> {renderTextWithBold(messages.termsAndConditions_clause1_sesion)}</p>
                <p className="text-justify"><strong>{messages.termsAndConditions_def_usuario}</strong> {renderTextWithBold(messages.termsAndConditions_clause1_usuario)}</p>
                <p className="text-justify"><strong>{messages.termsAndConditions_def_grupo}</strong> {renderTextWithBold(messages.termsAndConditions_clause1_grupo)}</p>
              </div>
            </div>

            {/* Resto de las cláusulas */}
            {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(clauseNum => (
              <div key={clauseNum} className="mb-6">
                <h3 className="font-bold mb-3">{messages[`termsAndConditions_clause${clauseNum}_title` as keyof typeof messages] as string}</h3>
                <div className="space-y-2">
                                      {clauseNum === 4 ? (
                      <>
                        {/* Párrafo 1 */}
                        <p className="text-justify">
                          {renderTextWithBold(messages.termsAndConditions_clause4_p1)}
                        </p>
                        
                        {/* Lista con párrafos 2 y 3 */}
                        <ul className="list-disc ml-6 mt-1 space-y-1">
                          <li className="text-justify">{renderTextWithBold(messages.termsAndConditions_clause4_p2)}</li>
                          <li className="text-justify">{renderTextWithBold(messages.termsAndConditions_clause4_p3)}</li>
                        </ul>
                        
                        {/* Párrafos 4 y 5 */}
                        {[4, 5].map(paragraphNum => {
                          const key = `termsAndConditions_clause4_p${paragraphNum}` as keyof typeof messages;
                          const content = messages[key] as string;
                          if (content) {
                            return (
                              <p key={paragraphNum} className="text-justify">
                                {renderTextWithBold(content)}
                              </p>
                            );
                          }
                          return null;
                        })}
                      
                      <ul className="list-disc ml-6 mt-2 space-y-1">
                        {[1, 2, 3, 4, 5, 6, 7].map(itemNum => {
                          const key = `termsAndConditions_clause4_list_${itemNum}` as keyof typeof messages;
                          const content = messages[key] as string;
                          if (content) {
                            return <li key={itemNum} className="text-justify">{renderTextWithBold(content)}</li>;
                          }
                          return null;
                        })}
                      </ul>
                      
                      {(() => {
                        const key = `termsAndConditions_clause4_p6` as keyof typeof messages;
                        const content = messages[key] as string;
                        if (content) {
                          return (
                            <p className="text-justify">
                              {renderTextWithBold(content)}
                            </p>
                          );
                        }
                        return null;
                      })()}
                    </>
                  ) : (
                    Array.from({ length: clauseParagraphs[clauseNum] || 1 }, (_, index) => index + 1).map(paragraphNum => {
                      const key = `termsAndConditions_clause${clauseNum}_p${paragraphNum}` as keyof typeof messages;
                      const content = messages[key] as string;
                      if (content) {
                        return (
                          <p key={paragraphNum} className="text-justify">
                            {renderTextWithBold(content)}
                          </p>
                        );
                      }
                      return null;
                    })
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 