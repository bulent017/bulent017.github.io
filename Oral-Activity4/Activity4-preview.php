<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Form Results</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php 
        $name = $_POST["name"] == "" ? "Not provided" : $_POST["name"];
        $username = $_POST["username"] == "" ? "Not provided" : $_POST["username"];
        $password = $_POST["password"] == "" ? "Not provided" : $_POST["password"];
        $address = $_POST["address"] == "" ? "Not provided" : $_POST["address"];
        $country = $_POST["country"] == "Select a country ... " ? "Not provided" : $_POST["country"];
        $zip_code = $_POST["zip-code"] == "" ? "Not provided" : $_POST["zip-code"];
        $email = $_POST["email"] == "" ? "Not provided" : $_POST["email"];
        $gender = $_POST["sex"] == "" ? "Not provided" : $_POST["sex"];
        $language1 = isset($_POST["checkbox1"]) ? $_POST["checkbox1"] : "Not provided";
        $language2 = isset($_POST["checkbox2"]) ? $_POST["checkbox2"] : "Not provided";
        $language3 = isset($_POST["checkbox3"]) ? $_POST["checkbox3"] : "Not provided";
        $about = $_POST["about"] == "" ? "Not provided" : $_POST["about"];

        echo "<div><strong>Name: </strong>".$name."</div>";
        echo "<div><strong>Username: </strong>".$username."</div>";
        echo "<div><strong>Password: </strong>".$password."</div>";
        echo "<div><strong>Address: </strong>".$address."</div>";
        echo "<div><strong>Country: </strong>".$country."</div>";
        echo "<div><strong>ZIP Code: </strong>".$zip_code."</div>";
        echo "<div><strong>Email: </strong>".$email."</div>";
        echo "<div><strong>Gender: </strong>".$gender."</div>";
        echo "<div><strong>Languages: </strong>".$language1.", ".$language2.", ".$language3."</div>";
        echo "<div><strong>About: </strong>".$about."</div>";
    ?>
</body>
</html>
