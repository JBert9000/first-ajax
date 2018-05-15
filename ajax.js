document.addEventListener("DOMContentLoaded", function() {

  $('#step12').click(function() {
      $.ajax({
        url: 'http://first-ajax-api.herokuapp.com/pong',
        method: 'GET',
        dataType: 'JSON'
      }).done(function() {
        console.log('request successful!');
      }).always(function() {
        console.log('This will always show up!');
      }).fail(function(){
        console.log('Sorry this failed, I will try harder next time.');
      })
  });



  $('#step3456').click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'JSON'
    }).always(function(){
      console.log('Test');
    })
  });


  $('#step7').click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'JSON'
    }).done(function(responseData) {
      $('#step7div').text(responseData);
      console.log('This button is working!');
    })
  });

  $('#step8').click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      dataType: 'html'
    }).done(function(responseData) {
      $('#step8div').text(responseData);
      console.log('lsdhfl');
    })
  });

  $('#step9').click(function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'html'
    }).done(function(responseData) {
      $('#step9div').text(responseData);
      var li = $('<li/>').appendTo('#step9div');
      // for (i = 0; i < @('#step9div').length; i++) {
      //   responseData[i]
      // }
    })
  });






});
