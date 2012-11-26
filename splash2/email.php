<?php
error_reporting(E_ALL | E_STRICT);
ini_set('display_errors',1);
include('config.php');
try
{
        $email = trim($_POST['email']);        
        
        if(!preg_match('/[A-Za-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/',$email))
        {
           throw new Exception('Invalid Email');
        }
        
        $store = $_POST['store'];
	if(empty($store))
	{
            $store = '';
	}	
        
	$sqlite_db = new PDO('sqlite:'.DB_PATH,DB_USER,DB_PASS);
		
	$insert = "REPLACE INTO emails (id, customer_email, store_name, ip, time) 
		    VALUES (:id, :customer_email, :store_name, :ip, :time)";

	$upsert =$sqlite_db->prepare($insert);      

	
	$upsert->execute(
	    array(
		':id' => null, 
		':customer_email' => $email, 
		':store_name' => $store,
                ':ip' => $_SERVER['REMOTE_ADDR'],
		':time'  => date('Y-m-d H:i:s',time())
	    )                
	);
	
	echo "done";        




}
catch(Exception $e)
{
	echo 'Error: '.$e->getMessage();
}