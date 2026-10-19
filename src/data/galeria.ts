import skinFade from '../assets/cortes/skin-fade.jpg';
import crop from '../assets/cortes/crop-texturizado.jpg';
import afro from '../assets/cortes/afro-degradado.jpg';
import clasico from '../assets/cortes/corte-clasico.jpg';
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
  { src: afro, titulo: 'Afro con degradado', forma: 'alta' },
  { src: clasico, titulo: 'Corte clásico', forma: 'ancha' },
  { src: midFade, titulo: 'Mid fade', forma: 'ancha' },
  { src: navaja, titulo: 'Afeitado a navaja' },
  { src: peinado, titulo: 'Acabado y peinado' },
];
