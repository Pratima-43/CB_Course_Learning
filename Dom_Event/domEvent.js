
const btn = document.getElementById('btn');
const h1 = document.querySelector('h1');
const inp = document.getElementById('inp');
const form = document.querySelector('form');

// btn.onclick = function(){
//     console.log('Someone clicked the button');
// }

// h1.onclick = function (){
//     h1.style.color= 'red';
//     h1.style.backgroundColor = 'blue';
//     h1.style.border = '3px solid black' 
// }

// drawback of onclick

function scream(){
    console.log('Scream!!!!!');
}

function shout(){
    console.log('Shout!!!!');
}

// btn.onclick = scream;
// btn.onclick = shout;

// if i want to run both the function when i click the button so if i use this
// btn.onclick = shout;
// btn.onclick = scream;
// and i want to switch from shout to scream it not going to work it only prints the scream and shout will not run

// For this we will use eventlistener instead of onclick and this is the drawback of onclick




// addEventListener(type,listener);
// btn.addEventListener('click',scream);
// btn.addEventListener('click',shout);

//<-----------------mouse Event------------->

// h1.addEventListener('mouseenter', function(){
//     h1.style.color = 'red';
//     h1.style.backgroundColor = 'aqua';
// });

//<---------------- MOUSE lEAVE ------------->

// h1.addEventListener('mouseleave',function(){
//     h1.style.color = '';
//     h1.style.backgroundColor = '';
// });

// inp.addEventListener('keypress'.function(){
//     console.log('Keypressed');
// });

inp.addEventListener('keypress' , function (event){
    // console.log(event.key.value);
    if(event.keycode === 12){
        console.log('You pressed the enter key')
    }
    console.log(event);
});

form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('form submitted'); // this statement come for a while and then goes away 
    //this is becoz when ever we submit a form it automaticaly refreshes the page so the console.log statement is not visible after a while for that we use preventDefault()
})

