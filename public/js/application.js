$(document).ready(function () {

  $('form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      url: this.action,
      type: this.method,
    }).done(function(response){
      $('#die').remove();
      $('form').append(response);
    });
  });

});
