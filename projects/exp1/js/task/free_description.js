free_description_prepractice_instruction_adult = "<p>Now, we are going to play a picture game.</p> <p> In this game, you are going to see many different pictures. </p><p>You have 5 seconds to study each picture.</p> <p>Take a look at the picture, Ready?</p>"
free_description_prepractice_instruction_kid = "<p>Now, we are going to play a picture game.</p> <p> In this game, you are going to see many different pictures. Let's see the first picture together. </p><p>You have 15 seconds to study this picture.</p> <p>Take a look at the picture, Ready?</p>"

free_description_prepractice_OKButton = "OK!"
free_description_prompts = "<p>Imagine you are talking to someone who did not see this picture. How would you tell them what you saw? </p><p>Use 2-3 full sentences</p>"
free_description_ready_instruction = "<p>Great! You are ready to play the game for real. </p> <p> Now, I am going to show you some more pictures.</p><p>Ready?</p>"
free_description_ready_YesButton = "Yes!"
free_description_continueButton = "Done!"
free_description_finishedInstruction = "<p>Great, we are done with this game!</p>"
free_description_finishedButton = "Next Game"
free_description_alert = "Please say a little more!"



var free_description_instruction_adult = {
    type: 'task-instructions',
    pages: [free_description_prepractice_instruction_adult],
    allow_backward: false, 
    show_clickable_nav: true,
    button_label_next: free_description_prepractice_OKButton,
    show_page_number: true
   
}

var free_description_instruction_kid = {
    type: 'task-instructions',
    pages: [free_description_prepractice_instruction_kid],
    allow_backward: false, 
    show_clickable_nav: true,
    button_label_next: free_description_prepractice_OKButton,
    show_page_number: true
   
}


var free_description_practice_adult = {
   
   timeline: [
    {
        type: 'image-keyboard-response', 
        stimulus: "images/free_description/practice.jpg",
        choices: jsPsych.NO_KEYS, 
        trial_duration: 5000}, 
    {
        type: 'survey-text',
        questions: [
        {prompt: free_description_prompts, 
        rows: 5, 
        columns: 40,
        required: true}],
    }
       
       ]
   
}

var free_description_practice_kid = {
   
   timeline: [
    {
        type: 'free-description-response-practice', 
        stimulus: "images/free_description/practice.jpg",
        choices: jsPsych.NO_KEYS, 
        trial_duration: 15000}, 
    {
        type: 'survey-text',
        questions: [
        {prompt: free_description_prompts, 
        rows: 5, 
        columns: 40,
        required: true}],
    }
       
       ]
   
}


var free_description_ready = {
   type: 'task-instructions',
    pages: [free_description_ready_instruction],
    allow_backward: false, 
    show_clickable_nav: true,
    button_label_next: free_description_ready_YesButton,
    show_page_number: true
   
}



var free_description_single_trial = {
   type: 'free-description-response',
   button_label: free_description_continueButton,
   questions: [
 {prompt:free_description_prompts, 
        rows: 5, 
        columns: 40,
        required: true}
       ]}



var free_description_single_trial_while_loop = {
    timeline: [free_description_single_trial], 
    loop_function: function(){
        var data = jsPsych.data.get().last(1).values()[0];
        var response = JSON.parse(data.responses)["Q0"]
        if(response.length < 10){
            alert(free_description_alert)
            return true;
        } else {
            return false;
    }}
   
}


var free_description_procedure_adult = {
timeline: [
    {
        type: 'image-keyboard-response',
        stimulus: jsPsych.timelineVariable('pic'),
        choices: jsPsych.NO_KEYS,
        trial_duration: 5000
    },
    free_description_single_trial_while_loop
    
],
   

   
timeline_variables: [
    { pic: 'images/free_description/01-boat-river.jpg'},
    { pic: 'images/free_description/02-bike.jpg'},
    { pic: 'images/free_description/03-plane.jpg'},
    { pic: 'images/free_description/04-squirrel.jpg'},
    { pic: 'images/free_description/05-tiger.jpg'},
    { pic: 'images/free_description/06-train-red.jpg'},
    { pic: 'images/free_description/07-train-green.jpg'},

],
       randomize_order: true

}


    





var free_description_procedure_kid = {
timeline: [
    {
        type: 'image-keyboard-response',
        stimulus: jsPsych.timelineVariable('pic'),
        choices: jsPsych.NO_KEYS,
        trial_duration: 15000
    },
    {
        type: 'free-description-response',
        button_label: free_description_continueButton,
        questions: [
        {prompt:free_description_prompts, 
        rows: 5, 
        columns: 40,
        required: true}]
    },
    
],
   
timeline_variables: [
    { pic: 'images/free_description/01-boat-river.jpg'},
    { pic: 'images/free_description/02-bike.jpg'},
    { pic: 'images/free_description/03-plane.jpg'},
    { pic: 'images/free_description/04-squirrel.jpg'},
    { pic: 'images/free_description/05-tiger.jpg'},
    { pic: 'images/free_description/06-train-red.jpg'},
    { pic: 'images/free_description/07-train-green.jpg'},
],
       randomize_order: true

}

var free_description_finished = {
    type: 'task-instructions',
    pages: [free_description_finishedInstruction],
    allow_backward: false, 
    show_clickable_nav: true,
    button_label_next: free_description_finishedButton,
    show_page_number: true
} 
