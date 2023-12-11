<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Java to JS Conversion</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        h1 {
            color: #333;
        }

        button {
            padding: 10px;
            margin-top: 10px;
            cursor: pointer;
        }

        #output {
            margin-top: 20px;
            color: green;
        }
    </style>
</head>
<body>
    <h1>Java to JS Conversion</h1>

    <button onclick="findStrings()">Run Program</button>

    <div id="output"></div>

    <script>
        function findStrings() {
            const sum = parseInt(prompt('Enter the sum:'), 10);
            let result = '';

            for (let i = 100; i > 0; i--) {
                for (let j = 0; j < 100; j++) {
                    if ((17 * j + 18 * i) === sum) {
                        result += `A (18 string) = ${i}<br>`;
                        result += `B (17 string) = ${j}<br><br>`;
                    }
                    else
                    result +='Not Found';
                }
            }

            document.getElementById('output').innerHTML = result;
        }
    </script>
</body>
</html>
