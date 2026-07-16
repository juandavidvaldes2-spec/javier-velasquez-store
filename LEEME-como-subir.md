# Cómo subir la tienda a GitHub

Esta carpeta `github-upload` es autocontenida. Todo lo que está aquí adentro es lo único que tienes que subir. No hace falta nada de afuera.

## Qué contiene

- `index.html` es la página principal de la tienda. GitHub la abre sola cuando entran al link.
- `plancha-rizadora.html` es la landing de la Plancha Rizadora.
- `landing-plasma-flow/` es la landing de PlasmaFlow con todas sus fotos adentro.
- `plancha-rizadora/images/` son las fotos de la Plancha Rizadora.

Las tres páginas ya están enlazadas entre sí y todas las fotos cargan con rutas internas, así que al abrir el link todo va a estar funcional.

## Pasos para publicarlo

1. Crea un repositorio nuevo en GitHub, por ejemplo `javier-velasquez-store`.
2. Sube TODO el contenido de esta carpeta al repositorio, respetando las subcarpetas tal como están. Lo más fácil es arrastrar la carpeta completa en la opción "uploading an existing file".
3. En el repositorio ve a Settings, luego Pages.
4. En "Source" elige la rama `main` y la carpeta `/ (root)`. Guarda.
5. Espera un par de minutos. GitHub te da un link tipo `https://tu-usuario.github.io/javier-velasquez-store/`.
6. Abre ese link. Ahí ves la tienda con los dos productos, y desde cada botón entras a su landing.

## Nota

Las fuentes de letra cargan solas desde Google, no hay que subir nada extra para eso.
