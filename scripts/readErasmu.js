/**
 * Lista de objetos Movilidad con los datos de erasmu.
 * @type {Array}
 */
var erasmu;
/**
 * Lee el json y lo pasa a una lista de Movilidad.
 * @return {Array} Un array de erasmu.
 */
function readErasmu(){
  readFileJSON();
}

/**
 * Lo lee el json y lo pasa a un array
 * @return {Array} erasmu segun el tipo seleccionado.
 */
function readFileJSON(){
  borrarList();
  erasmu = listErasmu(document.getElementById('tipo').value);
  if(document.getElementById('toogle').checked){
    crearSelectCheckBox(listaCiclo());
  }else{
    crearSelectRadio(listaPais());
  }
}
/**
 * Crea los checkbox para los ciclos.
 * @param  {string} select
 * @return {Array}
 */
function crearSelectCheckBox(select){
  for(var aux = 0 ; aux < select.length ; aux++){
    crearListCheckBox(select[aux]);
  }
}
/**
* Crea los radio button para los paises.
* @param {string} select - Datos para montar el li con radiobutton.
*/
/**
 * Crea los radio button para los paises.
 * @param  {string} select
 * @return {Array}
 */
function crearSelectRadio(select){
  for(var aux = 0 ; aux < select.length ; aux++){
    crearListtRadio(select[aux]);
  }
}
/**
* Pasa el json a un array.
* @param {string} value - Valor del tipo de movilidad.
* @param {Array} - Array con todos las movilidades de un tipo.
*/
function listErasmu(value){
  var erasmuSelect = [];
  var aux = 0;
  var tipoMovilidad;
  var movilidad;
  tipoMovilidad = 'movilidad'+value+'0'+aux;
  while(dataErasmu[tipoMovilidad] != undefined){
    movilidad = new Movilidad(dataErasmu[tipoMovilidad]['tipo'],
                              dataErasmu[tipoMovilidad]['ciclo'],
                              dataErasmu[tipoMovilidad]['pais'],
                              dataErasmu[tipoMovilidad]['ciudad'],
                              dataErasmu[tipoMovilidad]['latitud'],
                              dataErasmu[tipoMovilidad]['longitud']);
    aux++;
    tipoMovilidad = "movilidad";
    tipoMovilidad += value;
    if(aux < 10){
      tipoMovilidad += "0";
    }
    tipoMovilidad += aux;
    erasmuSelect[erasmuSelect.length] = movilidad;
  }
  return erasmuSelect;
}
/**
* Los datos a mostrar al hacer clic sobre la marca.
* @return {string} - Datos del listado de todos los ciclos para mostrar.
*/
function mostrarCiclos(){
  var ciclos = listaCiclo();
  var mostrar = 'Todos los ciclos:';
  for(var aux = 0, help = 0 ; aux < ciclos.length ; aux++){
    mostrar += '<br>'+ciclos[aux];
  }
  return mostrar;
}
/**
* Extrae la lista de ciclos de la lista erasmu.
* @return {array} - Todos los ciclos.
*/
function listaCiclo(){
  var ciclos = [];
  for(var aux = 0, help = 0 ; aux < erasmu.length ; aux++){
    if(ciclos.indexOf(erasmu[aux].ciclo) == -1){
      ciclos[help] = erasmu[aux].ciclo;
      help++;

    }
  }
  return ciclos;
}
/**
* Extrae la lista de paises de la lista erasmu.
* @return {array} - Todos los paises.
*/
function listaPais(){
  var paises = [];
  for(var aux = 0, help = 0 ; aux < erasmu.length ; aux++){
    if(paises.indexOf(erasmu[aux].pais) == -1){
      paises[help] = erasmu[aux].pais;
      help++;
    }
  }
  return paises;
}
/**
 * Extrae la movilidad segun el pais.
 * @param  {string} pais - Movilidad buscada por pais.
 * @return {Object} Objeto movilidad
 */
function selectPosition(pais){
  var movilidad;
  for(var aux = 0, help = 0 ; aux < erasmu.length ; aux++){
    if(erasmu[aux].pais == pais){
      movilidad = erasmu[aux];
    }
  }
  return movilidad;
}
