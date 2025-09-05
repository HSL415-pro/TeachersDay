const quotes = [
  { text: "Teaching is the one profession that creates all other professions.", author: "Unknown" },
  { text: "The best teachers show you where to look, but don’t tell you what to see.", author: "Alexandra K. Trenfor" },
  { text: "Every time you debug a problem, you're teaching yourself resilience.", author: "Hema's AI Companion" },
  { text: "A good teacher can inspire hope, ignite the imagination, and instill a love of learning.", author: "Brad Henry" },
  { text: "Those who educate children well are more to be honored than parents.", author: "Aristotle" }
];

let usedIndices = [];

function showQuote() {
  if (usedIndices.length === quotes.length) {
    usedIndices = []; // Reset after all quotes shown
  }

  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (usedIndices.includes(index));

  usedIndices.push(index);

  document.getElementById("quote-text").textContent = `"${quotes[index].text}"`;
  document.getElementById("quote-author").textContent = `— ${quotes[index].author}`;
}

showQuote();
setInterval(showQuote, 5000); // Change quote every 5 seconds