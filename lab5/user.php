<?php session_start();?>
<!DOCTYPE html>
<html>
	<head>
		<title>PHP</title>
		<meta charset='UTF-8' />
	</head>
	<body>
    <?php
    require_once("funkcje.php");
    if(isset($_SESSION["zalogowany"])){
        if($_SESSION["zalogowany"] == 1){
            echo "<fieldset><br>Aktualnie zalogowany: " . $_SESSION["zalogowanyImie"] . "<br><br></fieldset>";
        }
        else
            header("Location: index.php");
    }
    else
        header("Location: index.php");
    ?>
    <fieldset>
        <legend>Wgrywanie zdjęcia</legend>
        <form action="user.php" method="post" enctype="multipart/form-data">
                <br><input type="file" name="myfile"><br><br>
                <input type="submit" value="Wgraj plik" name="imageupload"><br><br>
        </form>
        <?php
        $currentDir = getcwd();
        $uploadDirectory = "\zdjeciaUzytkownikow\\";
        if(isset($_POST["imageupload"])) {
            if (isset($_FILES["myfile"])) {
                $fileName = $_FILES["myfile"]["name"];
                $fileTmpName = $_FILES["myfile"]["tmp_name"];
                $fileType = $_FILES["myfile"]["type"];
                if ($fileName != "" and
                    ($fileType == 'image/png' or $fileType == 'image/jpeg'
                        or $fileType == 'image/PNG' or $fileType == 'image/JPEG')) {
                    $uploadPath = $currentDir . $uploadDirectory . $fileName;
                    if (move_uploaded_file($fileTmpName, $uploadPath))
                        echo "<script>alert('Zdjęcie zostało wgrane poprawnie na serwer');</script>";
                }
            }
        }
        $fileLocation = $uploadDirectory . "applepie.jpg";
        echo "<img src=$fileLocation alt='Tutaj byłoby zdjęcie gdyby istniało'>";
        ?>
        <form action="index.php" method="post">
            <br><input type="submit" name="wyloguj" value="Wyloguj">
        </form>
    </fieldset>
	</body>
</html>
