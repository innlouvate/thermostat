
$( document ).ready(function() {

  function displayTemp() {
    $('#temperature').text(thermostat.temperature);
    $('#tempdisplay').attr('class', thermostat.determineColor());
    $('#power-saving').attr('class', thermostat.savingMode);

  }

  var thermostat = new Thermostat();
  displayTemp();

  $( "#up-arrow" ).click(function( event ) {
    try{thermostat.increaseTemp();}
    catch(err) {}
    displayTemp();
  });

  $( "#down-arrow" ).click(function( event ) {
    try{thermostat.decreaseTemp();}
    catch(err) {}
    displayTemp();
  });

  $( "#reset-temp" ).click(function( event ) {
    thermostat.resetTemp();
    displayTemp();
  });

  function turnPSOn() {
    thermostat.savingModeOn();
    $('#power-saving').text('Power Saving is On');
    displayTemp();
    $(this).one("click", turnPSOff);
  };

  function turnPSOff() {
    thermostat.savingModeOff();
    $('#power-saving').text('Power Saving is Off');
    displayTemp();
    $(this).one("click", turnPSOn);
  };

  $('#power-saving').one("click", turnPSOff);

});
