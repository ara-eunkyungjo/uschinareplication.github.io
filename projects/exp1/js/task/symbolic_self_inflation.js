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

var circles_drawing_instruction = {
    type: 'instructions',
    pages: [
     circle_instruction_1,
     circle_instruction_2,
     circle_instruction_3,
     circle_instruction_4,
     circle_instruction_5,
     circle_instruction_6,
     circle_instruction_7,
     circle_instruction_8
     ],
     show_clickable_nav: true
 }


 var circles_task = {
     type: 'konva-draw-circle',
     textbox_default:circle_textbox_default,
     delete_button:circle_delete_button,
     unlabeled_alert: circle_unlabeled_alert,
     no_circle_alert: circle_empty_alert,
     too_small_alert: circle_small_alert,
     button_label: circle_game_button,
     prompt: circle_recap,
     canvas_width: 800,
     canvas_height: 600
 }
