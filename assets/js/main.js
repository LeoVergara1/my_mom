
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