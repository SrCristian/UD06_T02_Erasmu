/**
* Objeto Movilidad con los datos de cada viaje de Erasmu.
*/
var tipo;
var ciclo;
var pais;
var ciudad;
var latitud;
var longitud;
/**
 * @class Contiene todos los datos de una movilidad de Erasmu. 
* @constructor
* @param {string} tipo
* @param {string} ciclo
* @param {string} pais
* @param {string} ciudad
* @param {int} latitud
* @param {int} longitud
*/
function Movilidad(tipo, ciclo, pais, ciudad, latitud, longitud){
  this.tipo = tipo;
  this.ciclo = ciclo;
  this.pais = pais;
  this.ciudad = ciudad;
  this.latitud = latitud;
  this.longitud = longitud;
}
