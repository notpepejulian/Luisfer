// Datos del negocio: edita este archivo para actualizar la web.

export const negocio = {
  nombre: 'Luisferbarberia',
  eslogan: 'Cortes con estilo y acabados en detalle en Alcalá de Henares',
  // Sustituye por el enlace de tu perfil de Booksy (Booksy Biz > Perfil > Compartir)
  booksyUrl: 'https://booksy.com/es-es/186566_luisfer-barberia_barberia_53184_alcala-de-henares#ba_s=sh_1',
  telefono: '742 00 97 00',
  telefonoHref: 'tel:+34742009700',
  direccion: 'C. Miguel de Moncada, 13',
  cp: '28804',
  ciudad: 'Alcalá de Henares',
  provincia: 'Madrid',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Luisferbarberia%20C.%20Miguel%20de%20Moncada%2013%20Alcal%C3%A1%20de%20Henares',
  mapsEmbed:
    'https://www.google.com/maps?q=C.+Miguel+de+Moncada+13,+28804+Alcal%C3%A1+de+Henares&output=embed',
  instagram: '',
};

// Valores de respaldo: se usan si no se pueden obtener en vivo al compilar (ver src/lib/valoraciones.ts).
export const valoracionesRespaldo = {
  google: { nota: 5.0, total: 8 },
  booksy: { nota: 5.0, total: 153 },
};

export const horario = [
  { dias: 'Lunes – Viernes', horas: '8:00 – 14:00 | 15:00 – 19:00' },
  { dias: 'Sábado', horas: '8:00 – 14:00 | 15:00 – 19:00' },
  { dias: 'Domingo', horas: 'Cerrado' },
];

// La foto se busca en src/assets/barberos/<foto>.jpg|png|webp; si no existe se muestran las iniciales.
export const barberos = [
  {
    nombre: 'Luisfer',
    foto: 'luisfer',
    horario: [
      { dias: 'Lunes – Viernes', horas: ['8:00 – 14:00', '15:00 – 19:00'] },
      { dias: 'Sábado', horas: ['8:00 – 13:00'] },
      { dias: 'Domingo', horas: ['Cerrado'] },
    ],
  },
  {
    nombre: 'Manuel',
    foto: 'manuel',
    horario: [
      { dias: 'Lunes – Viernes', horas: ['8:00 – 14:00', '15:00 – 19:00'] },
      { dias: 'Sábado', horas: ['8:00 – 14:00', '15:00 – 19:00'] },
      { dias: 'Domingo', horas: ['Cerrado'] },
    ],
  },
];

export const servicios = [
  { nombre: 'Corte de Pelo', precio: 14, duracion: 30, popular: true },
  { nombre: 'Corte y Barba', precio: 24, duracion: 45, popular: true },
  { nombre: 'Barba', precio: 10, duracion: 15 },
  { nombre: 'Corte y Perilla', precio: 20, duracion: 45, popular: true },
];

export const categoriasServicios = [
  { nombre: 'Servicios más populares', servicios: servicios.filter((s) => s.popular), destacada: true },
  { nombre: 'Barbería', servicios },
];

// fecha: día de publicación (AAAA-MM-DD). El "hace X días" se calcula automáticamente.
export const resenas = [
  {
    autor: 'Nacho',
    fecha: '2026-10-12',
    fuente: 'Google',
    estrellas: 5,
    texto: 'Un servicio de 10, calidad, buen ambiente y buen corte. El mejor barbero de Alcalá al que he ido.',
  },
  {
    autor: 'Alvaro Soublett',
    fecha: '2026-10-17',
    fuente: 'Google',
    estrellas: 5,
    texto:
      'Quieres un corte de estilo profesional, con acabados en detalle, visita La Barbería Luisfer y te realizará el corte de tu preferencia con un estilo que solo él puede lograr… ¡100% recomendado!',
  },
  {
    autor: 'LUIS PREZ',
    fecha: '2026-10-17',
    fuente: 'Google',
    estrellas: 5,
    texto: 'Corte excelente y comodidad 10/10.',
  },
  {
    autor: 'David Cortijo',
    fecha: '2026-10-17',
    fuente: 'Google',
    estrellas: 5,
    texto: 'Un gran barbero y gran trato.',
  },
];
