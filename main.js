// THIS IS THE BUTTON EMOJI CODE

var sad = $('.sad');
var neutral = $('.neutral');
var happy = $('.happy');
var love = $('.love');
var section = $('.empty');
var strawberry = $('.strawberry')

sad.on("click",sadEmotion);
neutral.on("click",neutralEmotion);
happy.on("click",happyEmotion);
love.on("click",loveEmotion);



function sadEmotion (){
  event.preventDefault();
  section.text(`PUTMESSAGE`);
  var sad = $('.strawberry').val();
  localStorage.clear();
  localStorage.setItem('sad', sad)

  console.log(localStorage);
}

function neutralEmotion(){
  event.preventDefault();
  section.text(`PUTMESSAGE`);
  var neutral = $('.strawberry').val();
  localStorage.clear();
  localStorage.setItem('neutral', neutral)

  console.log(localStorage)
}

function happyEmotion(){
  event.preventDefault();
  section.text(`PUTMESSAGE`);
  var happy = $('.strawberry').val();
  localStorage.clear();
  localStorage.setItem('happy', happy)

  console.log(localStorage);

}

function loveEmotion(){
  event.preventDefault();
  section.text(`PUTMESSAGE`);
  var love = $('.strawberry').val();
  localStorage.clear();
  localStorage.setItem('love', love)

  console.log(localStorage);

}

// same thing but for the other drop down

var sad2 = $('.sad2');
var neutral2 = $('.neutral2');
var happy2 = $('.happy2');
var love2 = $('.love2');
var section2 = $('.empty2');

sad2.on("click", sadEmotion2);
neutral2.on("click", neutralEmotion2);
happy2.on("click", happyEmotion2);
love2.on("click", loveEmotion2);

function sadEmotion2 (){
  event.preventDefault();
  section2.text(`PUTMESSAGE`);
  var sad2 = $('.PB and J').val();
  localStorage.clear();
  localStorage.setItem('sad2', sad2)

  console.log(localStorage);
}

function neutralEmotion2 (){
  event.preventDefault();
  section2.text(`PUTMESSAGE`);
  var neutral2 = $('.PB and J').val();
  localStorage.clear();
  localStorage.setItem('netural2', netural2)

  console.log(localStorage);
}

function happyEmotion2 (){
  event.preventDefault();
  section2.text(`PUTMESSAGE`);
  var happy2 = $('.PB and J').val();
  localStorage.clear();
  localStorage.setItem('happy2', happy2)

  console.log(localStorage);

}

function loveEmotion2 (){
  event.preventDefault();
  section2.text(`PUTMESSAGE`);
  var love = $('.PB and J').val();
  localStorage.clear();
  localStorage.setItem('love2', love2)

  console.log(localStorage);
}
