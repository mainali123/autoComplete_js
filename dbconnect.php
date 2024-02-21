<?php

$servername = '';
$username = '';
$password = '';
$database = '';

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $output = 'Database Connection have been established';
} catch (PDOException $exception) {
    $output = 'An exception have occurred with ' . $exception->getMessage() . 'in line number ' . $exception->getLine();
}

//echo $output;

$sql = "SELECT product_name FROM ";

try {
    $res = $pdo->query($sql);

    while ($rows = $res->fetch()) {
        $log[] = $rows['product_name'];
    }
    echo "<pre>";
//    print_r($log);
    echo "</pre>";
} catch (PDOException $exception) {
    echo "Exception occurred with error: " . $exception->getMessage() . ' in line number ' . $exception->getLine();
}


//echo json_encode($log);