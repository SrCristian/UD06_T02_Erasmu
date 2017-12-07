/**
* Carga inicial de los metodos.
*/
function loadPage(){
  myMap();
  addEvent();
  readErasmu();
}
/**
* Carga e inicia los eventos.
*/
function addEvent(){
  document.getElementById("tipo").addEventListener('change', readFileJSON,false);
  document.getElementById("buscar").addEventListener('click', findErasmu,false);
}
/**
* Inicia la busqueda de datos.
*/
function findErasmu(){
  borrarListErasmu();
  var erasmu = listErasmu(document.getElementById('tipo').value);
  if(document.getElementById('toogle').checked){
    iniciarListaBusqueda();
  }else{
    changeMap(selectPosition(selectDatoErasmu()));
  }
}
/**
* Crea la lista con checkbox para los ciclos.
* @param {string} identifica - Datos para montar el li con checkbox.
*/
function crearListCheckBox(identifica){
  var li = document.createElement('li');
  var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.setAttribute("id", identifica);
  var contenido = document.createElement('label');
    contenido.setAttribute("for", identifica);
    contenido.appendChild(document.createTextNode(identifica));
      li.appendChild(checkbox);
      li.appendChild(contenido);

      document.getElementById("listaCiclo").appendChild(li);
}
/**
* Crea la lista con los radio para los paises.
* @param {string} identifica - Datos para montar el li con radiobutton.
*/
function crearListtRadio(identifica){
  var li = document.createElement('li');
  var checkbox = document.createElement('input');
    checkbox.type = "radio";
    checkbox.setAttribute("id", identifica);
    checkbox.setAttribute("name", 'grupo');
  var contenido = document.createElement('label');
    contenido.setAttribute("for", identifica);
    contenido.appendChild(document.createTextNode(identifica));
      li.appendChild(checkbox);
      li.appendChild(contenido);

      document.getElementById("listaCiclo").appendChild(li);
}
/**
* Crea la lista con todos los datos de la movilidad.
* @param {Movilidad} movilidad - Objeto Movilidad.
*/
function crearListErasmu(movilidad){
  var li = document.createElement('li');
  var ciclo = document.createElement('label');
    ciclo.appendChild(document.createTextNode(movilidad.ciclo));
    ciclo.setAttribute("class", "ciclo");
  var pais = document.createElement('label');
    pais.appendChild(document.createTextNode(movilidad.pais));
    pais.setAttribute("class", "pais");
  var ciudad = document.createElement('label');
    ciudad.appendChild(document.createTextNode(movilidad.ciudad));
    ciudad.setAttribute("class", "ciudad");
  var latitud = document.createElement('label');
    latitud.appendChild(document.createTextNode(movilidad.latitud));
    latitud.setAttribute("class", "latitud");
    latitud.setAttribute("style", "visibility: hidden");
  var longitud = document.createElement('label');
    longitud.appendChild(document.createTextNode(movilidad.longitud));
    longitud.setAttribute("class", "longitud");
    longitud.setAttribute("style", "visibility: hidden");

    li.appendChild(ciclo);
    li.appendChild(pais);
    li.appendChild(ciudad);
    li.appendChild(latitud);
    li.appendChild(longitud);

    li.addEventListener('click', selectErasmu,false);

    document.getElementById("listaErasmu").appendChild(li);
}
/**
* Borra la lista para buscar.
*/
function borrarList(){
  var li = document.getElementsByTagName("li");
  var hijo;
  for(var aux = (li.length-1) ; aux > -1  ; aux--){
      for(var help = (li[aux].childNodes.length - 1) ; help > -1 ; help--){
        hijo = li[aux].childNodes[help];
        li[aux].removeChild(hijo);
      }
      li[aux].parentNode.removeChild(li[aux]);
  }
}
/**
* Borra la lista para seleccionar un ciclo en una ciudad.
*/
function borrarListErasmu(){
  var li = document.getElementById('listaErasmu').childNodes;
  var hijo;
  for(var aux = (li.length-1) ; aux > -1  ; aux--){
      for(var help = (li[aux].childNodes.length - 1) ; help > -1 ; help--){
        hijo = li[aux].childNodes[help];
        li[aux].removeChild(hijo);
      }
      li[aux].parentNode.removeChild(li[aux]);
  }
}
/**
* Extrae los datos de la lista, que tenga el checkbox o radio seleccionado.
* @return {array} - Todos los seleccionado en la lista.
*/
function selectDatoErasmu(){
  var seleccion = [];
  var lista = document.getElementById('listaCiclo').childNodes;
  for(var aux = 1 ; aux < lista.length ; aux++){
    if(lista[aux].childNodes[0].checked){
      seleccion[seleccion.length] = lista[aux].childNodes[1].innerHTML;
    }
  }
  return seleccion;
}
/**
* Selecciona un elemento de la lista para extraer los datos.
*/
function selectErasmu(){
  changeMapByPosition(this.childNodes[3].innerHTML,this.childNodes[4].innerHTML);
}
/**
* Inicia la busqueda en la lista, para montar la lista de seleccion.
*/
function iniciarListaBusqueda(){
  var ciclos = selectDatoErasmu();
  for(var aux = 0, help = 0 ; aux < erasmu.length ; aux++){
    if(ciclos.indexOf(erasmu[aux].ciclo) != -1){
      crearListErasmu(erasmu[aux]);
    }
  }
}
