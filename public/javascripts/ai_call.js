function ai_call() {
  var question = document.getElementById("input_call").value;
  var session_id = '&session_id=1';
  var key = '&key=47c621deff7e47c30ab1cabd32c5de7237d94827';
  var call_url = 'http://beta.soldai.com/bill-cipher/askquestion?';
  var log = '&log=1';
  var url = call_url+'question='+question+session_id+key+log;
  document.getElementById('chat_text').value = url;
  get(url, (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  let error;
  if (statusCode !== 200) {
    error = new Error('Request Failed.\n' +
                      `Status Code: ${statusCode}`);
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error('Invalid content-type.\n' +
                      `Expected application/json but received ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    // consume response data to free up memory
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});
}
