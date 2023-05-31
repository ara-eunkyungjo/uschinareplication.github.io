//Tell people to use the right broswer
browserDetection_pre = "Hi there, it looks like you are using "
browserDetection_post = " browser. This page only works in Chrome or Firefox--please open this page using Chrome or Firefox. If you found this page through Amazon Mechanical Turk and you do not have access to Chrome or Firefox, please return this HIT."

// Stanford Consent
first_page_instruction = ["<div class='w3-container' style='width: 600px; bottom-padding: 20px; text-align: left;'>" + 
                "<div style='width: 600px; margin: 0 auto; text-align: center; background-color: #8C1516; padding: 20px 15px 10px 10px'>" +
                "<img src='images/stanford.png' height='46' width='360' alt='Stanford University'></div>"+
                "<center><p><strong>Stanford Language and Cognition Lab</strong></p></center>"+
                "<p>In this experiment, you'll play a few short games. The materials were " +
                "designed for children, but we ask you to pay close attention and try to be as "+
                "accurate as possible. " + "<u style=\"color:red;\">You will hear sound, so please make sure your speakers"+
                " are turned on and your volume is up.</u> " +
                "<p class='block-text' id='legal'>Legal information: By answering the following questions, you are participating in a study being performed by cognitive scientists in the Stanford Department of Psychology. If you have questions about this research, please contact Alex Carstensen at <a href='mailto://abcarstensen@stanford.edu'>abcarstensen@stanford.edu</a>. You must be at least 18 years old to participate. Your participation in this research is voluntary. You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences. Your anonymity is assured; the researchers who have requested your participation will not receive any personal information about you.</p></div><p />" //,
        ]



// audio check
audio_check_file = 'sound/six_E.mp3'
audio0 = ["Let's test your sound: Turn on your speaker and type in the number you hear. Just press the key for the single number, e.g., 2."]
audio1 = ["Incorrect response: Your sound is not working, but is needed to continue. Please refresh the page if you would like to try again. Thank you!"]


// TASKS:

//horizon and circle transition instruction
circle_sticker_readyButton = "Yes!"
circle_sticker_package_instruction_circle_first = "<p>Now, you are going to play two short games.</p><p>In the first game, you will draw some circles.</p><p>In the second game, you will make a picture with stickers.</p><p>Are you ready?</p>"
circle_sticker_package_instruction_sticker_first = "<p>Now, you are going to play two short games.</p><p>In the first game, you will make a picture with stickers.</p><p>In the second game, you will draw some circles.</p><p>Are you ready?</p>"

// horizon
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

// Attribution Task
att_ready = '<p>Now, you are going to watch some videos. After the videos, I will ask you a few questions.</p><p>Are you ready?</p>'
att_ready_button = 'Yes!'
attvid = ['images/attribution/AttributionEngPilot.mp4']
attvid_adult = ['images/attribution/E_attribution_adult.webm']
attprompt = '<p>Please watch the video.</p>'
attq1 = "<p><img src='images/attribution/E1.jpg' width=600></p><p>Please explain in full sentences.</p>"
attq2 = "<img src='images/attribution/E2.jpg' width=600><p>Please explain in full sentences.</p>"
attribution_q1_button = "Done!"
attribution_q2_button = "Done!"

//Raven's SPM
//instruction
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

// Sticker choice task
pen1 = ["<p>You are almost done!</p><p> This time, you get to pick your sticker! You can pick only one sticker. </p><p>Which one do you want to pick?</p>"]
penchoicelabel = ["This one"]

// Circle Drawing task
circle_instruction_1 = '<img src="images/circle_drawing/E_circle_drawing_1.png" style="width:800px;height:600px;">'
circle_instruction_2 = '<img src="images/circle_drawing/E_circle_drawing_2.png" style="width:800px;height:600px;">'
circle_instruction_3 = '<img src="images/circle_drawing/E_circle_drawing_3.png" style="width:800px;height:600px;">'
circle_instruction_4 = '<img src="images/circle_drawing/E_circle_drawing_4.png" style="width:800px;height:600px;">'
circle_instruction_5 = '<img src="images/circle_drawing/E_circle_drawing_5.png" style="width:800px;height:600px;">'
circle_instruction_6 = '<img src="images/circle_drawing/E_circle_drawing_6.png" style="width:800px;height:600px;">'
circle_instruction_7 = '<img src="images/circle_drawing/E_circle_drawing_7.png" style="width:800px;height:600px;">'
circle_instruction_8 = '<img src="images/circle_drawing/E_circle_drawing_8.png" style="width:800px;height:600px;">'
circle_recap = "<p>Draw yourself and your family members as circles.</p><p> Remember to draw the family members that you lived with as a child.</p> <p><b> You should start by drawing yourself and label the circle as \"Me\". </b></p><p style='color:blue;font-size: 20px;'><b>To draw</b>: click and drag.</p><p style='color:blue;font-size: 20px;'><b>To add label</b>: click on the circle, then double click on the textbox. <u>Hit \"Enter\" when done.</u> </p><p style='color:blue;font-size: 20px;'><b>To delete a circle or a label</b>: right click to see the delete button.</p>"
circle_textbox_default = "Add Label Here"
circle_delete_button = "Delete"
circle_unlabeled_alert = "You have unlabeled circle. Please label each circle as the person it represents."
circle_empty_alert = "You haven't drawn any circle. Please draw yourself and your family members as circles."
circle_small_alert = "The circle you have just drawn is too small. Please redraw a larger circle so you can label it properly."
circle_game_button= "Done!"

//Ebbinghaus 
//phase 1 prepractice instruction
ebbinghaus_phase_1_prepractice_instruction_1 = '<img src="images/ebb_illu/instruction/Ephase_1_prepractice_1.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_prepractice_instruction_2 ='<img src="images/ebb_illu/instruction/Ephase_1_prepractice_2.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_prepractice_instruction_2b ='<img src="images/ebb_illu/instruction/Ephase_1_prepractice_2b.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_prepractice_instruction_3 ='<img src="images/ebb_illu/instruction/Ephase_1_prepractice_3.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_prepractice_instruction_4 ='<img src="images/ebb_illu/instruction/Ephase_1_prepractice_4.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_prepractice_instruction_5 ='<img src="images/ebb_illu/instruction/Ephase_1_prepractice_5.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_prepractice_instruction_6 ='<img src="images/ebb_illu/instruction/Ephase_1_prepractice_6.jpeg" style="width:800px;height:600px;">'

ebbinghaus_phase_1_prepractice_ready = "<p>Let's practice the game.</p> <p> Ready?</p>"
ebbinghaus_phase_1_prepractice_readyButton = 'Yes!'
// phase 1 practice: 
ebbinghaus_phase_1_practice_prompt = "<p>Which circle is a larger circle?</p>"

// feedback
ebbinghaus_practice_feedback_yes = "Great!"
ebbinghaus_practice_feedback_no = "<p>Oops, remember to press the button under the larger circle!</p><p> Let's try that again!</p>"

//phase 1 post-practice instruction
ebbinghaus_phase_1_postpractice_instruction_1 = '<img src="images/ebb_illu/instruction/Ephase_1_postpractice_1.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_postpractice_instruction_1b = '<img src="images/ebb_illu/instruction/Ephase_1_postpractice_1b.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_postpractice_instruction_2 ='<img src="images/ebb_illu/instruction/Ephase_1_postpractice_2.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_postpractice_instruction_3 ='<img src="images/ebb_illu/instruction/Ephase_1_postpractice_3.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_postpractice_instruction_4 ='<img src="images/ebb_illu/instruction/Ephase_1_postpractice_4.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_postpractice_instruction_5 ='<img src="images/ebb_illu/instruction/Ephase_1_postpractice_5.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_postpractice_ready = "<p>You will get 10 questions like this, with a short pause between questions. </p><p>During the pause, an image like the one below will flash on the screen, but all you need to do is wait for the next question.</p><img src=\"images/ebb_illu/mask/mask1.png\" style=\"width:400px;height:200px;\"><p>Some may be difficult, but then you can make a guess. Ready?</p>"
ebbinghaus_phase_1_postpractice_readyButton = 'Yes!'
ebbinghaus_phase_1_prompt = "<p>Which circle is a larger circle?</p>"

//phase 2 prepractice instruction
ebbinghaus_phase_2_prepractice_instruction_1 = '<img src="images/ebb_illu/instruction/Ephase_2_prepractice_1.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_2 = '<img src="images/ebb_illu/instruction/Ephase_2_prepractice_2.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_3 = '<img src="images/ebb_illu/instruction/Ephase_2_prepractice_3.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_4 = '<img src="images/ebb_illu/instruction/Ephase_2_prepractice_4.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_5 = '<img src="images/ebb_illu/instruction/Ephase_2_prepractice_5.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_6 = '<img src="images/ebb_illu/instruction/Ephase_2_prepractice_6.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_7 = '<img src="images/ebb_illu/instruction/Ephase_2_prepractice_7.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_8 = '<img src="images/ebb_illu/instruction/Ephase_2_prepractice_8.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_9 = '<img src="images/ebb_illu/instruction/Ephase_2_prepractice_9.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_10 = '<img src="images/ebb_illu/instruction/Ephase_2_prepractice_10.jpeg" style="width:800px;height:600px;">'

ebbinghaus_phase_2_prepractice_ready_prompt = "<p>Let's try one.</p> <p> Ready?</p>"
ebbinghaus_phase_2_prepractice_readyButton =  'Yes!'   
ebbinghaus_phase_2_practice_prompt = "<p>Which organge circle is a larger circle?</p>"

ebbinghaus_phase_2_postpractice_instruction_1 = '<img src="images/ebb_illu/instruction/Ephase_2_postpractice_1.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_postpractice_instruction_1b = '<img src="images/ebb_illu/instruction/Ephase_2_postpractice_1b.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_postpractice_instruction_2 = '<img src="images/ebb_illu/instruction/Ephase_2_postpractice_2.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_postpractice_instruction_3 = '<img src="images/ebb_illu/instruction/Ephase_2_postpractice_3.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_postpractice_instruction_4 = '<img src="images/ebb_illu/instruction/Ephase_2_postpractice_4.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_postpractice_instruction_5 = '<img src="images/ebb_illu/instruction/Ephase_2_postpractice_5.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_postpractice_instruction_6 = '<img src="images/ebb_illu/instruction/Ephase_2_postpractice_6.jpeg" style="width:800px;height:600px;">'

ebbinghaus_phase_2_postpractice_ready_prompt = "<p>You will get 24 questions like this, with a short pause between questions.</p><p> During the pause, an image like the one below will flash on the screen, but all you need to do is wait for the next question.</p><img src=\"images/ebb_illu/mask/mask1.png\" style=\"width:400px;height:200px;\"><p>Now we are going to play the game for real, are you ready?</p>"
ebbinghaus_phase_2_postpractice_readyButton = "Yes!"
ebbinghaus_phase_2_prompt = "<p>Which orange circle is a larger circle?</p>"
ebbinghaus_finished_prompt = "<p>We are done with this game.</p><p>Thank you!</p>"
ebbinghaus_finished_nextButton = 'Next Game'


//Free description 
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


//RMTS 
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


// Post-tasks 
//funnel debriefing 
funnel_general_button = "Done!"
funnel_familiarity_prompt = '<img src="images/debriefing/E_funnel_specific.png" style="width:800px;height:600px;">'
funnel_tellmore_prompt = '<p><img src="images/debriefing/E_funnel_general.png" style="width:1000px;height:600px;"></p><p>If some of the games you played today were familiar, or if you think you know what we are studying in this research project, please describe what you think this research is about. </p>Be as specific as possible: use the number from above to refer to each game, and let us know what you think we are measuring and what predictions we are testing.'





///////////////////////// demog questions /////////////////////////

questions_pre_button = "Continue"
question_button = "Next"
label_done = "Done!"
demog_dropdown_placeholder = "Select your answer"
demog_require_answer = "Questions marked with <font color='brown'>*</font> require a response."

demog_p0_instr = ["Finally, we would like to ask a few questions about you. Your answers will remain confidential"]


// PAGE 1
demog_born_instr = "<b>Were you born in the United States?</b><font color='brown'>*</font>"
demog_born_opts = ["Yes", "No"]
demog_living_instr = "<b>Do you currently live in the United States?</b><font color='brown'>*</font>"
demog_living_opts = ["Yes", "No"]
demog_location_state_instr = "<b>If you grew up in the US, which state did you grow up in?</b><font color='brown'>*</font>"
demog_location_state_opts = ["Not applicable", "Alabama", "Alaska", "Arizona", "Arkansas", "California", 
                   "Colorado", "Connecticut","Delaware", "Florida", "Georgia",
                   "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
                   "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
                   "Massachusetts", "Michigan", "Minnesota", "Mississippi","Missouri", 
                   "Montana", "Nebraska", "Nevada", "New Hampshire","New Jersey", 
                   "New Mexico", "New York", "North Carolina", "North Dakota","Ohio", 
                   "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island","South Carolina", 
                   "South Dakota", "Tennessee", "Texas", "Utah","Vermont", 
                   "Virginia", "Washington", "West Virginia", "Wisconsin","Wyoming"]


// PAGE 2
demog_us_zipcode_instr = "<b>If you currently live in the United States, what are the first 3 digits of your zipcode?</b>"
demog_res_mobi_num = "<p><b>How many different cities/towns/villages have you lived in since age 5?</b><font color='brown'>*</font></p><p>Please think about all the cities/towns/distinct villages and counties that you have lived in. Note that if you have lived in different locations within the same city/town/village, please don't count the place twice. Enter the total here:</p>"


//PAGE 3
demog_year_abroad_instr = "<b>Have you lived outside of the United States for more than 2 years?</b>"
demog_year_abroad_opts = ["Yes", "No"]
demog_num_ovs_exp_instr = "<b>How many international experiences (2 days or longer) have you had?</b> (e.g. vacations, family visits, etc.)"
demog_num_ovs_exp_opts = ["No experiences", "One experience", "Two experiences", "Three to five experiences", "Six or more experiences"]
//Page 3 conditionals:
demog_conditional_year_abroad_question_node = '"abroadexp":"Yes"'
demog_conditional_year_abroad_regions_instr = "<b>Which region(s) have you lived in for at least 2 years? Check all that apply.</b>"
demog_conditional_year_abroad_regions_opts = ["North America","South America", "Europe", "Africa", "Asia", "Australia", "Other"]


//PAGE 4
demog_language_first_instr = "<b>Is English your first language (or one of your first languages)?</b>"
demog_language_first_opts = ["Yes", "No"]
demog_language_mono_instr = "<b>Can you speak and understand any other languages fluently?</b> "
demog_language_mono_options =["No, just English", "Yes, I am multilingual"]
demog_language_target_instr = "<b>Can you speak or understand any Chinese language or dialect at all, even if you aren't fluent?</b>"
demog_language_target_options = ["Yes", "No"]
//PAGE 4 conditional
demog_conditional_language_target_question_node = '"targetlanguage":"Yes"'
demog_conditional_language_target_fluency_preamble = "<b>Language Fluency</b>"
demog_conditional_language_target_fluency_superq = "<p>On a scale from zero to ten, please select your level of proficiency in speaking and understanding any Chinese language or dialect from the scroll-down menus:</p>"
demog_conditional_language_target_fluency_sp = "<b>Speaking</b><font color='brown'>*</font>"
demog_conditional_language_target_fluency_sp_placeholder = "select your level of proficiency in speaking"
demog_conditional_language_target_fluency_ud = "<b>Understanding Spoken Language</b><font color='brown'>*</font>"
demog_conditional_language_target_fluency_ud_placeholder = "select your level of proficiency in understanding spoken language"
demog_conditional_language_target_fluency_opts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]


//PAGE5
demog_agegender_age_instr = "<b>What is your age?</b><font color='brown'>*</font>"
demog_agegender_age_opts = ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68","69", "70", "71", "72", "73", "74", "75", "76", "77", "78","79", "80", "81", "82", "83", "84", "85", "86", "87", "88","89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"]
demog_agegender_gender_instr = "<b>What is your gender?</b><font color='brown'>*</font>"
demog_agegender_gender_opts = ["Female", "Male", "Non-binary", "Decline to answer"]
demog_ethnic_instr = "<p><b>What is your racial or ethnic identification?</b></p><font color='brown'>*</font> <p>Please select all that apply. To remove a choice, you can press backspace on your keyboard.</p>"
demog_ethnic_opts =  ["American Indian or Alaska Native", "Asian", "Black or African American", "Hispanic or Latino", "Native Hawaiian or Other Pacific Islander", "White", "Other"]


//PAGE6 SES
demog_objective_ses_instr = '<b>What is the highest degree or level of school you have completed?</b>'
demog_objective_ses_opts = ['8th grade/junior high or less', 'Some high school', 'High school graduate/GED', 'One or more years of college, no degree', 'Two-year college degree/vocational school', "Four-/Five-year college Bachelor's degree", 'At least some graduate school']

demog_subjectitve_ses_instr = "<p style = 'float: left; margin: 40px'><img src='demog/ladder.png'></p><p>&nbsp;</p><p>&nbsp;</p><p>Imagine that this ladder represents how society is set up.</p><p>At the top of the ladder are the people who are the best off: they have the most money, the highest amount of schooling, and the jobs that bring the most respect.</p><p>At the bottom are people who are the worst off: they have the least money, little or no education, no job, or jobs that no one wants or respects.</p><p></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Now think about your family. <b>Please tell us where you think your family would be on this ladder.</b> Select the number corresponding to the rung that best represents where your family would be on this ladder:</p>"
demog_subjectitve_ses_opts = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]


demog_p4_final_feedback_instr = "Were any parts of this experiment confusing or frustrating?<p></p>We really appreciate your feedback!"




////////////////////// demog questions end ////////////////////////

game_intro = ['images/gamification/low_res/Egame_intro.webm']
game_start_free = 
['images/gamification/low_res/Egame_start_free.webm']
game_task1 = ['images/gamification/low_res/Egame_task1.webm']
game_task2 = ['images/gamification/low_res/Egame_task2.webm']
game_task3 = ['images/gamification/low_res/Egame_task3.webm']
game_task4 = ['images/gamification/low_res/Egame_task4.webm']
game_task5_green = ['images/gamification/low_res/Egame_task5_green.webm']
game_task5_yellow = ['images/gamification/low_res/Egame_task5_yellow.webm']
game_task6Done_green = ['images/gamification/low_res/Egame_task6Done_green.webm']
game_task6Done_yellow = ['images/gamification/low_res/Egame_task6Done_yellow.webm']

//finish slides 
finish_instruction = "<div class='slide' id='finished'>" +
               "<p>You are all done! Thanks so much for participating in our research!</p>" +
              "<p>We are studying how people incorporate context into their reasoning, " +
              "and how this changes over childhood development. Thanks for your help! Please make sure you email your Participant ID to langcogculture@gmail.com so we can compensate you for your time. Your Participant ID is: </p>"
finish_instruction_button = "OK"


prolific_ID_prompt = "Please enter your Prolific ID below. If you did not come here from Prolific, please enter 000."

prolific_ID_button = "Continue"

prolific_completion_code =  "<p>For Prolific users only: Your Completion Code is</p><p><b>15BF41AB</b></p><p>Please make sure you save it somewhere secure so that you will be able to receive your payment promptly.</p>"

participantIDtext1 =  "<p>Welcome to our study! Your Participant ID is</p><p><b>"
participantIDtext2 =  "</b></p><p>Please make sure you save it somewhere secure so that you will be able to receive your compensation promptly.</p>"

studyPaused = "Hello! Thank you for your interest in our study. Unfortunately, we have completed data collection for now. If we reopen the study, we will post it at this link, so feel free to try back in the future.<p></p>We hope you can participate next time!"

