

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}
  

rmts_instruction_0 = [
  '<img src="images/RMTS_instructions/E_RMTS_preinstructions01.jpeg" style="width:800px;height:600px;">',
  '<img src="images/RMTS_instructions/E_RMTS_preinstructions02.jpeg" style="width:800px;height:600px;">',
  '<img src="images/RMTS_instructions/E_RMTS_preinstructions03.jpeg" style="width:800px;height:600px;">',
  '<img src="images/RMTS_instructions/E_RMTS_preinstructions04.jpeg" style="width:800px;height:600px;">',
      
]

rmts_instruction_1 = [
  '<img src="images/RMTS_instructions/E_RMTS_postinstructions01.jpeg" style="width:800px;height:600px;">',
  '<img src="images/RMTS_instructions/E_RMTS_postinstructions02.jpeg" style="width:800px;height:600px;">',
  '<img src="images/RMTS_instructions/E_RMTS_postinstructions03.jpeg" style="width:800px;height:600px;">'        
]
        
rmts_test_trial = "Which ones will make my toy play music?"
rmts_instruction_2 = "<p><strong>Great! You're done with this game! Let's play another!</strong></p>"
rmts_instruction_2button = "OK"


var set1 = ["img/a.png", "img/b.png", "img/c.png", "img/d.png", "img/e.png", "img/f.png", "img/g.png", "img/h.png", "img/i.png", "img/j.png", "img/k.png", "img/l.png", "img/m.png", "img/n.png", "img/o.png"];

var set2 = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png", "img/9.png", "img/10.png", "img/11.png", "img/12.png", "img/13.png", "img/14.png", "img/15.png"];

var scene1 = {
  'table': 'img/table.png', 
  'box': 'img/box.png', 
  'box2': 'img/box2.png', 
  'background': 'img/white.png', // slightly off-white
  'song': 'sound/1_marseillaise.mp3'
};

var scene2 = {
  'table': 'img/table.png', 
  'box': 'img/box.png', 
  'box2': 'img/box2.png', 
  'background': 'img/white.png',
  'song': 'sound/1_marseillaise.mp3'
};


var friends1 = ['img/friend1.png', 'img/friend2.png', 'img/friend3.png', 'img/friend4.png'];

var friends2 = ['img/friend4.png', 'img/friend5.png', 'img/friend6.png'];
  

var RMTSinstructions = {
    type: 'instructions',
    pages: rmts_instruction_0,
    show_clickable_nav: true,
    show_page_number: true,
    post_trial_gap: 2000
}

var block1 = set1;
block1 = shuffle(block1);

// get the training and testing objects per block
bl1_train_stim = block1.slice(0,6);
bl1_test_stim = block1.slice(6,15);

var sameFirst = 0; // set block to be different block


// build JSON (dictionary) of training trials for bl1
if(sameFirst) { //irrelevant
  var bl1_train_trials = [
  {
    stimuli: [bl1_train_stim[0], bl1_train_stim[0]],
    activate: true
  },
  {
    stimuli: [bl1_train_stim[1], bl1_train_stim[2]],
    activate: false
  },
  {
    stimuli: [bl1_train_stim[3], bl1_train_stim[3]],
    activate: true
  },
  {
    stimuli: [bl1_train_stim[4], bl1_train_stim[5]],
    activate: false
  } ];
} else { // different first
  var bl1_train_trials = [
  {
    stimuli: [bl1_train_stim[0], bl1_train_stim[1]],
    activate: true
  },
  {
    stimuli: [bl1_train_stim[2], bl1_train_stim[2]],
    activate: false
  },
  {
    stimuli: [bl1_train_stim[3], bl1_train_stim[0]], //repeat bl1_train_stim[0]
    activate: true
  },
  {
    stimuli: [bl1_train_stim[5], bl1_train_stim[5]],
    activate: false
  } ];
}

// loop over the above JSONs to specify the backdrops for block 1 and 2 as scene1 and scene2, respectively, and the trial type as training throughout
for (var i = bl1_train_trials.length - 1; i >= 0; i--) {
  bl1_train_trials[i].scene = scene1;
  bl1_train_trials[i].type = "RMTStrain";
  if (kid) bl1_train_trials[i].numTriesPerPair = 2;
};


// NOW on to test trials
// counterbalance correct answers across sides with 1 block 2L/1R and the other 1L/2R

// make the L/R counterbalance order list and shuffle
var order1 = ['L','L','R','R'] 

order1 = shuffle(order1);
order2 = shuffle(order1);

//flip to decide which L/R counterbalance goes with which block, and assign these
if( Math.random() >= 0.5 ) {
  var bl1_response_side = order1;
  var bl2_response_side = order2;
} else {
  var bl1_response_side = order2;
  var bl2_response_side = order1;
}

// build JSON (dictionary) of TEST trials for bl1, and arbirarily assign samePairs to side specified in order vector
var bl1_test_trials = [
{
  samePair: [bl1_train_stim[0], bl1_train_stim[0]], //bl1_train_stim[0] is repeated block
  diffPair: [bl1_test_stim[0], bl1_test_stim[1]], //test stim used: 0, 1
  sameSide: [bl1_response_side[0]],
  friend: friends1[0]
},
{
  samePair: [bl1_train_stim[0], bl1_train_stim[0]], 
  diffPair: [bl1_test_stim[2], bl1_test_stim[3]], //test stim used: 2, 3
  sameSide: [bl1_response_side[1]],
  friend: friends1[1]
},
{
  samePair: [bl1_train_stim[0], bl1_train_stim[0]], 
  diffPair: [bl1_test_stim[4], bl1_test_stim[5]], //test stim used: 4, 5
  sameSide: [bl1_response_side[2]],
  friend: friends1[2]
},
{
  samePair: [bl1_train_stim[0], bl1_train_stim[0]], 
  diffPair: [bl1_test_stim[6], bl1_test_stim[7]], //test stim used: 6, 7
  sameSide: [bl1_response_side[3]],
  friend: friends1[3]
} ];

for (var i = bl1_test_trials.length - 1; i >= 0; i--) {
  bl1_test_trials[i].scene = scene1;
  bl1_test_trials[i].type = "RMTStest";
  bl1_test_trials[i].prompt = rmts_test_trial;
};


var RMTStest_instructions = {
    type: 'instructions',
    pages: rmts_instruction_1,
    show_clickable_nav: true,
    show_page_number: true,
    post_trial_gap: 2000
}

var RMTSoutro = {
  type: "html-button-response",
  stimulus: "<p><strong>Great! You're done with this game! Let's play another!</strong></p>",
  choices: [rmts_instruction_2button],
};