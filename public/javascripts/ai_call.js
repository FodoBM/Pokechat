var call = (data_input) => {
  var question = data_input;
  console.log(question);
  var session_id = '&session_id=1';
  var key = '&key=47c621deff7e47c30ab1cabd32c5de7237d94827';
  var call_url = 'http://beta.soldai.com/bill-cipher/askquestion?';
  var log = '&log=1';
  var url = call_url+'question='+question+session_id+key+log;
  return url;
  }
module.exports = call;
