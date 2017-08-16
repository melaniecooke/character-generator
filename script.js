$('document').ready(function() {
  // Use chosen dropdown menu value in the corresponding
  // input field by default
  $('select').each( function(index, element){
      var $name = $(element).attr('id');
      var $value = $(element).val();
      $('input[name='+$name+']').val($value);
  } );

  // Update input fields when dropdown menu is updated
  $('select').change( function(){
      var $name = $( this ).attr( "id" );
      var $value = $(this).val();
      $('input[name='+$name+']').val($value);
  });
  
  // Random number generator (integer, maximum value = length)
  function randnum(length){
    return Math.floor(length * (Math.random() % 1));
  };
  
  // Randomize button: when clicked, choose a random value from the
  // corresponding select button
  $('.button').click(function() {
    //randomFromOptions($(this));
    var $name = $(this).prev().attr('name');
    // RNG select code copied and modified from 
    // https://stackoverflow.com/questions/7577047/ 
    // need-a-jquery-randomly-selected-identifier-from-options-available
    var options = $('#' + $name + ' > option');
    $('#' + $name+ ' > option').attr('selected',false).eq(randnum(options.length)).attr('selected',true).trigger("change");
    // Debugging:
    //$('p').append(' <b>Length:</b> '+ options.length);
    //$('p').append(' <b>Random number:</b> '+ randnum);
   
  });

  // Add hover effects on the button
  $('.button').hover(
    function(){
        $(this).addClass('buttonActive');
    },
    function(){
        $(this).removeClass('buttonActive');
    }
  );
  
  // Randomize All button:
  $('.buttonAll').click(function() {
    $('.button').each(function(index, element) {
      var $name = $(this).prev().attr('name');
      var options = $('#' + $name + ' > option');
      $('#' + $name+ ' > option').attr('selected',false).eq(randnum(options.length)).attr('selected',true).trigger("change");
    });
  });
  
  // Generate character description text
  
  function getInputVal ($name) {
    return $('input[name='+$name+']').val()
  };
  function getSelectVal ($name) {
    return $('select#'+$name).val()
  };
  
  switch (getSelectVal('pronoun')) {
    case 'she':
      var pronoun = 'She';
      var pronounPossessive = 'her';
      var phas = 'has';
      var seem = 'seem';
      break;
    case 'he':
      var pronoun = 'He';
      var pronounPossessive = 'his';
      var phas = 'has';
      var seem = 'seem';
      break;
    case 'they':
      var pronoun = 'They';
      var pronounPossessive = 'their';
      var phas = 'have';
      var seem = 'seems';
      break;
  };
  
  var chartext = getInputVal('name')+" is "+getInputVal('size')+" and "+getInputVal('shape')+". "+pronoun+" "+phas+" "+getInputVal('skintone')+" "+getInputVal('color')+" skin with a "+getInputVal('skintext')+" appearance. "+pronoun+" "+phas+" "+getInputVal('eyechar')+" "+getInputVal('eyecol')+" eyes. "+pronoun+" "+seem+" "+getInputVal('persona')+" and "+getInputVal('persona2')+".";
  
  $('input').change(function(){
    $('div#chartext').html(chartext);
  });
  
  $('select').change(function(){
    $('div#chartext').html(chartext);
  });
                    
  //  // Debugging. Copied from https://oscarotero.com/jquery/
  //  function displayVals() {
  //    var sizeValues = $( "#size" ).val();
  //    var shapeValues = $( "#shape" ).val();
  //    $( "p" ).html( "<b>Size:</b> " + sizeValues +
  //      " <b>Shape:</b> " + shapeValues );
  //  }
  //
  //  $( "select" ).change( displayVals );
  //  displayVals();
  //
  //  // BUTTON FUNCTIONALITY //
  //  // Set the button text
  //  $('.button').each(function(index, element){$(this).text('Randomize')});
  //                      
});
