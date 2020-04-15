Angular 9
*Es un framework MVC hecho por google y Microsoft, es la evolucion de un Angular mas viejo que tenia el mismo nombre y hoy es AngularJS, el cual
funcionaba como una alternativa a JQuery
*Se aplica al desarollo de webs complejas
*Basado en Typescript, que es basado en objetos incorporados a JS, con tipado estatico opcional. Es basado en lenguajes POO comunes, como java.
*Este lenguaje se transpila (Transpilador => Herramienta que traduce el codigo a JS5, uno en comun comprendido por los navegadores)
*Angular usa NodeJS (Recomendado >=version10), node es una plataforma que permite ejecutar JS fuera del navegador, para hacer otros tipos de aplicaciones. El mismo
automatiza procesos de desarollo y viene con NPM
*Angular crea aplicaciones RESTFUL, el cual junta backend con frontend mediante una API REST.
*package-lock.json => Para cada dependencia instalada, las dependencias de las cuales depende

--Version node--
node -version

--Juntar codigo dentro de una misma ventana de IDE para mejor visualizacion--
Alt + Z

--Instalar Angular9--
npm -i @angular/cli -g

--Crear proyecto angular--
ng new "nombreApp"

--Instalar angularJS--
npm i angular@1.7.9

--Crear nuevo componente--
ng g c componentes/navbar
*Si la carpeta componentes no existe, es creada, se crea el componente "navbar"
*App.module importa el nuevo componente automaticamente

--Instalar boostrap, Jquery y Popper--
npm i boostrap jquery popper.js
npm i jquery@3.4.1
*La version de Jquery puede no ser compatible con la version de bootstrap, por eso se instala la 3.4.1
*Se deben importar tambien en angular.json, primero se declara Json y luego bootstrap, tanto ruta del js como css

--Ejecutar proyecto--
ng serve -o
*Comando -o para abrir el navegador con el proyecto ya abierto

--Crear modulo--
ng g miModulo
*Es una clase que se puede ejecutar como modulo en app.module, con su clase. Es como una libreria externa nuestra

--Crear componente dentro del modulo--
ng g c mimodulo/componentes/panel
*Si no existe la carpeta componentes, la crea junto con el componente "panel"
*El componente se importa dentro del modulo nuestro

--Despliegue a Produccion--
ng build --prod (--base-href /carpeta1) => Esto para guardar el codigo en alguna carpeta del servidor que no sea el root
*Esto genera la carpeta dist dentro del proyecto
*XAMPP => Es un conjunto de herramientas que provee apache, se necesita instalar para usar
*Levanto los servicios de apache y en xampp/htdocs y pego lo que tengo en mi dist
*Ya puedo acceder desde localhost/
*00webhost.com provee servidores gratuitos, en administrador de archivos pongo subir archivos y subo lo del dist que estaba en mi carpeta de apache

