export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
};

export const posts: BlogPost[] = [
  {
    slug: 'python-analitica-datos',
    title: 'Python para análisis de datos y automatización',
    description:
      'Cómo usar Python para transformar datasets complejos en flujos reproducibles, automatizados y accionables.',
    excerpt:
      'Una guía práctica para estructurar análisis de datos con Python y convertir información técnica en decisiones útiles para equipos y negocios.',
    date: '2026-08-19',
    readingTime: '6 min de lectura',
    category: 'Python · Data',
    sections: [
      {
        heading: 'Por qué Python sigue siendo la base del análisis moderno',
        paragraphs: [
          'Python ha consolidado su papel como lenguaje principal para análisis de datos, automatización y prototipado rápido. Su ecosistema combina simplicidad, potencia y legibilidad, algo clave cuando los datos crecen en volumen y complejidad.',
          'En proyectos reales, la clave no es solo escribir código, sino construir flujos reproducibles: limpiar datos, validar supuestos, transformar información y generar salidas comprensibles para personas no técnicas.',
        ],
      },
      {
        heading: 'Estructura de un flujo útil',
        paragraphs: [
          'Un flujo sólido empieza con una fuente clara, reglas de validación y una definición de salida. Si los datos entran desordenados, el análisis terminará reforzando ruido en lugar de insight.',
          'La práctica recomendada es separar extracción, limpieza, enriquecimiento, análisis y presentación. Así, cada etapa queda auditable y más fácil de mantener.',
        ],
      },
      {
        heading: 'Automatización como ventaja competitiva',
        paragraphs: [
          'La automatización no es solo ahorrar tiempo; es reducir errores humanos y producir resultados más consistentes. En proyectos de datos, esto tiene un impacto directo en la velocidad con la que un equipo responde a cambios de negocio.',
          'Cuando un flujo de análisis es reproducible, se vuelve mucho más fácil probar hipótesis, documentar decisiones y escalar soluciones a otros equipos o procesos.',
        ],
      },
    ],
  },
  {
    slug: 'apis-datos-publicos',
    title: 'APIs y servicios para datos públicos',
    description:
      'Ideas y buenas prácticas para construir APIs de datos que sean útiles, mantenibles y fáciles de integrar.',
    excerpt:
      'Diseñar APIs para datos públicos exige claridad, coherencia y enfoque en la experiencia del desarrollador que las consume.',
    date: '2026-08-17',
    readingTime: '5 min de lectura',
    category: 'APIs · Backend',
    sections: [
      {
        heading: 'La importancia de la claridad en el diseño',
        paragraphs: [
          'Una API no solo expone datos; define la relación entre un proveedor de información y un consumidor. Por eso, la claridad del diseño es crucial: nombres consistentes, esquemas previsibles y respuestas bien documentadas.',
          'Cuando un cliente necesita adivinar cómo funciona una API, el problema ya no es solo técnico: es de experiencia y mantenibilidad.',
        ],
      },
      {
        heading: 'Diseñar para consumo real',
        paragraphs: [
          'Las mejores APIs se construyen pensando en el consumo real del cliente: filtros útiles, paginación coherente, errores legibles y respuestas que puedan integrarse sin fricción.',
          'En datos públicos, esto se vuelve aún más importante porque la audiencia no siempre es técnica y la utilidad depende de cuán fácil sea reutilizar la información.',
        ],
      },
      {
        heading: 'Mantenibilidad y observabilidad',
        paragraphs: [
          'Una API útil necesita observabilidad: métricas, trazabilidad y capacidad para diagnosticar fallas sin frustración. El reforzamiento de buenas prácticas de monitoring hace crecer la confianza del usuario.',
          'En equipos pequeños o medianos, la diferencia entre un servicio útil y uno frágil suele estar en la disciplina del diseño y en la documentación acompañada de pruebas.',
        ],
      },
    ],
  },
  {
    slug: 'open-source-estrategia-tecnica',
    title: 'Open source como estrategia técnica',
    description:
      'Por qué el software abierto aumenta reutilización, confianza y capacidad de colaboración a largo plazo.',
    excerpt:
      'El open source no es solo una filosofía, también es una estrategia para crear software más robusto, verificable y útil.',
    date: '2026-08-15',
    readingTime: '4 min de lectura',
    category: 'Open Source',
    sections: [
      {
        heading: 'Más que código compartido',
        paragraphs: [
          'El open source permite que otras personas revisen, reutilicen, mejoren e integren tus ideas. Eso acelera la evolución del producto y reduce la dependencia de patrones cerrados.',
          'Cuando un proyecto es abierto, la retroalimentación llega desde el entorno real, no solo desde el equipo que lo creó.',
        ],
      },
      {
        heading: 'Confianza y mantenibilidad',
        paragraphs: [
          'La transparencia mejora la confianza. En software crítico o infraestructura técnica, la capacidad de auditar código y procesos ofrece una ventaja real sobre soluciones cerradas o opacas.',
          'El reto no está solo en abrir el repositorio, sino en mantener un nivel de calidad y documentación suficiente para que ese valor se convierta en adopción real.',
        ],
      },
      {
        heading: 'Construir a largo plazo',
        paragraphs: [
          'Open source también ayuda a construir una marca técnica y profesional. Cuando tus soluciones tienen interés real para otras personas, el uso y la colaboración se convierten en señales de calidad.',
          'En una carrera técnica, esa reputación no se construye solo con proyectos internos: se construye con soluciones útiles, reutilizables y bien pensadas.',
        ],
      },
    ],
  },
];
