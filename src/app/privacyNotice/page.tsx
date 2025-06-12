"use client"
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function PrivacyNotice() {
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
            Aviso de Privacidad
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
              De conformidad con el artículo 3°, fracción XIV, de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), y demás disposiciones legales aplicables, <b>Grupo Metrópoli, Agente de Seguros y de Fianzas, S.A. de C.V. (GRUPO METRÓPOLI</b>), con domicilio en Lucas Alamán y Escalada 176, Colonia Lomas Verdes 6ª Sección, Código Postal 53126, Municipio de Naucalpan de Juárez, Estado de México, México, es responsable del manejo de sus datos personales.
            </p>
            <p>
              Para cumplir con los fines establecidos en este Aviso de Privacidad, es necesario recabar y tratar las siguientes categorías de datos personales, dependiendo del perfil del titular:
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
            <p className="mb-2">Si usted es solicitante, se recabarán:</p>
            <ul className="list-disc ml-6 mb-2">
              <li>Datos de identificación</li>
              <li>Contacto</li>
              <li>Ubicación</li>
              <li>Laborales</li>
              <li>Patrimoniales y financieros</li>
              <li>Académicos</li>
              <li>De tránsito y migratorios</li>
            </ul>
            <p className="mb-2">
              Si es asegurado, contratante o fideicomitente, se recabarán los mismos datos mencionados arriba.
            </p>
            <p className="mb-2">
              Si es beneficiario, empleado del contratante (en administración de fondos) o fideicomisario, se recopilarán también los mismos datos.
            </p>
            <p className="mb-2">Si es tercero relacionado (persona vinculada y/o considerada como acreedora con un contrato de: seguro, producto o servicio, ya sea por derechos u obligaciones), se recabarán:</p>
            <ul className="list-disc ml-6 mb-2">
              <li>Datos de identificación</li>
              <li>Contacto</li>
              <li>Ubicación</li>
              <li>Laborales</li>
              <li>Patrimoniales y financieros</li>
            </ul>
            <p className="mb-2">Si actúa como representante legal, propietario real o controlador, también se recopilarán datos de:</p>
            <ul className="list-disc ml-6 mb-2">
              <li>Identificación</li>
              <li>Contacto</li>
              <li>Ubicación</li>
              <li>Laborales</li>
              <li>Patrimoniales y financieros</li>
              <li>Tránsito y migratorios</li>
            </ul>
            <p className="mb-2">Adicionalmente, podremos recabar datos sensibles como:</p>
            <ul className="list-disc ml-6 mb-2">
              <li>Estado de salud (pasado, presente y futuro)</li>
              <li>Hábitos de vida y antecedentes heredofamiliares</li>
              <li>Información biométrica</li>
              <li>Datos de geolocalización y telemetría vehicular</li>
              <li>Información sobre procesos judiciales</li>
            </ul>
            <p className="mb-2">Estos datos se obtendrán a través de:</p>
            <ul className="list-disc ml-6 mb-2">
              <li>Aliados y/o socios comerciales, autoridades, fuentes públicas y redes sociales</li>
              <li>Formularios, formatos y registros que el interesado nos proporcione</li>
            </ul>
            <p className="mb-2">En caso de que nos proporcione datos de terceros, usted declara que:</p>
            <ul className="list-disc ml-6 mb-2">
              <li>Los ha informado sobre el uso de sus datos</li>
              <li>Ha obtenido su consentimiento</li>
              <li>Les ha indicado que pueden consultar este Aviso de Privacidad en www.grupometropoli.com.mx</li>
            </ul>
            <p className="mb-2">
              Para el caso de menores de edad, <b>GRUPO METRÓPOLI</b> sólo tratará sus datos si han sido proporcionados por quien ejerza la patria potestad o representación legal.
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
            <p className="mb-2"><b>GRUPO METROPOLI</b> tratará sus datos personales para las siguientes finalidades primarias, necesarias para el cumplimiento de la relación jurídica existente:</p>
            <ul className="list-disc ml-6 mb-2">
              <li>Solicitantes: verificar identidad, registrar solicitudes, validar información, evaluar riesgos, prevenir fraudes, contactar para seguimiento, análisis estadísticos, cumplimiento legal.</li>
              <li>Asegurados, contratantes, fideicomitentes: emisión de póliza, registro y administración del seguro o servicio, atención personalizada, evaluación de riesgos, gestión de siniestros y pagos, comunicación, facturación, coaseguro, traspaso de cartera, cumplimiento normativo.</li>
              <li>Beneficiarios, empleados del contratante, fideicomisarios: identificación, administración de fondos y pólizas, pagos, evaluación de riesgos, prevención de fraudes, contacto, análisis de mercado.</li>
              <li>Terceros relacionados: administración de siniestros, prevención de fraudes, estudios de mercado, cumplimiento legal.</li>
              <li>Representantes legales, propietarios reales o controladores: verificación de identidad, representación en trámites, validación de datos, evaluación de riesgos, contacto, cumplimiento legal.</li>
              <li>Realizar operaciones relacionadas con el ajuste, atención y seguimiento de siniestros, incluyendo la localización del lugar del evento, procesos de subrogación y atención de solicitudes en caso de ser usted un tercero afectado.</li>
              <li>Llevar a cabo actividades distintas a la emisión de pólizas de seguro, tales como el análisis, gestión y pago de siniestros, así como todo lo relacionado con la venta de bienes recuperados (salvamentos).</li>
              <li>Verificar su identidad y consultar listas de personas sancionadas o fuentes de acceso público, conforme a la normatividad aplicable, con el fin de validar la relación jurídica derivada del contrato de seguro.</li>
              <li>Cumplir con las obligaciones legales, contractuales y administrativas derivadas de la relación jurídica entre usted y <b>GRUPO METROPOLI</b>.</li>
              <li>Ejecutar auditorías internas y externas, y realizar análisis de datos con fines de validación, monitoreo y mejora en la calidad del servicio y/o productos ofrecidos.</li>
              <li>Implementar controles internos, así como procesos estadísticos y de calidad, conforme a las políticas internas de <b>GRUPO METROPOLI</b>.</li>
              <li>Atender, gestionar y dar respuesta a las solicitudes de ejercicio de derechos ARCO (Acceso, Rectificación, Cancelación y Oposición).</li>
              <li>Contactar a sus familiares o personas designadas como contactos en caso de emergencia.</li>
              <li>Utilizar y/o divulgar su imagen personal (fotografía, video, etc.) en los procesos de ajuste de siniestros o ante autoridades judiciales competentes, cuando exista una solicitud debidamente fundada y motivada, conforme a la normatividad aplicable.</li>
              <li>Gestionar la relación con terceros involucrados en siniestros y/o reclamaciones.</li>
              <li>Cumplir con las disposiciones y obligaciones previstas en la legislación aplicable.</li>
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
            <p className="mb-2"><b>Finalidades secundarias (opcionales):</b></p>
            <p className="mb-2">
              <b>GRUPO METRÓPOLI</b>, podrá utilizar sus datos para:
            </p>
            <ul className="list-disc ml-6 mb-2">
              <li>Ofrecerle nuevos productos, servicios y promociones de <b>GRUPO METROPOLI</b></li>
              <li>Contactarlo para encuestas de calidad o atención en emergencias</li>
              <li>Invitarlo a eventos o actividades sin fines de lucro</li>
              <li>Participar en estudios de mercado sobre nuestras plataformas</li>
              <li>Usar su imagen en campañas publicitarias o corporativas (presenciales o digitales)</li>
            </ul>
            <p className="mb-2">
              Si no desea que sus datos sean usados para estas finalidades, puede manifestarlo en cualquier momento a través de nuestra página web: www.grupometropoli.com.mx, en el apartado de &quot;Aviso de Privacidad - Datos Personales&quot;.
            </p>
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
            <p className="mb-2"><b>Transferencias de datos</b></p>
            <p className="mb-2">
              <b>GRUPO METROPOLI</b>, podrá compartir sus datos personales, dentro o fuera del país, sin requerir su autorización, con:
            </p>
            <ul className="list-disc ml-6 mb-2">
              <li>Socios comerciales y empresas con las que se mantenga relación jurídica bajo políticas de privacidad comunes con relación a temas de protección de datos personales.</li>
              <li>Instituciones financieras y bursátiles, para la atención y gestión de las obligaciones con relación a temas de: seguro, servicio, producto contratado y/u obligaciones resultantes del vínculo jurídico que exista entre las partes.</li>
              <li>Instituciones Médicas, para la atención y gestión de las obligaciones con relación a temas de: seguro, servicio, producto contratado y/u obligaciones resultantes del vínculo jurídico que exista entre las partes.</li>
              <li>Autoridades competentes, cuando así lo exija la ley.</li>
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
            <p className="mb-2"><b>Ejercicio de Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)</b></p>
            <p className="mb-2">
              Usted o su representante legal podrán ejercer sus derechos ARCO mediante una solicitud presentada a través de la página web de <b>GRUPO METROPOLI</b>: www.grupometropoli.com.mx, en el apartado de &quot;Aviso de Privacidad - Datos Personales&quot; y siguiendo los pasos del &quot;Procedimiento para el ejercicio de los Derechos ARCO&quot;.
            </p>
            <p className="mb-2">La solicitud debe contener:</p>
            <ul className="list-disc ml-6 mb-2">
              <li>Nombre completo del titular</li>
              <li>Medio de contacto para responder (correo electrónico o domicilio)</li>
              <li>Descripción clara de los datos personales sobre los que se busca ejercer el derecho</li>
              <li>Copia de una identificación oficial (en formato digital si se hace en línea)</li>
            </ul>
            <p className="mb-2">
              En caso de que el trámite lo realice su representante, deberá adjuntar también el documento que acredite dicha representación.
            </p>
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
            <p className="mb-2"><b>Revocación del consentimiento</b></p>
            <p className="mb-2">
              Usted puede revocar su consentimiento para el uso de sus datos personales en cualquier momento, siempre que la ley lo permita. Para ello, debe seguir el procedimiento disponible en nuestra página web de <b>GRUPO METROPOLI</b>: www.grupometropoli.com.mx, en el apartado de &quot;Aviso de Privacidad - Datos Personales&quot;.
            </p>
            <p className="mb-2">
              Es importante tener en cuenta que la revocación podría implicar que <b>GRUPO METROPOLI</b> no pueda seguir brindándole algunos servicios o productos.
            </p>
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
            <p className="mb-2"><b>Limitación del uso o divulgación de sus datos</b></p>
            <p className="mb-2">
              Si desea limitar el uso o divulgación de sus datos personales (por ejemplo, para no recibir publicidad o promociones), puede inscribirse en el Registro Público para Evitar Publicidad (REPEP), administrado por PROFECO, o bien solicitarlo directamente a <b>GRUPO METROPOLI</b>, mediante los mecanismos indicados en nuestra página web: www.grupometropoli.com.mx, en el apartado de &quot;Aviso de Privacidad - Datos Personales&quot;.
            </p>
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
            <p className="mb-2"><b>Uso de tecnologías de rastreo en sitios web</b></p>
            <p className="mb-2">
              Nuestro sitio web puede utilizar cookies, web beacons y otras tecnologías para monitorear su comportamiento como usuario de internet, y brindarle un mejor servicio y experiencia de navegación.
            </p>
            <p className="mb-2">Los datos que se pueden recabar mediante estas tecnologías incluyen:</p>
            <ul className="list-disc ml-6 mb-2">
              <li>Tipo de navegador y sistema operativo</li>
              <li>Páginas visitadas</li>
              <li>Dirección IP</li>
              <li>Tiempo de navegación</li>
              <li>Sitios web previos al nuestro</li>
            </ul>
            <p className="mb-2">
              Puede deshabilitar estas tecnologías desde la configuración de su navegador. Para más detalles, consulte en el apartado de &quot;Aviso de Privacidad - Datos Personales&quot; sobre el uso de cookies, disponible en www.grupometropoli.com.mx.
            </p>
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
            <p className="mb-2"><b>Cambios al Aviso de Privacidad</b></p>
            <p className="mb-2">
              <b>GRUPO METROPOLI</b>, puede modificar este Aviso de Privacidad en cualquier momento, por cambios legales o por actualizaciones internas. Las modificaciones estarán disponibles en nuestro sitio web de <b>GRUPO METROPOLI</b>: www.grupometropoli.com.mx, en el apartado &quot;Aviso de Privacidad - Datos Personales&quot;. Le recomendamos revisar esta sección periódicamente para estar al tanto de cualquier cambio. Para cualquier asunto o duda relacionada con este Aviso de Privacidad, puede contactarnos al correo electrónico: [Pendiente].
            </p>
            <p className="mb-2">
              [Aviso de Privacidad - Datos Personales] Subtitulo que puede ser modificado para efectos de su fácil identificación por parte de los usuarios.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
