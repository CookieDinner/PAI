<?php session_start();?>
<!DOCTYPE html>
<html>
	<head>
		<title>PHP</title>
		<meta charset='UTF-8' />
	</head>
	<body>
    <?php
    if(isSet($_POST["wyloguj"]))
        $_SESSION["zalogowany"] = 0;
    if(isSet($_SESSION["zalogowany"]))
        if($_SESSION["zalogowany"] == 1)
            header("Location: user.php");
    echo "<h1>Nasz system</h1>";
    ?>
    <form action="logowanie.php" method="post">
        <fieldset>
            <legend>Logowanie:</legend><br>
            Login: <input type="text" name="login"><br><br>
            Hasło: <input type="password" name="haslo"><br><br>
            <input type="submit" name="zaloguj" value="Zaloguj"><br><br>
        </fieldset>
    </form>
    <fieldset>
        <legend>Cookies:</legend><br>
        <form action="cookie.php" method="get">
            Czas: <input type="number" name="czas"><br><br>
            <input type="submit" name="utworzCookie" value="Utwórz cookie"><br><br>
        </form>
        <?php
        if(isset($_COOKIE["ciastek"]))
            echo "Ciastek " . $_COOKIE["ciastek"] . " :)";
        else
            echo "Ciastek bez rodzynek :(";
        ?>
    </fieldset>
	</body>
</html>
