Accessing experiments & data on the server:
1. Cisco AnyConnect with SUnet credentials
2. AFS Controller with SUnet credentials > mount afs-group-langcog
3. Experiment files live in langcog>WWW>expts>RR_*
4. Saving scripts and data live in langcog>cgi-bin>RR_*

Before running a batch of participants:
1. generate uglified js/full.min.js (either using https://www.uglifyjs.net/ or via command line) from relevant js/tasks/*.js and js/zzmain.js
2. replace the experiment with the recent GitHub version: in expE.html, set var on_server = true and check studySize/prolific variable settings
   NOTE: do not copy `misc` folder.
3. generate new expM.html by setting var CN = true
4. test that the updated versions are working, and saving correctly
5. if prolific = true, update the prolific completion code in English.js to match that assigned by prolific (or just change the number of participants in the previous version)

*NB: the ONLY difference between English and Mandarin versions (expE.html and expM.html) is whether the var CN is T or F. 
This variable determines which of the php scripts in RR_* (e.g., '../../../cgi-bin/RR_adults/write_dataE.php'), called write_data_E.php and write_data_M.php, gets called. 
Same for countFilesE.php and countFilesM.php. cgi-bin/RR_* must contain all 4 php files.