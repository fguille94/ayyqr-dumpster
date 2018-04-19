<!DOCTYPE html>
<html>
<link rel="stylesheet" type="text/css" href="style.css">
<body>
<?php
// $file = 'http://www.ead.urbe.edu/intros2/university/CC_U2.pdf';
// readfile($file);

$file = 'http://www.ead.urbe.edu/intros2/university/CC_U2.pdf';

$content_len=@filesize($file); 
Header("Content-type: application/pdf"); 
Header("Content-type: octet-stream"); 
Header('Content-Disposition: attachment; filename="Unit Content.pdf"'); 
if($content_len!=FALSE) 
{ 
Header("Content-length: $content_len"); 
} 
readfile($file); 

?>
</body>
</html>