import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

const TOTAL = 12;

const SHOTS = [
  {
    id: "secciones",
    label: "MacBook, iPad y iPhone",
    src: "/media/showcase-responsive.jpg",
    alt: "Composición del sitio de Pragma en MacBook, iPad y dos iPhone: inicio, servicios, Creditaria VIE, proceso y boletín.",
    caption:
      "La misma propuesta, recompuesta: escritorio con la alianza VIE, iPad con el proceso y teléfonos con servicios y boletín.",
  },
  {
    id: "formulario",
    label: "La cita en cada pantalla",
    src: "/media/showcase-form.jpg",
    alt: "Sitio de Pragma en un iMac, una MacBook y un iPhone, con el formulario Agenda una cita visible en los tres.",
    caption:
      "El formulario no es una página aparte: en monitor, laptop y teléfono queda junto a la promesa de marca.",
  },
  {
    id: "variante",
    label: "Servicios y boletín",
    src: "/media/showcase-devices.jpg",
    alt: "Otra composición responsive de Pragma con laptops, iPad y iPhones mostrando servicios, proceso y boletín.",
    caption:
      "Variante de la retícula: servicios en cuatro tarjetas, el proceso en cuatro pasos y el boletín con portada.",
  },
] as const;

function Mark() {
  return (
<img
  src="/favicon.ico"
  alt="PragmaCorp"
  className="mark"
  width={32}
  height={32}
/>
);
}
/*function Mark() {
  return (
    <svg className="mark" viewBox="0 0 36 36" aria-hidden="true">
      <rect x="3.2" y="3.2" width="29.6" height="29.6" rx="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M9 9h11v5.2H14.2V27H9V9zm8.2 6.4H27V27h-9.8v-4.2h4.6v-7.4h-4.6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}
*/
function Cover() {
  return (
    <div className="cover">
      <div className="cover-copy">
        <p className="kicker">Presentación para Pragma · Octubre 2026</p>
        <h1>
          PRAGMA
          <br />
          <span className="grad">soluciones financieras y fiscales</span>
        </h1>
        <p className="lema">
          Semper ad meliora
          <span>“Siempre hacia lo mejor”</span>
        </p>
        <p className="lede">
          El sitio demo ya está publicado. Esta presentación recorre qué contiene, cómo está
          construido y cómo convierte una visita en cita, boletín o conversación.
        </p>
        <div className="meta-row">
          <a className="solid" href="https://demo.pragmacorp.mx/" target="_blank" rel="noreferrer">
            Abrir el sitio
          </a>
          <span className="pill">demo.pragmacorp.mx</span>
        </div>
        <div className="chips">
          <span className="chip">Contabilidad</span>
          <span className="chip">Fiscal</span>
          <span className="chip">Consultoría</span>
          <span className="chip">Financiamiento</span>
        </div>
      </div>
      <figure className="frame">
        <img
          src="/media/showcase-form.jpg"
          alt="Propuesta visual de Pragma en iMac, MacBook y iPhone, con el formulario de cita."
        />
        <figcaption>Propuesta visual en monitor, MacBook y iPhone.</figcaption>
      </figure>
    </div>
  );
}

function Entrega() {
  const items = [
    ["Marca", "Titular, lema y una navegación de vidrio que permanece al desplazarse."],
    ["Oferta", "Cuatro servicios propios y la red de Creditaria VIE, con cifras y productos."],
    ["Cita", "Formulario en el primer pantallazo. Un asesor confirma el contacto."],
    ["Boletín", "Registro mensual con elección de temas y descarga del PDF."],
    ["Respuesta inmediata", "WhatsApp, teléfono y correo, además de Facebook e Instagram."],
    ["Confianza", "Aviso de privacidad enlazado antes de enviar cualquier dato."],
  ];
  return (
    <>
      <div className="slide-head">
        <p className="kicker">Qué se entregó</p>
        <h2>Una página para explicar, convencer y dejar los datos.</h2>
        <p className="lede">
          El titular publicado es «Soluciones financieras para impulsar tu crecimiento».
          Debajo, la promesa: contabilidad, fiscal, consultoría y financiamiento en un solo
          equipo, con la red de asesores financieros más grande de México.
        </p>
      </div>
      <ol className="num-list">
        {items.map(([title, copy], i) => (
          <li key={title}>
            <span className="idx">0{i + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

function Identidad() {
  const colors = [
    ["sw-deep", "Deep", "#0A1030", "Fondos de hero, pie y cierre"],
    ["sw-navy", "Navy", "#1B2754", "Navegación, boletín, botón de subir"],
    ["sw-orange", "Naranja", "#FF8A1F", "Acciones: cita, enviar, foco"],
    ["sw-amber", "Ámbar", "#FFB15E", "Lema, cifras y etiquetas"],
    ["sw-teal", "Teal", "#0A7F9B", "Bloque Creditaria VIE"],
    ["sw-ice", "Hielo", "#8AD8EA", "Degradado del titular"],
  ];
  return (
    <>
      <div className="slide-head">
        <p className="kicker">Identidad visual</p>
        <h2>Vidrio, degradado y una sola voz tipográfica.</h2>
      </div>
      <div className="split">
        <div>
          <div className="swatches">
            {colors.map(([cls, name, hex, use]) => (
              <div key={name} className={`swatch ${cls}`}>
                <b>{name}</b>
                <span>{hex}</span>
                <span>{use}</span>
              </div>
            ))}
          </div>
          <div className="type-row">
            <div className="type-card">
              <small>Títulos · Manrope</small>
              <strong className="type-display">Finanzas claras</strong>
            </div>
            <div className="type-card">
              <small>Texto · Inter</small>
              <strong className="type-body">Lectura directa, sin adorno.</strong>
            </div>
            <div className="type-card">
              <small>Lema · Cormorant</small>
              <strong className="type-serif">Semper ad meliora</strong>
            </div>
          </div>
        </div>
        <div className="principles">
          <div>
            <b>Transparencia tipo Apple</b>
            <span>
              La barra y los formularios flotan con desenfoque de 18 a 22 px, borde de luz y
              radio continuo. El fondo del edificio se ve a través del vidrio, no detrás de un
              bloque sólido.
            </span>
          </div>
          <div>
            <b>El color trabaja poco y preciso</b>
            <span>
              El naranja solo empuja la acción. El teal pertenece a la alianza. El titular mezcla
              ámbar, naranja y hielo en un solo degradado.
            </span>
          </div>
          <div>
            <b>Halos, no ruido</b>
            <span>
              Dos luces grandes —naranja arriba a la derecha, teal abajo a la izquierda— se mueven
              lento detrás del inicio. En el resto de la página el fondo se calma.
            </span>
          </div>
          <div>
            <b>También de noche</b>
            <span>
              Si el sistema está en oscuro, servicios y proceso cambian de marfil a navy sin
              perder el naranja. Hero, VIE, boletín y pie ya nacen oscuros.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function Arquitectura() {
  return (
    <>
      <div className="slide-head">
        <p className="kicker">Diagrama · lenguajes y piezas</p>
        <h2>Hecho a medida. Sin framework en el sitio del cliente.</h2>
        <p className="lede">
          Carga ligera, publicada en Hostinger. El navegador dibuja; PHP 8.3 registra.
        </p>
      </div>
      <div className="split">
        <ol className="stack">
          <li>
            <b>HTML5</b>
            <span>Una página con anclas y una segunda, el aviso de privacidad.</span>
          </li>
          <li>
            <b>CSS3</b>
            <span>Variables de color, retícula, vidrio, clamp y puntos de quiebre reales.</span>
          </li>
          <li>
            <b>JavaScript</b>
            <span>Sin librerías. Formularios, scroll, foco y animación al entrar en pantalla.</span>
          </li>
          <li>
            <b>PHP 8.3</b>
            <span>api/lead.php entrega un token, valida y guarda. api/download.php suelta el PDF.</span>
          </li>
          <li>
            <b>Hostinger</b>
            <span>El demo vive en demo.pragmacorp.mx, con HTTPS.</span>
          </li>
        </ol>
        <div className="bubbles">
          <article className="bubble">
            <em>Registro de leads</em>
            <h3>Dos orígenes, un servidor</h3>
            <p>
              Cita y boletín envían JSON con un token de sesión. Un campo oculto atrapa bots. Cada
              registro queda marcado según de dónde salió.
            </p>
          </article>
          <article className="bubble">
            <em>Burbuja WhatsApp</em>
            <h3>Chat con el texto listo</h3>
            <p>
              Fija, abajo a la derecha. Abre wa.me al 55 3425 3176 con: «Hola, quisiera información
              sobre los servicios de Pragma.»
            </p>
          </article>
          <article className="bubble">
            <em>Boletín</em>
            <h3>Datos y después el PDF</h3>
            <p>
              Nombre, correo, persona y temas. Con el consentimiento aceptado, el botón de descarga
              aparece al confirmar el registro.
            </p>
          </article>
          <article className="bubble">
            <em>Volver arriba</em>
            <h3>Después de 600 px</h3>
            <p>
              El botón nace oculto, sube suave y regresa el foco a la marca. Si el sistema pide
              menos movimiento, el salto es instantáneo.
            </p>
          </article>
        </div>
      </div>
    </>
  );
}

function Mapa() {
  const nodes = [
    ["01", "Navegación", "Servicios, VIE, proceso, boletín y la cita.", "Barra fija"],
    ["02", "Inicio", "Promesa, chips de servicio y formulario.", "#cita"],
    ["03", "Lema", "Semper ad meliora, en itálica editorial.", "Franja"],
    ["04", "Servicios", "Contabilidad, fiscal, consultoría, financiamiento.", "#servicios"],
    ["05", "Creditaria VIE", "Red, productos, cifras y sellos.", "#vie"],
    ["06", "Cómo trabajamos", "Cuatro pasos, de la cita al seguimiento.", "#pasos"],
    ["07", "Boletín", "Portadas, temas y descarga.", "#boletin"],
    ["08", "Cierre y pie", "Teléfono, correo, redes y nota legal.", "Contacto"],
  ];
  return (
    <>
      <div className="slide-head">
        <p className="kicker">Mapa del sitio</p>
        <h2>Todo el relato, en el orden en que se lee.</h2>
      </div>
      <ol className="rail">
        {nodes.map(([n, title, copy, anchor]) => (
          <li key={n}>
            <span className="idx">{n}</span>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="anchor">{anchor}</span>
            </div>
          </li>
        ))}
      </ol>
      <div className="band">
        <b>Siempre a la mano</b>
        <span className="chip">WhatsApp</span>
        <span className="chip">Volver arriba</span>
        <span className="chip">Aviso de privacidad</span>
        <span className="chip">privacidad.html</span>
      </div>
    </>
  );
}

function Formulario() {
  return (
    <>
      <div className="slide-head">
        <p className="kicker">Formulario y registro</p>
        <h2>La cita está en el primer pantallazo, no escondida.</h2>
      </div>
      <div className="two">
        <div className="glass panel">
          <h3 className="h-display h-sm">Agenda una cita</h3>
          <p className="lede tight">
            «Un asesor te contactará para confirmar.» Los botones del menú, del hero y del cierre
            llevan aquí y dejan el cursor en el nombre.
          </p>
          <div className="fields">
            <span>Nombre</span>
            <span>Apellido</span>
            <span>Correo electrónico</span>
            <span>Teléfono</span>
            <span>Persona física o moral</span>
            <span>Servicio de interés</span>
          </div>
          <p className="mini">
            Servicios: Contabilidad, Fiscal, Consultoría, Financiamiento, Seguros, Fondos de
            inversión.
          </p>
        </div>
        <div>
          <p className="kicker">Qué pasa al enviar</p>
          <ol className="steps">
            <li>
              <span className="step-no">1</span>
              <div>
                <h3>Pide una clave</h3>
                <p>Al cargar, el sitio solicita un token de sesión. No se acepta un envío anónimo.</p>
              </div>
            </li>
            <li>
              <span className="step-no">2</span>
              <div>
                <h3>Valida persona y robot</h3>
                <p>
                  Campos obligatorios, correo con formato y un campo invisible. Si un bot lo llena,
                  el envío no prospera.
                </p>
              </div>
            </li>
            <li>
              <span className="step-no">3</span>
              <div>
                <h3>Registra el origen</h3>
                <p>Este formulario viaja como cita. El del boletín viaja aparte, con sus temas.</p>
              </div>
            </li>
            <li>
              <span className="step-no">4</span>
              <div>
                <h3>Confirma en la misma tarjeta</h3>
                <p>«¡Listo! Recibimos tus datos y te contactaremos pronto.»</p>
              </div>
            </li>
          </ol>
          <p className="note">
            Antes de enviar se acepta el aviso de privacidad. El enlace abre la página legal en
            otra pestaña.
          </p>
        </div>
      </div>
    </>
  );
}

function Servicios() {
  const items = [
    ["01", "Contabilidad", "Registros al día y análisis para decidir con números, no con intuición."],
    ["02", "Fiscal", "Obligaciones en orden y planeación para usar los beneficios que sí aplican."],
    ["03", "Consultoría", "Estrategia de rentabilidad y liquidez, con un plan que el negocio pueda sostener."],
    ["04", "Financiamiento", "Acceso a crédito y negociación de condiciones con las instituciones."],
  ];
  return (
    <>
      <div className="slide-head">
        <p className="kicker">Servicios y alianza</p>
        <h2>Todo lo que el negocio necesita, y la red detrás.</h2>
      </div>
      <div className="services">
        {items.map(([n, title, copy]) => (
          <article key={n} className="service">
            <i>{n}</i>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <section className="vie">
        <p className="kicker">Creditaria VIE</p>
        <h3 className="h-display h-md">
          La red de asesores financieros más grande de México
        </h3>
        <div className="stats">
          <div>
            <b>17 años</b>
            <span>en hipotecario y PyME</span>
          </div>
          <div>
            <b>+1,000</b>
            <span>franquicias en el país</span>
          </div>
          <div>
            <b>Sin costo</b>
            <span>la asesoría de financiamiento</span>
          </div>
        </div>
        <p className="tags">
          Hipoteca · PyME · Automotriz · Seguros · Fondos de inversión. También vivienda, mejora de
          hipoteca, terreno, construcción, liquidez, remodelación, preventa y arrendamiento.
        </p>
      </section>
    </>
  );
}

function Proceso() {
  const steps = [
    ["1", "Agenda una cita", "Se escuchan las necesidades fiscales, contables o financieras."],
    ["2", "Propuesta a la medida", "Se analiza la situación y se diseña un plan para ese negocio."],
    ["3", "Implementación", "Se ejecuta la estrategia y se acompaña cada paso."],
    ["4", "Seguimiento", "Se mide el avance y se ajusta para que el resultado dure."],
  ];
  return (
    <>
      <div className="slide-head">
        <p className="kicker">Proceso y boletín</p>
        <h2>Un método simple, y una razón para volver cada mes.</h2>
      </div>
      <div className="two">
        <ol className="steps">
          {steps.map(([n, title, copy]) => (
            <li key={n}>
              <span className="step-no">{n}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="glass panel">
          <p className="kicker">Boletín informativo</p>
          <h3 className="h-display h-md">Mantente informado, mes con mes</h3>
          <ul className="check-list">
            <li>Consejos fiscales y financieros</li>
            <li>Cambios en leyes y normatividad</li>
            <li>Noticias relevantes para el negocio</li>
          </ul>
          <div className="fields">
            <span>Nombre</span>
            <span>Correo</span>
            <span>Persona física o moral</span>
            <span>Temas de interés</span>
          </div>
          <p className="mini">
            Temas: Fiscal, Financiero y Cambios en leyes. Hace falta aceptar el aviso y las
            comunicaciones. Al registrarse: «¡Gracias! Ya puedes descargar tu boletín.»
          </p>
        </div>
      </div>
    </>
  );
}

function Interacciones() {
  const rows = [
    [
      "WhatsApp",
      "Burbuja de 56 px, con un pulso breve al aparecer. En el teléfono se vuelve solo el ícono, para no tapar el pie. El enlace lleva el mensaje ya escrito.",
    ],
    [
      "Volver arriba",
      "Se muestra al pasar 600 px. Sube con animación y devuelve el foco a la marca, así se puede seguir con teclado. Respeta la preferencia de menos movimiento.",
    ],
    [
      "Responsive",
      "En escritorio, promesa y formulario van lado a lado. Debajo de 980 px se apilan servicios, VIE, pasos y boletín. En el teléfono el menú de secciones cede el lugar al logo y a Agenda una cita: la acción principal no se esconde.",
    ],
    [
      "Movimiento",
      "Las secciones aparecen al entrar en vista. En las tarjetas de servicio, una luz sigue el cursor. Los halos del inicio respiran. Todo se detiene si el sistema lo pide.",
    ],
    [
      "Contacto directo",
      "55 3425 3176 y contacto@pragmacorp.mx, en el cierre y en el pie. Redes: Facebook de Pragma e Instagram @pragma_contadores.",
    ],
    [
      "Cuidado al usar",
      "Cada campo tiene etiqueta. El foco es naranja y visible. Hay margen para la muesca y la barra del iPhone. El año del copyright se actualiza solo.",
    ],
  ];
  return (
    <>
      <div className="slide-head">
        <p className="kicker">Interacciones</p>
        <h2>Lo que se siente al usar el sitio, pieza por pieza.</h2>
      </div>
      <ul className="spec-list">
        {rows.map(([title, copy]) => (
          <li key={title}>
            <span className="idx">●</span>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

function Dispositivos() {
  const [shot, setShot] = useState(0);
  const current = SHOTS[shot] ?? SHOTS[0];
  return (
    <>
      <div className="slide-head">
        <p className="kicker">Propuesta en dispositivos</p>
        <h2>MacBook, iPad e iPhone, con la misma voz.</h2>
        <p className="lede">
          Estas composiciones presentan la propuesta. En el sitio publicado el titular vigente es
          «Soluciones financieras para impulsar tu crecimiento».
        </p>
      </div>
      <div className="shot-switch" role="tablist" aria-label="Mockups">
        {SHOTS.map((item, i) => (
          <button
            key={item.id}
            className="shot-tab"
            role="tab"
            aria-selected={i === shot}
            onClick={() => setShot(i)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <figure className="frame shot-frame">
        <img src={current.src} alt={current.alt} />
        <figcaption>{current.caption}</figcaption>
      </figure>
    </>
  );
}

function Recorrido() {
  return (
    <>
      <div className="slide-head">
        <p className="kicker">Diagrama · recorrido de quien llega</p>
        <h2>Tres salidas. Ninguna obliga a perder el contacto.</h2>
      </div>
      <div className="journey">
        <div className="j-node">
          <strong>Llega a demo.pragmacorp.mx</strong>
          <p className="lede tight">
            Ve la promesa, los cuatro servicios y el formulario sin tener que buscarlos.
          </p>
        </div>
        <div className="stem" aria-hidden="true" />
        <div className="j-node">
          <strong>Recorre la prueba</strong>
          <p className="lede tight">
            Servicios, red Creditaria VIE, cuatro pasos y el boletín. La barra de vidrio sigue
            arriba.
          </p>
        </div>
        <div className="stem" aria-hidden="true" />
        <div className="branch">
          <article>
            <h3>Deja una cita</h3>
            <p>
              Completa nombre, contacto, tipo de persona y servicio. PHP registra el lead de cita.
              Un asesor da seguimiento.
            </p>
          </article>
          <article>
            <h3>Abre WhatsApp</h3>
            <p>
              La burbuja salta el formulario. El chat llega al 55 3425 3176 con el mensaje de
              Pragma ya escrito.
            </p>
          </article>
          <article>
            <h3>Pide el boletín</h3>
            <p>
              Elige temas, acepta el aviso y descarga el PDF. Queda en la lista del mes siguiente.
            </p>
          </article>
        </div>
      </div>
      <p className="note">
        Cuarta puerta, en el cierre y el pie: llamar al 55 3425 3176 o escribir a
        contacto@pragmacorp.mx. Los servicios de financiamiento, seguros e inversión se presentan
        como de la asociada Creditaria VIE.
      </p>
    </>
  );
}

function Cierre() {
  return (
    <div className="cover">
      <div className="cover-copy">
        <p className="kicker">Para recorrer juntos</p>
        <h2>El sitio ya recibe visitas.</h2>
        <a className="close-url" href="https://demo.pragmacorp.mx/" target="_blank" rel="noreferrer">
          demo.pragmacorp.mx
        </a>
        <p className="lema">
          Semper ad meliora
          <span>“Siempre hacia lo mejor”</span>
        </p>
      </div>
      <div>
        <ol className="num-list">
          <li>
            <span className="idx">01</span>
            <div>
              <h3>Verlo en el teléfono y en la computadora</h3>
              <p>Misma dirección. Conviene probar la cita, el boletín y el WhatsApp.</p>
            </div>
          </li>
          <li>
            <span className="idx">02</span>
            <div>
              <h3>Cerrar el aviso de privacidad</h3>
              <p>
                La página ya está enlazada. Falta completar razón social, domicilio y fecha con el
                asesor legal antes del dominio definitivo.
              </p>
            </div>
          </li>
          <li>
            <span className="idx">03</span>
            <div>
              <h3>Definir cómo llega cada lead al equipo</h3>
              <p>
                El sitio confirma el registro en pantalla. El siguiente paso es el canal interno:
                correo del despacho o tablero.
              </p>
            </div>
          </li>
          <li>
            <span className="idx">04</span>
            <div>
              <h3>Contacto publicado</h3>
              <p>55 3425 3176 · contacto@pragmacorp.mx · @pragma_contadores</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

const SLIDES: { label: string; render: () => ReactNode }[] = [
  { label: "Portada", render: Cover },
  { label: "Qué se entregó", render: Entrega },
  { label: "Identidad visual", render: Identidad },
  { label: "Lenguajes y piezas", render: Arquitectura },
  { label: "Mapa del sitio", render: Mapa },
  { label: "Formulario y leads", render: Formulario },
  { label: "Servicios y VIE", render: Servicios },
  { label: "Proceso y boletín", render: Proceso },
  { label: "Interacciones", render: Interacciones },
  { label: "En dispositivos", render: Dispositivos },
  { label: "Recorrido", render: Recorrido },
  { label: "Cierre", render: Cierre },
];

function clamp(n: number) {
  return Math.max(0, Math.min(SLIDES.length - 1, n));
}

function readHash() {
  const n = Number(location.hash.replace("#", ""));
  if (Number.isInteger(n) && n >= 1 && n <= SLIDES.length) return n - 1;
  return 0;
}

export function Presentation() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(1 / SLIDES.length);
  const indexRef = useRef(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);

  const go = useCallback((n: number) => {
    const next = clamp(n);
    if (next === indexRef.current) return;
    indexRef.current = next;
    setIndex(next);
    setProgress((next + 1) / SLIDES.length);
    history.pushState({ s: next }, "", `#${next + 1}`);
    setOpen(false);
  }, []);

  useEffect(() => {
    const start = readHash();
    indexRef.current = start;
    setIndex(start);
    setProgress((start + 1) / SLIDES.length);
    history.replaceState({ s: start }, "", `#${start + 1}`);
    const onPop = () => {
      const n = readHash();
      indexRef.current = n;
      setIndex(n);
      setProgress((n + 1) / SLIDES.length);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    stageRef.current?.scrollTo({ top: 0 });
  }, [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        go(indexRef.current + 1);
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(indexRef.current - 1);
      }
      if (e.key === "Home") go(0);
      if (e.key === "End") go(SLIDES.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const slide = SLIDES[index] ?? SLIDES[0];
  const Slide = slide.render;

  return (
    <div className="deck">
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <header className="topbar">
        <div className="brand">
          <Mark />
          <div>
            <span className="brand-name">PRAGMA</span>
            <span className="brand-sub">Presentación del sitio</span>
          </div>
        </div>
        <p className="top-title">{slide.label}</p>
        <div className="top-actions">
          <button className="ghost" type="button" onClick={() => setOpen(true)}>
            Índice
          </button>
          <span className="count">
            {String(index + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
          </span>
        </div>
      </header>
      <main
        className="stage"
        ref={stageRef}
        onTouchStart={(e) => {
          const t = e.changedTouches[0];
          if (!t) return;
          touch.current = { x: t.clientX, y: t.clientY };
        }}
        onTouchEnd={(e) => {
          const start = touch.current;
          const t = e.changedTouches[0];
          touch.current = null;
          if (!start || !t) return;
          const dx = t.clientX - start.x;
          const dy = t.clientY - start.y;
          if (Math.abs(dx) < 64 || Math.abs(dx) < Math.abs(dy) * 1.3) return;
          go(indexRef.current + (dx < 0 ? 1 : -1));
        }}
      >
        <article
          key={slide.label}
          className="slide"
          aria-roledescription="diapositiva"
          aria-label={`${index + 1} de ${TOTAL}: ${slide.label}`}
        >
          <Slide />
        </article>
      </main>
      <footer className="dock">
        <button className="ghost" type="button" onClick={() => go(index - 1)} disabled={index === 0}>
          Anterior
        </button>
        <div className="dots" role="tablist" aria-label="Diapositivas">
          {SLIDES.map((item, i) => (
            <button
              key={item.label}
              className="dot"
              type="button"
              aria-label={item.label}
              aria-current={i === index ? "true" : undefined}
              onClick={() => go(i)}
            >
              <i />
            </button>
          ))}
        </div>
        <p className="hint">Flechas para avanzar</p>
        <button
          className="solid"
          type="button"
          onClick={() => go(index + 1)}
          disabled={index === SLIDES.length - 1}
        >
          Siguiente
        </button>
      </footer>
      {open ? (
        <div className="index-back" onClick={() => setOpen(false)}>
          <nav
            className="index-panel"
            aria-label="Índice de la presentación"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Índice</h2>
            <ol>
              {SLIDES.map((item, i) => (
                <li key={item.label}>
                  <button type="button" aria-current={i === index ? "true" : undefined} onClick={() => go(i)}>
                    <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
