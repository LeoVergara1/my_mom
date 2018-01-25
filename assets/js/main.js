
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
      "CON UNA PERSONALIDAD MUY LINDA", "¿Y QUIEN ES LA MUJER QUE HABLO?", "SÓLO PODRÍAS SER UNA...", "ANA KAREN SUÁREZ CASTRO"],
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