$(document).ready(function(){
/*
  alert ("I am fully loaded")
  console.log("Helo World");
  */
/*
  var firstName = 'Isabel';
  var lastName  = 'Quijada'
  console.log ('Hello '+ firstName +' '+lastName)
  firstName = 'Tom'
  console.log ('Hello'+ ' ' +firstName)
  var is_an_excellent_student = true
  if (is_an_excellent_student == true){
    var firstName = 'Isabel';
  }else{
    firstName = 'Tom'
  } */
  /*
  console.log ('Hello '+ firstName +' '+lastName+ ' you are an excellent student');*/
foods = ['Pizza','Pasta','Chocolate','Apples','Grapes']
/*console.log (foods.length);
console.log(foods [3]);*/
for(var i=0; i< foods.length; i = i + 1) {
  /*console.log (foods [i]);*/
    $('#thingsIlike').append ('<li>' + foods[i] +'</li>')
}
/*$('#dog').mouseover(function (){
  console.log ('mouse is over tv tower');
  $(this).hide();
  })
  $('#dog').mouseleave(function (){
    console.log ('mouse has left tv tower');
    $(this).show();*/
    /*$('#hidepicture').mouseover (function(){
      console.log('Hide button clicked');
      $('#Dogs').hide();
    })
    $('#showpicture').mouseover (function(){
      console.log('Show button clicked');
      $('#Dogs').show();*/
      $('#hidepicture').on('click',function(){
        $('#Dogs').fadeOut(2000);
      $('#showpicture').on('click',function(){
        $('#Dogs').fadeIn(3000);
      $('#changeColor').on('click',function(){
        $('#thingsIlike').css('background-color', 'red');
        $('#firstheading').html('Welcome to our Class');

      })

      $.ajax({
  url: 'https://randomuser.me/api/?results=5000',
  dataType: 'json',
  success: function(data) {
    /*console.log(data);*/
    $.each(data.results, function(kez,value){
      console.log (person.name.tittle  + '' + person.name.first + '' + person.name.last);
    })
  }
});
      });
});
});
