//SRC: https://developers.google.com/maps/documentation/javascript/mysql-to-maps?hl=de
<?
$username="username";
$password="password";
$database="username-databaseName";
?>

<?php

// Gets data from URL parameters
$name = $_GET['name'];
$keywords = $_GET['keywords'];
$type = $_GET['type'];
$lat = $_GET['lat'];
$lng = $_GET['lng'];

// Opens a connection to a MySQL server
$connection=mysql_connect ("http://localhost:8080/", $username, $password);
if (!$connection) {
  die('Not connected : ' . mysql_error());
}

// Set the active MySQL database
$db_selected = mysql_select_db($database, $connection);
if (!$db_selected) {
  die ('Can\'t use db : ' . mysql_error());
}

// Insert new row with user data
$query = sprintf("INSERT INTO markers " .
         " (name, keywords, type, lat, lng) " .
         " VALUES ('%s', '%s','%s' '%f', '%f');",
         mysql_real_escape_string($name),
         mysql_real_escape_string($keywords),
         mysql_real_escape_string($type),
         mysql_real_escape_string($lat),
         mysql_real_escape_string($lng));

$result = mysql_query($query);

if (!$result) {
  die('Invalid query: ' . mysql_error());
}

?>