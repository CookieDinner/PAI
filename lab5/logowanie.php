<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
    <title>PHP</title>
    <meta charset='UTF-8' />
</head>
<body>
<?php
require("funkcje.php");
if(isSet($_POST["zaloguj"])){
    $login = test_input($_POST["login"]);
    $haslo = test_input($_POST["haslo"]);
//        echo "Przesłany login: $login <br>";
//        echo "Przesłane hasło: $haslo <br><br>";
    switch ($login){
        case $osoba1->login:
            if($haslo == $osoba1->haslo) {
                $_SESSION["zalogowanyImie"] = $osoba1->imieNazwisko;
                echo $_SESSION["zalogowanyImie"] . "<br>";
                $_SESSION["zalogowany"] = 1;
                header("Location: user.php");
            }
            else {
                $_SESSION["zalogowany"] = 0;
                header("Location: index.php");
            }
            break;
        case $osoba2->login:// &&
            if($haslo == $osoba2->haslo) {
                $_SESSION["zalogowanyImie"] = $osoba2->imieNazwisko;
                echo $_SESSION["zalogowanyImie"] . "<br>";
                $_SESSION["zalogowany"] = 1;
                header("Location: user.php");
            }
            else {
                $_SESSION["zalogowany"] = 0;
                header("Location: index.php");
            }
            break;
        default:
            $_SESSION["zalogowany"] = 0;
            header("Location: index.php");
            break;
    }
}
?>
</body>
</html>