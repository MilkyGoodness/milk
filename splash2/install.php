<?php

    include('config.php');

    $sqlite_db = new PDO('sqlite:'.DB_PATH,DB_USER,DB_PASS);
    // Set errormode to exceptions
    $sqlite_db->setAttribute(PDO::ATTR_ERRMODE, 
                            PDO::ERRMODE_EXCEPTION);

    echo 'Creating Tables... <br />';
    $sqlite_db->exec("Drop table emails");
    $sqlite_db->exec("CREATE TABLE IF NOT EXISTS emails (
                    id INTEGER PRIMARY KEY, 
                    customer_email TEXT,
                    store_name TEXT,                    
                    time INTEGER,
                    UNIQUE(customer_email) ON CONFLICT REPLACE)");

    echo 'Done... <br />';
