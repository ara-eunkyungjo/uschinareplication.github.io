
att_ready = '<p>Now, you are going to watch some videos. After the videos, I will ask you a few questions.</p><p>Are you ready?</p>'
att_ready_button = 'Yes!'
attvid = ['images/attribution/AttributionEngPilot.mp4']
attvid_adult = ['images/attribution/E_attribution_adult.webm']
attprompt = '<p>Please watch the video.</p>'
attq1 = "<p><img src='images/attribution/E1.jpg' width=600></p><p>Please explain in full sentences.</p>"
attq2 = "<img src='images/attribution/E2.jpg' width=600><p>Please explain in full sentences.</p>"
attribution_q1_button = "Done!"
attribution_q2_button = "Done!"

var attribution_prevideo = {
    type: 'task-instructions',
    pages: [att_ready],
    width: 800,
    height:600,
    allow_backward: false, 
    show_clickable_nav: true,
    button_label_next: att_ready_button,
    show_page_number: true
}

var attribution_video_kid = {
    type: 'video-button-response',
    sources: attvid,
    border: false, 
    width: 800,
    height:600,
    trial_ends_after_video: true,
    choices: [], // 'Continue' button
    prompt: attprompt
};
    
 var attribution_video_adult = {
    type: 'video-button-response',
    border: false, 
    sources: attvid_adult,
    width: 800,
    height:600,
    trial_ends_after_video: true,
    choices: [], // 'Continue' button
    prompt: attprompt
};
    


var attribution_q1 = {
    type: 'attribution-Q1',
    questions: [
        {prompt: attq1, rows: 2, columns: 50}
    ],        
    button_label: attribution_q1_button

};

var attribution_q2 = {
    type: 'attribution-Q1',
    questions: [
        {prompt: attq2, rows: 2, columns: 50}
    ],
    button_label: attribution_q2_button

};