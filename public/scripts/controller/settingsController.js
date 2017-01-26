
'use strict';
(function(module) {
  var settingsController = {};

  settingsController.index = function() {
    $('#userSettings').show().siblings().hide();
  };

// TODO: CAN WE PASS A STRING TO A VARIABLE AND THEN ASSIGN THAT VARIABLE AS A PARAMETER IN A CONSTRUCTOR FUNCTION BELOW?
  // var x = 'U.S.';
  // var US = x;
  // console.log(US);

  function User(username, World, us, Politics, Business, Technology, Science, Health, Sports, Arts, Style, Food, Travel) {
    this.username = username || false;
    this.World = 'World' || false;
    // TODO: WE NEED TO FIGURE THIS U.S. SECTION OUT
    this.us = us || false;
    this.Politics = Politics || false;
    this.Business = Business || false;
    this.Technology = Technology || false;
    this.Science = Science || false;
    this.Health = Health || false;
    this.Sports = Sports || false;
    this.Arts = Arts || false;
    this.Style = Style || false;
    this.Food = Food || false;
    this.Travel = Travel || false;
  }
// TODO: WE HAVE A ONE OFF ERROR HERE IN THE LATE SECTION, FOR EXAMPLE, IF ARTS IS CLICKED, FOOD WILL DISPLAY.

  $('.settingsSubmit').on('click', function(e) {
    e.preventDefault();

    var currentUser = new User($('#username').val(),
            $('#world').is(':checked'),
            $('#us').is(':checked'),
            $('#politics').is(':checked'),
            $('#business').is(':checked'),
            $('#technology').is(':checked'),
            $('#science').is(':checked'),
            $('#health').is(':checked'),
            $('#sports').is(':checked'),
            $('#arts').is(':checked'),
            $('#style').is(':checked'),
            $('#food').is(':checked'),
            $('#travel').is(':checked'));

    localStorage.setItem('sessionInfo', JSON.stringify(currentUser));
    window.location.href = '/';
  });

  module.settingsController = settingsController;
})(window);
