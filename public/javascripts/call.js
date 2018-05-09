//Escribe la pregunta en el formato.
function write_question(str){
  document.getElementById('chat-text').innerHTML +=
  '<div class=\"msg-question\">'+
  '<div class=\"content\">'+
  '<p>'+str+'</p>'+
  '</div></div>';
}
//Escribe la respuesta en el formato.
function write_answer(str){
  document.getElementById('chat-text').innerHTML +=
  '<div class=\"msg-answer\">'+
  '<div class=\"content\">'+
  '<p>'+str+'</p>'+
  '</div></div>';
}
//Lee lo que escribe el usuario.
function read(){
  return document.getElementById('input-data').value;
}
//Genera el url con el formato para el bot de SoldAi.
function call(data_input) {
  var question = data_input;
  var session_id = '&session_id=1';
  var key = '&key=47c621deff7e47c30ab1cabd32c5de7237d94827';
  var call_url = 'http://beta.soldai.com/bill-cipher/askquestion?';
  var log = '&log=1';
  var url = call_url+'question='+question+session_id+key+log;
  return url;
}
//Funcion para realizar el proceso de respuesta.
function Call_AI(){
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){ if( this.readyState == 4 && this.status == 200){
    var data = JSON.parse(this.responseText);
    write_answer(data.current_response.message);
  }}

  xhttp.open('GET',call(read()),true);
  xhttp.send();
  write_question(read());
  document.getElementById('input-data').value = '';
 }

//*** 2Da Forma de llamar a las APIs (En Proceso) ***


 function request(URL , callback , args ){
 	// args es un vector
 	xhttp = new XMLHttpRequest();
 	xhttp.onreadystatechange = function(){ if( this.readyState == 4 && this.status == 200){
 		args.push( this.responseText )//Agregar respuesta a los argumentos
 		callback( args );
 	}}
 	xhttp.open('GET',URL,true);
 	xhttp.send();
 }


 function PokeRequest( args ){
 	//args debe contener la solicitud y el JSON
 	var json = JSON.parse( args[1] );
 	//Segun la solicitud, el dato resultante se encontrara en una ubicacion diferente
 	switch( args[0] ){
 		case 'Habilidad':
      //Genera la salida para las Habilidades
      //Dado que cada pokemon tiene 2 Habilidades
      //Necesita concatenar las 2 opciones.
 			break;
 		case 'Estadisticas':
      //Genera la salida para las Estadisticas.
      //Necesita un ciclo dado que las Estadisticas
      //son varias.
 			break;
 		case 'Movimientos':
      //Genera la salida para los movimientos.
      //Decidir/Preguntar si puede ser solo un
      //movimiento o usar todos los que tiene.
      break;
 		case 'Peso':
      //Genera la salida para el Peso.
      //peso = data.weight
 			break;
    case 'Altura':
      //Genera la salida para la altura.
      // altura = data.height
   		break;
    case 'Tipo':
      //Genera la salida para los tipos
      //Checar si es de uno o 2 tipos y
      // hacer la accion necesaria.
   		break;
 		default:
 			//Cuando la solicitud no es de un pokemon
      //Devuelve la llamada directa al bot
      //e imprime lo que dijo este.
 	}
 }

 function IARequest( args ){
 	//args debe contener unicamente el JSON
 	var json = JSON.parse( args[0] );
 	// Solicitamos el nombre del pokemon
 	var element = json.current_response.intent_name;
 	// Solicitamos el elemento de busqueda/atributo solicitado del pokemon
 	var pokemon = json.current_response.parameters.entities[0].name;

 	//Hacemos una nueva solicitud con un nuevo callback. Esta vez se entrega el elemento de busqueda
  //**Esta llamada aun no funciona**
  request( 'Access-Control-Allow-Origin: //pokeapi.co/api/v2/pokemon/'+pokemon, PokeRequest, [element] );
 }
//Evento para ejecutar todo el proceso de llamadas
//Cuando se envie el form.
 function Event(){
   var ask = read();
   write_answer(ask);
   document.getElementById('input_call').value = '';
 	 request( call(ask), IARequest, [/*Vector vacio para IARequest*/] );
 }
