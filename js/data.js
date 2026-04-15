/* ============================================
   Datos de Productos
   ============================================ */

const PRODUCTS = [
  // ---- PROCESADORES ----
  {
    id: 1,
    name: "AMD Ryzen 5 9800X",
    category: "procesadores",
    categoryLabel: "PROCESADOR",
    spec: "8 NÚCLEOS / 4.7GHZ",
    price: 1299.00,
    cores: 8,
    threads: 16,
    clock: "4.7 Ghz",
    description: "El AMD Ryzen 5 9800X ofrece rendimiento excepcional para gaming y productividad. Con su arquitectura Zen 5, proporciona una experiencia fluida en multitarea y juegos exigentes.",
    fullDescription: "El procesador AMD Ryzen 5 9800X representa la nueva generación de rendimiento para gamers y creadores de contenido. Equipado con 8 núcleos y 16 hilos de procesamiento basados en la arquitectura Zen 5, este procesador ofrece velocidades de reloj base de 4.7 GHz con capacidad de boost hasta 5.2 GHz. Su eficiencia energética optimizada y su compatibilidad con las últimas tecnologías de memoria DDR5 lo convierten en la elección ideal para quienes buscan potencia sin compromisos.",
    image: "assets/e92eb3d7d64d0921063109aa9dad809054ad41ca.png"
  },
  {
    id: 2,
    name: "AMD Ryzen 9 9900X",
    category: "procesadores",
    categoryLabel: "PROCESADOR",
    spec: "12 NÚCLEOS / 4.4GHZ",
    price: 2100.00,
    cores: 12,
    threads: 24,
    clock: "4.4 Ghz",
    description: "El AMD Ryzen 9 9900X es la potencia definitiva para creadores y gamers que exigen lo máximo. Arquitectura Zen 5 de última generación.",
    fullDescription: "El AMD Ryzen 9 9900X redefine los límites del rendimiento en escritorio. Con 12 núcleos y 24 hilos, este procesador domina tanto en cargas de trabajo de un solo hilo como en aplicaciones altamente paralelas. Su arquitectura Zen 5 avanzada ofrece mejoras significativas en IPC, mientras que su soporte nativo para DDR5 y PCIe 5.0 garantiza que esté preparado para el futuro.",
    image: "assets/dc465920de8a81ee69a7e39e8136a95c44d97346.png"
  },
  {
    id: 3,
    name: "Intel Core Ultra 9",
    category: "procesadores",
    categoryLabel: "PROCESADOR",
    spec: "24 NÚCLEOS / 3.7GHZ",
    price: 2499.00,
    cores: 24,
    threads: 12,
    clock: "3.7 Ghz",
    description: "Alto rendimiento para gaming y productividad avanzada. Arquitectura con IA incorporada que transforma tu experiencia computacional.",
    fullDescription: "El Intel Core Ultra 9 es el procesador más avanzado de Intel, diseñado para ofrecer potencia extrema con inteligencia artificial integrada. Con 24 núcleos y 32 hilos, combina P-cores de alto rendimiento con E-cores eficientes para una experiencia óptima en cualquier escenario. Sus gráficos mejorados y eficiencia energética optimizada lo hacen ideal para multitarea fluida, gaming en 4K y creación de contenido profesional.",
    image: "assets/894d723b2748fe75b45e00061776a797e774ecd6.png"
  },
  {
    id: 4,
    name: "AMD Ryzen 7 9700X",
    category: "procesadores",
    categoryLabel: "PROCESADOR",
    spec: "8 NÚCLEOS / 3.8GHZ",
    price: 1599.00,
    cores: 8,
    threads: 16,
    clock: "3.8 Ghz",
    description: "Rendimiento equilibrado para gaming y productividad con eficiencia energética líder en su clase.",
    fullDescription: "El AMD Ryzen 7 9700X ofrece el equilibrio perfecto entre rendimiento y eficiencia. Con 8 núcleos de alto rendimiento basados en Zen 5, es capaz de manejar los juegos más exigentes y flujos de trabajo creativos con facilidad.",
    image: "assets/364ccfcd8816a490440704f12d362331f45286ef.png"
  },
  {
    id: 5,
    name: "Intel Core i7-14700K",
    category: "procesadores",
    categoryLabel: "PROCESADOR",
    spec: "20 NÚCLEOS / 3.4GHZ",
    price: 1899.00,
    cores: 20,
    threads: 28,
    clock: "3.4 Ghz",
    description: "Procesador desbloqueado de 14ª generación con rendimiento excepcional para gaming y streaming simultáneo.",
    fullDescription: "El Intel Core i7-14700K combina 20 núcleos y 28 hilos para ofrecer un rendimiento sobresaliente tanto en juegos como en tareas de productividad intensivas. Su diseño desbloqueado permite overclocking para exprimir el máximo rendimiento.",
    image: "assets/db2daf00841efcc480f82742ae4efe8fd5888232.png"
  },
  {
    id: 6,
    name: "AMD Ryzen 5 7600X",
    category: "procesadores",
    categoryLabel: "PROCESADOR",
    spec: "6 NÚCLEOS / 4.7GHZ",
    price: 899.00,
    cores: 6,
    threads: 12,
    clock: "4.7 Ghz",
    description: "La opción más accesible para gaming competitivo con velocidades de reloj impresionantes.",
    fullDescription: "El AMD Ryzen 5 7600X es la puerta de entrada al gaming de alto rendimiento. Con 6 núcleos y 12 hilos a velocidades de hasta 5.3 GHz en boost, ofrece un rendimiento gaming sobresaliente a un precio accesible.",
    image: "assets/3db039f84f9525343fe892ed5b24586fed34e947.png"
  },

  // ---- BOARDS ----
  {
    id: 7,
    name: "Gigabyte B850 Gaming WiFi6",
    category: "boards",
    categoryLabel: "BOARD",
    spec: "AM5 / DDR5",
    price: 449.00,
    cores: null,
    threads: null,
    clock: null,
    description: "Board gaming con WiFi 6 integrado, soporte DDR5 y diseño duradero para builds de alto rendimiento.",
    fullDescription: "La Gigabyte B850 Gaming WiFi6 es una placa base diseñada para gamers y entusiastas que buscan una base sólida para su build. Con soporte para procesadores AMD AM5, memoria DDR5 de alta velocidad, y conectividad WiFi 6 integrada, ofrece todas las características necesarias para un sistema gaming moderno.",
    image: "assets/5a6641e4fba3069bbf7eaec4f883ec8c7ce3710e.png"
  },
  {
    id: 8,
    name: "ASUS ROG Strix B650-A",
    category: "boards",
    categoryLabel: "BOARD",
    spec: "AM5 / DDR5",
    price: 399.00,
    description: "Board con diseño ROG premium, PCIe 5.0 y refrigeración mejorada.",
    fullDescription: "La ASUS ROG Strix B650-A combina estética premium con funcionalidad de alto rendimiento. Su diseño en blanco y negro la hace ideal para builds temáticos.",
    image: "assets/5a6641e4fba3069bbf7eaec4f883ec8c7ce3710e.png"
  },
  {
    id: 9,
    name: "MSI MAG B760 Tomahawk",
    category: "boards",
    categoryLabel: "BOARD",
    spec: "LGA1700 / DDR5",
    price: 349.00,
    description: "Board robusta para Intel con excelente entrega de energía y múltiples slots M.2.",
    fullDescription: "La MSI MAG B760 Tomahawk WiFi es una placa base para Intel de 12ª y 13ª generación con un diseño robusto y funcionalidades de gaming avanzadas.",
    image: "assets/2faa0cda277cd2ee958d772a2674e18cf1110d73.png"
  },

  // ---- MEMORIAS RAM ----
  {
    id: 10,
    name: "Crucial Pro DDR5 32GB",
    category: "memorias",
    categoryLabel: "MEMORIA",
    spec: "DDR5 / 5600MHZ",
    price: 259.00,
    description: "Kit de memoria DDR5 de alto rendimiento para gaming y productividad.",
    fullDescription: "El kit Crucial Pro DDR5 de 32GB (2x16GB) a 5600MHz ofrece velocidades excepcionales para las plataformas más modernas. Con perfiles XMP 3.0 para overclocking fácil.",
    image: "assets/a6e76e1092e09061c5303a97a372f67db8d09873.png"
  },
  {
    id: 11,
    name: "Pack 16GB Crucial",
    category: "memorias",
    categoryLabel: "MEMORIA",
    spec: "DDR5 / 4800MHZ",
    price: 240.00,
    description: "Kit de 16GB DDR5 ideal para builds básicos y gaming a 1080p.",
    fullDescription: "Pack de memorias Crucial 16GB (2x8GB) DDR5-4800. Velocidad estándar JEDEC con bajo consumo energético, ideal para sistemas que no requieren overclocking.",
    image: "assets/0cbbeb5587dc1894209ed9173f23e1367441659e.png"
  },
  {
    id: 12,
    name: "Corsair Vengeance DDR5 32GB",
    category: "memorias",
    categoryLabel: "MEMORIA",
    spec: "DDR5 / 6000MHZ",
    price: 320.00,
    description: "Memoria de alto rendimiento con iluminación RGB dinámica y perfiles XMP 3.0.",
    fullDescription: "Kit Corsair Vengeance DDR5 32GB (2x16GB) a 6000MHz con iluminación RGB personalizable. Diseñado para entusiastas que buscan el máximo rendimiento.",
    image: "assets/a6e76e1092e09061c5303a97a372f67db8d09873.png"
  },

  // ---- ALMACENAMIENTO ----
  {
    id: 13,
    name: "Samsung 990 Pro 2TB",
    category: "almacenamiento",
    categoryLabel: "ALMACENAMIENTO",
    spec: "NVME / 7450MB/S",
    price: 389.00,
    description: "SSD NVMe PCIe 4.0 con velocidades de lectura de hasta 7450 MB/s.",
    fullDescription: "El Samsung 990 Pro 2TB es el SSD NVMe definitivo para gaming y creación de contenido. Con velocidades secuenciales de lectura de 7450 MB/s y escritura de 6900 MB/s.",
    image: "assets/16490f792ef20908e2d628a300bd23a66219b25b.png"
  },
  {
    id: 14,
    name: "WD Black SN850X 1TB",
    category: "almacenamiento",
    categoryLabel: "ALMACENAMIENTO",
    spec: "NVME / 7300MB/S",
    price: 199.00,
    description: "SSD gaming de alto rendimiento con tecnología Game Mode 2.0.",
    fullDescription: "El WD_BLACK SN850X de 1TB ofrece velocidades de hasta 7300 MB/s con un diseño optimizado para gaming. Compatible con PS5 y PC.",
    image: "assets/16490f792ef20908e2d628a300bd23a66219b25b.png"
  },

  // ---- REFRIGERACIÓN ----
  {
    id: 15,
    name: "NZXT Kraken X63",
    category: "refrigeracion",
    categoryLabel: "REFRIGERACIÓN",
    spec: "LIQUIDA / 280MM",
    price: 299.00,
    description: "Refrigeración líquida AIO con display LCD personalizable y rendimiento silencioso.",
    fullDescription: "El NZXT Kraken X63 es un sistema de refrigeración líquida todo en uno de 280mm con un radiador de alto rendimiento y una bomba con display LCD personalizable.",
    image: "assets/217690424e6740efddd70cd53aa86036383d4f17.png"
  },

  // ---- FUENTES DE PODER ----
  {
    id: 16,
    name: "Fuente 650W 80+ Gold",
    category: "fuentes",
    categoryLabel: "FUENTE DE PODER",
    spec: "650W / 80+ GOLD",
    price: 240.00,
    description: "Fuente de poder modular con certificación 80+ Gold para máxima eficiencia.",
    fullDescription: "Fuente de alimentación de 650W con certificación 80 Plus Gold y diseño completamente modular. Ventilador de 120mm con modo semi-pasivo para operación silenciosa.",
    image: "assets/d00eb3dfb288b1b8ab3fb644d8bf8e87d6077535.png"
  },

  // ---- CHASIS ----
  {
    id: 17,
    name: "NZXT H510 Elite",
    category: "chasis",
    categoryLabel: "CHASIS",
    spec: "ATX / VIDRIO TEMPLADO",
    price: 349.00,
    description: "Case premium con panel de vidrio templado y gestión de cables integrada.",
    fullDescription: "El NZXT H510 Elite es un chasis ATX mid-tower con doble panel de vidrio templado y un diseño elegante que muestra tu build con orgullo.",
    image: "assets/c5a24d70feff52b1723fffca6c58283b2e8b089a.png"
  },

  // ---- FANS ----
  {
    id: 18,
    name: "Fan Custom RGB 120mm",
    category: "fans",
    categoryLabel: "FAN",
    spec: "120MM / RGB ARGB",
    price: 240.00,
    description: "Pack de ventiladores RGB de 120mm con control ARGB y funcionamiento silencioso.",
    fullDescription: "Pack de 3 ventiladores de 120mm con iluminación ARGB personalizable. Diseño de aspas optimizado para un flujo de aire máximo con operación silenciosa.",
    image: "assets/217690424e6740efddd70cd53aa86036383d4f17.png"
  },

  // ---- TARJETA GRÁFICA (extra) ----
  {
    id: 19,
    name: "RTX 5060 OC",
    category: "procesadores",
    categoryLabel: "GPU",
    spec: "12GB GDDR7 / OC",
    price: 599.00,
    description: "Tarjeta gráfica con 12GB GDDR7 y overclock de fábrica para gaming 1440p.",
    fullDescription: "La RTX 5060 OC ofrece rendimiento excepcional en 1440p con ray tracing y DLSS 4.0. Sus 12GB de memoria GDDR7 aseguran fluidez en los títulos más exigentes.",
    image: "assets/5e9c1dcf1bc99638b2abdb5d0fce100e133f802c.png"
  },

  // Board extra
  {
    id: 20,
    name: "Board B50M",
    category: "boards",
    categoryLabel: "BOARD",
    spec: "AM5 / MICRO-ATX",
    price: 240.00,
    description: "Board micro-ATX compacta con soporte AM5 para builds de factor pequeño.",
    fullDescription: "La Board B50M ofrece todas las características esenciales en un factor de forma micro-ATX. Ideal para builds compactos y económicos sin sacrificar funcionalidad.",
    image: "assets/2faa0cda277cd2ee958d772a2674e18cf1110d73.png"
  }
];

/* Mapeo de Categoría para el sidebar */
const CATEGORIES = [
  { id: "procesadores", label: "PROCESADORES" },
  { id: "boards", label: "BOARDS" },
  { id: "memorias", label: "MEMORIAS RAM" },
  { id: "almacenamiento", label: "ALMACENAMIENTO" },
  { id: "refrigeracion", label: "REFRIGERACIÓN" },
  { id: "fuentes", label: "FUENTES DE PODER" },
  { id: "chasis", label: "CHASIS" },
  { id: "fans", label: "FANS" }
];

/* Obtener productos por categoría */
function getProductsByCategory(categoryId) {
  return PRODUCTS.filter(p => p.category === categoryId);
}

/* Obtener productos por ID */
function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}
