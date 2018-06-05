// window loader is loaded when all document,images,css,frames..etc are loaded 
//document loader is loader as soons as DOM is loaded

//ex:

// $(window).on('load',function(){

//     alert('Window is loaded');
// });

// $(document).ready(function(){

//     alert('Document is loaded first');
// });



// $(window).on('load',function(){

//     $('#id1').html("Height = " + $('#img1').height() + "Width" +$('#img1').width() );
// });


$(document).ready(function(){

    $('#id1').html("Height = " + $('#img1').height() + "Width" +$('#img1').width() );
});
