document.getElementById("summarizeBtn").addEventListener("click", () => {
  const input = document.getElementById("userInput").value;
  const outputDiv = document.getElementById("summaryOutput");

  if (!input.trim()) {
    outputDiv.textContent = "Please enter some text first!";
    return;
  }

  outputDiv.textContent = "Summarizing... ⏳";

  // Fake "summary" after 1 second
  setTimeout(() => {
    // Here we just take the first 50 characters as a fake summary
    const summary = input.length > 50 ? input.slice(0, 50) + "..." : input;
    outputDiv.textContent = summary;
  }, 1000);
});
