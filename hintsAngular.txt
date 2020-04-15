--Crear nuevo componente--
ng g c componentes/navbar
*Si la carpeta componentes no existe, es creada, se crea el componente "navbar"

--Instalar boostrap, Jquery y Popper--
npm i boostrap jquery popper.js
npm i jquery@3.4.1
*La version de Jquery puede no ser compatible con la version de bootstrap, por eso se instala la 3.4.1
*Se deben importar tambien en angular.json, primero se declara Json y luego bootstrap, tanto ruta del js como css

--Ejecutar proyecto--
ng serve

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

