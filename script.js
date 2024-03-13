Function findStrings() {

  const sum = parseInt(prompt('Enter the sum:'), 10);

  let result = '';

  let colorCounter = 0; // Counter to alternate colors

  let totalProductSumA = 0; // Variable to store sum of product of A

  let totalProductSumB = 0; // Variable to store sum of product of B

  const colors = ['black', 'red', 'green', 'blue']; // Array of colors

  let foundResults = false; // Flag to track if any results were found

  for (let i = 100; i >=0; i--) {

    for (let j = 0; j < 100; j++) {

      if ((17 * j + 18 * i) === sum || ( 18 * i + 17 * j) === sum)) {

        foundResults = true; // Set flag if a result is found

        const color = colors[colorCounter % colors.length]; // Select color

        result += `<span style="color: ${color}">`; // Open span with color

        result += `A (18 string) = ${i}<br>`;

        result += `B (17 string) = ${j}<br>`;

        result += `Total Sum  (18 x ${i} + 17 * ${j}) = ${i* 18 + 17 * j}<br>`;

        result += `</span>`; // Close 

        // Add dotted line with alternating color

        const lineColor = colors[(colorCounter + 1) % colors.length];

        result += `<hr style="border-top: 1px dashed ${lineColor}; margin: 5px 0;">`;

        colorCounter++; // Increment color counter for next result

      }

    }

  }

  if (!foundResults) {
result = 'No combinations found for the entered sum.';

  } 

  document.getElementById('output').innerHTML = result;

}

And combinations of 18 string + 16 string and 17 + 16 string in this code
