var outputArea = $("#chat-output");

$("#user-input-form").on("submit", function (e) {

  e.preventDefault();

  var message = $("#user-input").val();

  outputArea.append(`
    <div class='bot-message'>
      <div class='message'>
        ${message}
      </div>
    </div>
  `);



  

fetch(' https://ge9da6vuga.execute-api.us-east-1.amazonaws.com/prod/chatbot-api',{
    method :'POST',
    headers : {
        'Accept' : 'application/json , text/plain, */*',
         'Content-type' : 'application/json'
    },
    body : JSON.stringify(btoa(message))
  })
  .then((res) => res.json())
  .then((data) =>

  setTimeout(function () {
    var snd = new Audio("data:audio/wav;base64," + JSON.parse(data).encodedVoice);

    outputArea.append(`
      <div class='user-message'>
        <div class='message'>
          ${
            snd.play(),
           (JSON.parse(data).decodedString)
          }
          
        </div>
      </div>
    `);
  }, 250))

  $("#user-input").val("");

});

