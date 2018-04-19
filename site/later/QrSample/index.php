<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<center>

<h1><a href="/QrSample/download.php">click</a></h1>
<!-- 1 -->
<p>Metodo de <strong>api.qrserver</strong> con urbe-api.urbe.edu login link, <a href="https://urbe-api.urbe.edu/urbe-api-ext/MoodleProxy?server=1&id=1040353">link del QR</a>. ID en el QR: 1040353</p>
<button type="button" onclick="if(document.getElementById('spoiler1') .style.display=='none') {document.getElementById('spoiler1') .style.display=''} else {document.getElementById('spoiler1') .style.display='none'}">
Mostrar/Esconder</button>
<div id="spoiler1" style="display:none">
</br>
<?php
	$id = '1040353';
	echo "<img src=\"http://api.qrserver.com/v1/create-qr-code/?data=https%3A%2F%2Furbe-api.urbe.edu%2Furbe-api-ext%2FMoodleProxy%3Fserver%3D1%26id%3D" . $id . "&size=120x120\"></img>";
?>
</div>
<hr class="style-eight"> hai <hr>

<!-- 2 -->
<p>Metodo de <strong>api.qrserver</strong> con pdf descarga link, <a href="http://www.ead.urbe.edu/intros2/university/CC_U2.pdf">link del QR</a></p>
<button type="button" onclick="if(document.getElementById('spoiler2') .style.display=='none') {document.getElementById('spoiler2') .style.display=''} else {document.getElementById('spoiler2') .style.display='none'}">
Mostrar/Esconder</button>
<div id="spoiler2" style="display:none">
</br>
<img src="http://api.qrserver.com/v1/create-qr-code/?data=http://www.ead.urbe.edu/intros2/university/CC_U2.pdf&size=120x120"></img>
</div>
<hr>

<!-- 3 -->
<p>Metodo de <strong>goo.gl</strong> con link de descarga del pdf escondido, qr3 pdf goo.gl, <a href="http://goo.gl/Jxkjns">link del QR</a></p>
<button type="button" onclick="if(document.getElementById('spoiler3') .style.display=='none') {document.getElementById('spoiler3') .style.display=''} else {document.getElementById('spoiler3') .style.display='none'}">
Mostrar/Esconder</button>
<div id="spoiler3" style="display:none">
</br>
<img src="http://api.qrserver.com/v1/create-qr-code/?data=http://goo.gl/Jxkjns&size=120x120"></img>
</div>
<hr>

<!-- 4 -->
<p>Metodo de <strong>chart.googleapis</strong> con link escondido de goo.gl, <a href="http://chart.googleapis.com/chart?cht=qr&chs=120x120&choe=UTF-8&chld=H&chl=http://goo.gl/G8TGdK">link del QR</a></p>
<button type="button" onclick="if(document.getElementById('spoiler4') .style.display=='none') {document.getElementById('spoiler4') .style.display=''} else {document.getElementById('spoiler4') .style.display='none'}">
Mostrar/Esconder</button>
<div id="spoiler4" style="display:none">
</br>
<img src="http://chart.googleapis.com/chart?cht=qr&chs=120x120&choe=UTF-8&chld=H&chl=http://goo.gl/G8TGdK"></img>
</div>
<hr>

<!-- 5 -->
<p>Metodo de <strong>mascara</strong> con link escondido de descarga de pdf, <a href="/">link del QR</a></p>
<button type="button" onclick="if(document.getElementById('spoiler5') .style.display=='none') {document.getElementById('spoiler5') .style.display=''} else {document.getElementById('spoiler5') .style.display='none'}">
Mostrar/Esconder</button>
<div id="spoiler5" style="display:none">
</br>
<img src="/"></img>
</div>
<hr>
</center>
</body>
</html>