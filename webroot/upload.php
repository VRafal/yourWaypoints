<?php
if (!empty($_FILES)) {
	$tempPath = $_FILES['file']['tmp_name'];
	$uploadPath = dirname(__FILE__) . DIRECTORY_SEPARATOR . 'uploads' . DIRECTORY_SEPARATOR . $_FILES['file']['name'];

	move_uploaded_file($tempPath, $uploadPath);
	// $uploadPath = "C:\workspace_php\poimod\webroot\uploads\Ciekawe_miejsca.gpx";

	$xml = simplexml_load_file($uploadPath);
	$wpt = array ();

	foreach ($xml->wpt as $child) {
		array_push($wpt, array (
			'name' => $child->name . '',
			'time' => $child->time . '',
			'sym' => $child->sym . '',
			'lat' => $child->attributes()->lat . '',

			// Zgodnośc z Google Map API
			'lng' => $child->attributes()->lon . ''
		));
	}

	$answer = array (
		'answer' => 'File transfer completed',
		'wpt' => $wpt
	);
	$json = json_encode($answer);
	echo $json;
}
else {
	echo 'No files';
}

?>