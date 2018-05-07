function write_answer(str){
  document.getElementById('messages').innerHTML +=
  '<div(class="msg-answer")>'+
  '<div class="arrow-left"></div>'+
  '<div class="content">'+
  '<p>'+str+'</p>'+
  '</div></div>';
}
function write_response(str){
  document.getElementById('messages').innerHTML +=
  '<div(class="msg-question")>'+
  '<div class="arrow-right"></div>'+
  '<div class="content">'+
  '<p>'+str+'</p>'+
  '</div></div>';
}

function read(){
  return document.getElementById('input_call').value;
}
function call(data_input) {
  var question = data_input;
  var session_id = '&session_id=1';
  var key = '&key=47c621deff7e47c30ab1cabd32c5de7237d94827';
  var call_url = 'http://beta.soldai.com/bill-cipher/askquestion?';
  var log = '&log=1';
  var url = call_url+'question='+question+session_id+key+log;
  return url;
}

function call_my(){
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){ if( this.readyState == 4 && this.status == 200){
    var data = JSON.parse(this.responseText);
    write_response(data.current_response.message);
  //  write( this.responseText);
  }}

  xhttp.open('GET',call(read()),true);
  xhttp.send();
  write_answer(read());
  document.getElementById('input_call').value = '';
 }
