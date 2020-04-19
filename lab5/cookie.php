<?php session_start();?>
<!DOCTYPE html>
<html>
	<head>
		<title>PHP</title>
		<meta charset='UTF-8' />
	</head>
	<body>
    <?php
    if(isset($_GET["utworzCookie"])){
        $czas = $_GET["czas"];
        if(is_numeric($czas))
            if(setcookie("ciastek", "z rodzynkami", time() + $czas, "/"))
                echo "<br>Poprawnie stworzono ciasteczko <br>";
    }
    ?>
    <br><a href="index.php">Wstecz</a>
	</body>
</html>
