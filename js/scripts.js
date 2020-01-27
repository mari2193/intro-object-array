window.dataLayer.forEach(function(event) {
  var newEvent = document.createElement("li");
  newEvent.innerHTML =
    '<div class="info"><h2 class="title">' +
    event.name.fi +
    '</h2> <p class = "desc">' +
    event.description.fi +
    "</p></div>";
  event.info_url.fi;
  document.getElementById("event-list").appendChild(newEvent);
});
