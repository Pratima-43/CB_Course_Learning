
 
 $('ul').on('click','li',function(){
    $(this).toggleClass('completed');
 })


$('#inp').keypress(function(e){
    const todoText = $(this).val();
    if(e.which===13){
    $('#list').append(`<li><span>✖️ </span>${todoText}</li>`);
    $(this).val("");
    }
});

$('ul').on('click','span',function(){
    $(this).parent().fadeOut(function(){
        $(this).remove(); //referse to the parent element li
    });
    e.stopPropagation();
    // $(this).parent().remove();
});

$('#plus').click(function(){
    $('#inp').fadeToggle();
})