$('#btn').click(function(){
    console.log('Button Clicked');
    console.log($(this)); // this referes to the button element
    $(this).css('border','3px solid red');
});

$('input').keypress(function(e){
    // console.log('Input Key Pressed');
    // console.log($(this).val()); 
    if(e.which === 13) {
        console.log('You pressed Enter !!');
    }
});


// <--------------------------------JQUERY EFFECT----------------------------->


// $('#btn2').click(function(){
//     $('div').fadeOut(800,function(){
//         console.log('Fade Out Complete');
//     });
// });
//default duration is 400ms


// $('#btn2').click(function(){
//     $('div').fadeToggle(800,function(){
//         console.log('Fade Out Complete');
//     });
// });


$('#btn2').click(function(){
    $('div').slideUp(800,function(){
        console.log('Slided Out Complete');
    });
});

// $('#btn2').click(function(){
//     $('div').slideToggle(800,function(){
//         console.log('Slided Out Complete');
//     });
// });




// $('h1').hide()