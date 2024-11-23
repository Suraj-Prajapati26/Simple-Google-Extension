// Fetch quotes from the local quotes.json file
fetch("quote.json")
  .then(response => response.json())
  .then(quotes => {
    // Randomly select a quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    // Display the quote in the HTML
    document.getElementById("quote").textContent = randomQuote;
  })
  .catch(error => console.error("Error loading quotes:", error));
// fetch("https://type.fit/api/quotes")
// .then(response => response.json())
// .then(quotes => {
//   // Randomly select a quote from the list
//   const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
//   document.getElementById("quote").textContent = randomQuote.text;
// })
// .catch(error => console.error("Error loading quote:", error));
