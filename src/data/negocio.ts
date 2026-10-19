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
  valoracion: 5.0,
  totalResenas: 8,
};

export const horario = [
  { dias: 'Lunes – Viernes', horas: '10:00 – 19:00' },
  { dias: 'Sábado', horas: '10:00 – 14:00' },
  { dias: 'Domingo', horas: 'Cerrado' },
];

export const servicios = [
  { nombre: 'Corte de pelo', descripcion: 'Corte a máquina y tijera, lavado y peinado.', precio: 12, duracion: 30 },
  { nombre: 'Degradado / Fade', descripcion: 'Skin, low, mid o high fade con acabado a navaja.', precio: 14, duracion: 40 },
  { nombre: 'Corte + Barba', descripcion: 'Corte completo y arreglo de barba con perfilado.', precio: 18, duracion: 50, destacado: true },
  { nombre: 'Arreglo de barba', descripcion: 'Rebaje, perfilado a navaja y toalla caliente.', precio: 8, duracion: 20 },
  { nombre: 'Afeitado clásico', descripcion: 'Afeitado a navaja con toalla caliente y aftershave.', precio: 10, duracion: 25 },
  { nombre: 'Corte infantil', descripcion: 'Para menores de 12 años.', precio: 10, duracion: 25 },
  { nombre: 'Diseño / Raya', descripcion: 'Líneas y dibujos a navaja.', precio: 3, duracion: 10 },
  { nombre: 'Cejas', descripcion: 'Perfilado de cejas a navaja.', precio: 3, duracion: 5 },
];

export const resenas = [
  {
    autor: 'Nacho',
    fecha: 'Hace una semana',
    estrellas: 5,
    texto: 'Un servicio de 10, calidad, buen ambiente y buen corte. El mejor barbero de Alcalá al que he ido.',
  },
  {
    autor: 'Alvaro Soublett',
    fecha: 'Hace 2 días',
    estrellas: 5,
    texto:
      'Quieres un corte de estilo profesional, con acabados en detalle, visita La Barbería Luisfer y te realizará el corte de tu preferencia con un estilo que solo él puede lograr… ¡100% recomendado!',
  },
  {
    autor: 'LUIS PREZ',
    fecha: 'Hace 2 días',
    estrellas: 5,
    texto: 'Corte excelente y comodidad 10/10.',
  },
  {
    autor: 'David Cortijo',
    fecha: 'Hace 2 días',
    estrellas: 5,
    texto: 'Un gran barbero y gran trato.',
  },
];
