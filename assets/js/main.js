'use strict';

let MainController = (function(){
  var selectors = {
      datepicker:'#datepicker',
      datepicker1:'#datepicker1'
 },
 bindEvents = function bindEvents(){
      console.log("Satrt bindEvents");
      
 };

 var start = function(){
 console.log("Start controller js");
 bindEvents();

 };
 return{
      start:start
 }

}());
jQuery(function($){
MainController.start();
});