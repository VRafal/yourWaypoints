<?php
/**
 * @author Rafał Bernaczek ak. VRB
 * @example http://www.misovic.net/projects/
 * @copyright MIT
 *
 */
require ("phpGPX.php");

$data = file_get_contents("php://input");
$objData = json_decode($data);

$my = new phpGPX();
$my->filename = "poimod_" . time() . "_" . rand(100000, 999999) . ".gpx";
$my->outputDirectory = "./export/";

foreach ($objData as $point) {
	$my->addPoint($point->name, "", "", "", $point->desc, $point->lat, $point->lng);
}

$my->CreateGPXfile();

echo $my->filename;

// header("Cache-Control: public");
// header("Content-Description: File Transfer");
// header("Content-Length: " . filesize($my->outputDirectory . $my->filename) . ";");
// header("Content-Disposition: attachment; filename=" . $my->filename);
// header("Content-Type: application/octet-stream; ");
// header("Content-Transfer-Encoding: binary");

// readfile($my->outputDirectory . $my->filename);

?>