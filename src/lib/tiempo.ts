const rtf = new Intl.RelativeTimeFormat('es', { numeric: 'always' });

const DIA = 86_400_000;

export function haceCuanto(fecha: string | Date, ahora: Date = new Date()): string {
  const dias = Math.floor((ahora.getTime() - new Date(fecha).getTime()) / DIA);
  let texto: string;
  if (dias <= 0) return 'Hoy';
  if (dias === 1) return 'Ayer';
  if (dias < 7) texto = rtf.format(-dias, 'day');
  else if (dias < 30) texto = rtf.format(-Math.floor(dias / 7), 'week');
  else if (dias < 365) texto = rtf.format(-Math.floor(dias / 30), 'month');
  else texto = rtf.format(-Math.floor(dias / 365), 'year');
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
