<?php
error_reporting(E_ALL | E_STRICT);
ini_set('display_errors',1);

include('config.php');
session_start();
$renderPassform = false;
if(isset($_POST['password']) && $_POST['password'] == BK_PASS || isset($_SESSION['login']))
{
        $_SESSION['login'] = true;
	$sqlite_db = new PDO('sqlite:'.DB_PATH,DB_USER,DB_PASS);
	$sql = "SELECT * FROM emails ORDER BY time DESC LIMIT 0, 50";
	$sth = $sqlite_db->prepare($sql);
	$sth->execute();
	$rows = $sth->fetchAll();
}
else
{
  $renderPassform = true;
}
?>


<!DOCTYPE HTML>
<html lang="en">
	<head>
		<title>Milk Table</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>
<body>
<?php
if($renderPassform):
?>
<form action="" method="post">
<input type="password" name="password" />
<input type="submit" value="login" />
</form>
<?php
else:
?>
<table style="text-align:center;">
<col width="400" />
<col width="250" />
<col width="250" />
<col width="250" />
<tr>
<th>Email</th>
<th>Store</th>
<th>IP</th>
<th>Submitted At</th>
</tr>
<?php 

foreach($rows as $row) {
echo '<tr>';
echo '<td>'.$row['customer_email'].'</td>';
echo '<td>'.$row['store_name'].'</td>';
echo '<td>'.$row['ip'].'</td>';
echo '<td>'.$row['time'].'</td>';
echo '</tr>';
}

?>
</table>

<?php
endif;
?>
</body>
</html>
