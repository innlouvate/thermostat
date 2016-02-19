$( document ).ready(function() {
var cityLat;
var cityLng;

  $('#city-submit').click(function(event) {
    event.preventDefault();
    var city = $('#city').val()
    result = {"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01d"}],"base":"cmc stations","main":{"temp":278.608,"pressure":1019.18,"humidity":96,"temp_min":278.608,"temp_max":278.608,"sea_level":1029.22,"grnd_level":1019.18},"wind":{"speed":4.02,"deg":315.001},"clouds":{"all":0},"dt":1455810476,"sys":{"message":0.0055,"country":"GB","sunrise":1455779308,"sunset":1455816072},"id":2643743,"name":"London","cod":200};
    // $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=b7c5477d0a1d7e7fc8feed92153db903&units=metric",function(result){
        $('#cityname').text("Location: "+result.name);
        $('#outside-temperature').text("Temperature: "+result.main.temp);
        $('#weather').text("Today's forecast: "+result.weather[0].main);

        cityLat = result.coord.lat;
        cityLng = result.coord.lon;
        var icon = result.weather[0].icon;
        iconsrc = "http://openweathermap.org/img/w/"+icon+".png";
        initMap(cityLat,cityLng);
        // $('icon').attr('src', iconsrc)
        var background = backgroundPhoto(cityLat,cityLng);
        console.log(background);
        $('#icon').css("background-image", "url("+background+")")
        // $('photo').img(backgroundPhoto(cityLat,cityLng));
        // $('#weather').text(result.weather[0].main);
    // });
  });

  // $('#city-submit').one("click", displayOn());

  function initMap(cityLat, cityLng) {
  // Create a map object and specify the DOM element for display.
  // async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCN07P65aKk4ZXedv8Uu33H16_W7aWIMEo&callback=initMap"
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: cityLat, lng: cityLng},
      scrollwheel: false,
      zoom: 8
    });
  }

  function backgroundPhoto(cityLat, cityLng) {
    $get('http://www.panoramio.com/map/get_panoramas.php?set=public&from=0&to=20&minx=' + area.minx + '&miny=' + area.miny + '&maxx=' + area.maxx + '&maxy=' + area.maxy + '&size=original&mapfilter=true', function(result){

    }
    var myRequest = new panoramio.PhotoRequest({
      'tag': 'sunset',
      'rect': {'sw': {'lat': -30, 'lng': 10.5}, 'ne': {'lat': 50.5, 'lng': 30}}
    });
  }

  function displayOn() {
    $('#local-weather').toggle();
  }

});
