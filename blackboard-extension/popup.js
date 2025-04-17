const filterCoursesFunc =  async () => {
  // Get the tag entered by the user
  const currentClassVal = document.getElementById("currentClass").value.toUpperCase();

  

  // Get the currently active tab in the current Chrome window
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Inject and execute a function into the active tab
  chrome.scripting.executeScript({
    target: { tabId: tab.id }, // Target the current tab
    func: (currentClassVal) => {
      // Select elements with the specified tag
      const elements = document.querySelectorAll(`.course-number`);

      // Check if any elements were found
      if (elements.length === 0) {
        alert(`No ${currentClassVal} course found.`);
        return;
      }

      elements.forEach(el => {
        const topDiv = el.closest('div[ng-repeat^="membership in baseGrades.getCoursesByTerm"]');
        if (topDiv) {
          topDiv.style.display = "";    // Show the parent div
        }
      });

      elements.forEach(el => {
        if (!el.textContent.includes(currentClassVal)) {
          // console.log(`Element found with: ${currentClassVal}`, el.textContent);
          const topDiv = el.closest('div[ng-repeat^="membership in baseGrades.getCoursesByTerm"]');
          if (topDiv) {
            topDiv.style.display = "none";    // Hide the parent div
          }
        }
        let successMessage = document.getElementById("success-message");
        setTimeout(() => {
          successMessage.style.display = "block";
          successMessage.innerText = "✅ Filtered courses successfully!";
        }, 5000);
      });

    },
    args: [currentClassVal] // Pass the tag input as an argument to the injected function
  });
};


// When the button is clicked
document.getElementById("filterCoursesBtn").addEventListener("click", filterCoursesFunc);


// When the user presses Enter in the input field
document.getElementById("currentClass").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    filterCoursesFunc();
  }
});