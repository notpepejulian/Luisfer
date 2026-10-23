import navaja from '../assets/cortes/navaja-luisfer.jpg';
import lowFade from '../assets/cortes/corte-1.jpg';
import burstFade from '../assets/cortes/corte-3.jpg';
import infantil from '../assets/cortes/corte-infantil.jpg';
import peinado from '../assets/cortes/peinado-luisfer.jpg';
import interior from '../assets/cortes/interior-barberia.jpg';
import mohicano from '../assets/cortes/corte-6.jpg';
import frenchCrop from '../assets/cortes/corte-5.jpg';

// forma: 'alta' ocupa 2 filas, 'ancha' ocupa 2 columnas.
export const galeria = [
  { src: navaja, titulo: 'Perfilado a navaja', forma: 'alta' },
  { src: lowFade, titulo: 'Low fade texturizado' },
  { src: burstFade, titulo: 'Burst fade' },
  { src: infantil, titulo: 'Corte infantil', forma: 'alta' },
  { src: peinado, titulo: 'Acabado y peinado', forma: 'ancha' },
  { src: interior, titulo: 'Nuestra barbería', forma: 'ancha' },
  { src: mohicano, titulo: 'Corte Mohicano' },
  { src: frenchCrop, titulo: 'French crop' },
];
