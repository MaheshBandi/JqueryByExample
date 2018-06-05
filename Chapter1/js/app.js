//Traditional way of invoking the javascript

// window.onload = function(){
//     document.getElementById('button1').addEventListener('click',clickHandler,false);
// }

// function clickHandler(){

//     alert('Jquery Tutorial');
// }


// Invoke using the Jquery

// 1st Method using jQuery Function

// jQuery(document).ready(function(){   // document.ready followed by handler function

//     jQuery('#button1').click(function(){

//         alert('Jquery Tutorial');
//     });
// });

//2nd Method replacing jQuery Function using $ 

// $(document).ready(function(){  // document.ready followed by handler function

//     $('#button1').click(function(){

//         alert('Jquery');
//     });
// });

//3rd Method is use the short hand notation $(handler function)

$(function(){
   $('#button1').click(function(){

    alert('Jquery');
   }); 
})




