// ==UserScript==
// @name        KrankenhausFilter_Großfeuer
// @namespace   leitstellenspiel
// @description entfernt Krankenhäuser aus der Liste
// @include     https://www.leitstellenspiel.de/vehicles/*
// @author	    Jenkins
// @version     1
// @grant       none
// ==/UserScript==
function killElement(element) {
  if (element) {
    var papa = element.parentNode;
    if (papa) papa.removeChild(element);
  }
}
var j = 10000; // so oft überprüfen eigene KHs
var l = 5; // nicht näher als 'l' km
for (x = 1; x <= j; x++)
{
  var mission = 'div.row:nth-child(6) > div:nth-child(2) > a:nth-child(1)';
  var entOwn = 'table.table:nth-child(3) > tbody:nth-child(2) > tr:nth-child(' + x + ') > td:nth-child(2)';
  var entfernOwn = document.querySelector(entOwn).innerHTML;
  var entfernungOwn = entfernOwn.split(',');

  if (document.querySelector(mission).innerHTML == 'Großfeuer im Krankenhaus');

  else if (document.querySelector(mission).innerHTML == 'Großfeuer im Krankenhaus (Brandmeldeanlage)')

  if (entfernungOwn[0] < l)
  {
    var kill = 'table.table:nth-child(3) > tbody:nth-child(2) > tr:nth-child(' + x + ')';
    killElement(document.querySelector(kill));
    x = x - 1;
  }
}
