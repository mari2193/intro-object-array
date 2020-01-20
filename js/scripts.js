window.dataLayer.forEach(function(event) {
  var newEvent = document.createElement("li");
  newEvent.innerHTML =
    '<div class="info"><h2 class="title">' +
    event.short_description.fi +
    event.name.fi +
    '</h2><p class = "desc">' +
    event.description.fi +
    event.info_url.fi +
    +"</p></div>";
  document.getElementById("event-list").appendChild(newEvent);
});
