
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
      strings: ["UNA MUJER MÁS QUE HERMOSA.", "MUJER INTELIGENTE", "MUJER QUE CAUTIVA", "MUJER QUE ENCANTA", "CON SENTIMIENTOS INCOMPARABLES",
      "CON UNA PERSONALIDAD MUY LINDA", "¿Y QUIÉN ES LA MUJER DE LA QUE HABLO?", "SÓLO PODRÍA SER UNA...", "ANA KAREN SUÁREZ CASTRO"],
      typeSpeed: 130,
      loop: false,
      contentType: 'html'

  });
  $(".final").typed({
    strings: ["!TE QUIERO BONITA¡"],
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
