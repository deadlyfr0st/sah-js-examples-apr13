let name = 'Tibi';

console.log(name + "'s apples");
console.log('Hello world!');

// This is a JavaScript comment

/*
    This is a multiline
    JavaScript comment.
*/

// $('selector').action()  jquerry használatának felépítése

$('h1').text('We are having a 10 minute break until 17:05');
$('p').html('StayAtHome Coding Camp, Likes:<strong>13</strong>');

$('strong').css('background', 'lime');
$('strong').css('padding', '10px');


//$('h2').toggleClass('blue');    // class-t bekapcsolja hozzá, azt már formáztam a css-ben ezért kék háttér lesz
//$('h2').toggleClass('blue');    // class-t kikapcsolja

let color = 'blue';

$('h2').toggleClass(color);    // class-t bekapcsolja hozzá, azt már formáztam a css-ben ezért kék háttér lesz
$('h2').toggleClass(color);    // class-t kikapcsolja

$('ul').append('<li>My name is ' + name + '</li>');
$('ul').append('<li id="special-list-item">Removable ' + name + '</li>');

$('#special-list-item').remove();

/*
// gomb-al lista elem hozzáadás, a click-ben fgv van használva alakja: () => {}
$('#add-button').click(() => {
    $('ul').append('<li>My name is ' + name + '</li>');
})
*/

let addButtonHandler = () => {
    if ($('li').length < 5) {
    $('ul').append('<li>My name is ' + name + '</li>');
    }
}

// így is lehet fgv-t csinálni
/*
function addButtonHandler() {
    if ($('li').length < 5) {
    $('ul').append('<li>My name is ' + name + '</li>');
    }
}*/


$('#add-button').click(addButtonHandler);

//gomb-al lista elem eltávolítása
$('#remove-button').click(() => {
    $('li:last-child').remove();
});


/* if felépítés mint mindenhol máshol :D
if (conditions) {

} else {

}
*/

let age = 12;

console.log('Starting the if');
console.log('This Is a Sentence'.toLowerCase());

if (age < 18) {
    console.log('Not old enough to drink');
} else {
    console.log('Old enough to drink');
}

console.log('This is after the if');


let colors = ['orange', 'lime', 'magenta', 'yellow', 'blue'];

//loop nélkül így lenne, dobozok kreálása a tömb elemei a háttérszín
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[0]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[1]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[2]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[3]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[4]);

colors.push('purple');  //loop-ba ez is benne lesz már utolsó szín-ként

//loop-al ugyanaz
colors.forEach((color) => {
    $('#box-container').append('<div class="box"></div>');
    $('.box:last-child').css('background', color);
});


for (let i = 0; i < 10; i = i + 1) {  //vagy i++
    console.log(i);
}