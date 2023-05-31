var sorting_stimuli = [];
for (var i = 1; i <= 30; i++) {
    sorting_stimuli.push("images/sort/" + i + ".png");
}


var raw_dimension = [[219, 117], [282, 183], [553,264], [274, 209],[56,66],
                [78,65],[163,136],[78,100],[141,138],[227,120],
                 [70,83],[126,76],[337,458],[332,334],[164,160],
                 [228,187],[424,528],[418,376],[120,402],[94,322],
                 [84,265],[89,287],[76,258],[92,277],[67,198],
                 [64,191],[481,631],[146,185],[165,209],[445,497]];


horizon0 = ['<img src="images/sort/instruction/Ehorizon_instruction_1.jpeg" style="width:800px;height:600px;">']
horizonOKbutton = 'OK!'
horizon1 = "<p>Let's practice! Use these stickers to make a picture! You can put as many stickers as you want.</p><p>When you are done, click on the button below.</p>"
horizondonebutton = "Done!"
horizonpractice_feedback_yes = 'Great! Let\'s try another one!'
horizonpractice_feedback_no = '<p>Oops! You need to use at least one sticker to make a picture!</p><p>Let\'s try again!</p>'
horizonslides = [
                '<img src="images/sort/instruction/Ehorizon_instruction_2.jpeg" style="width:800px;height:600px;">',
                '<img src="images/sort/instruction/Ehorizon_instruction_3.jpeg" style="width:800px;height:600px;">',
                '<img src="images/sort/instruction/Ehorizon_instruction_4.jpeg" style="width:800px;height:600px;">',
                '<img src="images/sort/instruction/Ehorizon_instruction_6.jpeg" style="width:800px;height:600px;">',
                '<img src="images/sort/instruction/Ehorizon_instruction_7.jpeg" style="width:800px;height:600px;">',
                '<img src="images/sort/instruction/Ehorizon_instruction_8.jpeg" style="width:800px;height:600px;">',
                 '<img src="images/sort/instruction/Ehorizon_instruction_9.jpeg" style="width:800px;height:600px;">'
                ]
horizon2 = "<p><b>Remember to put a horizon line in your picture!</b></p><p>Your picture should have at least one tree, one house, and one person, but you can put more than that too.</p>"
  

    var horizon_stickers_prepractice = {
        type: 'task-instructions',
        pages: horizon0,
        allow_backward: false, 
        show_clickable_nav: true,
        button_label_next: horizonOKbutton,
        show_page_number: true
    }
    
     
    var horizon_stickers_practice = {
            type: 'horizon-sticker-practice',
            stimuli: 
                ["images/sort/practice_1.png",             
                "images/sort/practice_2.png", 
                "images/sort/practice_3.png"
                ],
			dimensions:[[50,50],[50,50],[50,50]],//dimensions_array,
            prompt: horizon1,
            button_label: horizondonebutton,
            feedback_yes: horizonpractice_feedback_yes,
            feedback_no:horizonpractice_feedback_no
        }; 
    
    var horizon_stickers_instructions = {
        type: 'instructions',
        pages: horizonslides,
        show_clickable_nav: true,
        show_page_number: true        
    }
    

    
    var while_loop_horizon_practice = {
        timeline: [horizon_stickers_practice], 
        loop_function: function(){
            var data = jsPsych.data.get().last(1).values()[0];
            if(data.passed == false){
                
                return true;
            } else {
                return false;
        }}
    }
        

    var horizon_stickers_trial = {
            type: 'horizon-sticker',
            stimuli: sorting_stimuli,
			dimensions:raw_dimension,//dimensions_array,
            prompt: horizon2,
            button_label: horizondonebutton
        }; 
  
    