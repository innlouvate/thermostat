$( document ).ready(function() {

  $('#city-submit').click(function(event) {
    event.preventDefault();
    var city = $('#city').val()
    var deferred = $.Deferred();
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=b7c5477d0a1d7e7fc8feed92153db903&units=metric",function(result){
      $('#cityname').text(result.name);
      $('#outside-temperature').text(result.main.temp);
      $('#weather').text(result.weather[0].main);
      initMap();
      // $('map').img(initMap());
    });
  });

  function initMap() {
  // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      scrollwheel: false,
      zoom: 8
    });
  }

});
