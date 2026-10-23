# Luisferbarberia — web estática (Astro)

Web de una página para Luisferbarberia (Alcalá de Henares). Las citas se gestionan en Booksy.

## Comandos

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera ./dist
npm run preview
```

## Reseñas: nota y número actualizados al compilar

Cada `npm run build` consulta la nota media y el número de reseñas y los mete en la web:

- **Booksy:** se lee del perfil público de Booksy, no requiere configuración.
- **Google:** requiere una clave de Google Places API. Copia `.env.example` a `.env` y rellena:
  - `GOOGLE_PLACES_API_KEY`: en [Google Cloud Console](https://console.cloud.google.com/) crea un proyecto, activa **Places API (New)** y crea una clave en *APIs y servicios → Credenciales* (restríngela a Places API).
  - `GOOGLE_PLACE_ID`: búscalo con el [Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder).

En la consola del build verás de dónde sale cada dato:

```
[valoraciones] Booksy actualizado: 5 (159 reseñas)
[valoraciones] Google actualizado: 5 (8 reseñas)
```

Si alguna fuente falla (o falta el `.env`), se usan los valores de respaldo de `valoracionesRespaldo` en `src/data/negocio.ts` y se muestra un aviso.

## Publicar en Cloudflare Pages

Compila en local (`npm run build`) y sube la carpeta `dist/` a Cloudflare Pages (subida directa o `npx wrangler pages deploy dist`). Vuelve a compilar y subir cuando quieras refrescar las reseñas.

## Dónde editar

- `src/data/negocio.ts` — enlace de Booksy, teléfono, dirección, horario, barberos, servicios y reseñas.
- `src/data/galeria.ts` + `src/assets/cortes/` — fotos de la galería.
- `src/assets/hero-barberia.jpg` — imagen de portada.
- `src/assets/barberos/<nombre>.jpg` — foto redonda de cada barbero (si no existe se muestra la inicial).
- `src/components/` — secciones de la página.
