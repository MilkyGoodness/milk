<?php
error_reporting(E_ALL | E_STRICT);
ini_set('display_errors',1);
include('config.php');
try
{
        $email = $_POST['customer-email'];
        
        if(!preg_match('\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b',$email))
        {
           throw new Exception('Invalid Email');
        }
        
	if(isset($_POST['store']))
	{
		$store = $_POST['store'];
	}	
	else
	{
		$store = '';
	}
        
	$sqlite_db = new PDO('sqlite:'.DB_PATH,DB_USER,DB_PASS);
		
	$insert = "REPLACE INTO emails (id, customer_email, store_name, time) 
		    VALUES (:id, :customer_email, :store_name, :time)";

	$upsert =$sqlite_db->prepare($insert);      

	
	$upsert->execute(
	    array(
		':id' => null, 
		':customer_email' => $email, 
		':store_name' => $store,
		':time'  => date('Y-m-d H:i:s',time())
	    )                
	);
	
	echo "DONE";        




}
catch(Exception $e)
{
	echo 'Error: '.$e->getMessage();
}
?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
		<title>Milk Table</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>
<body>
<form action="" method="post">
EMail:<input type="text" name="customer-email" />
Name:<input type="text" name="store" />
<input type="submit" value="submit" />
</form>
</body>
</html>



