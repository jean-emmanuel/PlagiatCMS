/*! Image Map Resizer (imageMapResizer.min.js ) - v0.5.2 - 2015-01-25
 *  Desc: Resize HTML imageMap to scaled image.
 *  Copyright: (c) 2015 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(){"use strict";function a(){function a(){function a(a){function c(a){return a*b[1===(d=1-d)?"width":"height"]}var d=0;return a.split(",").map(Number).map(c).map(Math.floor).join(",")}for(var b={width:i.width/j.width,height:i.height/j.height},c=0;g>c;c++)f[c].coords=a(h[c])}function b(){j.onload=function(){(i.width!==j.width||i.height!==j.height)&&a()},j.src=i.src}function c(){function b(){clearTimeout(k),k=setTimeout(a,250)}window.addEventListener?window.addEventListener("resize",b,!1):window.attachEvent&&window.attachEvent("onresize",b)}function d(a){return a.coords.replace(/ *, */g,",").replace(/ +/g,",")}var e=this,f=e.getElementsByTagName("area"),g=f.length,h=Array.prototype.map.call(f,d),i=document.querySelector('img[usemap="#'+e.name+'"]'),j=new Image,k=null;b(),c()}function b(){function b(b){if(b.tagName&&"MAP"!==b.tagName.toUpperCase())throw new TypeError("Expected <MAP> tag, found <"+b.tagName+">.");a.call(b)}return function(a){switch(typeof a){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(a||"map"),b);break;case"object":b(a);break;default:throw new TypeError("Unexpected data type ("+typeof a+").")}}}"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?module.exports=b():window.imageMapResize=b(),"jQuery"in window&&(jQuery.fn.imageMapResize=function(){return this.filter("map").each(a).end()})}();

imageMapResize('map');
