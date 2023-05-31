raven_button = "Continue"
raven_instruction_1 = '<img src="images/raven/E_raven_instructions_1.png" style="width:800px;height:600px;">'
raven_instruction_2 = '<img src="images/raven/E_raven_instructions_2.png" style="width:800px;height:600px;">'
raven_instruction_3 = '<img src="images/raven/E_raven_instructions_3.png" style="width:800px;height:600px;">'
raven_instruction_4 = '<img src="images/raven/E_raven_instructions_4.png" style="width:800px;height:600px;">'
raven_instruction_5 = '<img src="images/raven/E_raven_instructions_5.png" style="width:800px;height:600px;">'
raven_instruction_6 = '<img src="images/raven/E_raven_instructions_6.png" style="width:800px;height:600px;">'
raven_instruction_7 = '<img src="images/raven/E_raven_instructions_7.png" style="width:800px;height:600px;">'
raven_instruction_8 = '<img src="images/raven/E_raven_instructions_8.png" style="width:800px;height:600px;">'
raven_instruction_9 = '<img src="images/raven/E_raven_instructions_9.png" style="width:800px;height:600px;">'
raven_instruction_10 = '<img src="images/raven/E_raven_instructions_10.png" style="width:800px;height:600px;">'
raven_instruction_11 = '<img src="images/raven/E_raven_instructions_11.png" style="width:800px;height:600px;">'
raven_instruction_12 = '<img src="images/raven/E_raven_instructions_12.png" style="width:800px;height:600px;">'


var raven_instructions = {
    type: 'instructions', 
    pages: [
        raven_instruction_1,
        raven_instruction_2,
        raven_instruction_3,
        raven_instruction_4,
        raven_instruction_5,
        raven_instruction_6,
        raven_instruction_7,
        raven_instruction_8,
        raven_instruction_9,
        raven_instruction_10,
        raven_instruction_11,
        raven_instruction_12],
    show_clickable_nav: true,
    show_page_number: true  
    
}

//practice trial
var practice_options = ["<img src='images/raven/p1.png'></img>", "<img src='images/raven/p2.png'></img>", "<img src='images/raven/p3.png'></img>",
                        "<img src='images/raven/p4.png'></img>", "<img src='images/raven/p5.png'></img>", "<img src='images/raven/p6.png'></img>"];

var raven_practice = {
    type: 'survey-multi-choice', 
    button_label: raven_button,
    questions: [{prompt: "<img src='images/raven/practice.png'></img>", 
                 name: 'practice raven', options: practice_options, required: false, horizontal: true}],timeout: 90000};

//main trails
var str1 = "<img src='images/raven/"
var str2 = ".png'></img>"
var rav_nums = [1,2,3,4,5,6,7,8];
var rav_lets = ['a','b','c','d','e','f','g','h','i','j','k','l']
raven = [raven_instructions, raven_practice];
rav_opts = {};
for (var i = 0; i < rav_lets.length; i++) {
  rav_opts[rav_lets[i]] = [];
  for (var j = 0; j < rav_nums.length; j++) {
    rav_opts[rav_lets[i]].push(str1 + rav_lets[i] + rav_nums[j] + str2);
  };

  raven.push(
      {
        type: 'survey-multi-choice',
        button_label: raven_button,
        data: {
        variable_type: "raven"
        },
        questions: [
          {prompt: "<img src='images/raven/"+rav_lets[i]+".png'></img>", name: rav_lets[i], options: rav_opts[rav_lets[i]], required: false, horizontal: true} 
        ],
        timeout: 90000
      })
};