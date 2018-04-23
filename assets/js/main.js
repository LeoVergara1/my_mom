
//import {Typed} from './typed/typed';
//const myModule = require('./mymodule');
//include("js/second_file.js");

let MainController = (function(){
  var selectors = {
      datepicker:'#datepicker',
      datepicker1:'#datepicker1'
 },
 bindEvents = function bindEvents(){
      console.log("Satrt bindEvents");

 };

 var typed = function(){
   console.log("Typed..");
    $(".otro").typed({
        strings: ["^1000 This is a <strong>Test</strong> <br>and another line.", "Segundo texto de prueba"],
        typeSpeed: 50,
        loop: false,
        contentType: 'html'
    });
   $(".puntos").typed({
    strings: ["..."],
    showCursor: false,
    typeSpeed: 300,
    backSpeed: 300,
    loop: true,
    contentType: 'html'
    });
    $(".otro").typed({
      strings: ["Gracias a ti soy como soy, gracias a que me tuviste en tu vientre 9 meses diste a luz un niño que el día de hoy ya es hombre el cual te sientes orgullosa",
      "y donde quiera que estés nunca olvides que te amamos tus hijos y siempre vamos a estar contigo en las buenas o malas te amamos mama att: brandon y jovany",
     "Porque me has regalado todo tu amor, siempre me has curado todas mis heridas, tanto físicas como del alma, limpiaste mis lágrimas en cada arrebato de tristeza",
      "sólo sé que no me alcanzará la vida para pagarte todo lo que has hecho por nosotros. Y en este día quisiera celebrar tu cumpleaños a tu lado,"
      , "y pasarlo genial. Felicitaciones en tu día, mamá. Me has enseñado tantas cosas, dedicaste tanto tiempo para mí,", 
      "te has convertido en mi inspiración, deseo con esta frase que pases un excelente día en este cumpleaños. Recibe esta frase con mi saludo especial para celebrar tu cumpleaños",
     " eres la mejor persona que he conocido, gran ejemplo de fortaleza y amor. Feliz cumpleaños"],
      typeSpeed: 80,
      loop: false,
      contentType: 'html'

  });
  $(".final").typed({
    strings: ["¡TE AMAMOS MAMÁ!, FELIZ CUMPLEAÑOS JEJEJE :)"],
    startDelay: 50000,
    showCursor: false,
    typeSpeed: 200,
    loop: false,
    contentType: 'html'
    });

 };
 var start = function(){
 console.log("Start controller js");
 bindEvents();
 typed();

 };
 return{
      start:start
 }

}());
jQuery(function($){
MainController.start();
});
