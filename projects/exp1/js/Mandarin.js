//Tell people to use the right broswer
browserDetection_pre = "嗨！看起来你正在使用 "
browserDetection_post = " 浏览器。 本页面只能在谷歌Chrome浏览器或火狐（Firefox)浏览器中正常运行。"

//Stanford Consent
first_page_instruction = ["<div class='w3-container' style='width: 600px; bottom-padding: 20px; text-align: left;'>" + 
                "<div style='width: 600px; margin: 0 auto; text-align: center; background-color: #8C1516; padding: 20px 15px 10px 10px'>" +
                "<img src='images/stanford.png' height='46' width='360' alt='Stanford University'></div>"+
                "<center><p><strong>斯坦福语言与认知实验室</strong></p></center>"+
                "<p>在本实验中，你将会玩几个小游戏。这些实验材料是为儿童设计的，但我们需要你在参与过程中集中注意力，尽可能地准确完成任务。" 
                + "<u style=\"color:red;\">你会听见声音，所以请确保你的扬声器或耳机已开启，音量适中。</u>"+
                "<p class='block-text' id='legal'>法律信息：通过回答以下的问题，你将参与到一项由斯坦福大学心理系的认知科学家们开展的实验。如果你对本研究有任何问题的话，请联系Alex Carstensen （邮箱：<a href='mailto://abcarstensen@stanford.edu'>abcarstensen@stanford.edu</a>）。你必须要满十八岁才能参与本项实验。你的参与是完全自愿的。你可以拒绝回答以下任何一个、或所有的问题。你可以在任何时刻拒绝继续参与，并且不会带来不良后果。你的匿名性是被确保的；要求你参与实验的研究人员不会收到任何你的个人信息。</p></div><p />" //,
                          
                          
        ]



// audio check
audio_check_file = 'sound/six_M.mp3'
audio0 = ["让我们先测试一下声音：打开你的扬声器，然后输入你听到的数字。请按下键盘上的数字键即可，如2。"]
audio1 = ["数字错误: 你的电脑声音目前工作不正常。如想继续参加测试，必须确保电脑声音工作正常。如果你想重试一次，请刷新本页面。谢谢！"]


// TASKS:

//horizon and circle transition instruction
circle_sticker_readyButton = "好了!"
circle_sticker_package_instruction_circle_first = "<p>现在，你将要玩两个短游戏。</p><p>在第一个游戏里，你将画一些圆圈。</p><p>在第二个游戏里，你将用贴纸拼一张图片。</p><p>准备好了吗？</p>"
circle_sticker_package_instruction_sticker_first = "<p>现在，你将要玩两个短游戏。</p><p>在第一个游戏里，你将用贴纸拼一张图片。</p><p>在第二个游戏里，你将画一些圆圈。</p><p>准备好了吗？</p>"

// horizon
horizon0 = ['<img src="images/sort/instruction/Mhorizon_instruction_1.jpeg" style="width:800px;height:600px;">']
horizonOKbutton = '好的!'
horizon1 = "<p>让我们来练习一下！用这些贴纸来拼一张图片！你可以想放多少张贴纸，就放多少张贴纸。</p> 如果你拼完了，按下面的按钮。<p>"
horizondonebutton = "完成!"
horizonpractice_feedback_yes = '真棒！让我们来看看怎么拼另一张！'
horizonpractice_feedback_no = '<p>啊哦！你需要用至少一张贴纸来拼图片哦！</p><p>让我们再试一次吧！</p>'
horizonslides = [
                '<img src="images/sort/instruction/Mhorizon_instruction_2.jpeg" style="width:800px;height:600px;">',
                '<img src="images/sort/instruction/Mhorizon_instruction_3.jpeg" style="width:800px;height:600px;">',
                '<img src="images/sort/instruction/Mhorizon_instruction_4.jpeg" style="width:800px;height:600px;">',
                '<img src="images/sort/instruction/Mhorizon_instruction_6.jpeg" style="width:800px;height:600px;">',
                '<img src="images/sort/instruction/Mhorizon_instruction_7.jpeg" style="width:800px;height:600px;">',
                '<img src="images/sort/instruction/Mhorizon_instruction_8.jpeg" style="width:800px;height:600px;">',
                 '<img src="images/sort/instruction/Mhorizon_instruction_9.jpeg" style="width:800px;height:600px;">'
                ]
horizon2 = "<p><b>记得在你的图画里加上一条地平线哦!</b></p><p>你的图画里至少要有一棵树、一座房子、和一个人，但你也可以放其它的贴画。</p>"

// Attribution Task
att_ready = '<p>现在，你将要观看一些视频。在视频结束后，我会问你一些问题。</p><p>准备好了吗？</p>'
att_ready_button = '好了!'
attvid = ['images/attribution/AttributionEngPilot.mp4']
attvid_adult = ['images/attribution/M_attribution_adult.webm']
attprompt = '<p>请看视频。</p>'
attq1 = "<p><img src='images/attribution/M1.jpg' width=600></p><p>请用完整句子解释。</p>"
attq2 = "<p><img src='images/attribution/M2.jpg' width=600></p><p>请用完整句子解释。</p>"
attribution_q1_button = "完成!"
attribution_q2_button = "完成!"

//Raven's SPM
//instruction
raven_button = "下一题"
raven_instruction_1 = '<img src="images/raven/M_raven_instructions_1.png" style="width:800px;height:600px;">'
raven_instruction_2 = '<img src="images/raven/M_raven_instructions_2.png" style="width:800px;height:600px;">'
raven_instruction_3 = '<img src="images/raven/M_raven_instructions_3.png" style="width:800px;height:600px;">'
raven_instruction_4 = '<img src="images/raven/M_raven_instructions_4.png" style="width:800px;height:600px;">'
raven_instruction_5 = '<img src="images/raven/M_raven_instructions_5.png" style="width:800px;height:600px;">'
raven_instruction_6 = '<img src="images/raven/M_raven_instructions_6.png" style="width:800px;height:600px;">'
raven_instruction_7 = '<img src="images/raven/M_raven_instructions_7.png" style="width:800px;height:600px;">'
raven_instruction_8 = '<img src="images/raven/M_raven_instructions_8.png" style="width:800px;height:600px;">'
raven_instruction_9 = '<img src="images/raven/M_raven_instructions_9.png" style="width:800px;height:600px;">'
raven_instruction_10 = '<img src="images/raven/M_raven_instructions_10.png" style="width:800px;height:600px;">'
raven_instruction_11 = '<img src="images/raven/M_raven_instructions_11.png" style="width:800px;height:600px;">'
raven_instruction_12 = '<img src="images/raven/M_raven_instructions_12.png" style="width:800px;height:600px;">'

// Sticker choice task
pen1 = ["<p>你快完成了！</p><p>这一次，你可以自己选一个小贴纸。你只能选一个小贴纸。你想选哪一个呢？</p>"]
penchoicelabel = ["这一个"]

// Circle Drawing task
circle_instruction_1 = '<img src="images/circle_drawing/M_circle_drawing_1.png" style="width:800px;height:600px;">'
circle_instruction_2 = '<img src="images/circle_drawing/M_circle_drawing_2.png" style="width:800px;height:600px;">'
circle_instruction_3 = '<img src="images/circle_drawing/M_circle_drawing_3.png" style="width:800px;height:600px;">'
circle_instruction_4 = '<img src="images/circle_drawing/M_circle_drawing_4.png" style="width:800px;height:600px;">'
circle_instruction_5 = '<img src="images/circle_drawing/M_circle_drawing_5.png" style="width:800px;height:600px;">'
circle_instruction_6 = '<img src="images/circle_drawing/M_circle_drawing_6.png" style="width:800px;height:600px;">'
circle_instruction_7 = '<img src="images/circle_drawing/M_circle_drawing_7.png" style="width:800px;height:600px;">'
circle_instruction_8 = '<img src="images/circle_drawing/M_circle_drawing_8.png" style="width:800px;height:600px;">'

circle_recap = "<p>把你自己和你的家人都画成圆圈。</p><p> 别忘了，要画的是小时候与你一起住的人。</p> <p><b> 你将从自己的圆圈画起，然后给圆圈加上 \"我\"的标签. </b></p><p style='color:blue;font-size: 20px;'><b>绘制圆圈</b>: 绘制圆圈。</p><p style='color:blue;font-size: 20px;'><b>加标签</b>: 点击圆圈，然后双击文本框。<u>完成输入后请按\"回车\"</u> </p><p style='color:blue;font-size: 20px;'><b>删除圆圈或标签</b>: 右击鼠标即可见删除按钮。</p>"

circle_textbox_default = "在此处加标签"
circle_delete_button = "删除"
circle_unlabeled_alert = "你有尚未被添加标签的圆圈。请给每一个圆圈都加上它所代表的人的标签。"
circle_empty_alert = "你还没有画任何圆圈。请把你自己和你的家人都画成圆圈。"
circle_small_alert = "你刚刚画的圆圈太小了。请重画一个大一点的圆圈，以便更好地添加标签。"
circle_game_button= "完成!"

//Ebbinghaus 
//phase 1 prepractice instruction
ebbinghaus_phase_1_prepractice_instruction_1 = '<img src="images/ebb_illu/instruction/Mphase_1_prepractice_1.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_prepractice_instruction_2 ='<img src="images/ebb_illu/instruction/Mphase_1_prepractice_2.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_prepractice_instruction_2b ='<img src="images/ebb_illu/instruction/Mphase_1_prepractice_2b.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_prepractice_instruction_3 ='<img src="images/ebb_illu/instruction/Mphase_1_prepractice_3.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_prepractice_instruction_4 ='<img src="images/ebb_illu/instruction/Mphase_1_prepractice_4.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_prepractice_instruction_5 ='<img src="images/ebb_illu/instruction/Mphase_1_prepractice_5.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_prepractice_instruction_6 ='<img src="images/ebb_illu/instruction/Mphase_1_prepractice_6.jpeg" style="width:800px;height:600px;">'

ebbinghaus_phase_1_prepractice_ready = "<p>让我们来练习一下玩这个游戏吧！</p> <p> 准备好了吗?</p>"
ebbinghaus_phase_1_prepractice_readyButton = '好了!'
// phase 1 practice: 
ebbinghaus_phase_1_practice_prompt = "<p>哪个圆是更大的圆呢?</p>"

// feedback
ebbinghaus_practice_feedback_yes = "真棒!"
ebbinghaus_practice_feedback_no = "<p>啊哦，要按更大的圆下面的键哦！</p><p>让我们再试一次吧！</p>"

//phase 1 post-practice instruction
ebbinghaus_phase_1_postpractice_instruction_1 = '<img src="images/ebb_illu/instruction/Mphase_1_postpractice_1.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_postpractice_instruction_1b = '<img src="images/ebb_illu/instruction/Mphase_1_postpractice_1b.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_postpractice_instruction_2 ='<img src="images/ebb_illu/instruction/Mphase_1_postpractice_2.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_postpractice_instruction_3 ='<img src="images/ebb_illu/instruction/Mphase_1_postpractice_3.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_postpractice_instruction_4 ='<img src="images/ebb_illu/instruction/Mphase_1_postpractice_4.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_postpractice_instruction_5 ='<img src="images/ebb_illu/instruction/Mphase_1_postpractice_5.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_1_postpractice_ready = "<p>你需要回答10个类似的问题，问题之间会有短暂的停顿。</p><p>在停顿时，一张如下图片将会在屏幕上闪现。但你只要等待下一个问题开始即可。</p><img src=\"images/ebb_illu/mask/mask1.png\" style=\"width:400px;height:200px;\"><p>有些问题可能很难，但你可以猜一个 </p> <p>准备好了吗?</p>"
ebbinghaus_phase_1_postpractice_readyButton = '好了!'
ebbinghaus_phase_1_prompt = "<p>哪个圆是更大的圆呢?</p>"

//phase 2 prepractice instruction
ebbinghaus_phase_2_prepractice_instruction_1 = '<img src="images/ebb_illu/instruction/Mphase_2_prepractice_1.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_2 = '<img src="images/ebb_illu/instruction/Mphase_2_prepractice_2.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_3 = '<img src="images/ebb_illu/instruction/Mphase_2_prepractice_3.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_4 = '<img src="images/ebb_illu/instruction/Mphase_2_prepractice_4.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_5 = '<img src="images/ebb_illu/instruction/Mphase_2_prepractice_5.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_6 = '<img src="images/ebb_illu/instruction/Mphase_2_prepractice_6.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_7 = '<img src="images/ebb_illu/instruction/Mphase_2_prepractice_7.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_8 = '<img src="images/ebb_illu/instruction/Mphase_2_prepractice_8.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_9 = '<img src="images/ebb_illu/instruction/Mphase_2_prepractice_9.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_prepractice_instruction_10 = '<img src="images/ebb_illu/instruction/Mphase_2_prepractice_10.jpeg" style="width:800px;height:600px;">'

ebbinghaus_phase_2_prepractice_ready_prompt = "<p>我们来试一次吧</p> <p> 准备好了吗?</p>"
ebbinghaus_phase_2_prepractice_readyButton =  '好了!'   
ebbinghaus_phase_2_practice_prompt = "<p>哪个橙色圆是更大的圆呢？</p>"

ebbinghaus_phase_2_postpractice_instruction_1 = '<img src="images/ebb_illu/instruction/Mphase_2_postpractice_1.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_postpractice_instruction_1b = '<img src="images/ebb_illu/instruction/Mphase_2_postpractice_1b.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_postpractice_instruction_2 = '<img src="images/ebb_illu/instruction/Mphase_2_postpractice_2.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_postpractice_instruction_3 = '<img src="images/ebb_illu/instruction/Mphase_2_postpractice_3.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_postpractice_instruction_4 = '<img src="images/ebb_illu/instruction/Mphase_2_postpractice_4.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_postpractice_instruction_5 = '<img src="images/ebb_illu/instruction/Mphase_2_postpractice_5.jpeg" style="width:800px;height:600px;">'
ebbinghaus_phase_2_postpractice_instruction_6 = '<img src="images/ebb_illu/instruction/Mphase_2_postpractice_6.jpeg" style="width:800px;height:600px;">'

ebbinghaus_phase_2_postpractice_ready_prompt = "<p>你需要回答24个类似的问题，问题之间会有短暂的停顿。</p><p>在停顿时，一张如下图片将会在屏幕上闪现。但你只需要等待下一个问题开始即可。</p><img src=\"images/ebb_illu/mask/mask1.png\" style=\"width:400px;height:200px;\"><p>现在，我们要真正开始玩这个游戏了。准备好了吗？</p>"
ebbinghaus_phase_2_postpractice_readyButton = "好了!"
ebbinghaus_phase_2_prompt = "<p>哪个橙色圆是更大的圆呢？</p>"
ebbinghaus_finished_prompt = "<p>这个游戏结束了。</p><p>你完成得真棒！</p>"
ebbinghaus_finished_nextButton = '下个游戏'


//Free description 
free_description_prepractice_instruction_adult = "<p>现在，我们要来玩一个图片游戏</p><p>在这个游戏里，你会看到很多不一样的图片。</p><p>每张图片，你都有5秒钟的时间来观察</p><p>仔细看。准备好了吗？</p>"
free_description_prepractice_instruction_kid = "<p>现在，我们要来玩一个图片游戏</p><p>在这个游戏里，你会看到很多不一样的图片。我们一起来看第一张图片。</p><p>你有15秒钟来学习这张图片</p><p>仔细看。准备好了吗？</p>"

free_description_prepractice_OKButton = "好了!"
free_description_prompts = "<p>想象你正在和一个没有看到过这张图片的人说话。</p><p>你会怎么跟他们说你看到了什么呢？</p>请用两三个完整的句子描述</p>"
free_description_ready_instruction = "<p> 真棒！你可以真的开始玩这个游戏了。 </p> <p> 现在，我会给你看更多的图片</p><p>准备好了吗?</p>"
free_description_ready_YesButton = "好了!"
free_description_continueButton = "完成!"
free_description_finishedInstruction = "<p>这个游戏结束了。</p><p>你完成得真棒！</p>"
free_description_finishedButton = "下个游戏！"
free_description_alert = "请多说一点！"


//RMTS 
rmts_instruction_0 = [
    '<img src="images/RMTS_instructions/M_RMTS_preinstructions01.jpeg" style="width:800px;height:600px;">',
    '<img src="images/RMTS_instructions/M_RMTS_preinstructions02.jpeg" style="width:800px;height:600px;">',
    '<img src="images/RMTS_instructions/M_RMTS_preinstructions03.jpeg" style="width:800px;height:600px;">',
    '<img src="images/RMTS_instructions/M_RMTS_preinstructions04.jpeg" style="width:800px;height:600px;">',
        
]

rmts_instruction_1 = [
    '<img src="images/RMTS_instructions/M_RMTS_postinstructions01.jpeg" style="width:800px;height:600px;">',
    '<img src="images/RMTS_instructions/M_RMTS_postinstructions02.jpeg" style="width:800px;height:600px;">',
    '<img src="images/RMTS_instructions/M_RMTS_postinstructions03.jpeg" style="width:800px;height:600px;">'        
]

rmts_test_trial = "哪个能让我的玩具播放音乐呢？"
rmts_instruction_2 = "<p><strong>真棒！这个游戏做完了！我们来试试另一个！</strong></p>"
rmts_instruction_2button = "好的！"


// Post-tasks 
//funnel debriefing 
funnel_general_button = "完成!"
funnel_familiarity_prompt = '<img src="images/debriefing/M_funnel_specific.png" style="width:800px;height:600px;">'
funnel_tellmore_prompt = '<p><img src="images/debriefing/M_funnel_general.png" style="width:1000px;height:600px;"></p><p>如果今天玩的有些游戏对你来说比较熟悉，或者，如果你认为你知道我们的这个科研项目研究的是什么，请描述你认为这个研究是关于什么的。</p>请尽可能详细：使用以上数字来指代单个游戏，告诉我们，你认为我们测量的是什么、我们要检验的假说是什么。'





////////////////////////// demog questions ////////////////////////// 

questions_pre_button = "继续"
question_button = "下一题"
label_done = "完成!"
demog_dropdown_placeholder = "请选择你的回答"
demog_require_answer = "标有<font color='brown'>*</font> 的问题是必答问题。"

demog_p0_instr = ["最后，我们想问一些关于你的问题。你的回答是保密的。"]


// PAGE 1
demog_born_instr = "<b>你是否出生于中国大陆、香港、澳门、台湾中的一个地区?</b><font color='brown'>*</font>"
demog_born_opts = ["是", "否"]
demog_living_instr = "<b>你现在是否居住在中国大陆、香港、澳门、台湾中的一个地区?</b><font color='brown'>*</font>"
demog_living_opts = ["是", "否"]
demog_location_state_instr = "<b>如果你出生于中国大陆、香港、澳门、台湾中的一个地区，你是在哪个省份或地区长大的？</b><font color='brown'>*</font>"
demog_location_state_opts = ["北京", "天津", "上海", "重庆", "河北", 
                   "山西", "辽宁","吉林", "黑龙江", "江苏",
                   "浙江", "安徽", "福建", "江西", "山东",
                   "河南", "湖北", "湖南", "广东", "海南",
                   "四川", "贵州", "云南", "陕西","甘肃", 
                   "青海", "台湾", "内蒙古", "广西","宁夏", 
                   "新疆", "西藏", "香港", "澳门", "其它"]





// PAGE 2
demog_us_zipcode_instr = "<b>如果你现在居住于中国大陆、香港、澳门、台湾中的一个地区，请填写你邮政编码的前四位。</b>"
demog_res_mobi_num = "<p><b>你从5岁起在多少不同的城市/城镇/村居住过？</b><font color='brown'>*</font></p><p>请回想你从五岁起所居住过的所有城市/城镇/村。如果你在一个城市/城镇/村中的不同位置居住过，请不要重复计算。请把总数填在这里：</p>"


//PAGE 3
demog_year_abroad_instr = "<b>你在海外（中国大陆、香港、澳门、台湾以外的国家与地区）居住的时间是否在两年及以上？</b>"
demog_year_abroad_opts = ["是", "否"]
demog_num_ovs_exp_instr = "<b>你有多少国际经历（每次时长在2天及以上的都算）？</b> (例如：出国度假、拜访海外亲戚等等。)"
demog_num_ovs_exp_opts = ["没有国际经历", "一段国际经历", "两段国际经历", "三到五段国际经历", "六段或更多国际经历"]
//Page 3 conditionals:
demog_conditional_year_abroad_question_node = '"abroadexp":"是"'
demog_conditional_year_abroad_regions_instr = "<b>你曾在下列哪个（些）地区居住过两年及以上？请选择所有适用的选项。</b>"
demog_conditional_year_abroad_regions_opts = ["北美洲","南美洲", "欧洲", "非洲", "亚洲", "澳洲", "其它"]


//PAGE 4
demog_language_first_instr = "<b>中文是你的母语（或母语之一）吗？</b>"
demog_language_first_opts = ["是", "不是"]
demog_language_mono_instr = "<b>你是否能流畅地说和理解任何其它的语言？</b> "
demog_language_mono_options =["不，我只说中文", "是，我是多语者"]
demog_language_target_instr = "<b>你能说或理解英语吗（哪怕并不流利）？"
demog_language_target_options = ["能", "不能"]
//PAGE 4 conditional
demog_conditional_language_target_question_node = '"targetlanguage":"能"'
demog_conditional_language_target_fluency_preamble = "<b>语言流利度</b>"
demog_conditional_language_target_fluency_superq = "<p>在0到10的范围内，请从下拉菜单中分别选择你在说和理解英语口语时的熟练程度：</p>"
demog_conditional_language_target_fluency_sp = "<b>说口语</b><font color='brown'>*</font>"
demog_conditional_language_target_fluency_sp_placeholder = "选择你说英语的熟练程度"
demog_conditional_language_target_fluency_ud = "<b>理解口语</b><font color='brown'>*</font>"
demog_conditional_language_target_fluency_ud_placeholder = "选择你理解口语的熟练程度"
demog_conditional_language_target_fluency_opts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]


//PAGE5
demog_agegender_age_instr = "<b>你的年龄是?</b><font color='brown'>*</font>"
demog_agegender_age_opts = ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68","69", "70", "71", "72", "73", "74", "75", "76", "77", "78","79", "80", "81", "82", "83", "84", "85", "86", "87", "88","89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"]
demog_agegender_gender_instr = "<b>你的性别是?</b><font color='brown'>*</font>"
demog_agegender_gender_opts = ["女性", "男性", "非二元性别者", "拒绝回答"]
demog_ethnic_instr = "<p><b>你属于下列哪一个族群？</b></p><font color='brown'>*</font> <p>（请选择所有适用的选项）在这里，我们对你的族群身份感兴趣，而不是国籍。如果你和你的家人认为你们拥有任何华裔血统，无论国籍，都请在下拉菜单中选择中国人。</p>"
demog_ethnic_opts =  ["中国人（包括居住在中国大陆、香港、澳门、台湾，以及任何亚洲国家地区在内有华裔血统的人）","非中国人的亚洲人","我是混血儿","我不是亚洲人"]


//PAGE6 SES
demog_objective_ses_instr = '<b>请选择你的最高受教育程度：</b>'
demog_objective_ses_opts = ["九年级/初中及以下", "上过一部分高中", "普通高中或职业高中毕业/高中等级学历", "一年或多年大学教育，无学位", "大专学历", "四年/五年制大学本科学位", "有过一些研究生经历"]

demog_subjectitve_ses_instr = "<p style = 'float: left; margin: 40px'><img src='demog/ladder.png'></p><p>&nbsp;</p><p>&nbsp;</p><p>设想这把梯子反映了社会是如何构成的。</p><p>梯子的顶端是那些境况最优越的人：他们拥有最多的钱财，受过最多的教育，工作也最受人尊敬。</p><p>梯子的底端是那些境况最糟糕的人：他们只有最少的钱，极少或没有受过教育，没有工作，或者只有没人想干或没人尊敬的工作。</p><p></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><b>现在想想你的家庭。请告诉我们，你认为你的家庭在这个梯子上处于什么位置。</b> 选择与最能代表你家庭所处位置的梯级相对应的数字：</p>"
demog_subjectitve_ses_opts = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]


demog_p4_final_feedback_instr = "本实验中是否有任何部分令你感到疑惑或沮丧？我们将十分感谢你的反馈！"




///////////////////// demog questions end //////////////////////// 

game_intro =  ['images/gamification/low_res/Mgame_intro.webm']
game_start_free = 
['images/gamification/low_res/Mgame_start_free.webm']
game_task1 = ['images/gamification/low_res/Mgame_task1.webm']
game_task2 = ['images/gamification/low_res/Mgame_task2.webm']
game_task3 = ['images/gamification/low_res/Mgame_task3.webm']
game_task4 = ['images/gamification/low_res/Mgame_task4.webm']
game_task5_green = ['images/gamification/low_res/Mgame_task5_green.webm']
game_task5_yellow = ['images/gamification/low_res/Mgame_task5_yellow.webm']
game_task6Done_green = ['images/gamification/low_res/Mgame_task6Done_green.webm']
game_task6Done_yellow = ['images/gamification/low_res/Mgame_task6Done_yellow.webm']

//finish slides 
finish_instruction = "<div class='slide' id='finished'>" +
               "<p>你完成了全部任务! 感谢你对我们研究的参与！</p>" +
              "<p>我们正在研究人们如何将背景信息运用在推理中, " +
              "并且这一能力又是如何在童年期发展的。感谢您的帮助！请将您的被试ID与微信ID一起发送到langcogculture@outlook.com，在72小时内会有实验人员主动添加您好友，并把报酬发给您。如有疑问，欢迎添加LangCog实验小助手的微信：langcoglab。 您的被试ID是：</p>"
finish_instruction_button = "好的"

prolific_ID_prompt = "请在下方输入您的被试ID："

prolific_ID_button = "继续"


prolific_completion_code = "<p>感谢您的参与！请在微信上告知LangCog实验小助手，以便获得报酬有关的信息。</p>"


participantIDtext1 = "<p>欢迎参加我们的实验！你的被试ID为</p><p><b>"
participantIDtext2 = "</b></p><p>请确保将它存放在一个安全的地方，以便于你能即时收到报酬。</p>"


studyPaused = "你好！感谢你对我们实验的兴趣。很遗憾，我们目前已经完成了数据收集。如果我们重启这一实验，我们将会在这个链接发布，你可以在日后返回尝试。<p></p>我们衷心希望你能在下次参与我们的实验！"


