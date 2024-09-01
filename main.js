<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #007BFF;
        }
        .greeting {
            margin-top: 20px;
            font-size: 20px;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Welcome to My Simple Website</h1>
    <p>Please enter your name below:</p>
    
    <form id="nameForm">
        <input type="text" id="nameInput" placeholder="Your name" required>
        <button type="submit">Submit</button>
    </form>
    
    <div id="greetingMessage" class="greeting"></div>
</div>

<script>
    document.getElementById('nameForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var name = document.getElementById('nameInput').value;
        var greetingMessage = 'Hello, ' + name + '! Welcome to my simple website.';
        
        document.getElementById('greetingMessage').innerText = greetingMessage;
    });
</script>

</body>
</html>
