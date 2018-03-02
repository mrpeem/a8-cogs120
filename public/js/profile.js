//var socket = io.connect('http://localhost:3000');
var socket = io.connect('https://a8-cogs120team2.herokuapp.com/');
//gets loginStatus directly from app.js to avoid asynchronicity shit
socket.once('loginStatus', function(signedIn)
{
  alert("LOGIN STATUS = "+signedIn);
  if (!signedIn) 
  {
    $(".profile").attr({
      "data-toggle": "modal",
      "data-target": "#profile_popup",
      "href" : "/profile"
    });
    alert("!signedIN");
  }
  else
  {
  	$(".profile").attr("href", "/profile");    
  }
});

/*socket.once('cock', function(userData)
{
	alert(userData);
	alert(userData.email);
	alert(userData.loginStatus);
});*/

function logout()
{
  socket.emit('logout');
}