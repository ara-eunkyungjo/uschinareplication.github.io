pen1 = ["<p>You are almost done!</p><p> This time, you get to pick your sticker! You can pick only one sticker. </p><p>Which one do you want to pick?</p>"]
penchoicelabel = ["This one"]


var pen_options = ['images/pen_choice/green_0.png',
'images/pen_choice/green_1.png',
'images/pen_choice/green_2.png',
'images/pen_choice/green_3.png',
'images/pen_choice/green_4.png',
'images/pen_choice/yellow_0.png',
'images/pen_choice/yellow_1.png',
'images/pen_choice/yellow_2.png',
'images/pen_choice/yellow_3.png',
'images/pen_choice/yellow_4.png']    

var pen_pic = ['images/pen_choice/green_0.png',
'images/pen_choice/green_1.png',
'images/pen_choice/green_2.png',
'images/pen_choice/green_3.png',
'images/pen_choice/green_4.png',
'images/pen_choice/yellow_0.png',
'images/pen_choice/yellow_1.png',
'images/pen_choice/yellow_2.png',
'images/pen_choice/yellow_3.png',
'images/pen_choice/yellow_4.png'][Math.floor(Math.random() * pen_options.length)]

var pen_pic = pen_options[Math.floor(Math.random() * pen_options.length)];



var pen_trial = {
type: 'pen-choice',
stimulus: pen_pic,
choices:[penchoicelabel,penchoicelabel,penchoicelabel,penchoicelabel,penchoicelabel],
prompt: pen1
};
