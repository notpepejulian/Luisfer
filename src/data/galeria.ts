import skinFade from '../assets/cortes/skin-fade.jpg';
import crop from '../assets/cortes/crop-texturizado.jpg';
import infantil from '../assets/cortes/corte-infantil.jpg';
import mohicano from '../assets/cortes/corte-6.jpg';
import barba from '../assets/cortes/perfilado-barba.jpg';
import navaja from '../assets/cortes/afeitado-navaja.jpg';
import midFade from '../assets/cortes/mid-fade.jpg';
import peinado from '../assets/cortes/acabado-peinado.jpg';

// Sustituye las imágenes en src/assets/cortes por fotos reales de tus cortes.
// forma: 'alta' ocupa 2 filas, 'ancha' ocupa 2 columnas.
export const galeria = [
  { src: skinFade, titulo: 'Skin fade', forma: 'alta' },
  { src: crop, titulo: 'Crop texturizado' },
  { src: barba, titulo: 'Perfilado de barba' },
  { src: infantil, titulo: 'Corte infantil', forma: 'alta' },
  { src: mohicano, titulo: 'Corte Mohicano', forma: 'ancha' },
  { src: midFade, titulo: 'Mid fade', forma: 'ancha' },
  { src: navaja, titulo: 'Afeitado a navaja' },
  { src: peinado, titulo: 'Acabado y peinado' },
];
