# Angular

Es un framework MVC hecho por Google y Microsoft, es la evolución de AngularJS, que se creo como alternativa a jQuery. Este nuevo Angular se llamó Angular 2, que cambio toda la estructura de trabajo en comparación a su antecesor, por esto, Google tuvo que pedir disculpas.

* Es aplicado al desarrollo de webs complejas
* Es basado en Typescript, basado en objetos, incorpora a JS los mismos, con tipado estático opcional (Tipado estático es decirle a una variable de que tipo es y no que se tome de manera "automática") Las clases estan basadas en el lenguaje Orientado a Objetos basico, es parecido a Java.
* **Transpilador** Herramienta que traduce a JS5, el que entienden los navegadores hoy en dia por convencion. Es lo que se usa con Typescript para ser entendido.
* Se crean apps **Restful**, el cual junta el backend y el frontend mediante una API REST.

Se usa con **NodeJS (Version +10)** que..

* Es una plataforma que permite ejecutar JS fuera del navegador para hacer otros tipos de aplicaciones
* Automatiza procesos de desarollo
* Ya viene con NPM
* Para saber la version de node instalada, uso `node -v`

### Set Up

* Instalar angular cli
  `npm -i @angular/cli -g`
* Crear un nuevo proyecto
  `ng new "nombreApp"`
* Ejecutar proyecto (Con el -o se abre el navegador solo apuntando al localhost correspondiente)
  `ng serve` -o
* Si quiero instalar AngularJS
  `npm install angular`
* Crear un nuevo componente
  `ng g c componentes/navbar`
  -Si la carpeta componentes no existe, se crea. Y se crea el componente 'navbar' tambien.
  -`App.module` importa al nuevo componente de manera automatica
* Instalar Boostrap, jQuery y Popper.js
  `npm i bootstrap jquery popper.js`
  `npm i jquery@3.4.1`
  -La version de jQuery puede no ser compatible con la version de bootstrap, por eso se recomienda chequear que version instalar
  -Se deben importar tambien en angular.json.
* Crear modulo
  
  `ng g miModulo`
  -Es una clase que se puede ejecutar como modulo en app.module, con su clase. Es como una libreria hecha por nosotros.
* Crear directiva personalizada
  `ng g d directivas/resaltar`

### Despliegue a Producción

`ng build --prod (--base-red /carpeta1` -> Guardamos el codigo en alguna carpeta del servidor que no sea el root.

### ¿Qué contiene?

* **app.module.ts** -> La organizacion de componentes del proyecto. .ts refiere a Typescript
  -Decorador @Component
  -Codigo componente
  -Export class appComponent
* **app.component.css**
* **app.component.html**
* **app.component.spec.ts** -> Tests funcionales
* **index.html** -> HTML del proyecto, con todo lo que posee un HTML basico, no se debe tocar tanto. Aqui se agrega bootstrap en el `<head>` para que pueda ser usado en todo el navegador.
  
  ```javascript
  <body>
  <componente></componente>
  </body>
  ```
* **styles.css** -> Posee estilos globales de toda la app
* **polyfills.ts** -> Funcionalidades para que navegadores viejos puedan soportar el proyecto.
* **main.ts** -> Arranca el proyecto
* **angular.json** -> Configuracion del proyecto, assets, etc..






