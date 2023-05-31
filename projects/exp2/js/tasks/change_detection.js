// Change Detection Task 

//////// PRELOAD 
// a bunch of change detection images 

var change_detection_audio = []
var change_detection_images = ["media/images/change_detection/1a.jpg",
                               "media/images/change_detection/1b.jpg",
                               "media/images/change_detection/2a.jpg",
                               "media/images/change_detection/2b.jpg",
                               "media/images/change_detection/3a.jpg",
                               "media/images/change_detection/3b.jpg",
                               "media/images/change_detection/4a.jpg",
                               "media/images/change_detection/4b.jpg",
                               "media/images/change_detection/5a.jpg",
                               "media/images/change_detection/5b.jpg",
                               "media/images/change_detection/6a.jpg",
                               "media/images/change_detection/6b.jpg",
                               "media/images/change_detection/7a.jpg",
                               "media/images/change_detection/7b.jpg",
                               "media/images/change_detection/8a.jpg",
                               "media/images/change_detection/8b.jpg",
                               "media/images/change_detection/9a.jpg",
                               "media/images/change_detection/9b.jpg",
                               "media/images/change_detection/10a.jpg",
                               "media/images/change_detection/10b.jpg",
                               "media/images/change_detection/11a.jpg",
                               "media/images/change_detection/11b.jpg",
                               "media/images/change_detection/12a.jpg",
                               "media/images/change_detection/12b.jpg",
                               "media/images/change_detection/13a.jpg",
                               "media/images/change_detection/13b.jpg",
                               "media/images/change_detection/14a.jpg",
                               "media/images/change_detection/14b.jpg",
                               "media/images/change_detection/15a.jpg",
                               "media/images/change_detection/15b.jpg",
                               "media/images/change_detection/16a.jpg",
                               "media/images/change_detection/16b.jpg",
                               "media/images/change_detection/17a.jpg",
                               "media/images/change_detection/17b.jpg",
                               "media/images/change_detection/18a.jpg",
                               "media/images/change_detection/18b.jpg",
                               "media/images/change_detection/19a.jpg",
                               "media/images/change_detection/19b.jpg",
                               "media/images/change_detection/20a.jpg",
                               "media/images/change_detection/20b.jpg",
                                "media/images/change_detection/21a.jpg",
                               "media/images/change_detection/21b.jpg",
                               "media/images/change_detection/22a.jpg",
                               "media/images/change_detection/22b.jpg",
                               "media/images/change_detection/23a.jpg",
                               "media/images/change_detection/23b.jpg",
                               "media/images/change_detection/24a.jpg",
                               "media/images/change_detection/24b.jpg",
                               "media/images/change_detection/25a.jpg",
                               "media/images/change_detection/25b.jpg",
                               "media/images/change_detection/26a.jpg",
                               "media/images/change_detection/26b.jpg",
                               "media/images/change_detection/27a.jpg",
                               "media/images/change_detection/27b.jpg",
                               "media/images/change_detection/28a.jpg",
                               "media/images/change_detection/28b.jpg",
                               "media/images/change_detection/29a.jpg",
                               "media/images/change_detection/29b.jpg",
                               "media/images/change_detection/30a.jpg",
                               "media/images/change_detection/30b.jpg"
                              ]
var change_detection_video = []


audio = audio.concat(change_detection_audio)
images = images.concat(change_detection_images)
video = video.concat(change_detection_video)


// TASK VARIABLES 
var stimulus_pair = 30 
var stimulus_presentation_length = 560
var stimulus_interval_length = 80
var max_time = 60 * 1000 


var resp_prompt = change_detection_prompt
var manipulation_prompt = change_detection_manipulation_prompt

var stimulus_index = Array.from({ length: stimulus_pair }, (v, i) => i+1)
var task_stimulus_a = stimulus_index.map(i =>'<img src="media/images/change_detection/' + i + 'a.jpg" style="width:800px;height:600px;">')
var task_stimulus_b = stimulus_index.map(i =>'<img src="media/images/change_detection/' + i + 'b.jpg" style="width:800px;height:600px;">')
    


// Set up the experiment 

 var change_detection_instruction = {
    type: 'instructions',
    pages: [
        change_detection_instruction,
    ],
    show_clickable_nav: true,
    button_label_next: questions_pre_button,
    allow_backward: false
} 
 

var all_change_detection_trials = []
    
for (i = 0; i < stimulus_pair; i++){        
        // shuffle within pair 
        var stimuli = [task_stimulus_a[i], task_stimulus_b[i]]
        var stimuli = shuffle(stimuli)
        
        var describe_difference_trial = {
                type: 'survey-text',
                data: {
                variable_type: "change_detection_report" 
            },
                questions: [
                    {prompt: resp_prompt, name: 'Description' + i,  required: true}, 
                ],
                button_label: questions_pre_button,
               
            };
        
      
        
        var change_detection_trial = {
            type: "change-detection", 
            prompt: change_detection_page_instruction, 
            stimulus: "",
            first_stimulus: stimuli[0],
            second_stimulus: stimuli[1],
            stimulus_presentation: stimulus_presentation_length,  
            stimulus_interval: stimulus_interval_length, 
            choices: ["space"], 
            response_ends_trial: true, 
            trial_duration: max_time, 
            data: {
                trial_type: "change_detection", 
                stimuli: stimuli[0] + "_" + stimuli[1]
            }

        }

        var change_detection_trial = [change_detection_trial, describe_difference_trial]

        all_change_detection_trials.push(change_detection_trial)
        
        
    }
    
all_change_detection_trials = shuffle(all_change_detection_trials)
all_change_detection_trials = all_change_detection_trials.flat()

// Set up the manipulation check  

var change_detection_manipulation_instruction = {
    type: 'instructions',
    pages: [
        change_detection_manipulation_instruction,
    ],
    show_clickable_nav: true,
    button_label_next: questions_pre_button,
    allow_backward: false
} 

var manipulation_check_stimuli = stimulus_index.map(i =>
                                             ({prompt: '<img src="media/images/change_detection/' + i + 'a.jpg" style="width:400px;height:300px;">' +  '<img src="media/images/change_detection/' + i + 'b.jpg" style="width:400px;height:300px;">', name: "pair" + i})
                                             ) 
    
        
manipulation_check_stimuli = shuffle(manipulation_check_stimuli)
    
var manipulation_trials = []
        
for (i = 0; i < stimulus_pair; i++){

        manipulation_check_stimulus = manipulation_check_stimuli[i].prompt
         var manipulation_trial = {
                type: 'survey-text',
                data: {
                variable_type: "change_detection_manipulation_check", 
                prompt:  manipulation_check_stimulus
            },
                questions: [
                    {prompt: manipulation_check_stimulus + manipulation_prompt,
                        required: true 
                    }, 
                ],
                required: true 
            };
        
        manipulation_trials.push(manipulation_trial)
    }

var change_detection_task = []
change_detection_task = change_detection_task.concat(change_detection_instruction)
change_detection_task = change_detection_task.concat(all_change_detection_trials)
change_detection_task = change_detection_task.concat(change_detection_manipulation_instruction)
change_detection_task = change_detection_task.concat(manipulation_trials)
