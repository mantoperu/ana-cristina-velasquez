# Sitio de Ana Cristina Velásquez De La Cruz

Sitio estático. No necesita instalar nada ni ejecutar comandos.
Para verlo: abrir `index.html` con doble clic.

---

## Qué falta completar

### 1. Las tres fotos

En el sitio hay tres recuadros punteados marcados **Foto 01**, **Foto 02** y **Foto 03**.
Cada uno indica en pantalla qué foto va ahí y con qué medidas.

Para reemplazarlos:

1. Guardar la imagen en `assets/img/` con el nombre indicado.
2. Abrir `index.html` en el Bloc de notas y buscar el comentario que empieza con `FOTO 01`,
   `FOTO 02` o `FOTO 03`. Justo arriba de cada recuadro está escrita la línea exacta
   que hay que dejar en su lugar.

| Recuadro | Archivo sugerido | Formato | Qué debe mostrar |
|---|---|---|---|
| Foto 01 | `assets/img/retrato.jpg` | Vertical 3:4, mín. 1200×1600 px | Retrato de medio cuerpo, fondo claro, luz de ventana |
| Foto 02 | `assets/img/detalle.jpg` | Horizontal 4:3, mín. 1600×1200 px | Manos escribiendo, expediente, planos. Sin rostro |
| Foto 03 | `assets/img/ponencia.jpg` | Horizontal, mín. 1600 px de ancho | Exponiendo en un panel, congreso o clase |

### 2. Datos pendientes

- **Número de arbitrajes y juntas de resolución de disputas.** En la sección 02 hay un
  recuadro con un guion y la nota "cifra por confirmar". Buscar `fig--pending` en
  `index.html` y reemplazar el `—` por el número real.
- **Enlace de LinkedIn.** Está comentado en `index.html`, al final del panel lateral
  (buscar `LINKEDIN`). Cuando tengamos la URL, se descomenta esa línea y se pega.
  Mientras no exista, no aparece nada: es preferible a un enlace que no lleva a ningún lado.
- **CV en PDF.** El botón de la sección de contacto abre el correo con el asunto ya
  escrito ("Solicitud de currículum vitae"). Funciona tal cual.
  Si más adelante se prefiere un PDF descargable, buscar `contact__cv` en `index.html`:
  justo encima está la línea de reemplazo.
  **Antes de subir ese PDF hay que eliminarle la dirección de casa.**
- **Enlaces a las publicaciones**, si están disponibles en línea.
- **Dominio y vista previa social.** Cuando exista el dominio definitivo, agregar la etiqueta
  `canonical` y una imagen real para `og:image` en el `<head>`.

### 3. Decisión pendiente

El CV incluye la dirección de su casa. **No la puse en el sitio a propósito** — es
información que no conviene publicar. Solo figura "Lima, Perú".

---

## Cómo publicarlo

1. Contratar el dominio y el hosting.
2. Entrar al administrador de archivos de Hostinger (o el hosting que usen).
3. Arrastrar **todo el contenido de esta carpeta** dentro de `public_html`.
4. Listo.

El archivo `.htaccess` ya viene configurado: fuerza HTTPS, comprime los archivos y evita
que el navegador muestre una versión vieja del sitio después de cada actualización.

> Nota: `.htaccess` empieza con punto, así que en Windows puede estar oculto.
> Hay que activar "Elementos ocultos" en el Explorador para verlo y copiarlo.

**Cada vez que se modifique el CSS o el JS**, cambiar la fecha en `index.html`:
`styles.css?v=20260812` → `styles.css?v=20260901`. Eso obliga a los navegadores a
descargar la versión nueva.

---

## Archivos

```
index.html      Todo el contenido y la estructura
styles.css      Diseño completo
main.js         Animaciones y navegación
.htaccess       Configuración del servidor
assets/img/     Aquí van las fotos
```

---

## Criterio del texto

Todo el contenido del sitio sale del CV de junio de 2026. No hay frases interpretativas,
ni motivaciones atribuidas, ni afirmaciones que el CV no diga de forma expresa.

Dos consecuencias visibles de ese criterio:

- **El sitio dice «Árbitro», no «Árbitra»**, porque así lo escribe ella en su CV
  («Abogada, Árbitro nacional e internacional, Adjudicadora»). Si prefiere la forma
  femenina, es un cambio de un minuto.
- **No aparece el nombre de ninguna firma o consultora.** El CV no la nombra; el nombre
  «AC Consultores Asociados» solo estaba deducido de su correo electrónico y se retiró.

## Correcciones aplicadas al texto del CV

Al pasar el contenido al sitio corregí estas erratas del CV original:

- "Dispute Resolutions Board Fundation" → **Dispute Resolution Board Foundation**
- "Avoindance" → **Avoidance**
- "MCiArb" → **MCIArb** (se escribía de dos formas distintas)
- "Déjä vu" → **déjà vu**
- "Àrea" → **Área**
- "Universidad San Martin de Porres" → **Universidad de San Martín de Porres**

Conviene corregirlas también en el CV en PDF antes de publicarlo.
