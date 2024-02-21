<?php
include 'dbconnect.php';
?>

<script>

    let passedArray = <?php echo json_encode($log) ?>;

    console.log(passedArray);
</script>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CodePen - autoComplete.js</title>
    <link rel="stylesheet" href="">
    <!--  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.7/dist/css/autoComplete.min.css'><link rel="stylesheet" href="./style.css">-->
    <link rel='stylesheet' href='./autocomplete/dist/css/autoComplete.css'>
    <link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<div class="container">
    <header class="header">
        <h1><a href="https://tradengine.biz//" target="_blank">Tradengine</a></h1>
    </header>
    <div class="body" align="center">
        <div class="autoComplete_wrapper">
            <input id="autoComplete" type="text" tabindex="1">
        </div>
        <div class="selection"></div>
    </div>
</div>
<!-- partial -->
<script src='./autocomplete/dist/autoComplete.min.js'></script>
<script src="./script.js"></script>

</body>
</html>