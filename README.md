<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Java to JS Conversion</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background: url('background-image.jpg') no-repeat center center fixed;
            background-size: cover;
            color: #fff;
            text-align: center;
        }

        header {
            padding: 20px;
            background: rgba(0, 0, 0, 0.5);
        }

        h1 {
            color: #00bcd4;
        }

        button {
            padding: 10px;
            margin-top: 20px;
            cursor: pointer;
            background-color: #00bcd4;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 16px;
        }

        #output {
            margin-top: 20px;
            color: #fff;
        }
    </style>
</head>
<body>
    <header>
        <h1>Java to JS Conversion</h1>
    </header>

    <button onclick="findStrings()">Run Program</button>

    <div id="output"></div>

    <script>
        function findStrings() {
            const sum = parseInt(prompt('Enter the sum:'), 10);
            let result = '';

            for (let i = 100; i > 0; i--) {
                for (let j = 0; j < 100; j++) {
                    if ((17 * j + 18 * i) === sum) {
                        result += `<p>A (18 string) = ${i}</p>`;
                        result += `<p>B (17 string) = ${j}</p><br>`;
                    }
                }
            }

            document.getElementById('output').innerHTML = result;
        }
    </script>
</body>
</html>
