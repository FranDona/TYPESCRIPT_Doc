# TYPESCRIPT_Doc
--------------

[//]: # (version: 1.0)
[//]: # (author: Fran Dona)
[//]: # (date: 2024-02-28)



## Tabla de contenidos
- [TYPESCRIPT\_Doc](#typescript_doc)
  - [Tabla de contenidos](#tabla-de-contenidos)
  - [¿Qué es TypeScript?](#qué-es-typescript)
  - [Instalacion TypeScrit](#instalacion-typescrit)
  - [Estructura del proyecto](#estructura-del-proyecto)
    - [Nuestro primer Hola Mundo](#nuestro-primer-hola-mundo)



## ¿Qué es TypeScript?
TypeScript es un lenguaje de programación que extiende **JavaScript** al agregar tipado estático opcional. Esto facilita escribir código más estructurado y detectar errores durante el desarrollo.

## Instalacion TypeScrit
>[!WARNING]
> Para poder instalar TypeScript necesitaremos tener instalado NPM en nuestro sistema

1. Nos dirigiremos a la carpeta del proyecto donde queremos instalar TypeScript
2. Instalaremos TypeScript
    ```bash
    mkdir /var/www/html/typescript
    cd /var/www/html/typescript
    sudo npm install -g typescript 
    ```
>[!NOTE]
>TypeScript no se instala globalmente en nuestro equipo, se instala individualmente en las carpetas que queramos

## Estructura del proyecto
Para vincular los archivos a nuestro proyecto html primero tendrás que entender un par de cosas sobre como funciona TypeScript
- Nosotros trabajaremos directamente sobre un archivo .ts (TypeScript),
- Este archivo se transformará en un .js
- Por último el archivo que vincularemos será el .js el cual nosotros no trabajamos directamente<br>

A continuación veremos que sería:

### Nuestro primer Hola Mundo
1. Creación del documento HTML
```html
<!-- index.html -->
<body>
<main>
    <p>Párraof</p>
    <br><hr>
    <button onclick="iniciar()">Iniciar</button>
</main>
<script src="holaMundo.js"></script>
</body>
```
>[!NOTE]
>Como podemos observar el script está apuntando a un archivo .js pero no es ningún error.
----

2. Creación del documento TypeScript

```typescript
// holaMundo.ts
function iniciar() {
    pintar("Hola Mundo");
}

function pintar(mensaje: string) {
    alert(mensaje);
}
```
----

3. Creación del documento .js

Tenemos dos formas de convertir el archivo.
- Forma manual
  - Usaremos el comando ```tsc nombre_archivo.ts``` en la consola, de esta manera se convertirá automáticamente a un .js Tendremos que hacerlo cada vez que el archivo sufra cambios.<br><br>
- Forma automática
  - En nuestra raíz del proyecto crearemos un archivo .json con la siguiente configuración<br><br>
    ```json
    {
        "compilerOptions": {
            "module": "commonjs",
            "target": "ES5",
            "outDir": "doc-js",
            "rootDir": "."
        }
    }
    ```
    A continuación, usaremos el comando ```tsc -w``` en la raíz del proyecto<br><br>

  - Esto nos generara una carpeta llamada ```doc-js```(el nombre se puede cambiar en él .json) la cual almacenara los .js automáticamente cada vez que haya cualquier cambio, también nos avisara de errores de sintaxis.
  - A partir de ahora si necesitamos usar la consola tendrá que será en otra ventana, ya que, si cerramos esta, se parará la automatización.
 
