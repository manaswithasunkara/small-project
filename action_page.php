$emailErr = $passwordErr = $nameerr =$confirmpassworderr = "";
$email = $password = $name = $confirmpassword= "";
         
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["password"])) {
        $passwordErr = "password is required";
    }else {
        $password = test_input($_POST["password"]);
    }
            
    if (empty($_POST["email"])) {
        $emailErr = "Email is required";
    }else {
        $email = test_input($_POST["email"]);
               
        // check if e-mail address is well-formed
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format"; 
        }
    }
    if (empty($_POST["name"])) {
        $nameErr = "Name is required";
    }else {
        $name = test_input($_POST["name"]);
    }
}
         
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}