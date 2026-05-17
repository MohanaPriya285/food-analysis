<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    if (!empty($name) && !empty($email) && !empty($message)) {
        // Save to file
        $data = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message\nDate: " . date('Y-m-d H:i:s') . "\n\n";
        file_put_contents('contacts.txt', $data, FILE_APPEND);
        
        // Redirect back with success
        header('Location: contact.html?success=1');
        exit;
    } else {
        header('Location: contact.html?error=1');
        exit;
    }
}

?>
