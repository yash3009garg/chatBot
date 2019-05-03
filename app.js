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
         'Content-type' : 'application/json '
    },
    body : btoa(message)
  })
  .then((res) => res.json())
  .then((data) => console.log(data));


  setTimeout(function () {
    outputArea.append(`
      <div class='user-message'>
        <div class='message'>
          I'm like 20 lines of JavaScript I can't actually talk to you.
        </div>
      </div>
    `);
  }, 250);

  $("#user-input").val("");

});

