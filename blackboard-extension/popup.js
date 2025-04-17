// When the button is clicked
document.getElementById("findTags").addEventListener("click", async () => {
  // Get the tag entered by the user
  const tag = document.getElementById("tagInput").value;

  // Get the currently active tab in the current Chrome window
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Inject and execute a function into the active tab
  chrome.scripting.executeScript({
    target: { tabId: tab.id }, // Target the current tab
    func: (tag) => {
      // Select elements with the specified tag
      const elements = document.querySelectorAll(tag);

      // Log each element's content to the console
      elements.forEach(el => {
        console.log(`[${tag}]`, el.textContent);
      });

      // Alert the number of elements found
      alert(`Found ${elements.length} <${tag}> tags.`);
      console.log(`Found ${elements.length} <${tag}> tags.`);
    },
    args: [tag] // Pass the tag input as an argument to the injected function
  });
});
