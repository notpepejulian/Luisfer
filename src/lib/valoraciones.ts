import { negocio, valoracionesRespaldo } from '../data/negocio';

export interface Valoracion {
  nota: number;
  total: number;
  enVivo: boolean;
}

async function booksy(): Promise<Valoracion> {
  try {
    const res = await fetch(negocio.booksyUrl.split('#')[0], {
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; LuisferWeb/1.0)' },
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    const m = html.match(/"aggregateRating":\s*\{[^}]*?"ratingValue":\s*([\d.]+)[^}]*?"reviewCount":\s*(\d+)/);
    if (m) {
      console.log(`[valoraciones] Booksy actualizado: ${m[1]} (${m[2]} reseñas)`);
      return { nota: Number(m[1]), total: Number(m[2]), enVivo: true };
    }
    throw new Error('no se encontró la valoración en la página');
  } catch (e) {
    console.warn(`[valoraciones] Booksy no disponible (${(e as Error).message}), usando valores de respaldo`);
  }
  return { ...valoracionesRespaldo.booksy, enVivo: false };
}

// Requiere GOOGLE_PLACES_API_KEY y GOOGLE_PLACE_ID (Places API New) como variables de entorno.
async function google(): Promise<Valoracion> {
  const key = import.meta.env.GOOGLE_PLACES_API_KEY;
  const placeId = import.meta.env.GOOGLE_PLACE_ID;
  if (key && placeId) {
    try {
      const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
        headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'rating,userRatingCount' },
        signal: AbortSignal.timeout(10_000),
      });
      const d = await res.json();
      if (res.ok && d.userRatingCount) {
        console.log(`[valoraciones] Google actualizado: ${d.rating} (${d.userRatingCount} reseñas)`);
        return { nota: d.rating, total: d.userRatingCount, enVivo: true };
      }
      console.warn(`[valoraciones] Google Places respondió ${res.status}: ${d.error?.message ?? 'sin datos'}`);
    } catch {}
    console.warn('[valoraciones] Google Places no disponible, usando valores de respaldo');
  } else {
    console.warn('[valoraciones] Falta GOOGLE_PLACES_API_KEY o GOOGLE_PLACE_ID en .env, usando valores de respaldo de Google');
  }
  return { ...valoracionesRespaldo.google, enVivo: false };
}

let cache: Promise<{ google: Valoracion; booksy: Valoracion; global: { nota: number; total: number } }>;

export function getValoraciones() {
  cache ??= Promise.all([google(), booksy()]).then(([g, b]) => {
    const total = g.total + b.total;
    const nota = total ? (g.nota * g.total + b.nota * b.total) / total : 0;
    return { google: g, booksy: b, global: { nota, total } };
  });
  return cache;
}

export const formatoNota = (n: number) => n.toFixed(1).replace('.', ',');
