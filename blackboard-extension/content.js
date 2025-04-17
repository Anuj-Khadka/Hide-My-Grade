// Select all <p> tags on the page
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(p => {
  console.log("Paragraph found:", p.textContent);
});

// Select all heading tags (<h1>, <h2>, <h3>)
const headings = document.querySelectorAll("h1, h2, h3");
headings.forEach(h => {
  console.log("Heading found:", h.textContent);
});
