<!DOCTYPE html>
<html>
<head>
    <title>Query & Feedback - Proven</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-logo">proven</div>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="product.html">Product Analysis</a></li>
            <li><a href="food.html">Food Analysis</a></li>
            <li><a href="feedback.php">Query</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        <button class="theme-btn" onclick="toggleTheme()">THEME</button>
    </nav>

    <!-- Hero Section -->
    <div class="hero">
        <h1>QUERY & FEEDBACK</h1>
        <p>Share your feedback and suggestions</p>
    </div>

    <!-- Form Section -->
    <div class="contact-section">
        <div style="grid-column: 1/-1;">
            <div class="contact-form">
                <h2>Send Your Feedback</h2>

                <?php
                    $message = '';
                    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                        $name = htmlspecialchars($_POST['name']);
                        $email = htmlspecialchars($_POST['email']);
                        $subject = htmlspecialchars($_POST['subject']);
                        $feedback = htmlspecialchars($_POST['feedback']);

                        if (!empty($name) && !empty($email) && !empty($subject) && !empty($feedback)) {
                            // Save to file (simple storage)
                            $data = "Name: $name\nEmail: $email\nSubject: $subject\nFeedback: $feedback\n\n";
                            file_put_contents('feedbacks.txt', $data, FILE_APPEND);
                            
                            echo '<div style="background: #27ae60; color: white; padding: 15px; border-radius: 5px; margin-bottom: 20px; text-align: center;">
                                Thank you for your feedback! We will review it soon.
                            </div>';
                        }
                    }
                ?>

                <form action="feedback.php" method="POST">
                    <input type="text" name="name" placeholder="Your Name" required>
                    <input type="email" name="email" placeholder="Your Email" required>
                    <input type="text" name="subject" placeholder="Subject" required>
                    <textarea name="feedback" placeholder="Your Feedback" required></textarea>
                    <button type="submit" class="submit-btn">Submit Feedback</button>
                </form>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <p>&copy; 2024 Proven - Food Health Analysis</p>
        <p>Developed by CSE Students</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
